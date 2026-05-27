'use client'
import { motion } from 'framer-motion'
import { teacherProfiles } from '@/data/educators'
import { TeacherCard } from './TeacherCard'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function ManagementCarousel() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-bg py-20 lg:py-28 overflow-hidden">
      {/* ── Section heading ── */}
      <div ref={ref} className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Ghost label */}
        <span
          aria-hidden="true"
          className="absolute -top-6 -left-2 font-display font-black uppercase leading-none select-none pointer-events-none whitespace-nowrap text-text/[0.04] text-[4rem] sm:text-[6rem] lg:text-[8rem]"
        >
          FACULTY
        </span>

        <div className="relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease }}
            className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3"
          >
            The People Behind the Promise
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight"
          >
            Meet Our{' '}
            <span className="font-accent italic text-primary">Educators</span>
          </motion.h2>
        </div>
      </div>

      {/* ── Cards ──
          Mobile  : flex, horizontal snap-scroll, each card 75vw
          Tablet  : 2-col grid
          Desktop : 4-col grid                                    */}
      <div className="max-w-screen-xl mx-auto">
        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none gap-4 px-4 sm:px-6 pb-4 md:grid md:grid-cols-2 md:overflow-visible md:snap-none lg:grid-cols-4 lg:px-8 lg:gap-6">
          {teacherProfiles.map((teacher, i) => (
            <div
              key={teacher.id}
              className="flex-shrink-0 w-[75vw] snap-start md:w-auto"
            >
              <TeacherCard teacher={teacher} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
