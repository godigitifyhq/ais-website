'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { leadershipProfiles } from '@/data/about'

const ease = [0.33, 1, 0.68, 1] as const
const chairman = leadershipProfiles[0]

// Background image for the quote section
const BG_IMAGE = '/images/life_at_alliance/event-wide.png'

export function PhilosophyPullQuote() {
  const { ref, inView } = useReveal(0.2)

  return (
    <section ref={ref} className="relative min-h-[320px] md:min-h-[400px] flex items-center overflow-hidden">
      {/* Background image */}
      <Image
        src={BG_IMAGE}
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden="true"
      />
      {/* Dark overlay — image visible through it */}
      <div className="absolute inset-0 bg-black/58" />

      {/* Quote content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">

        <motion.span
          aria-hidden="true"
          className="block font-accent italic text-7xl md:text-8xl text-white/20 leading-none select-none mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease }}
        >
          ❝
        </motion.span>

        <motion.p
          className="font-display text-xl md:text-2xl lg:text-[2rem] font-bold text-white leading-snug max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease }}
        >
          {chairman.pullQuote}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.35, ease }}
        >
          <div className="w-10 h-px bg-white/30 mx-auto mt-8 mb-5" />
          <p className="font-body text-sm font-semibold text-white/80">{chairman.name}</p>
          <p className="font-body text-xs text-white/50 tracking-[0.15em] mt-1">{chairman.designation}</p>
        </motion.div>
      </div>
    </section>
  )
}
