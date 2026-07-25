'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { lifePillars, type LifePillar } from '@/data/lifeAtAlliance'

const ease = [0.33, 1, 0.68, 1] as const

function PillarCard({ pillar, index }: { pillar: LifePillar; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      whileHover={{ y: -4 }}
      className="relative rounded-2xl overflow-hidden aspect-[4/3] group cursor-default"
    >
      {/* Background image */}
      {pillar.image ? (
        <Image
          src={pillar.image}
          alt={pillar.heading}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 bg-primary" />
      )}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

      {/* Text — bottom anchored */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-display text-xl font-bold text-white leading-tight">
          {pillar.heading}
        </p>
        {pillar.oneliner && (
          <p className="font-body text-xs text-white/75 italic mt-1">
            {pillar.oneliner}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export function PillarsOfLifeGrid() {
  const { ref, inView } = useReveal(0.1)
  const row1 = lifePillars.slice(0, 3)
  const row2 = lifePillars.slice(3)

  return (
    <section className="py-16 md:py-24" style={{ background: 'var(--color-text)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div ref={ref} className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body font-bold uppercase mb-4"
            style={{ fontSize: '0.7rem', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.5)' }}
          >
            What Sets Us Apart
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="font-display font-bold text-3xl sm:text-4xl"
            style={{ color: 'var(--color-text-inverse)' }}
          >
            The Five Pillars{' '}
            <span className="font-accent italic" style={{ color: 'var(--color-primary-light)' }}>
              of Life at AIS
            </span>
          </motion.h2>
        </div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {row1.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="flex flex-col sm:flex-row lg:justify-center gap-4">
          {row2.map((pillar, i) => (
            <div key={pillar.id} className="w-full sm:flex-1 lg:flex-none lg:w-[calc(33.333%-0.833rem)]">
              <PillarCard pillar={pillar} index={row1.length + i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
