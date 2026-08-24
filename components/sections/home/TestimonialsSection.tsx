'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, type PanInfo } from 'framer-motion'
import { Star, Volume2, VolumeX, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import { videoTestimonials, type VideoTestimonial } from '@/data/home'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const
const SWIPE_THRESHOLD = 60

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={12}
          className={i < rating ? 'text-primary-light fill-primary-light' : 'text-border'}
        />
      ))}
    </div>
  )
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = () => setReduced(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches)
    const handler = () => setIsDesktop(mq.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isDesktop
}

// ─── Reel card ─────────────────────────────────────────────────────────────

interface ReelCardProps {
  testimonial:  VideoTestimonial
  isActive:     boolean
  muted:        boolean
  onToggleMute: () => void
  onEnded:      () => void
  onSelect?:    () => void
}

function ReelCard({ testimonial, isActive, muted, onToggleMute, onEnded, onSelect }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (isActive) {
      el.currentTime = 0
      el.play().catch(() => {})
    } else {
      el.pause()
    }
  }, [isActive])

  useEffect(() => {
    const el = videoRef.current
    if (el) el.muted = muted
  }, [muted])

  return (
    <div
      onClick={!isActive ? onSelect : undefined}
      className={[
        'relative w-full h-full overflow-hidden bg-text shadow-lg rounded-[28px] rounded-t-[56px]',
        !isActive && onSelect ? 'cursor-pointer' : '',
      ].join(' ')}
    >
      <video
        ref={videoRef}
        src={testimonial.video}
        poster={testimonial.poster}
        playsInline
        muted
        preload="metadata"
        onEnded={isActive ? onEnded : undefined}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-black/10 pointer-events-none" />

      {isActive ? (
        <button
          onClick={(e) => { e.stopPropagation(); onToggleMute() }}
          aria-label={muted ? 'Unmute testimonial' : 'Mute testimonial'}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-transform active:scale-90"
        >
          {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-white/90 flex items-center justify-center">
            <Play size={18} className="text-primary ml-0.5" fill="currentColor" />
          </div>
        </div>
      )}

      <div className="absolute bottom-0 inset-x-0 p-4 md:p-5">
        <StarRating rating={testimonial.rating} />
        <p className="font-body text-sm font-semibold text-white mt-1.5">{testimonial.parentName}</p>
        <p className="font-body text-xs text-white/75">{testimonial.childClass}</p>
      </div>
    </div>
  )
}

// ─── Section ────────────────────────────────────────────────────────────────

export function TestimonialsSection() {
  const { ref, inView } = useReveal(0.1)
  const isDesktop = useIsDesktop()
  const reduceMotion = usePrefersReducedMotion()

  const total = videoTestimonials.length
  const [active, setActive] = useState(0)
  const [muted, setMuted] = useState(true)
  const [direction, setDirection] = useState<1 | -1>(1)

  const goTo = useCallback((index: number, dir: 1 | -1) => {
    setDirection(dir)
    setActive(((index % total) + total) % total)
  }, [total])

  const goNext = useCallback(() => goTo(active + 1, 1), [active, goTo])
  const goPrev = useCallback(() => goTo(active - 1, -1), [active, goTo])
  const handleSelect = (index: number) => goTo(index, index > active ? 1 : -1)

  const activeTestimonial = videoTestimonials[active]

  const variants = {
    enter: (dir: number) => ({
      x: reduceMotion ? 0 : dir > 0 ? '60%' : '-60%',
      y: reduceMotion ? 0 : 56,
      opacity: 0,
      scale: 0.94,
    }),
    center: { x: 0, y: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({
      x: reduceMotion ? 0 : dir > 0 ? '-60%' : '60%',
      y: reduceMotion ? 0 : -32,
      opacity: 0,
      scale: 0.94,
    }),
  }

  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-primary-light mb-3"
          >
            WHAT PARENTS SAY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease }}
            className="font-display text-2xl md:text-4xl font-bold text-text"
          >
            Voices From Our{' '}
            <span className="font-accent italic text-primary">Community</span>
          </motion.h2>
        </div>

        {/* ── Mobile: single reel, swipeable ── */}
        {!isDesktop && (
          <div className="max-w-[380px] mx-auto">
            <div className="relative aspect-[9/16]">
              <AnimatePresence custom={direction} mode="popLayout" initial={false}>
                <motion.div
                  key={activeTestimonial.id}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x:       { type: 'spring', stiffness: 320, damping: 32 },
                    y:       { duration: 0.45, ease },
                    opacity: { duration: 0.3 },
                    scale:   { duration: 0.4, ease },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={(_, info: PanInfo) => {
                    if (info.offset.x < -SWIPE_THRESHOLD) goNext()
                    else if (info.offset.x > SWIPE_THRESHOLD) goPrev()
                  }}
                  className="absolute inset-0"
                >
                  <ReelCard
                    testimonial={activeTestimonial}
                    isActive
                    muted={muted}
                    onToggleMute={() => setMuted((m) => !m)}
                    onEnded={goNext}
                  />
                </motion.div>
              </AnimatePresence>

              <button
                aria-label="Previous testimonial"
                onClick={goPrev}
                className="absolute left-0 top-0 bottom-16 w-10 z-10"
              />
              <button
                aria-label="Next testimonial"
                onClick={goNext}
                className="absolute right-0 top-0 bottom-16 w-10 z-10"
              />
            </div>

            <div className="flex justify-center gap-1.5 mt-5">
              {videoTestimonials.map((t, i) => (
                <button
                  key={t.id}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => handleSelect(i)}
                  className={[
                    'h-1.5 rounded-full transition-all duration-300',
                    i === active ? 'w-6 bg-primary' : 'w-1.5 bg-border',
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
        )}

        {/* ── Desktop / tablet: 3 at a time ── */}
        {isDesktop && (
          <div className="flex items-center gap-4">
            <button
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="shrink-0 w-11 h-11 rounded-full bg-surface shadow-sm flex items-center justify-center text-text hover:text-primary transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex-1 grid grid-cols-3 gap-6">
              {[0, 1, 2].map((slot) => {
                const index = (active + slot) % total
                const t = videoTestimonials[index]
                return (
                  <div key={t.id} className="relative aspect-[3/4] max-h-[480px]">
                    <ReelCard
                      testimonial={t}
                      isActive={slot === 0}
                      muted={muted}
                      onToggleMute={() => setMuted((m) => !m)}
                      onEnded={goNext}
                      onSelect={() => handleSelect(index)}
                    />
                  </div>
                )
              })}
            </div>

            <button
              onClick={goNext}
              aria-label="Next testimonial"
              className="shrink-0 w-11 h-11 rounded-full bg-surface shadow-sm flex items-center justify-center text-text hover:text-primary transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

      </div>
    </section>
  )
}