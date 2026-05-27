'use client'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function IntroStatement() {
  const { ref, inView } = useReveal(0.15)

  return (
    <section className="bg-bg py-20 lg:py-28 overflow-hidden">
      <div
        ref={ref}
        className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
      >
        {/* ── Left column ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-body text-[11px] font-bold tracking-[0.22em] uppercase text-primary mb-4">
            Alliance International School
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight mb-8">
            Our Educators are{' '}
            <span className="font-accent italic text-primary-light">
              self-evolving,
            </span>{' '}
            enthusiastic individuals.
          </h2>

          {/* Body with left border accent */}
          <div className="border-l-2 border-primary-dark pl-6 space-y-4">
            <p className="font-body text-base leading-relaxed text-text-muted">
              Since teaching methods are evolving constantly, regular trainings,
              re-trainings and workshops are held with expert faculty to hone their
              teaching skills and orient them to new teaching methodologies.
            </p>
            <p className="font-body text-base leading-relaxed text-text-muted">
              These efforts bring out hidden qualities that are latest while also
              providing ample opportunity to learn from and absorb trends that are at
              par with global standards of teaching.
            </p>
          </div>
        </motion.div>

        {/* ── Right column ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="lg:pt-[5.5rem]"
        >
          <div className="space-y-4">
            <p className="font-body text-base leading-relaxed text-text-muted">
              Students are changing and so is the psychology of the parents.
              Teachers must know the best techniques — how efficiently and effectively
              they can handle classroom management, crisis management, resource and
              material management, lesson planning, and curriculum development.
            </p>
            <p className="font-body text-base leading-relaxed text-text-muted">
              Use of technology in the classroom is now essential. Workshops are
              absolutely necessary in the changing socio-economic-political scenario
              as these have a direct impact on the education sector.
            </p>
          </div>

          {/* Decorative pull stat */}
          <div className="mt-10 pt-8 border-t border-border">
            <p className="font-accent italic text-xl text-primary leading-snug">
              &ldquo;Every educator at AIS is a lifelong learner — committed to
              growing alongside their students.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
