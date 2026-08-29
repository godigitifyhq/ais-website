'use client'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Enter a valid email address'),
  phoneNo: z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  grade:   z.string().min(1, 'Please select a class'),
  message: z.string().max(500, 'Message cannot exceed 500 characters').optional(),
})

type FormData = z.infer<typeof schema>

const grades = [
  'Pre-School', 'Nursery', 'KG',
  ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`),
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  useEffect(() => {
    if (!submitted) return
    let confetti: ReturnType<typeof setTimeout>
    import('canvas-confetti').then(mod => {
      const fire = mod.default
      fire({ particleCount: 80, spread: 70, colors: ['#C0272D', '#E8622A', '#FAF8F5'], origin: { y: 0.6 } })
      confetti = setTimeout(() => {
        fire({ particleCount: 40, spread: 100, colors: ['#C0272D', '#E8622A'], origin: { y: 0.5 } })
      }, 300)
    })
    return () => clearTimeout(confetti)
  }, [submitted])

  const onSubmit = async (data: FormData) => {
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Server error')
      setSubmitted(true)
    } catch {
      setServerError('Something went wrong. Please try again or call us directly.')
    }
  }

  const inputClass = [
    'w-full border border-border rounded-xl px-4 py-3 bg-surface',
    'font-body text-sm text-text placeholder-text-muted',
    'focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary',
    'transition-all duration-200',
  ].join(' ')

  const labelClass = 'font-body text-sm font-medium text-text mb-1.5 block'

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center text-center py-16 gap-6"
      >
        <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center">
          <CheckCircle size={40} className="text-success" />
        </div>
        <div>
          <h3 className="font-display text-2xl font-bold text-text">Thank you!</h3>
          <p className="font-body text-text-muted mt-2 max-w-sm">
            We've received your message. Our admissions team will get in touch with you within 24 hours.
          </p>
        </div>
        <p className="font-body text-sm text-text-muted">
          For urgent queries, call{' '}
          <a href="tel:+919464311111" className="text-primary font-medium">+91-94643-11111</a>
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>Full Name *</label>
        <input
          id="name"
          type="text"
          placeholder="Your full name"
          autoComplete="name"
          className={inputClass}
          {...register('name')}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        <AnimatePresence>
          {errors.name && (
            <motion.p id="name-error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="mt-1.5 text-xs text-primary font-medium" role="alert">
              {errors.name.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>Email Address *</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          className={inputClass}
          {...register('email')}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        <AnimatePresence>
          {errors.email && (
            <motion.p id="email-error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="mt-1.5 text-xs text-primary font-medium" role="alert">
              {errors.email.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phoneNo" className={labelClass}>Mobile Number *</label>
        <input
          id="phoneNo"
          type="tel"
          placeholder="10-digit mobile number"
          autoComplete="tel"
          className={inputClass}
          {...register('phoneNo')}
          aria-invalid={!!errors.phoneNo}
          aria-describedby={errors.phoneNo ? 'phoneNo-error' : undefined}
        />
        <AnimatePresence>
          {errors.phoneNo && (
            <motion.p id="phoneNo-error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="mt-1.5 text-xs text-primary font-medium" role="alert">
              {errors.phoneNo.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Grade */}
      <div>
        <label htmlFor="grade" className={labelClass}>Child's Current Class *</label>
        <select
          id="grade"
          className={inputClass}
          {...register('grade')}
          aria-invalid={!!errors.grade}
          aria-describedby={errors.grade ? 'grade-error' : undefined}
        >
          <option value="">Select class</option>
          {grades.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
        <AnimatePresence>
          {errors.grade && (
            <motion.p id="grade-error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="mt-1.5 text-xs text-primary font-medium" role="alert">
              {errors.grade.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>Message (optional)</label>
        <textarea
          id="message"
          rows={4}
          placeholder="Any questions or specific requirements..."
          className={inputClass}
          {...register('message')}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        <AnimatePresence>
          {errors.message && (
            <motion.p id="message-error" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="mt-1.5 text-xs text-primary font-medium" role="alert">
              {errors.message.message}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {serverError && (
        <p className="text-sm text-primary bg-primary/5 rounded-xl px-4 py-3 border border-primary/20" role="alert">
          {serverError}
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        className="w-full h-[52px]"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
