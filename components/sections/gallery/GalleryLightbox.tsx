'use client'
import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import type { GalleryImage } from '@/data/gallery'

interface Props {
  images:  GalleryImage[]
  index:   number
  onClose: () => void
  onPrev:  () => void
  onNext:  () => void
}

export function GalleryLightbox({ images, index, onClose, onPrev, onNext }: Props) {
  const image = images[index]

  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft')  onPrev()
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'Escape')     onClose()
  }, [onPrev, onNext, onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  // Swipe support
  let touchStartX = 0
  const onTouchStart = (e: React.TouchEvent) => { touchStartX = e.touches[0].clientX }
  const onTouchEnd   = (e: React.TouchEvent) => {
    const delta = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(delta) > 50) { delta > 0 ? onNext() : onPrev() }
  }

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center"
        onClick={onClose}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
        >
          <X size={18} className="text-white" />
        </button>

        {/* Prev */}
        {index > 0 && (
          <button
            onClick={e => { e.stopPropagation(); onPrev() }}
            aria-label="Previous image"
            className="absolute left-3 md:left-6 z-10 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={22} className="text-white" />
          </button>
        )}

        {/* Next */}
        {index < images.length - 1 && (
          <button
            onClick={e => { e.stopPropagation(); onNext() }}
            aria-label="Next image"
            className="absolute right-3 md:right-6 z-10 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
          >
            <ChevronRight size={22} className="text-white" />
          </button>
        )}

        {/* Image */}
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="relative max-h-[85vh] max-w-[90vw] md:max-w-[80vw]"
          onClick={e => e.stopPropagation()}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={1200}
            height={800}
            className="object-contain max-h-[80vh] w-auto rounded-lg"
            sizes="(max-width: 768px) 90vw, 80vw"
          />
          {/* Caption */}
          <p className="text-center font-body text-xs text-white/60 mt-3 italic">
            {image.alt}
          </p>
          {/* Counter */}
          <p className="text-center font-body text-xs text-white/40 mt-1">
            {index + 1} / {images.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
