'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { sportsData } from '@/data/infrastructure'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function SportsAndGrounds() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section id={sportsData.anchorId} className="bg-bg overflow-hidden">
      {/* Full-bleed image */}
      <div className="relative w-full aspect-[21/9] min-h-[280px] overflow-hidden">
        <Image
          src={sportsData.imageSrc}
          alt={sportsData.imageAlt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark gradient at bottom so the card reads clearly */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-text/40" />

        {/* Ghost label */}
        <span
          aria-hidden="true"
          className="absolute top-6 left-6 font-accent italic font-black uppercase text-white/[0.10] leading-none select-none pointer-events-none text-[5rem] sm:text-[7rem] lg:text-[9rem]"
        >
          {sportsData.ghostLabel}
        </span>

        {/* Eyebrow + heading over image */}
        <div className="absolute bottom-10 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs font-bold tracking-[0.22em] uppercase text-primary-light mb-2">
            {sportsData.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {sportsData.headingPlain}{' '}
            <span className="font-accent italic">{sportsData.headingAccent}</span>
          </h2>
        </div>
      </div>

      {/* Overlapping content card */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 z-10 lg:px-8 -mt-6 lg:-mt-10 relative z-10 pb-20 lg:pb-28">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="bg-surface rounded-2xl p-8 lg:p-12"
          style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
        >
          {/* Body */}
          <div className="space-y-4 mb-8">
            {sportsData.body.map((para, i) => (
              <p key={i} className="font-body text-base text-text-muted leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Feature pills — 3-col desktop, 2-col tablet/mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-8">
            {sportsData.features.map((feat, i) => {
              const Icon = LucideIcons[feat.icon as keyof typeof LucideIcons] as LucideIcon | undefined
              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07, ease }}
                  className="flex items-center gap-2.5 bg-surface-alt rounded-full px-4 py-2.5"
                >
                  {Icon && <Icon size={15} className="text-primary shrink-0" />}
                  <span className="font-body text-sm font-medium text-text">
                    {feat.label}
                  </span>
                </motion.div>
              )
            })}
          </div>

          {/* Competitions note */}
          <p className="font-accent italic text-base text-text-muted border-t border-border pt-6">
            {sportsData.competitionsNote}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
