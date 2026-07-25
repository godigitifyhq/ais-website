'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { dayTimeline } from '@/data/lifeAtAlliance'

const ease = [0.33, 1, 0.68, 1] as const

export function DayAtAISTimeline() {
  const { ref, inView } = useReveal(0.08)

  return (
    <section className="bg-surface-alt py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary-light mb-3"
          >
            A TYPICAL DAY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="font-display text-2xl md:text-4xl font-bold text-text"
          >
            Morning to{' '}
            <span className="font-accent italic text-primary">Evening</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Spine — desktop only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {dayTimeline.map((item, i) => {
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.06, ease }}
                  className={`relative flex flex-col md:flex-row items-start gap-4 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content side */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className={`flex items-start gap-3 ${isLeft ? 'md:flex-row-reverse md:justify-start' : ''}`}>
                      {/* Mobile: time badge beside text */}
                      <span className="md:hidden inline-flex items-center justify-center bg-primary text-white font-display text-xs font-bold px-3 py-1.5 rounded-full shrink-0 mt-0.5">
                        {item.time}
                      </span>
                      <div>
                        <p className="font-display text-lg font-bold text-text leading-snug">{item.title}</p>
                        <p className="font-body text-sm text-text-muted mt-1">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center: time badge (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center z-10">
                    <span className="inline-flex items-center justify-center bg-primary text-white font-display text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-md">
                      {item.time}
                    </span>
                  </div>

                  {/* Image side */}
                  <div className="flex-1 md:max-w-[45%]">
                    <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-sm">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 45vw"
                      />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
