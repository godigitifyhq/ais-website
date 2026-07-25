'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, FileText, GraduationCap, ClipboardList, ArrowRight } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

const quickLinks = [
  { label: 'Class 10 Sample Papers', href: '/resources#sample-papers', icon: FileText       },
  { label: 'NCERT Solutions',        href: '/resources#solutions',      icon: BookOpen       },
  { label: 'CBSE Syllabus',          href: '/resources#syllabus',       icon: ClipboardList  },
  { label: 'Class 12 Prep',          href: '/resources',                icon: GraduationCap  },
]

const subjectIcons = [
  { subject: 'Maths',   color: 'text-primary',            bg: 'bg-primary/10'       },
  { subject: 'Science', color: 'text-[#2D7D46]',          bg: 'bg-[#2D7D46]/10'     },
  { subject: 'English', color: 'text-primary-light',      bg: 'bg-primary-light/10' },
  { subject: 'Social',  color: 'text-[#6B6259]',          bg: 'bg-[#6B6259]/10'     },
]

export function CBSECornerHook() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-surface-alt py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16 items-center">

          {/* Left: text + quick links */}
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease }}
              className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary-light mb-3"
            >
              FOR PARENTS & STUDENTS
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08, ease }}
              className="font-display text-2xl md:text-4xl font-bold text-text leading-tight mb-4"
            >
              Your CBSE{' '}
              <span className="font-accent italic text-primary">Academic Companion</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15, ease }}
              className="font-body text-sm text-text-muted leading-relaxed mb-8 max-w-lg"
            >
              Sample papers, NCERT solutions, syllabus — everything your child needs, completely free.
            </motion.p>

            {/* Quick-link pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.22, ease }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {quickLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="inline-flex items-center gap-1.5 bg-surface border border-border rounded-full px-4 py-2 text-sm font-body font-medium text-text hover:bg-primary hover:text-white hover:border-primary transition-all duration-200"
                >
                  <Icon size={13} />
                  {label}
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.3, ease }}
            >
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 bg-primary text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-primary-dark transition-colors duration-200 group"
              >
                Explore All Resources
                <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Right: subject icon grid */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {subjectIcons.map(({ subject, color, bg }) => (
              <Link
                key={subject}
                href="/resources"
                className="flex flex-col items-center gap-2 bg-surface rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 group"
              >
                <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center`}>
                  <BookOpen size={22} className={color} />
                </div>
                <span className="font-body text-sm font-semibold text-text group-hover:text-primary transition-colors">
                  {subject}
                </span>
              </Link>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
