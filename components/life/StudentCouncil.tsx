'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Vote, Megaphone, Star, type LucideIcon } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import { studentCouncil } from '@/data/lifeAtAlliance'

const iconMap: Record<string, LucideIcon> = { Vote, Megaphone, Star }

const ease = [0.33, 1, 0.68, 1] as const

export function StudentCouncil() {
  const { ref, inView } = useReveal(0.12)

  return (
    <section
      className="py-20 lg:py-28 overflow-hidden"
      style={{ background: 'var(--color-surface-alt)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image — below content on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease }}
            className="relative order-2 lg:order-1 rounded-2xl overflow-hidden"
            style={{ aspectRatio: '4/3' }}
          >
            <Image
              src={studentCouncil.imageSrc}
              alt={studentCouncil.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          {/* Content — first on mobile, right on desktop */}
          <div ref={ref} className="order-1 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease }}
              className="font-body font-bold uppercase mb-3"
              style={{
                fontSize:      '0.7rem',
                letterSpacing: '0.12em',
                color:         'var(--color-primary)',
              }}
            >
              {studentCouncil.eyebrow}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="font-display font-bold text-3xl sm:text-4xl leading-tight mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              {studentCouncil.headingPlain}{' '}
              <span
                className="font-accent italic"
                style={{ color: 'var(--color-primary)' }}
              >
                {studentCouncil.headingAccent}
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease }}
              className="space-y-4 mb-8"
            >
              {studentCouncil.body.map((para, i) => (
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
            </motion.div>

            {/* Stat pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.35, ease }}
              className="flex flex-wrap gap-3"
            >
              {studentCouncil.stats.map((stat) => {
                const Icon = iconMap[stat.icon] ?? Star
                return (
                  <div
                    key={stat.id}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border"
                    style={{
                      borderColor: 'var(--color-border)',
                      background:  'var(--color-surface)',
                    }}
                  >
                    <Icon
                      size={16}
                      style={{ color: 'var(--color-primary)', flexShrink: 0 }}
                    />
                    <span
                      className="font-body font-semibold whitespace-nowrap"
                      style={{
                        fontSize: '0.8125rem',
                        color:    'var(--color-text)',
                      }}
                    >
                      {stat.label}
                    </span>
                  </div>
                )
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
