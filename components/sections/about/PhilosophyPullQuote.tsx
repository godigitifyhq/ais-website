'use client'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { leadershipProfiles } from '@/data/about'

const ease = [0.33, 1, 0.68, 1] as const
const chairman = leadershipProfiles[0]

export function PhilosophyPullQuote() {
  const { ref, inView } = useReveal(0.2)

  return (
    <section ref={ref} className="bg-primary py-20 md:py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Opening quote mark */}
        <motion.span
          aria-hidden="true"
          className="block font-accent italic text-7xl md:text-8xl text-white/25 leading-none select-none mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease }}
        >
          ❝
        </motion.span>

        {/* Quote */}
        <motion.p
          className="font-display text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-white leading-snug max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease }}
        >
          {chairman.pullQuote}
        </motion.p>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease }}
        >
          <div className="w-10 h-px bg-white/30 mx-auto mt-8 mb-5" />
          <p className="font-body text-sm font-semibold text-white/80">
            {chairman.name}
          </p>
          <p className="font-body text-xs text-white/55 tracking-[0.15em] mt-1">
            {chairman.designation}
          </p>
        </motion.div>

      </div>
    </section>
  )
}
