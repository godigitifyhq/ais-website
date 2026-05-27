'use client'
import { motion } from 'framer-motion'
import { Phone, MapPin, ClipboardList, FolderOpen, UserCheck, GraduationCap, type LucideIcon } from 'lucide-react'
import { processSteps } from '@/data/admission'
import { useReveal } from '@/hooks/useReveal'

const iconMap: Record<string, LucideIcon> = {
  Phone, MapPin, ClipboardList, FolderOpen, UserCheck, GraduationCap,
}

const ease = [0.33, 1, 0.68, 1] as const

function StepCard({ step, index }: { step: typeof processSteps[number]; index: number }) {
  const Icon = iconMap[step.icon] ?? Phone

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      className="flex gap-4 items-start p-4 rounded-xl bg-surface border border-border"
    >
      {/* Left: number + icon stacked */}
      <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
        <span className="font-display text-2xl font-bold text-primary/15 leading-none select-none">
          {String(step.step).padStart(2, '0')}
        </span>
        <div className="w-10 h-10 rounded-full bg-primary/[0.07] flex items-center justify-center">
          <Icon size={18} className="text-primary" />
        </div>
      </div>

      {/* Right: text */}
      <div className="min-w-0 pt-0.5">
        <h3 className="font-body text-sm font-bold text-text mb-1 leading-snug">{step.title}</h3>
        <p className="font-body text-xs text-text-muted leading-relaxed">{step.description}</p>
      </div>
    </motion.div>
  )
}

export function ProcessStepsSection() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-surface-alt py-16 md:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className="relative mb-10">
          <span
            aria-hidden="true"
            className="absolute -top-3 -left-1 font-display font-black uppercase leading-none
              select-none pointer-events-none text-text/[0.04] text-[4rem] sm:text-[6rem]"
          >
            PROCESS
          </span>

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, ease }}
              className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3"
            >
              Step by Step
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1, ease }}
              className="font-display text-3xl sm:text-4xl font-bold text-text"
            >
              How to Join{' '}
              <span className="font-accent italic text-primary">Alliance</span>
            </motion.h2>
          </div>
        </div>

        {/* Steps grid — 1-col xs, 2-col sm, 3-col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {processSteps.map((step, i) => (
            <StepCard key={step.step} step={step} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
