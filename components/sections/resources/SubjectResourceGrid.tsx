'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  BookOpen, Calculator, Leaf, FlaskConical, Globe,
  Zap, TestTube, BookMarked,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { classResources, resourceTypeStyles } from '@/data/resources'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

const iconMap: Record<string, LucideIcon> = {
  BookOpen, Calculator, Leaf, FlaskConical, Globe,
  Zap, TestTube, BookMarked,
}

interface Props {
  selectedClass: string
  searchQuery:   string
}

export function SubjectResourceGrid({ selectedClass, searchQuery }: Props) {
  const { ref, inView } = useReveal(0.05)

  const classData = classResources.find(c => c.classLabel === selectedClass)

  if (!classData) {
    return (
      <section className="bg-surface-alt py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-body text-text-muted">Select a class above to see resources.</p>
        </div>
      </section>
    )
  }

  const filtered = searchQuery.trim()
    ? classData.subjects.filter(s =>
        s.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.links.some(l => l.label.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : classData.subjects

  return (
    <section id="sample-papers" className="bg-surface-alt py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Class label */}
        <div ref={ref} className="mb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary-light mb-2"
          >
            RESOURCES FOR
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.06, ease }}
            className="font-display text-2xl md:text-3xl font-bold text-text"
          >
            {classData.classLabel}
          </motion.h2>
        </div>

        {filtered.length === 0 ? (
          <p className="font-body text-text-muted text-sm">No results for &ldquo;{searchQuery}&rdquo;.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((subject, i) => {
              const Icon = iconMap[subject.icon] ?? BookOpen
              return (
                <motion.div
                  key={subject.subject}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.07, ease }}
                  whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(192,39,45,0.10)' }}
                  className="bg-surface rounded-lg shadow-sm p-6 flex flex-col gap-4"
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>

                  {/* Subject name */}
                  <h3 className="font-display text-lg font-bold text-text">{subject.subject}</h3>

                  {/* Resource links */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {subject.links.map(link => {
                      const style = resourceTypeStyles[link.type]
                      return (
                        <Link
                          key={link.type}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-1 ${style.bg} ${style.text} rounded-full px-3 py-1 font-body text-xs font-semibold hover:opacity-80 transition-opacity`}
                        >
                          {link.label} ↗
                        </Link>
                      )
                    })}
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
