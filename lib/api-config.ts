/**
 * API Configuration and Endpoints
 * Centralized configuration for backend API integration
 */

export const API_CONFIG = {
  // Backend URL
  BACKEND_URL: process.env.NEXT_PUBLIC_AIS_JOBS_API || 'https://ais-dashboard-backend.vercel.app',
  
  // API Endpoints
  ENDPOINTS: {
    // Form submissions
    CONTACT_FORM: '/api/form/contact',
    ENQUIRY_FORM: '/api/form/enquiry',
    FORM_STATUS: '/api/form/status/:id',
    
    // Health check
    HEALTH: '/api/health',
    
    // Admin endpoints (for future use)
    ADMIN_LOGIN: '/api/admin/login',
    ADMIN_LOGOUT: '/api/admin/logout',
    ADMIN_SUBMISSIONS: '/api/admin/submissions',
    
    // Blog endpoints
    BLOGS: '/api/blogs',
    BLOG_BY_ID: '/api/blogs/:id',
    BLOG_PUBLISH: '/api/blogs/:id/publish',
  },
  
  // Request timeouts (in milliseconds)
  TIMEOUTS: {
    SHORT: 5000,    // 5 seconds
    NORMAL: 10000,  // 10 seconds
    LONG: 30000,    // 30 seconds
  },
  
  // Retry configuration
  RETRY: {
    MAX_ATTEMPTS: 3,
    INITIAL_DELAY: 1000, // 1 second
    MAX_DELAY: 10000,    // 10 seconds
    BACKOFF_MULTIPLIER: 2,
  },
  
  // Cache configuration
  CACHE: {
    TTL_FORM_STATUS: 60000,      // 1 minute
    TTL_BLOG_LIST: 300000,       // 5 minutes
    TTL_BLOG_DETAIL: 600000,     // 10 minutes
  },
}

/**
 * Build full API URL from endpoint
 */
export function buildApiUrl(endpoint: string, params?: Record<string, string>): string {
  let url = `${API_CONFIG.BACKEND_URL}${endpoint}`
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url = url.replace(`:${key}`, value)
    })
  }
  
  return url
}

/**
 * Get API endpoint by key
 */
export function getEndpoint(key: keyof typeof API_CONFIG.ENDPOINTS): string {
  return API_CONFIG.ENDPOINTS[key]
}

export default API_CONFIG
