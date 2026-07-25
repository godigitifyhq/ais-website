'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { atmosphereImages } from '@/data/home'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function AtmosphereReel() {
  const { ref, inView } = useReveal(0.1)

  // Build bento grid: [large 2×2, normal, normal, wide 2×1]
  const [large, ...rest] = atmosphereImages

  return (
    <section className="bg-surface-alt py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary-light mb-3"
          >
            A GLIMPSE INTO AIS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="font-display text-2xl md:text-4xl font-bold text-text leading-tight"
          >
            Where Learning{' '}
            <span className="font-accent italic text-primary">Feels Like Living</span>
          </motion.h2>
        </div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px] md:auto-rows-[220px]"
        >
          {/* Large feature cell */}
          <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
            <Image
              src={large.src}
              alt={large.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Remaining cells */}
          {rest.map((img, i) => (
            <div
              key={i}
              className={[
                'relative rounded-2xl overflow-hidden group',
                img.colSpan === 2 ? 'col-span-2' : 'col-span-1',
                img.rowSpan === 2 ? 'row-span-2' : 'row-span-1',
              ].join(' ')}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="flex justify-end mt-5">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary hover:text-primary-dark transition-colors group"
          >
            Explore Gallery
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
