'use client'
import { motion } from 'framer-motion'
import { leadershipProfiles } from '@/data/about'
import { LeaderPanel } from './LeaderPanel'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function LeadershipSection() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section id="management">
      {/* Section heading */}
      <div ref={ref} className="bg-bg py-16 lg:py-20 overflow-hidden relative">
        {/* Ghost label */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display font-black uppercase text-text/[0.04] leading-none select-none pointer-events-none text-[5rem] sm:text-[7rem] lg:text-[10rem]"
        >
          PEOPLE
        </span>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
            className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3"
          >
            Our Leadership
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight max-w-xl"
          >
            The people behind Alliance.
          </motion.h2>
        </div>
      </div>

      {/* Leader panels */}
      {leadershipProfiles.map((leader, index) => (
        <LeaderPanel key={leader.id} leader={leader} index={index} />
      ))}
    </section>
  )
}
