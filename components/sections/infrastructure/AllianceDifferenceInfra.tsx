'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { allianceDifference } from '@/data/infrastructure'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

const cardImages: Record<string, string> = {
  campus:    '/images/infrastructure/ais-infra.png',
  sports:    '/images/infrastructure/ais-sports.png',
  lifelong:  '/images/infrastructure/ais-classroom.png',
  teachers:  '/images/infrastructure/ais-teachers.png',
  exchange:  '/images/infrastructure/ais-exposure.png',
  education: '/images/infrastructure/ais-study.png',
}

export function AllianceDifferenceInfra() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-bg py-20 lg:py-28 overflow-hidden relative">
      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute -top-4 -left-2 font-display font-black uppercase text-text/[0.04] leading-none select-none pointer-events-none text-[5rem] sm:text-[7rem] lg:text-[10rem] whitespace-nowrap"
      >
        DIFFERENCE
      </span>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease }}
            className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3"
          >
            Why Choose AIS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight"
          >
            The Alliance{' '}
            <span className="font-accent italic text-primary">Difference</span>
          </motion.h2>
        </div>

        {/* Cards — 3 per row, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allianceDifference.map((point, i) => (
            <motion.article
              key={point.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="group relative bg-surface border border-border rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Top content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Number + rule */}
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-body text-[11px] font-bold text-text-muted">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <h3 className="font-display text-xl font-bold text-text mb-3 leading-snug">
                  {point.heading}
                </h3>
                <p className="font-body text-sm text-text-muted leading-relaxed flex-1">
                  {point.body}
                </p>

                {/* CTA row */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                  <span className="font-body text-[11px] font-bold tracking-[0.18em] uppercase text-primary group-hover:text-primary-dark transition-colors">
                    Learn more
                  </span>
                  <div className="w-8 h-8 rounded-full bg-text flex items-center justify-center group-hover:bg-primary transition-colors duration-300 shrink-0">
                    <ArrowUpRight size={13} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Image with orange circle */}
              <div className="relative h-44 overflow-hidden bg-surface-alt flex items-end justify-center">
                {/* Orange circle — sits behind image */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 w-52 h-52 rounded-full"
                  style={{ backgroundColor: 'rgba(232,98,42,0.22)' }}
                />
                {/* Image — grayscale until hover */}
                <div className="relative w-full h-full">
                  <Image
                    src={cardImages[point.id] ?? '/images/infrastructure/gallery-1.jpg'}
                    alt={point.heading}
                    fill
                    className="object-cover object-center grayscale group-hover:grayscale-0 transition-[filter] duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
