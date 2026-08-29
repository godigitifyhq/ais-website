/**
 * Environment Variables Documentation
 * Copy these to your .env.local file and update with actual values
 */

export const ENV_DOCS = {
  // Required: AIS Jobs Backend API URL
  NEXT_PUBLIC_AIS_JOBS_API: {
    description: 'Public AIS Jobs backend API URL',
    default: 'https://ais-dashboard-backend.vercel.app',
    required: true,
    example: 'https://ais-dashboard-backend.vercel.app',
  },

  AIS_JOBS_API_URL: {
    description: 'Server-side AIS Jobs backend API URL (for API routes)',
    default: 'https://ais-dashboard-backend.vercel.app',
    required: true,
    example: 'https://ais-dashboard-backend.vercel.app',
  },

  // Optional: Email service configuration (for admin notifications)
  NEXT_PUBLIC_ADMIN_EMAIL: {
    description: 'Admin email for form notifications',
    default: 'admin@ais.ac.in',
    required: false,
    example: 'admin@ais.ac.in',
  },

  ADMIN_EMAIL_NOTIFICATION_ENABLED: {
    description: 'Enable email notifications for form submissions',
    default: 'true',
    required: false,
    example: 'true',
  },

  // Optional: Analytics and monitoring
  NEXT_PUBLIC_ANALYTICS_ID: {
    description: 'Google Analytics ID',
    default: '',
    required: false,
    example: 'G-XXXXXXXXXX',
  },

  // Optional: Feature flags
  NEXT_PUBLIC_ENABLE_CONTACT_FORM: {
    description: 'Enable contact form submission',
    default: 'true',
    required: false,
    example: 'true',
  },

  NEXT_PUBLIC_ENABLE_ENQUIRY_FORM: {
    description: 'Enable enquiry form submission',
    default: 'true',
    required: false,
    example: 'true',
  },
}

/**
 * Example .env.local content
 */
export const ENV_EXAMPLE = `# ====================================
# AIS Jobs Backend Integration
# ====================================

# Required: AIS Jobs Backend API
NEXT_PUBLIC_AIS_JOBS_API=https://ais-dashboard-backend.vercel.app
AIS_JOBS_API_URL=https://ais-dashboard-backend.vercel.app

# Optional: Admin Email for notifications
NEXT_PUBLIC_ADMIN_EMAIL=admin@ais.ac.in
ADMIN_EMAIL_NOTIFICATION_ENABLED=true

# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=

# Optional: Feature Flags
NEXT_PUBLIC_ENABLE_CONTACT_FORM=true
NEXT_PUBLIC_ENABLE_ENQUIRY_FORM=true
`

/**
 * Validate environment variables
 */
export function validateEnv(): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  // Check required variables
  if (!process.env.NEXT_PUBLIC_AIS_JOBS_API) {
    errors.push('NEXT_PUBLIC_AIS_JOBS_API is not set')
  }

  if (!process.env.AIS_JOBS_API_URL) {
    errors.push('AIS_JOBS_API_URL is not set')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}

/**
 * Get environment variable with fallback
 */
export function getEnv(key: string, fallback?: string): string {
  const value = process.env[key] || fallback
  if (!value) {
    console.warn(`Environment variable ${key} is not set`)
  }
  return value || ''
}

export default {
  ENV_DOCS,
  ENV_EXAMPLE,
  validateEnv,
  getEnv,
}
