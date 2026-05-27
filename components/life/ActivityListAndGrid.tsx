'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { activityList, activityCards } from '@/data/lifeAtAlliance'

const ease = [0.33, 1, 0.68, 1] as const

const half = Math.ceil(activityList.length / 2)
const leftCol  = activityList.slice(0, half)
const rightCol = activityList.slice(half)

export function ActivityListAndGrid() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section
      className="py-20 lg:py-24"
      style={{ background: 'var(--color-surface-alt)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section heading ── */}
        <div ref={ref} className="relative text-center mb-14">
          {/* Ghost label */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 font-accent italic font-black uppercase leading-none select-none pointer-events-none text-text/4"
            style={{ fontSize: 'clamp(4rem, 14vw, 10rem)' }}
          >
            ACTIVITIES
          </span>

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease }}
              className="font-body font-bold uppercase mb-3"
              style={{
                fontSize:      '0.7rem',
                letterSpacing: '0.12em',
                color:         'var(--color-primary)',
              }}
            >
              What We Do
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="font-display font-bold text-3xl sm:text-4xl"
              style={{ color: 'var(--color-text)' }}
            >
              All Our{' '}
              <span
                className="font-accent italic"
                style={{ color: 'var(--color-primary)' }}
              >
                Activities
              </span>
            </motion.h2>
          </div>
        </div>

        {/* ── Activity list table ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2, ease }}
          className="max-w-2xl mx-auto mb-14 rounded-xl overflow-hidden"
          style={{
            background: 'var(--color-surface)',
            border:     '1px solid var(--color-border)',
            padding:    '1.75rem 2rem',
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Left column */}
            <ul className="sm:pr-6">
              {leftCol.map((item, i) => (
                <li
                  key={item.id}
                  className="font-body"
                  style={{
                    padding:      '0.6rem 0',
                    fontSize:     '0.9375rem',
                    color:        'var(--color-text)',
                    borderBottom: i < leftCol.length - 1
                      ? '1px solid var(--color-border)'
                      : 'none',
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>

            {/* Right column — border-l as divider on sm+ */}
            <ul
              className="sm:pl-6 sm:border-l"
              style={{ borderColor: 'var(--color-border)' }}
            >
              {rightCol.map((item, i) => (
                <li
                  key={item.id}
                  className="font-body"
                  style={{
                    padding:      '0.6rem 0',
                    fontSize:     '0.9375rem',
                    color:        'var(--color-text)',
                    borderBottom: i < rightCol.length - 1
                      ? '1px solid var(--color-border)'
                      : 'none',
                  }}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── Activity photo-card grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {activityCards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              className="group relative overflow-hidden cursor-default"
              style={{ borderRadius: '0.625rem' }}
            >
              {/* Aspect-ratio wrapper */}
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: '3/2' }}>
                {/* Image — CSS-only hover scale, NOT Framer Motion */}
                <div
                  className="absolute inset-0 transition-transform duration-[350ms] ease-out group-hover:scale-[1.04]"
                  style={{ willChange: 'transform' }}
                >
                  <Image
                    src={card.imageSrc}
                    alt={card.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Label overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 z-10"
                  style={{
                    padding:    '0.75rem 1rem',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.72))',
                  }}
                >
                  <span
                    className="font-body font-bold uppercase"
                    style={{
                      fontSize:      '0.75rem',
                      letterSpacing: '0.12em',
                      color:         'var(--color-text-inverse)',
                    }}
                  >
                    {card.label}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
