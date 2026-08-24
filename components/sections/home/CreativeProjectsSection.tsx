'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { creativeProjectCards } from '@/data/lifeAtAlliance'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function CreativeProjectsSection() {
  const { ref, inView } = useReveal(0.12)

  return (
    <section className="bg-surface-alt py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-3"
          >
            Creativity in Action
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08, ease }}
            className="font-display text-3xl md:text-5xl font-bold text-text leading-tight"
          >
            Learn by making, creating, and <span className="font-accent italic text-primary">exploring</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {creativeProjectCards.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease }}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_12px_30px_rgba(26,26,26,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(192,39,45,0.1)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-text/80 via-text/15 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-2.5 py-1 text-[10px] font-bold tracking-[0.18em] uppercase text-white backdrop-blur-sm">
                  {project.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="font-display text-2xl font-bold text-text leading-tight">
                  {project.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-text-muted">
                  {project.summary}
                </p>

                <div className="mt-auto pt-5">
                  <span className="inline-flex items-center gap-2 font-body text-[11px] font-bold tracking-[0.18em] uppercase text-primary">
                    Hands-on learning
                    <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
