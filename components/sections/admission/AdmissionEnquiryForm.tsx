'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const schema = z.object({
  parentName:  z.string().min(2, 'Required'),
  childName:   z.string().min(2, 'Required'),
  mobile:      z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  email:       z.string().email('Invalid email').or(z.literal('')).optional(),
  applyClass:  z.string().min(1, 'Please select a class'),
  scholarType: z.string().min(1, 'Please select a scholar type'),
})

type FormData = z.infer<typeof schema>

const classOptions = [
  'Pre-Nursery', 'Nursery', 'LKG', 'UKG',
  ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`),
]

interface Props {
  variant: 'opener' | 'cta'
}

export function AdmissionEnquiryForm({ variant }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const scholarType = watch('scholarType')

  const onSubmit = async (data: FormData) => {
    setServerError(false)
    try {
      const res = await fetch('/api/enquiry', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Server error')
      setSubmitted(true)
    } catch {
      setServerError(true)
    }
  }

  const isLight = variant === 'opener'

  const inputCls = `w-full border rounded-xl px-4 py-2.5 text-sm outline-none transition-all duration-150
    focus:ring-2 focus:ring-primary/25 focus:border-primary
    ${isLight
      ? 'border-border bg-surface text-text placeholder:text-text-muted/60'
      : 'border-white/30 bg-white/10 text-white placeholder:text-white/50 focus:border-white focus:ring-white/20'
    }`

  const labelCls = `block font-body text-xs font-semibold mb-1
    ${isLight ? 'text-text-muted' : 'text-white/70'}`

  const errorCls = 'font-body text-[11px] text-red-400 mt-1'

  if (submitted) {
    return (
      <div className={`rounded-2xl border p-6 flex flex-col items-center text-center gap-3
        ${isLight ? 'bg-surface border-border' : 'bg-white/10 border-white/20'}`}
      >
        <CheckCircle2 size={36} className="text-success" />
        <p className={`font-body text-sm font-semibold ${isLight ? 'text-text' : 'text-white'}`}>
          Thank you! Our admissions team will contact you within 24 hours.
        </p>
        <Link
          href="/contact#tour"
          className={`inline-flex items-center gap-1.5 font-body text-xs font-semibold
            ${isLight ? 'text-primary hover:text-primary-dark' : 'text-white/80 hover:text-white'}
            transition-colors`}
        >
          Book a Campus Tour <ArrowRight size={12} />
        </Link>
      </div>
    )
  }

  return (
    <form
      id="admission-form"
      onSubmit={handleSubmit(onSubmit)}
      className={`rounded-2xl border p-5 sm:p-6 shadow-sm w-full
        ${isLight ? 'bg-surface border-border' : 'bg-white/10 border-white/20'}`}
    >
      {/* Row 1: Parent Name + Child Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-3">
        <div>
          <label className={labelCls}>Parent / Guardian Name</label>
          <input
            {...register('parentName')}
            placeholder="Parent / Guardian Name"
            className={inputCls}
          />
          {errors.parentName && <p className={errorCls}>{errors.parentName.message}</p>}
        </div>

        <div>
          <label className={labelCls}>Child&apos;s Name</label>
          <input
            {...register('childName')}
            placeholder="Child's Name"
            className={inputCls}
          />
          {errors.childName && <p className={errorCls}>{errors.childName.message}</p>}
        </div>
      </div>

      {/* Row 2: Mobile + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-3">
        <div>
          <label className={labelCls}>Mobile Number</label>
          <input
            {...register('mobile')}
            type="tel"
            inputMode="numeric"
            placeholder="Mobile Number"
            className={inputCls}
          />
          {errors.mobile && <p className={errorCls}>{errors.mobile.message}</p>}
        </div>

        <div>
          <label className={labelCls}>Email Address (optional)</label>
          <input
            {...register('email')}
            type="email"
            placeholder="Email Address (optional)"
            className={inputCls}
          />
          {errors.email && <p className={errorCls}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Row 3: Class + Scholar Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-5">
        <div>
          <label className={labelCls}>Applying for Class</label>
          <select {...register('applyClass')} className={inputCls}>
            <option value="">Select Class</option>
            {classOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
          {errors.applyClass && <p className={errorCls}>{errors.applyClass.message}</p>}
        </div>

        <div>
          <label className={labelCls}>Scholar Type</label>
          <div className="flex gap-2 h-10.5">
            {['Day Scholar', 'Boarding / Hostel'].map(opt => (
              <label
                key={opt}
                className={`flex-1 flex items-center justify-center rounded-xl border
                  text-xs font-semibold cursor-pointer transition-all duration-150
                  ${scholarType === opt
                    ? isLight
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-white bg-white/20 text-white'
                    : isLight
                      ? 'border-border text-text-muted hover:border-primary/30'
                      : 'border-white/30 text-white/60 hover:border-white/50'
                  }`}
              >
                <input
                  type="radio"
                  value={opt}
                  {...register('scholarType')}
                  onChange={() => setValue('scholarType', opt, { shouldValidate: true })}
                  className="sr-only"
                />
                {opt}
              </label>
            ))}
          </div>
          {errors.scholarType && <p className={errorCls}>{errors.scholarType.message}</p>}
        </div>
      </div>

      {serverError && (
        <p className={`font-body text-xs mb-3 ${isLight ? 'text-red-500' : 'text-red-300'}`}>
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 rounded-xl font-body text-sm font-semibold tracking-wide
          transition-colors duration-150 flex items-center justify-center gap-2
          ${isLight
            ? 'bg-primary text-white hover:bg-primary-dark disabled:opacity-60'
            : 'bg-white text-primary hover:bg-primary-light hover:text-white disabled:opacity-60'
          }`}
      >
        {isSubmitting
          ? <><Loader2 size={15} className="animate-spin" /> Sending…</>
          : 'Request Admission Information'
        }
      </button>
    </form>
  )
}
