'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { galleryPhotos } from '@/data/infrastructure'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function CampusGalleryStrip() {
  const { ref, inView } = useReveal(0.1)

  const [large, ...rest] = galleryPhotos.slice(0, 5)

  return (
    <section className="bg-surface-alt py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className="mb-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary mb-3"
          >
            EXPLORE OUR CAMPUS
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="font-display text-2xl md:text-4xl font-bold text-text"
          >
            Campus in{' '}
            <span className="font-accent italic text-primary">Pictures</span>
          </motion.h2>
        </div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.18, ease }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[200px]"
        >
          {/* Large feature — spans 2×2 */}
          {large && (
            <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
              <Image
                src={large.src}
                alt={large.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {large.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/65 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="font-body text-sm font-semibold text-white">{large.caption}</span>
                </div>
              )}
            </div>
          )}

          {/* Remaining cells */}
          {rest.map((photo) => (
            <div
              key={photo.id}
              className="relative rounded-xl overflow-hidden group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {photo.caption && (
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/65 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="font-body text-xs font-semibold text-white">{photo.caption}</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="flex justify-end mt-5">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-primary hover:text-primary-dark transition-colors group"
          >
            Full Gallery
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
