'use client'
import { motion } from 'framer-motion'
import { BookOpen, Brain, Globe, Users, ShieldCheck, Sparkles } from 'lucide-react'
import { whyCBSE } from '@/data/cbseCorner'
import { useReveal } from '@/hooks/useReveal'

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  BookOpen, Brain, Globe, Users, ShieldCheck, Sparkles,
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.42, ease: 'easeOut' as const } },
}

export function WhyCBSE() {
  const { ref, inView } = useReveal<HTMLDivElement>(0.1)

  return (
    <section style={{ background: 'var(--color-surface-alt)', padding: '5rem 0' }} className="py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10">
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--color-primary-dark)',
              marginBottom: '0.5rem',
            }}
          >
            {whyCBSE.eyebrow}
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 700,
              color: 'var(--color-text)',
              lineHeight: 1.15,
              maxWidth: '560px',
            }}
          >
            {whyCBSE.headingPlain}{' '}
            <span
              style={{
                fontFamily: 'var(--font-accent)',
                fontStyle: 'italic',
                fontWeight: 600,
                color: 'var(--color-primary)',
              }}
            >
              {whyCBSE.headingAccent}
            </span>
          </h2>
        </div>

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {whyCBSE.points.map((point) => {
            const IconComponent = iconMap[point.icon]
            return (
              <motion.div
                key={point.id}
                variants={item}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                  transition: 'box-shadow 220ms ease, transform 220ms ease',
                }}
                className="hover:-translate-y-[2px] hover:shadow-[0_6px_20px_rgba(40,89,184,0.09)]"
              >
                {/* Icon */}
                <div style={{ marginBottom: '0.125rem' }}>
                  {IconComponent && (
                    <IconComponent size={24} color="var(--color-primary-dark)" />
                  )}
                </div>

                {/* Heading */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9375rem',
                    fontWeight: 700,
                    color: 'var(--color-text)',
                    lineHeight: 1.3,
                  }}
                >
                  {point.heading}
                </p>

                {/* Body */}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.6,
                  }}
                >
                  {point.body}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
