'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { teachingActionImages } from '@/data/educators'

const ease = [0.33, 1, 0.68, 1] as const

export function TeachingInActionGrid() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-surface-alt py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary-light mb-3"
          >
            AIS EDUCATORS IN ACTION
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="font-display text-2xl md:text-4xl font-bold text-text leading-tight"
          >
            Where Knowledge Meets{' '}
            <span className="font-accent italic text-primary">Practice</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15, ease }}
            className="font-accent italic text-base text-text-muted mt-2"
          >
            Every lesson is an experience.
          </motion.p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {teachingActionImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              className="group relative aspect-4/3 rounded-xl overflow-hidden"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              {/* Label overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/65 to-transparent p-3">
                <span className="font-body text-xs font-semibold text-white/90">
                  {img.activityLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
