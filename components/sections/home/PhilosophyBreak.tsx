'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import { philosophyBreak } from '@/data/home'

export function PhilosophyBreak() {
  const { ref, inView } = useReveal<HTMLDivElement>(0.2)

  return (
    <section className="bg-[#1A1A1A] py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
        >
          {/* Eyebrow */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 16 },
              show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
            }}
            className="font-body text-[10px] font-bold tracking-[0.22em] uppercase text-primary-light mb-6"
          >
            {philosophyBreak.preLabel}
          </motion.p>

          {/* Quote */}
          <motion.blockquote
            variants={{
              hidden: { opacity: 0, y: 24 },
              show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.33, 1, 0.68, 1] as const } },
            }}
            className="font-display text-[2rem] sm:text-[2.75rem] lg:text-[3.5rem] font-bold text-white leading-[1.15] mb-8"
          >
            <span
              aria-hidden="true"
              className="block font-display text-[5rem] leading-[0.6] text-primary-light/30 mb-2 select-none"
            >
              &ldquo;
            </span>
            {philosophyBreak.quote}
          </motion.blockquote>

          {/* Rule */}
          <motion.div
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              show:   { scaleX: 1, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
            }}
            style={{ transformOrigin: 'left center' }}
            className="w-16 h-px bg-primary-light my-6"
          />

          {/* Attribution */}
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              show:   { opacity: 1, transition: { duration: 0.5 } },
            }}
            className="font-accent italic text-sm text-white/50 mb-8"
          >
            {philosophyBreak.attribution}
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -8 },
              show:   { opacity: 1, x: 0, transition: { duration: 0.4 } },
            }}
          >
            <Link
              href={philosophyBreak.ctaHref}
              className="inline-flex items-center gap-2 font-body text-[11px] font-bold tracking-[0.22em] uppercase text-white/60 hover:text-white transition-colors duration-200 group"
            >
              {philosophyBreak.ctaLabel}
              <ArrowRight
                size={12}
                className="transition-transform duration-200 group-hover:translate-x-1.5"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
