'use client'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { philosophyIntro } from '@/data/lifeAtAlliance'

const ease = [0.33, 1, 0.68, 1] as const

export function PhilosophyIntro() {
  const { ref, inView } = useReveal(0.15)

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Ghost label — top-right, near-invisible */}
      <span
        aria-hidden="true"
        className="absolute top-0 right-0 font-accent italic font-black uppercase whitespace-nowrap leading-none select-none pointer-events-none text-text/4"
        style={{ fontSize: 'clamp(5rem, 16vw, 14rem)', lineHeight: 1 }}
      >
        {philosophyIntro.ghostLabel}
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading block */}
        <div ref={ref} className="mb-12 lg:mb-16 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body font-bold uppercase mb-4"
            style={{
              fontSize:      '0.7rem',
              letterSpacing: '0.12em',
              color:         'var(--color-primary)',
            }}
          >
            {philosophyIntro.eyebrow}
          </motion.p>

          <div className="space-y-1">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0, ease }}
              className="font-display font-bold leading-tight"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                color:    'var(--color-text)',
              }}
            >
              {philosophyIntro.headingLine1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12, ease }}
              className="font-display font-bold leading-tight"
              style={{
                fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                color:    'var(--color-text)',
              }}
            >
              {philosophyIntro.headingLine2}{' '}
              <span
                className="font-accent italic"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                  color:    'var(--color-primary-dark)',
                }}
              >
                {philosophyIntro.headingAccent}
              </span>
            </motion.p>
          </div>
        </div>

        {/* Two-column body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.4, ease }}
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: '3rem' }}
        >
          {/* Left column */}
          <div className="space-y-5">
            {philosophyIntro.leftBody.map((para, i) => (
              <p
                key={i}
                className="font-body"
                style={{
                  fontSize:   '0.9375rem',
                  lineHeight: 1.8,
                  color:      'var(--color-text-muted)',
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Right column — border-l acts as the column divider on desktop */}
          <div
            className="space-y-5 lg:border-l lg:pl-12"
            style={{ borderColor: 'var(--color-border)' }}
          >
            {philosophyIntro.rightBody.map((para, i) => (
              <p
                key={i}
                className="font-body"
                style={{
                  fontSize:   '0.9375rem',
                  lineHeight: 1.8,
                  color:      'var(--color-text-muted)',
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
