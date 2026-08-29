/**
 * API Client for AIS Jobs Backend
 * Handles all communication with the backend API hosted at https://ais-dashboard-backend.vercel.app
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_AIS_JOBS_API || 'https://ais-dashboard-backend.vercel.app'

/**
 * Contact form submission payload for AIS website
 * Maps to JobApplication model with "Contact Inquiry" jobTitle
 */
export interface ContactFormPayload {
  parentName: string
  email: string
  phoneNo: string
  childGrade?: string
  message?: string
  formType: 'contact' // To distinguish from other form types
}

/**
 * Enquiry form submission payload for AIS website
 * Maps to JobApplication model with specific job title
 */
export interface EnquiryFormPayload {
  parentName: string
  childName: string
  email?: string
  phoneNo: string
  grade?: string
  message?: string
  initiative?: string
  formType: 'enquiry' // To distinguish from other form types
}

/**
 * Generic API Response wrapper
 */
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

/**
 * Send contact form to AIS Jobs backend
 * @param data - Contact form data
 * @returns API response
 */
export async function submitContact(data: ContactFormPayload): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/form/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return {
        success: false,
        error: errorData.error || `Server error: ${response.status}`,
      }
    }

    const responseData = await response.json()
    return {
      success: true,
      data: responseData,
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred'
    return {
      success: false,
      error: `Failed to submit contact form: ${message}`,
    }
  }
}

/**
 * Send enquiry form to AIS Jobs backend
 * @param data - Enquiry form data
 * @returns API response
 */
export async function submitEnquiry(data: EnquiryFormPayload): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/form/enquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return {
        success: false,
        error: errorData.error || `Server error: ${response.status}`,
      }
    }

    const responseData = await response.json()
    return {
      success: true,
      data: responseData,
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred'
    return {
      success: false,
      error: `Failed to submit enquiry form: ${message}`,
    }
  }
}

/**
 * Get contact/enquiry form status
 * @param formId - The form submission ID
 * @returns API response with form status
 */
export async function getFormStatus(formId: string): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/form/status/${formId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return {
        success: false,
        error: errorData.error || `Server error: ${response.status}`,
      }
    }

    const responseData = await response.json()
    return {
      success: true,
      data: responseData,
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error occurred'
    return {
      success: false,
      error: `Failed to fetch form status: ${message}`,
    }
  }
}

/**
 * Test connectivity to AIS Jobs backend
 * @returns API response indicating backend availability
 */
export async function testBackendConnection(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
    return response.ok
  } catch {
    return false
  }
}

export const apiClient = {
  submitContact,
  submitEnquiry,
  getFormStatus,
  testBackendConnection,
  baseURL: API_BASE_URL,
}
