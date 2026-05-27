'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { programmeCards } from '@/data/ourInitiatives'
import { useReveal } from '@/hooks/useReveal'

type FilterKey = 'all' | 'robotics' | 'sports' | 'boarding'

const filters: { key: FilterKey; label: string }[] = [
  { key: 'all',      label: 'All'            },
  { key: 'robotics', label: 'Robotics Lab'   },
  { key: 'sports',   label: 'Sports Academy' },
  { key: 'boarding', label: 'Day Boarding'   },
]

const initiativeLabel: Record<string, string> = {
  robotics: 'Robotics Lab',
  sports:   'Sports Academy',
  boarding: 'Day Boarding',
}

const availabilityConfig = {
  open:     { label: 'Open',           bg: 'rgba(45,125,70,0.12)',   color: 'var(--color-success)'      },
  limited:  { label: 'Limited Seats',  bg: 'rgba(245,154,1,0.12)',   color: 'var(--color-primary-dark)' },
  waitlist: { label: 'Join Waitlist',  bg: 'rgba(192,39,45,0.10)',   color: 'var(--color-error)'        },
}

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function ProgrammeCards() {
  const [filter, setFilter] = useState<FilterKey>('all')
  const { ref, inView } = useReveal(0.1)

  const visible = programmeCards.filter(
    c => filter === 'all' || c.initiativeId === filter,
  )

  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: 'var(--color-surface-alt)' }}
    >
      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-display font-black
          uppercase leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(5rem, 18vw, 14rem)', color: 'rgba(0,0,0,0.025)', zIndex: 0 }}
      >
        PROGRAMMES
      </span>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <p
            className="font-body text-[11px] font-bold tracking-[0.2em] uppercase mb-3"
            style={{ color: 'var(--color-primary-light)' }}
          >
            Enrolments Open
          </p>
          <h2
            className="font-display text-3xl sm:text-4xl font-bold leading-tight"
            style={{ color: 'var(--color-text)' }}
          >
            Our{' '}
            <span className="font-accent italic" style={{ color: 'var(--color-primary)' }}>
              Programmes
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

        {/* Cards grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {visible.map((card) => {
            const avail = availabilityConfig[card.availability]
            return (
              <motion.article
                key={card.id}
                id={card.id}
                variants={item}
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(40,89,184,0.12)' }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="rounded-[0.875rem] overflow-hidden flex flex-col"
                style={{
                  background: 'var(--color-surface)',
                  border:     '1px solid var(--color-border)',
                }}
              >
                {/* Photo */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Initiative badge pill */}
                  <span
                    className="self-start font-body text-[10px] font-bold uppercase tracking-widest
                      px-2.5 py-1 rounded-full mb-3"
                    style={{
                      background: 'rgba(245,154,1,0.12)',
                      color:      'var(--color-primary-dark)',
                    }}
                  >
                    {initiativeLabel[card.initiativeId]}
                  </span>

                  <h3
                    className="font-display font-bold leading-tight mb-1"
                    style={{ fontSize: '1.125rem', color: 'var(--color-text)' }}
                  >
                    {card.programmeTitle}
                  </h3>

                  <p
                    className="font-body font-semibold mb-0.5"
                    style={{ fontSize: '0.8125rem', color: 'var(--color-primary)' }}
                  >
                    {card.gradeRange}
                  </p>

                  <p
                    className="font-body mb-4"
                    style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}
                  >
                    {card.sessionType}
                  </p>

                  <p
                    className="font-body leading-relaxed mb-5 flex-1"
                    style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', lineHeight: '1.65' }}
                  >
                    {card.description}
                  </p>

                  <div className="w-full h-px mb-5" style={{ background: 'var(--color-border)' }} />

                  {/* Availability + CTA row */}
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="font-body text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                      style={{ background: avail.bg, color: avail.color }}
                    >
                      {avail.label}
                    </span>

                    {card.ctaHref === '#enquiry-form' ? (
                      <button
                        type="button"
                        onClick={() => window.dispatchEvent(new CustomEvent('open-enquiry-widget'))}
                        className="group inline-flex items-center gap-1.5 font-body font-bold uppercase
                          transition-colors duration-200 bg-transparent border-none cursor-pointer p-0"
                        style={{ fontSize: '0.75rem', letterSpacing: '0.10em', color: 'var(--color-primary)' }}
                      >
                        {card.ctaLabel}
                        <ArrowRight
                          size={12}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </button>
                    ) : (
                      <Link
                        href={card.ctaHref}
                        className="group inline-flex items-center gap-1.5 font-body font-bold uppercase
                          transition-colors duration-200"
                        style={{ fontSize: '0.75rem', letterSpacing: '0.10em', color: 'var(--color-primary)' }}
                      >
                        {card.ctaLabel}
                        <ArrowRight
                          size={12}
                          className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
