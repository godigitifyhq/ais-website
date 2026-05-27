'use client'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { transportData } from '@/data/infrastructure'
import SkewedImage from '@/components/ui/SkewedImage'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function TransportSection() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section id={transportData.anchorId} className="bg-surface-alt py-20 lg:py-28 overflow-hidden relative">
      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute -top-4 -left-2 font-display font-black uppercase text-text/4 leading-none select-none pointer-events-none text-[5rem] sm:text-[7rem] lg:text-[10rem] whitespace-nowrap"
      >
        {transportData.ghostLabel}
      </span>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-center">

          {/* Image — first on mobile, second on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="order-1 lg:order-2"
          >
            <SkewedImage
              src={transportData.imageSrc}
              alt={transportData.imageAlt}
              variant="wide"
            />
          </motion.div>

          {/* Content — second on mobile, first on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="order-2 lg:order-1"
          >
            <p className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3">
              {transportData.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight mb-6">
              {transportData.headingPlain}{' '}
              <span className="font-accent italic text-primary">{transportData.headingAccent}</span>
            </h2>

            <div className="space-y-4 mb-8">
              {transportData.body.map((para, i) => (
                <p key={i} className="font-body text-sm lg:text-base text-text-muted leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* 2×2 feature tiles */}
            <div className="grid grid-cols-2 gap-4">
              {transportData.features.map((feat, i) => {
                const Icon = LucideIcons[feat.icon as keyof typeof LucideIcons] as LucideIcon | undefined
                return (
                  <motion.div
                    key={feat.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.25 + i * 0.08, ease }}
                    className="bg-surface border border-border rounded-lg p-5 flex flex-col items-center text-center"
                  >
                    {Icon && <Icon size={20} className="text-primary mb-2.5 shrink-0" />}
                    <span className="font-body text-xs text-text-muted leading-snug">
                      {feat.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
