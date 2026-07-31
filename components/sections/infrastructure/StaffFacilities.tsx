'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { staffFacilitiesData } from '@/data/infrastructure'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function StaffFacilities() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section id={staffFacilitiesData.anchorId} className="bg-bg py-20 lg:py-28 overflow-hidden relative">
      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute -top-4 -left-2 font-display font-black uppercase text-text/4 leading-none select-none pointer-events-none text-[5rem] sm:text-[7rem] lg:text-[10rem] whitespace-nowrap"
      >
        {staffFacilitiesData.ghostLabel}
      </span>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div className="mb-10 lg:mb-12 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease }}
            className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3"
          >
            Our People
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight mb-4"
          >
            {staffFacilitiesData.sectionHeading.plain}{' '}
            <span className="font-accent italic text-primary">
              {staffFacilitiesData.sectionHeading.accent}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.16, ease }}
            className="font-body text-sm lg:text-base text-text-muted leading-relaxed"
          >
            {staffFacilitiesData.intro}
          </motion.p>
        </div>

        {/* Three real spaces */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {staffFacilitiesData.spaces.map((space, i) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.09, ease }}
              className="bg-surface rounded-xl overflow-hidden border border-border group"
            >
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={space.src}
                  alt={space.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 border-l-4 border-primary-dark">
                <h3 className="font-body text-lg font-bold text-text mb-2">
                  {space.heading}
                </h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">
                  {space.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Residential note — a line, not a card */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease }}
          className="font-accent italic text-base text-text-muted border-t border-border pt-6 mt-8"
        >
          {staffFacilitiesData.quartersNote}
        </motion.p>
      </div>
    </section>
  )
}
