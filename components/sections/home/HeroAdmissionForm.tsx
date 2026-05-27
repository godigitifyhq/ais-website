'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  parentName:  z.string().min(2, 'Please enter parent name'),
  studentName: z.string().min(2, 'Please enter student name'),
  phone:       z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit mobile number'),
  grade:       z.string().min(1, 'Please select a class'),
})

type FormData = z.infer<typeof schema>

const GRADE_OPTIONS = [
  'Pre-School', 'Nursery', 'KG',
  ...Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`),
]

interface Props {
  variant?: 'hero' | 'cta'
}

export function HeroAdmissionForm({ variant = 'hero' }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const isCta = variant === 'cta'

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    try {
      const res = await fetch('/api/enquiry', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const cardClass = isCta
    ? 'bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 w-full max-w-md'
    : 'bg-surface rounded-2xl shadow-2xl p-6 md:p-8 w-full lg:w-[360px]'

  const inputClass = isCta
    ? 'w-full bg-white/15 border border-white/25 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/50 focus:bg-white/20 focus:border-white/60 focus:outline-none transition-all'
    : 'w-full border border-border rounded-xl px-4 py-2.5 text-sm bg-surface focus:border-l-2 focus:border-l-primary focus:ring-0 focus:outline-none transition-all'

  const labelClass = isCta
    ? 'font-body text-xs font-medium text-white/80 mb-1.5 block'
    : 'font-body text-xs font-medium text-text mb-1.5 block'

  const errorClass = 'font-body text-[11px] text-red-400 mt-1'

  const submitClass = isCta
    ? 'w-full bg-white text-primary font-semibold rounded-xl py-3 text-sm tracking-wide hover:bg-primary-light hover:text-white transition-colors disabled:opacity-60'
    : 'w-full bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl py-3 text-sm tracking-wide transition-colors disabled:opacity-60'

  const headingClass = isCta
    ? 'font-display text-xl font-bold text-white mb-1'
    : 'font-display text-xl font-bold text-text mb-1'

  const sublineClass = isCta
    ? 'font-body text-xs text-white/60 mb-5 tracking-wide'
    : 'font-body text-xs text-text-muted mb-5 tracking-wide'

  const dividerClass = isCta
    ? 'border-t border-white/20 mb-5'
    : 'border-t border-border mb-5'

  if (status === 'success') {
    return (
      <div className={cardClass}>
        <div className="flex flex-col items-center justify-center py-8 gap-4 text-center">
          <div className={`w-14 h-14 rounded-full flex items-center justify-center ${isCta ? 'bg-white/20' : 'bg-primary/10'}`}>
            <svg className={`w-7 h-7 ${isCta ? 'text-white' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className={`font-body text-sm leading-relaxed ${isCta ? 'text-white/90' : 'text-text'}`}>
            We&apos;ll call you within 24 hours. Thank you!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={cardClass}>
      <p className={headingClass}>Admission Enquiry</p>
      <p className={sublineClass}>Session 2026–27</p>
      <div className={dividerClass} />

      <div className="space-y-4">
        {/* Parent & Student Name — side by side */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor={`parentName-${variant}`} className={labelClass}>Parent Name</label>
            <input
              id={`parentName-${variant}`}
              type="text"
              placeholder="Parent Name"
              autoComplete="name"
              className={inputClass}
              {...register('parentName')}
            />
            {errors.parentName && <p className={errorClass}>{errors.parentName.message}</p>}
          </div>
          <div>
            <label htmlFor={`studentName-${variant}`} className={labelClass}>Student Name</label>
            <input
              id={`studentName-${variant}`}
              type="text"
              placeholder="Student Name"
              className={inputClass}
              {...register('studentName')}
            />
            {errors.studentName && <p className={errorClass}>{errors.studentName.message}</p>}
          </div>
        </div>

        {/* Phone & Grade — side by side */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor={`phone-${variant}`} className={labelClass}>Phone Number</label>
            <input
              id={`phone-${variant}`}
              type="tel"
              placeholder="Mobile Number"
              autoComplete="tel"
              maxLength={10}
              className={inputClass}
              {...register('phone')}
            />
            {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
          </div>
          <div>
            <label htmlFor={`grade-${variant}`} className={labelClass}>Child&apos;s Class</label>
            <select
              id={`grade-${variant}`}
              className={inputClass}
              defaultValue=""
              {...register('grade')}
            >
              <option value="" disabled>Select Class</option>
              {GRADE_OPTIONS.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            {errors.grade && <p className={errorClass}>{errors.grade.message}</p>}
          </div>
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={handleSubmit(onSubmit)}
          disabled={status === 'loading'}
          className={submitClass}
        >
          {status === 'loading' ? (
            <span className="inline-flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              Sending…
            </span>
          ) : (
            'Enquire Now →'
          )}
        </button>

        {status === 'error' && (
          <p className="font-body text-[11px] text-red-400 text-center">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  )
}
