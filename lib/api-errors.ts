/**
 * API Error Handling and Logging Utilities
 */

export enum ApiErrorType {
  NETWORK_ERROR = 'NETWORK_ERROR',
  TIMEOUT = 'TIMEOUT',
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  NOT_FOUND = 'NOT_FOUND',
  SERVER_ERROR = 'SERVER_ERROR',
  UNKNOWN = 'UNKNOWN',
}

export class ApiError extends Error {
  constructor(
    public readonly type: ApiErrorType,
    message: string,
    public readonly statusCode?: number,
    public readonly details?: Record<string, any>,
  ) {
    super(message)
    this.name = 'ApiError'
  }

  /**
   * Get user-friendly error message
   */
  getUserMessage(): string {
    switch (this.type) {
      case ApiErrorType.NETWORK_ERROR:
        return 'Unable to connect. Please check your internet connection.'
      case ApiErrorType.TIMEOUT:
        return 'Request timed out. Please try again.'
      case ApiErrorType.VALIDATION_ERROR:
        return 'Please check your input and try again.'
      case ApiErrorType.UNAUTHORIZED:
        return 'You are not authorized to perform this action.'
      case ApiErrorType.FORBIDDEN:
        return 'Access denied.'
      case ApiErrorType.NOT_FOUND:
        return 'The requested resource was not found.'
      case ApiErrorType.SERVER_ERROR:
        return 'Server error. Please try again later.'
      default:
        return 'An unexpected error occurred. Please try again.'
    }
  }

  /**
   * Check if error is retryable
   */
  isRetryable(): boolean {
    return [
      ApiErrorType.NETWORK_ERROR,
      ApiErrorType.TIMEOUT,
      ApiErrorType.SERVER_ERROR,
    ].includes(this.type)
  }

  /**
   * Convert to JSON for logging
   */
  toJSON() {
    return {
      name: this.name,
      type: this.type,
      message: this.message,
      statusCode: this.statusCode,
      details: this.details,
      timestamp: new Date().toISOString(),
    }
  }
}

/**
 * Map HTTP status codes to ApiErrorType
 */
function getErrorTypeFromStatus(status: number): ApiErrorType {
  if (status === 400) return ApiErrorType.VALIDATION_ERROR
  if (status === 401) return ApiErrorType.UNAUTHORIZED
  if (status === 403) return ApiErrorType.FORBIDDEN
  if (status === 404) return ApiErrorType.NOT_FOUND
  if (status >= 500) return ApiErrorType.SERVER_ERROR
  return ApiErrorType.UNKNOWN
}

/**
 * Parse error from fetch response
 */
export async function parseErrorResponse(response: Response): Promise<ApiError> {
  try {
    const data = await response.json()
    const message = data.error || data.message || `HTTP ${response.status}`
    const type = getErrorTypeFromStatus(response.status)

    return new ApiError(type, message, response.status, data)
  } catch {
    const type = getErrorTypeFromStatus(response.status)
    return new ApiError(type, `HTTP ${response.status}`, response.status)
  }
}

/**
 * API Logger for debugging
 */
export class ApiLogger {
  private static isDev = process.env.NODE_ENV === 'development'

  static log(message: string, data?: any) {
    if (this.isDev) {
      console.log(`[API] ${message}`, data)
    }
  }

  static error(message: string, error: any) {
    console.error(`[API ERROR] ${message}`, error instanceof ApiError ? error.toJSON() : error)
  }

  static warn(message: string, data?: any) {
    if (this.isDev) {
      console.warn(`[API WARN] ${message}`, data)
    }
  }

  static info(message: string, data?: any) {
    console.info(`[API INFO] ${message}`, data)
  }

  /**
   * Log API request
   */
  static logRequest(url: string, options: RequestInit & { timeout?: number }) {
    this.log(`Request to ${url}`, {
      method: options.method || 'GET',
      headers: options.headers,
      timeout: options.timeout,
    })
  }

  /**
   * Log API response
   */
  static logResponse(url: string, response: Response, duration: number) {
    this.log(`Response from ${url}`, {
      status: response.status,
      duration: `${duration}ms`,
    })
  }

  /**
   * Log API error
   */
  static logApiError(url: string, error: ApiError, duration: number) {
    this.error(`Request to ${url} failed after ${duration}ms`, error)
  }
}

/**
 * Retry logic for failed requests
 */
export async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  initialDelay: number = 1000,
): Promise<T> {
  let lastError: Error | null = null

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error))

      // Don't retry on validation errors
      if (error instanceof ApiError && !error.isRetryable()) {
        throw error
      }

      // Wait before retrying (exponential backoff)
      if (attempt < maxAttempts - 1) {
        const delay = initialDelay * Math.pow(2, attempt)
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
  }

  throw lastError || new ApiError(ApiErrorType.UNKNOWN, 'Request failed')
}

export default {
  ApiError,
  ApiErrorType,
  parseErrorResponse,
  ApiLogger,
  retryWithBackoff,
}
