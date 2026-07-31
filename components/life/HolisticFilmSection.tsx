'use client'
import { motion } from 'framer-motion'
import { VideoFeature } from '@/components/ui/VideoFeature'
import { campusTourFilm } from '@/data/videos'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

/**
 * The whole-child claim, shown rather than stated — the campus film moves
 * through classrooms, labs, courts, and the auditorium stage in one pass.
 */
export function HolisticFilmSection() {
  const { ref, inView } = useReveal(0.12)

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: 'var(--color-surface-alt)' }}
    >
      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 font-accent italic font-black uppercase whitespace-nowrap leading-none select-none pointer-events-none text-text/4"
        style={{ fontSize: 'clamp(5rem, 16vw, 13rem)', lineHeight: 1 }}
      >
        HOLISTIC
      </span>

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, ease }}
          className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-3"
        >
          The Whole Child
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08, ease }}
          className="font-display text-2xl md:text-4xl font-bold text-text leading-tight mb-10 max-w-2xl"
        >
          A day here is never{' '}
          <span className="font-accent italic text-primary">one thing.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18, ease }}
        >
          <VideoFeature
            film={campusTourFilm}
            showCaption
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </motion.div>
      </div>
    </section>
  )
}
