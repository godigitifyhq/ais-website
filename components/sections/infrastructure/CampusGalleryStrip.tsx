'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { galleryPhotos } from '@/data/infrastructure'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function CampusGalleryStrip() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-bg py-20 lg:py-28 overflow-hidden relative">
      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute -top-4 left-1/2 -translate-x-1/2 font-display font-black uppercase text-text/4 leading-none select-none pointer-events-none text-[5rem] sm:text-[7rem] lg:text-[10rem] whitespace-nowrap"
      >
        GALLERY
      </span>

      {/* Heading — centered */}
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease }}
          className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3"
        >
          Our Campus
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight"
        >
          Campus in{' '}
          <span className="font-accent italic text-primary">Pictures</span>
        </motion.h2>
      </div>

      {/* Scroll strip — single fade-in, no per-card animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        role="region"
        aria-label="Campus photo gallery"
        className="flex overflow-x-auto gap-4 px-4 sm:px-6 lg:px-8 pb-4 snap-x snap-mandatory scrollbar-none"
      >
        {galleryPhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative flex-shrink-0 w-[75vw] sm:w-[340px] snap-start rounded-xl overflow-hidden"
            style={{ aspectRatio: '3 / 2' }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 75vw, 340px"
            />
            {/* Caption — appears on hover */}
            {photo.caption && (
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-text/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4">
                <span className="font-body text-sm font-semibold text-white">
                  {photo.caption}
                </span>
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
