import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/schemas'

const AIS_JOBS_API = process.env.AIS_JOBS_API_URL || 'https://ais-dashboard-backend.vercel.app'

/**
 * Contact form submission endpoint
 * Receives contact form data and forwards to AIS Jobs backend
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    // Validate incoming data
    const data = contactSchema.parse(body)

    // Transform data to match AIS Jobs backend schema
    const backendPayload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      grade: data.grade,
      message: data.message || '',
      formType: 'contact',
      submittedAt: new Date().toISOString(),
      source: 'ais-website-contact',
    }

    // Forward to AIS Jobs backend
    const backendResponse = await fetch(`${AIS_JOBS_API}/api/form/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Source': 'ais-website',
      },
      body: JSON.stringify(backendPayload),
    })

    if (!backendResponse.ok) {
      const errorData = await backendResponse.json().catch(() => ({
        error: 'Backend service error',
      }))
      console.error('[Contact API Error]', backendResponse.status, errorData)
      return NextResponse.json(
        { error: errorData.error || 'Failed to submit contact form' },
        { status: backendResponse.status }
      )
    }

    const responseData = await backendResponse.json()
    console.log('[Contact Form Success]', data.email)

    return NextResponse.json(
      { success: true, data: responseData },
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Invalid request'
    console.error('[Contact API Exception]', errorMessage)
    return NextResponse.json(
      { error: errorMessage },
      { status: 400 }
    )
  }
}
