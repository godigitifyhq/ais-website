import { NextRequest, NextResponse } from 'next/server'
import { enquirySchema } from '@/lib/schemas'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = enquirySchema.parse(body)
    console.log('[Enquiry]', data)
    // TODO: integrate email provider (Resend / Nodemailer)
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }
}
