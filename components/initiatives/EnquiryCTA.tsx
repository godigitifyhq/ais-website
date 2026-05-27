'use client'
import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { enquiryFormFields } from '@/data/ourInitiatives'

interface FormState {
  parentName:   string
  childName:    string
  mobileNumber: string
  email:        string
  grade:        string
  initiative:   string
}

const blank: FormState = {
  parentName: '', childName: '', mobileNumber: '',
  email: '', grade: '', initiative: '',
}

const trustPills = [
  '24hr Response Guarantee',
  'No Obligation',
  'Personal Counsellor Assigned',
]

export function EnquiryCTA() {
  const [form,       setForm]       = useState<FormState>(blank)
  const [submitted,  setSubmitted]  = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function set(key: keyof FormState, val: string) {
    setForm(f => ({ ...f, [key]: val }))
  }

  async function handleSubmit() {
    setSubmitting(true)
    try {
      await fetch('/api/enquiry', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...form, phone: form.mobileNumber }),
      })
    } finally {
      setSubmitting(false)
      setSubmitted(true)
    }
  }

  const inputCls =
    'w-full font-body px-4 py-3 rounded-lg border transition-colors duration-200 ' +
    'focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm'
  const inputStyle = {
    borderColor: 'var(--color-border)',
    background:  'var(--color-surface)',
    color:       'var(--color-text)',
    fontSize:    '0.9375rem',
  }

  return (
    <section
      id="enquiry-form"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'var(--color-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: content ─────────────────────────── */}
          <div>
            <p
              className="font-body text-[11px] font-bold uppercase tracking-[0.2em] mb-4"
              style={{ color: 'var(--color-primary-dark)' }}
            >
              Enrolments Open 2025–26
            </p>

            <h2
              className="font-display font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'white' }}
            >
              {enquiryFormFields.heading}
              <br />
              <span
                className="font-accent italic"
                style={{ color: 'var(--color-primary-dark)' }}
              >
                {enquiryFormFields.headingAccent}
              </span>
            </h2>

            <p
              className="font-body leading-relaxed mb-8"
              style={{ fontSize: '0.9375rem', color: 'white', opacity: 0.85 }}
            >
              {enquiryFormFields.subheading}
            </p>

            {/* Trust pills */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-2">
              {trustPills.map(pill => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-2 font-body font-semibold rounded-full"
                  style={{
                    background: 'rgba(255,255,255,0.12)',
                    color:      'white',
                    fontSize:   '0.8rem',
                    padding:    '0.4rem 1rem',
                  }}
                >
                  <CheckCircle2 size={13} style={{ flexShrink: 0 }} />
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: form card ──────────────────────── */}
          <div
            className="rounded-2xl p-7 sm:p-8"
            style={{
              background:  'var(--color-surface)',
              boxShadow:   '0 16px 48px rgba(0,0,0,0.20)',
            }}
          >
            {submitted ? (
              /* Success state */
              <div
                className="flex flex-col items-center text-center py-8 gap-4"
                style={{ opacity: 1, transition: 'opacity 300ms' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(45,125,70,0.10)' }}
                >
                  <CheckCircle2 size={28} style={{ color: 'var(--color-success)' }} />
                </div>
                <h3
                  className="font-display text-xl font-bold"
                  style={{ color: 'var(--color-text)' }}
                >
                  Enquiry Received!
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Thank you — our counsellor will reach out within 24 hours.
                </p>
              </div>
            ) : (
              /* Form fields */
              <div className="space-y-4">
                {/* Row 1: parent + child */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="font-body text-sm font-medium block mb-1.5"
                      style={{ color: 'var(--color-text)' }}
                    >
                      Parent&apos;s Name <span style={{ color: 'var(--color-primary)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={form.parentName}
                      onChange={e => set('parentName', e.target.value)}
                      placeholder="Full name"
                      className={inputCls}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      className="font-body text-sm font-medium block mb-1.5"
                      style={{ color: 'var(--color-text)' }}
                    >
                      Child&apos;s Name <span style={{ color: 'var(--color-primary)' }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={form.childName}
                      onChange={e => set('childName', e.target.value)}
                      placeholder="Full name"
                      className={inputCls}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 2: mobile + email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="font-body text-sm font-medium block mb-1.5"
                      style={{ color: 'var(--color-text)' }}
                    >
                      Mobile <span style={{ color: 'var(--color-primary)' }}>*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.mobileNumber}
                      onChange={e => set('mobileNumber', e.target.value)}
                      placeholder="10-digit number"
                      className={inputCls}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      className="font-body text-sm font-medium block mb-1.5"
                      style={{ color: 'var(--color-text)' }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      placeholder="your@email.com"
                      className={inputCls}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Row 3: grade + initiative */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="font-body text-sm font-medium block mb-1.5"
                      style={{ color: 'var(--color-text)' }}
                    >
                      Grade / Class
                    </label>
                    <select
                      value={form.grade}
                      onChange={e => set('grade', e.target.value)}
                      className={inputCls}
                      style={{
                        ...inputStyle,
                        color: form.grade ? 'var(--color-text)' : 'var(--color-text-muted)',
                      }}
                    >
                      <option value="">Select grade</option>
                      {enquiryFormFields.gradeOptions.map(g => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      className="font-body text-sm font-medium block mb-1.5"
                      style={{ color: 'var(--color-text)' }}
                    >
                      Initiative Interest
                    </label>
                    <select
                      value={form.initiative}
                      onChange={e => set('initiative', e.target.value)}
                      className={inputCls}
                      style={{
                        ...inputStyle,
                        color: form.initiative ? 'var(--color-text)' : 'var(--color-text-muted)',
                      }}
                    >
                      <option value="">Select programme</option>
                      {enquiryFormFields.initiativeOptions.map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full font-body font-bold uppercase tracking-[0.07em] text-white
                    py-3.5 rounded-lg border-none cursor-pointer mt-1
                    transition-all duration-200 hover:-translate-y-px active:translate-y-0"
                  disabled={submitting}
                  style={{
                    background: 'var(--color-primary)',
                    fontSize:   '0.9rem',
                  }}
                  onMouseEnter={e =>
                    ((e.currentTarget as HTMLButtonElement).style.background = 'var(--color-primary-dark)')
                  }
                  onMouseLeave={e =>
                    ((e.currentTarget as HTMLButtonElement).style.background = 'var(--color-primary)')
                  }
                >
                  {submitting ? 'Sending…' : enquiryFormFields.submitLabel}
                </button>

                <p
                  className="font-body text-xs text-center pt-1"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {enquiryFormFields.privacyNote}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
