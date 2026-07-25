'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, FileText } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import { SplitHeading } from '@/components/ui/SplitHeading'

const ease = [0.33, 1, 0.68, 1] as const

export function ResourcesHero() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-surface-alt py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center">

          {/* Left — text */}
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease }}
              className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary-light mb-3"
            >
              FOR STUDENTS & PARENTS
            </motion.p>

            {/* Heading — word-split reveal with accent word */}
            <h1 className="font-display text-3xl md:text-5xl font-bold text-text leading-tight mb-4">
              <SplitHeading
                text="Your Academic"
                tag="span"
                delay={0.08}
                stagger={0.07}
                duration={0.55}
                className="inline"
              />
              {' '}
              <span className="font-accent italic text-primary">
                <SplitHeading
                  text="Companion"
                  tag="span"
                  delay={0.26}
                  stagger={0.06}
                  duration={0.55}
                  className="inline"
                />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15, ease }}
              className="font-body text-sm md:text-base text-text-muted leading-relaxed mb-8 max-w-lg"
            >
              Free CBSE resources, NCERT solutions, sample papers — all in one place, for every class from Nursery to Class 12.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.22, ease }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#class-selector"
                className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-primary-dark transition-colors duration-200 group"
              >
                <BookOpen size={15} />
                Browse by Class
                <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#sample-papers"
                className="inline-flex items-center gap-2 border border-primary text-primary rounded-full px-6 py-3 text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-200"
              >
                <FileText size={15} />
                Sample Papers
              </a>
            </motion.div>

            {/* Cross-link to CBSE Corner (different page — school compliance docs) */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.32, ease }}
              className="mt-5 font-body text-xs text-text-muted"
            >
              Looking for school compliance docs, affiliation letters, or the academic calendar?{' '}
              <Link
                href="/cbse-corner"
                className="text-primary font-semibold hover:underline underline-offset-2"
              >
                Visit the CBSE Corner →
              </Link>
            </motion.p>
          </div>

          {/* Right — decorative stat strip */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2, ease }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {[
              { value: '12+',   label: 'Classes Covered',    color: 'text-primary'       },
              { value: 'Free',  label: 'All Resources',      color: 'text-[#2D7D46]'     },
              { value: '8+',    label: 'Subjects Available', color: 'text-primary-light' },
              { value: 'CBSE',  label: 'Aligned Syllabus',   color: 'text-text'          },
            ].map(stat => (
              <div
                key={stat.label}
                className="bg-surface rounded-md p-5 flex flex-col gap-1 shadow-sm"
              >
                <span className={`font-display text-3xl font-black ${stat.color}`}>
                  {stat.value}
                </span>
                <span className="font-body text-xs text-text-muted">{stat.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
