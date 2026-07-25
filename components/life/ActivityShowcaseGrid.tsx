'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { activityShowcaseItems, secondaryActivities } from '@/data/lifeAtAlliance'

const ease = [0.33, 1, 0.68, 1] as const

export function ActivityShowcaseGrid() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary-light mb-3"
          >
            WHAT STUDENTS DO HERE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="font-display text-2xl md:text-4xl font-bold text-text"
          >
            Beyond the{' '}
            <span className="font-accent italic text-primary">Bell</span>
          </motion.h2>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {activityShowcaseItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease }}
              className="relative aspect-4/3 rounded-xl overflow-hidden group"
            >
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Default bottom label */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />
              <p className="absolute bottom-0 left-0 right-0 p-3 font-display text-base font-bold text-white">
                {item.label}
              </p>

              {/* Hover overlay with description */}
              <div className="absolute inset-0 bg-primary/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="font-body text-sm text-white text-center leading-snug">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary activities pills */}
        <div className="mt-10">
          <p className="font-accent italic text-base text-text-muted mb-4">And much more...</p>
          <div className="flex flex-wrap gap-2">
            {secondaryActivities.map(activity => (
              <span
                key={activity}
                className="bg-surface-alt rounded-full px-3 py-1 font-body text-sm text-text-muted"
              >
                {activity}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
