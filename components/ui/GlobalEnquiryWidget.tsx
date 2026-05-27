'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2 } from 'lucide-react'

const grades = [
  'Nursery', 'KG',
  'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6',
  'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12',
]

interface FormState {
  parentName: string
  childName:  string
  phone:      string
  email:      string
  grade:      string
  message:    string
}

const blank: FormState = {
  parentName: '', childName: '', phone: '', email: '', grade: '', message: '',
}

const ease = [0.33, 1, 0.68, 1] as const

export function GlobalEnquiryWidget() {
  const [open,       setOpen]       = useState(false)
  const [submitted,  setSubmitted]  = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [form,       setForm]       = useState<FormState>(blank)

  useEffect(() => {
    const handler = () => setOpen(true)
    window.addEventListener('open-enquiry-widget', handler)
    return () => window.removeEventListener('open-enquiry-widget', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function set(key: keyof FormState, val: string) {
    setForm(f => ({ ...f, [key]: val }))
  }

  async function handleSubmit() {
    setSubmitting(true)
    try {
      await fetch('/api/enquiry', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      })
    } finally {
      setSubmitting(false)
      setSubmitted(true)
    }
  }

  function handleClose() {
    setOpen(false)
    setTimeout(() => {
      setSubmitted(false)
      setForm(blank)
    }, 450)
  }

  const inputCls =
    'w-full font-body text-sm px-4 py-3 rounded-xl border transition-all duration-200 ' +
    'focus:outline-none focus:ring-2 focus:border-primary'

  return (
    <>
      {/* ── Floating tab button ─────────────────────────── */}
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open enquiry form"
        whileHover={{ x: -4 }}
        transition={{ duration: 0.2 }}
        className="fixed z-50 font-body text-xs font-bold tracking-[0.16em] uppercase text-white
          px-3 py-4 shadow-lg select-none"
        style={{
          right:        0,
          top:          '38%',
          background:   'var(--color-primary)',
          borderRadius: '0.5rem 0 0 0.5rem',
          writingMode:  'vertical-rl',
        }}
      >
        Enquire Now
      </motion.button>

      {/* ── Backdrop ────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="eq-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-60 bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* ── Slide-in panel ──────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="eq-panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease }}
            role="dialog"
            aria-modal="true"
            aria-label="Enquiry form"
            className="fixed right-0 top-0 h-full z-70 w-full sm:w-105
              flex flex-col shadow-2xl overflow-hidden"
            style={{ background: 'var(--color-surface)' }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-5 shrink-0"
              style={{ background: 'var(--color-primary)' }}
            >
              <div>
                <p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-white/65 mb-0.5">
                  Alliance International School
                </p>
                <p className="font-display text-lg font-bold text-white leading-tight">
                  Quick Enquiry
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close enquiry panel"
                className="w-9 h-9 rounded-full flex items-center justify-center
                  transition-colors duration-200"
                style={{ background: 'rgba(255,255,255,0.18)', color: 'white' }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-center"
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: 'rgba(45,125,70,0.1)' }}
                    >
                      <CheckCircle2 size={32} style={{ color: 'var(--color-success)' }} />
                    </div>
                    <h3
                      className="font-display text-xl font-bold"
                      style={{ color: 'var(--color-text)' }}
                    >
                      Thank you!
                    </h3>
                    <p
                      className="font-body text-sm leading-relaxed max-w-xs"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      We&apos;ve received your enquiry. Our counsellor will reach out within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="mt-2 font-body text-sm font-semibold px-6 py-2.5 rounded-full text-white
                        transition-colors duration-200"
                      style={{ background: 'var(--color-primary)' }}
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <p
                      className="font-body text-sm leading-relaxed mb-5"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      Fill in the details and our admissions team will get back to you within 24 hours.
                    </p>

                    {/* Parent name */}
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
                        placeholder="Your full name"
                        className={inputCls}
                        style={{
                          background:  'var(--color-bg)',
                          borderColor: 'var(--color-border)',
                          color:       'var(--color-text)',
                        }}
                      />
                    </div>

                    {/* Child name */}
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
                        placeholder="Child's full name"
                        className={inputCls}
                        style={{
                          background:  'var(--color-bg)',
                          borderColor: 'var(--color-border)',
                          color:       'var(--color-text)',
                        }}
                      />
                    </div>

                    {/* Phone + Grade row */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          className="font-body text-sm font-medium block mb-1.5"
                          style={{ color: 'var(--color-text)' }}
                        >
                          Mobile <span style={{ color: 'var(--color-primary)' }}>*</span>
                        </label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => set('phone', e.target.value)}
                          placeholder="10-digit"
                          className={inputCls}
                          style={{
                            background:  'var(--color-bg)',
                            borderColor: 'var(--color-border)',
                            color:       'var(--color-text)',
                          }}
                        />
                      </div>
                      <div>
                        <label
                          className="font-body text-sm font-medium block mb-1.5"
                          style={{ color: 'var(--color-text)' }}
                        >
                          Grade
                        </label>
                        <select
                          value={form.grade}
                          onChange={e => set('grade', e.target.value)}
                          className={inputCls}
                          style={{
                            background:  'var(--color-bg)',
                            borderColor: 'var(--color-border)',
                            color:       form.grade ? 'var(--color-text)' : 'var(--color-text-muted)',
                          }}
                        >
                          <option value="">Select</option>
                          {grades.map(g => <option key={g} value={g}>{g}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Email */}
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
                        style={{
                          background:  'var(--color-bg)',
                          borderColor: 'var(--color-border)',
                          color:       'var(--color-text)',
                        }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        className="font-body text-sm font-medium block mb-1.5"
                        style={{ color: 'var(--color-text)' }}
                      >
                        Message{' '}
                        <span className="font-normal" style={{ color: 'var(--color-text-muted)' }}>
                          (optional)
                        </span>
                      </label>
                      <textarea
                        value={form.message}
                        onChange={e => set('message', e.target.value)}
                        placeholder="Any questions or requirements..."
                        rows={3}
                        className={inputCls}
                        style={{
                          background:  'var(--color-bg)',
                          borderColor: 'var(--color-border)',
                          color:       'var(--color-text)',
                          resize:      'none',
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="button"
                      onClick={handleSubmit}
                      disabled={submitting}
                      whileTap={{ scale: 0.97 }}
                      className="w-full font-body text-sm font-bold uppercase tracking-[0.08em]
                        text-white py-3.5 rounded-xl mt-1 disabled:opacity-60"
                      style={{ background: 'var(--color-primary)' }}
                    >
                      {submitting ? 'Sending…' : 'Send Enquiry'}
                    </motion.button>

                    <p
                      className="font-body text-xs text-center pt-1"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      We respect your privacy. Your details are used only to respond to your enquiry.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
