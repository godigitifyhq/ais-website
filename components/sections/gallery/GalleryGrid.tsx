'use client'
import { useState, useMemo } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { galleryImages, galleryFilters, type GalleryImage } from '@/data/gallery'
import { GalleryLightbox } from './GalleryLightbox'

export function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered: GalleryImage[] = useMemo(() => {
    if (activeFilter === 'all') return galleryImages
    return galleryImages.filter(img => img.category === activeFilter)
  }, [activeFilter])

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => setLightboxIndex(i => (i !== null && i > 0 ? i - 1 : i))
  const nextImage = () => setLightboxIndex(i => (i !== null && i < filtered.length - 1 ? i + 1 : i))

  return (
    <section className="bg-bg py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter tabs */}
        <div className="-mx-4 px-4 overflow-x-auto flex gap-2 mb-10 pb-2 scrollbar-none">
          <div className="flex gap-2 min-w-max">
            {galleryFilters.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveFilter(key)}
                className={[
                  'px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 whitespace-nowrap',
                  activeFilter === key
                    ? 'bg-primary text-white'
                    : 'bg-surface border border-border text-text-muted hover:border-primary hover:text-primary',
                ].join(' ')}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="columns-2 md:columns-3 lg:columns-4 gap-3"
        >
          {filtered.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.4) }}
              className="break-inside-avoid mb-3 group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={
                  image.aspectRatio === 'portrait'   ? 800  :
                  image.aspectRatio === 'square'     ? 600  : 450
                }
                className="w-full h-auto object-cover transition-transform duration-400 group-hover:scale-[1.04]"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Category pill */}
              <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="font-body text-[10px] font-bold tracking-wider uppercase bg-primary-light text-white px-2 py-0.5 rounded-full">
                  {image.category.replace('-', ' ')}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-text-muted font-body text-sm">
            No photos in this category yet.
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
