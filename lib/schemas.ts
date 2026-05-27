import { z } from 'zod'

const phone = z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number')

export const contactSchema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Enter a valid email address'),
  phone,
  grade:   z.string().min(1, 'Please select a grade'),
  message: z.string().max(500).optional(),
})

export const enquirySchema = z.object({
  parentName:  z.string().min(2, 'Parent name must be at least 2 characters'),
  childName:   z.string().min(2, 'Child name must be at least 2 characters'),
  phone,
  email:       z.string().email('Enter a valid email address').optional().or(z.literal('')),
  grade:       z.string().optional(),
  message:     z.string().max(500).optional(),
  initiative:  z.string().optional(),
})

export type ContactInput  = z.infer<typeof contactSchema>
export type EnquiryInput  = z.infer<typeof enquirySchema>
