'use client'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Check } from 'lucide-react'
import { healthData } from '@/data/infrastructure'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

interface CardData {
  icon: string
  heading: string
  body: string
  features: string[]
}

function HealthCard({ card, delay, inView }: { card: CardData; delay: number; inView: boolean }) {
  const Icon = LucideIcons[card.icon as keyof typeof LucideIcons] as LucideIcon | undefined

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease }}
      className="bg-surface rounded-xl p-8 lg:p-10 border-l-4 border-primary-dark flex flex-col"
    >
      {/* Icon circle */}
      <div className="w-16 h-16 rounded-full bg-surface-alt flex items-center justify-center mb-6 shrink-0">
        {Icon && <Icon size={28} className="text-primary" />}
      </div>

      <h3 className="font-body text-xl font-bold text-text mb-3">
        {card.heading}
      </h3>
      <p className="font-body text-sm text-text-muted leading-relaxed mb-6">
        {card.body}
      </p>

      {/* Feature list */}
      <ul className="space-y-2.5 mt-auto">
        {card.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5">
            <Check
              size={15}
              className="shrink-0 mt-0.5"
              style={{ color: 'var(--color-success)' }}
            />
            <span className="font-body text-sm text-text-muted leading-snug">{feat}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function HealthAndWellbeing() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section id={healthData.anchorId} className="bg-surface-alt py-20 lg:py-28 overflow-hidden relative">
      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute -top-4 -left-2 font-display font-black uppercase text-text/[0.04] leading-none select-none pointer-events-none text-[5rem] sm:text-[7rem] lg:text-[10rem] whitespace-nowrap"
      >
        {healthData.ghostLabel}
      </span>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease }}
            className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3"
          >
            Student Wellbeing
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight"
          >
            {healthData.sectionHeading.plain}{' '}
            <span className="font-accent italic text-primary">
              {healthData.sectionHeading.accent}
            </span>
          </motion.h2>
        </div>

        {/* Two cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <HealthCard card={healthData.healthServices} delay={0.15} inView={inView} />
          <HealthCard card={healthData.nurse}          delay={0.25} inView={inView} />
        </div>
      </div>
    </section>
  )
}
