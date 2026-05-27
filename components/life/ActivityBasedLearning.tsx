'use client'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { activityBasedLearning } from '@/data/lifeAtAlliance'

const ease = [0.33, 1, 0.68, 1] as const

export function ActivityBasedLearning() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 font-accent italic font-black uppercase whitespace-nowrap leading-none select-none pointer-events-none text-text/4"
        style={{ fontSize: 'clamp(4rem, 14vw, 11rem)' }}
      >
        {activityBasedLearning.ghostLabel}
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading block — centered */}
        <div ref={ref} className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body font-bold uppercase mb-4"
            style={{
              fontSize:      '0.7rem',
              letterSpacing: '0.12em',
              color:         'var(--color-primary)',
            }}
          >
            {activityBasedLearning.eyebrow}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="font-display font-bold leading-tight"
            style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', color: 'var(--color-text)' }}
          >
            {activityBasedLearning.headingPlain}{' '}
            <span
              className="font-accent italic block sm:inline"
              style={{ color: 'var(--color-primary)' }}
            >
              {activityBasedLearning.headingAccent}
            </span>
          </motion.h2>

          {/* Rule — scaleX from 0→1 to avoid animating width directly */}
          <div className="flex justify-center mt-8">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
              style={{
                width:           '48px',
                height:          '3px',
                background:      'var(--color-primary-dark)',
                transformOrigin: 'left center',
              }}
            />
          </div>
        </div>

        {/* Two-column body */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.45, ease }}
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: '3rem' }}
        >
          {/* Left column */}
          <div className="space-y-5">
            {activityBasedLearning.leftBody.map((para, i) => (
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

          {/* Right column */}
          <div
            className="space-y-5 lg:border-l lg:pl-12"
            style={{ borderColor: 'var(--color-border)' }}
          >
            {activityBasedLearning.rightBody.map((para, i) => (
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
