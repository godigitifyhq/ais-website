'use client'
import { motion } from 'framer-motion'
import {
  MessageCircle, Eye, ClipboardList,
  FileText, CheckCircle, Rocket,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { howToJoinSteps } from '@/data/ourInitiatives'
import { useReveal } from '@/hooks/useReveal'

const iconMap: Record<string, LucideIcon> = {
  MessageCircle, Eye, ClipboardList, FileText, CheckCircle, Rocket,
}

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
}

export function HowToJoinProcess() {
  const { ref, inView } = useReveal<HTMLOListElement>(0.1)

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-display font-black
          uppercase leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(5rem, 18vw, 14rem)', color: 'rgba(0,0,0,0.025)', zIndex: 0 }}
      >
        PROCESS
      </span>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="font-body text-[11px] font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-primary-light)' }}
          >
            Simple and Transparent
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            How to Join an{' '}
            <span className="font-accent italic" style={{ color: 'var(--color-primary)' }}>
              AIS Initiative
            </span>
          </h2>
        </div>

        {/* Steps */}
        <motion.ol
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="relative flex flex-col lg:flex-row lg:items-start list-none p-0 m-0 gap-8 lg:gap-0"
        >
          {/* Mobile vertical connector */}
          <div
            aria-hidden="true"
            className="lg:hidden absolute w-px"
            style={{
              left:       '1.75rem',
              top:        '1.75rem',
              bottom:     '1.75rem',
              background: 'var(--color-border)',
            }}
          />

          {howToJoinSteps.map((step, i) => {
            const Icon = iconMap[step.icon]
            const isLast = i === howToJoinSteps.length - 1

            return (
              <motion.li
                key={step.id}
                variants={item}
                className="relative flex flex-row items-start gap-5
                  lg:flex-1 lg:flex-col lg:items-center lg:text-center lg:gap-0 lg:px-2"
              >
                {/* Desktop horizontal connector (sits behind circle via z-index) */}
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="hidden lg:block absolute h-px"
                    style={{
                      top:        '1.75rem',
                      left:       'calc(50% + 1.75rem)',
                      right:      'calc(-50% + 1.75rem)',
                      background: 'var(--color-border)',
                    }}
                  />
                )}

                {/* Number circle */}
                <div
                  className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full
                    flex items-center justify-center"
                  style={{
                    background: 'var(--color-primary)',
                    color:      'white',
                    boxShadow:  '0 4px 12px rgba(192,39,45,0.25)',
                  }}
                >
                  {Icon && <Icon size={20} />}
                </div>

                {/* Text */}
                <div className="pt-1 lg:pt-0 lg:mt-4">
                  <p
                    className="font-body font-bold mb-1"
                    style={{ fontSize: '0.9375rem', color: 'var(--color-text)' }}
                  >
                    <span
                      className="font-body text-xs font-bold uppercase tracking-widest lg:block lg:mb-1"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      {String(step.step).padStart(2, '0')} —{' '}
                    </span>
                    {step.heading}
                  </p>
                  <p
                    className="font-body leading-relaxed"
                    style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}
                  >
                    {step.body}
                  </p>
                </div>
              </motion.li>
            )
          })}
        </motion.ol>
      </div>
    </section>
  )
}
