'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Bot, Monitor, Cpu, Radio, Settings, Printer,
  BookOpen, GraduationCap, Archive, Users, BookMarked, Trophy,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { equipmentTiles } from '@/data/ourInitiatives'
import { useReveal } from '@/hooks/useReveal'

const iconMap: Record<string, LucideIcon> = {
  Bot, Monitor, Cpu, Radio, Settings, Printer,
  BookOpen, GraduationCap, Archive, Users, BookMarked, Trophy,
}

type FilterKey = 'all' | 'robotics' | 'sports'

const filters: { key: FilterKey; label: string }[] = [
  { key: 'all',      label: 'All'            },
  { key: 'robotics', label: 'Robotics Lab'   },
  { key: 'sports',   label: 'Sports Academy' },
]

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.06 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
}

export function EquipmentAndToolsGrid() {
  const [filter, setFilter] = useState<FilterKey>('all')
  const { ref, inView } = useReveal(0.1)

  const visible = equipmentTiles.filter(
    t => filter === 'all' || t.category === filter,
  )

  return (
    <section
      id="robotics-equipment"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'var(--color-surface-alt)' }}
    >
      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-display font-black
          uppercase leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(5rem, 18vw, 14rem)', color: 'rgba(0,0,0,0.03)', zIndex: 0 }}
      >
        EQUIPMENT
      </span>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <p
            className="font-body text-[11px] font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-primary-light)' }}
          >
            What&apos;s Inside
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            Explore Our Cutting-Edge{' '}
            <span className="font-accent italic" style={{ color: 'var(--color-primary)' }}>
              Initiatives
            </span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {filters.map(({ key, label }) => {
            const active = filter === key
            return (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                aria-pressed={active}
                className="font-body text-xs font-bold tracking-wide uppercase px-5 py-2
                  rounded-full transition-colors duration-150"
                style={
                  active
                    ? { background: 'var(--color-primary)', color: 'white' }
                    : { background: 'transparent', color: 'var(--color-text-muted)' }
                }
              >
                {label}
              </button>
            )
          })}
        </div>

        {/* Tile grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 md:gap-3 gap-2"
        >
          {visible.map((tile) => {
            const Icon = iconMap[tile.icon]
            return (
              <motion.div
                key={tile.id}
                variants={item}
                whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(192,39,45,0.10)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="rounded-xl overflow-hidden"
                style={{
                  background: 'var(--color-surface)',
                  border:     '1px solid var(--color-border)',
                }}
              >
                {/* Image (if available) */}
                {tile.imageSrc ? (
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={tile.imageSrc}
                      alt={tile.heading}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                ) : (
                  <div
                    className="w-full flex items-center justify-center py-6"
                    style={{ background: 'rgba(245,154,1,0.08)' }}
                  >
                    {Icon && <Icon size={32} style={{ color: 'var(--color-primary-dark)' }} />}
                  </div>
                )}

                {/* Title only — no body paragraph */}
                <div className="px-4 py-3">
                  <p
                    className="font-body text-sm font-bold leading-snug"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {tile.heading}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
