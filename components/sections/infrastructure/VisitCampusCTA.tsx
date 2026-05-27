'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function VisitCampusCTA() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-primary py-24 lg:py-32 overflow-hidden relative">
      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display font-black uppercase text-white/[0.06] leading-none select-none pointer-events-none text-[8rem] sm:text-[11rem] lg:text-[15rem] whitespace-nowrap"
      >
        VISIT
      </span>

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease }}
          className="font-body text-[11px] font-bold tracking-[0.28em] uppercase text-white/60 mb-4"
        >
          Come See For Yourself
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
        >
          Schedule a Campus{' '}
          <span className="font-accent italic text-primary-light">Visit</span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="font-body text-base text-white/80 leading-relaxed mb-10"
        >
          The best way to experience AIS is in person. We welcome families to tour
          our campus any working day.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary — outlined white */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-white text-white rounded-full px-8 py-3.5 font-body text-sm font-semibold tracking-wide hover:bg-white hover:text-primary transition-all duration-200 group"
          >
            Book a Visit
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          {/* Secondary — phone */}
          <a
            href="tel:+919464311111"
            className="font-body text-sm font-semibold text-primary-light underline underline-offset-4 hover:text-white transition-colors duration-200"
          >
            Call us: +91-94643-11111
          </a>
        </motion.div>
      </div>
    </section>
  )
}
