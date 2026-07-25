'use client'
import { motion } from 'framer-motion'
import { classGroups } from '@/data/resources'
import { useReveal } from '@/hooks/useReveal'

interface Props {
  selected: string
  onChange: (cls: string) => void
}

const ease = [0.33, 1, 0.68, 1] as const

export function CBSEClassSelector({ selected, onChange }: Props) {
  const { ref, inView } = useReveal(0.1)

  return (
    <section id="class-selector" className="bg-bg py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary-light mb-3"
          >
            SELECT A CLASS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="font-display text-2xl md:text-4xl font-bold text-text"
          >
            Find Resources For{' '}
            <span className="font-accent italic text-primary">Your Child</span>
          </motion.h2>
        </div>

        {/* Class groups */}
        <div className="space-y-8">
          {classGroups.map((group, gi) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: gi * 0.08, ease }}
            >
              <p className="font-body text-xs font-bold tracking-[0.15em] uppercase text-text-muted mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.classes.map(cls => {
                  const active = selected === cls
                  return (
                    <button
                      key={cls}
                      type="button"
                      onClick={() => onChange(cls)}
                      className={[
                        'px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-150',
                        active
                          ? 'bg-primary text-white shadow-sm'
                          : 'bg-surface border border-border text-text hover:border-primary hover:text-primary',
                      ].join(' ')}
                    >
                      {cls}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
