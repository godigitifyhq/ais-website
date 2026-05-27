'use client'
import { motion } from 'framer-motion'
import { Smile, Shield, Palette, Users, Globe, type LucideIcon } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import { lifePillars, type LifePillar } from '@/data/lifeAtAlliance'

const iconMap: Record<string, LucideIcon> = {
  Smile,
  Shield,
  Palette,
  Users,
  Globe,
}

const ease = [0.33, 1, 0.68, 1] as const

function PillarCard({ pillar, index }: { pillar: LifePillar; index: number }) {
  const Icon = iconMap[pillar.icon] ?? Smile
  const isLight = pillar.variant === 'light'

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.3)' }}
      className="flex flex-col gap-4 rounded-2xl transition-shadow duration-250"
      style={{
        padding:    '2rem 1.75rem',
        background: isLight ? 'rgba(255,255,255,0.07)' : 'var(--color-primary)',
        border:     isLight ? '1px solid rgba(255,255,255,0.12)' : 'none',
      }}
    >
      <Icon
        size={40}
        style={{ color: isLight ? 'var(--color-primary-light)' : 'rgba(255,255,255,0.9)' }}
        strokeWidth={1.5}
      />
      <div>
        <p
          className="font-body font-bold mb-2"
          style={{ fontSize: '1.125rem', color: 'var(--color-text-inverse)' }}
        >
          {pillar.heading}
        </p>
        <p
          className="font-body"
          style={{
            fontSize:   '0.875rem',
            lineHeight: 1.65,
            color:      isLight ? 'rgba(255,255,255,0.65)' : 'rgba(255,255,255,0.80)',
          }}
        >
          {pillar.body}
        </p>
      </div>
    </motion.div>
  )
}

export function PillarsOfLifeGrid() {
  const { ref, inView } = useReveal(0.1)
  const row1 = lifePillars.slice(0, 3)
  const row2 = lifePillars.slice(3)

  return (
    <section
      style={{
        background: 'var(--color-text)',
        paddingBlock: 'clamp(3.5rem, 8vw, 5rem)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div ref={ref} className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body font-bold uppercase mb-4"
            style={{
              fontSize:      '0.7rem',
              letterSpacing: '0.12em',
              color:         'rgba(255,255,255,0.5)',
            }}
          >
            What Sets Us Apart
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="font-display font-bold text-3xl sm:text-4xl"
            style={{ color: 'var(--color-text-inverse)' }}
          >
            The Five Pillars{' '}
            <span
              className="font-accent italic"
              style={{ color: 'var(--color-primary-light)' }}
            >
              of Life at AIS
            </span>
          </motion.h2>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {row1.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="flex flex-col sm:flex-row lg:justify-center gap-5">
          {row2.map((pillar, i) => (
            <div key={pillar.id} className="w-full sm:flex-1 lg:flex-none lg:w-[calc(33.333%-0.833rem)]">
              <PillarCard pillar={pillar} index={row1.length + i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
