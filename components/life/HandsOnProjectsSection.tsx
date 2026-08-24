'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { creativeProjectCards } from '@/data/lifeAtAlliance'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function HandsOnProjectsSection() {
  const { ref, inView } = useReveal(0.12)

  return (
    <section className="relative overflow-hidden bg-bg py-16 md:py-24">
      <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(circle at top left, rgba(232,98,42,0.07), transparent 28%), radial-gradient(circle at bottom right, rgba(192,39,45,0.07), transparent 30%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-12 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body text-[11px] font-bold tracking-[0.18em] uppercase"
            style={{ color: 'var(--color-primary)' }}
          >
            Learning through creation
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease }}
            className="mt-3 font-display font-bold leading-tight"
            style={{
              fontSize: 'clamp(2.2rem, 4vw, 4rem)',
              color: 'var(--color-text)',
            }}
          >
            Creativity that grows from <span className="font-accent italic" style={{ color: 'var(--color-primary-dark)' }}>real projects</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {creativeProjectCards.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_12px_30px_rgba(26,26,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(192,39,45,0.1)]"
            >
              <div className="relative aspect-[4/4.3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-text/80 via-text/10 to-transparent" />
                <span
                  className="absolute left-4 top-4 rounded-full px-2.5 py-1 font-body text-[10px] font-bold tracking-[0.18em] uppercase text-white"
                  style={{ background: 'rgba(192,39,45,0.8)' }}
                >
                  {project.badge}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display text-[1.65rem] font-bold leading-tight text-text">
                  {project.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-text-muted">
                  {project.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
