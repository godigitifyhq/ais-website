'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { heroContent } from '@/data/home'
import { heroLoop, campusTourFilm } from '@/data/videos'
import { HeroAdmissionForm } from './HeroAdmissionForm'
import { SplitHeading }     from '@/components/ui/SplitHeading'
import { LoopingKeyword }  from '@/components/ui/LoopingKeyword'
import { BackgroundVideo } from '@/components/ui/BackgroundVideo'

const ease = [0.33, 1, 0.68, 1] as const

/**
 * The hero runs on a silent campus film. The 16s loop paints immediately, then
 * the full 2:47 campus tour crossfades in once it has buffered — see
 * BackgroundVideo. Flip this to false to fall straight back to the four-banner
 * carousel below, which is kept intact and working.
 */
const USE_VIDEO_HERO = true

const formVariant = {
  hidden: { opacity: 0, x: 30 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.5, ease } },
}

// ─── Banner carousel (retained — unused while USE_VIDEO_HERO is true) ─────────
const banners = [
  { src: heroContent.image,           alt: heroContent.imageAlt },
  { src: '/images/home/banner-2.png', alt: 'Alliance International School campus' },
  { src: '/images/home/banner-3.png', alt: 'Alliance International School students' },
  { src: '/images/home/banner-4.png', alt: 'Alliance International School life' },
]

const SLIDE_INTERVAL = 5000

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (USE_VIDEO_HERO) return
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % banners.length)
    }, SLIDE_INTERVAL)
    return () => clearInterval(timer)
  }, [])

  // With the video running there is no slide to rotate past, so the headline
  // and enquiry form stay on screen permanently.
  const showContent = USE_VIDEO_HERO || current === 0

  return (
    <>
      <section className="relative min-h-[85svh] flex items-center overflow-hidden">

        {/* Background — video loop, or the banner carousel when disabled */}
        {USE_VIDEO_HERO ? (
          <div className="absolute inset-0 bg-text">
            <BackgroundVideo
              loop={heroLoop}
              film={campusTourFilm}
              objectPosition="center 35%"
              priority
            />
          </div>
        ) : (
          <AnimatePresence mode="sync">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <Image
                src={banners[current].src}
                alt={banners[current].alt}
                fill
                priority={current === 0}
                className="object-cover object-[center_10%]"
                sizes="90vw"
              />
            </motion.div>
          </AnimatePresence>
        )}

        {/* Gradient overlay + content */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              key="slide0-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 z-10"
            >
              {/* Gradient — the moving footage needs a touch more cover than a still */}
              <div className="absolute inset-0 bg-gradient-to-r from-text/75 via-text/45 to-transparent" />
              {USE_VIDEO_HERO && (
                <div aria-hidden="true" className="absolute inset-0 bg-text/25 pointer-events-none" />
              )}

              {/* Text + form */}
              <div className="relative z-10 w-full h-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center py-24 lg:py-28 w-full">

                  {/* Text column */}
                  <div className="max-w-xl">
                    <motion.p
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, ease }}
                      className="font-body text-xs font-bold tracking-[0.22em] uppercase text-primary-light mb-4"
                    >
                      {heroContent.eyebrow}
                    </motion.p>

                    <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5">
                      <SplitHeading
                        text="Education Beyond"
                        tag="span"
                        delay={0.1}
                        stagger={0.07}
                        duration={0.6}
                        className="block"
                      />
                      <LoopingKeyword
                        words={['Grades.', 'Limits.', 'Scores.', 'Barriers.']}
                        className="text-primary-dark"
                        interval={2800}
                      />
                    </h1>

                    <motion.p
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.52, ease }}
                      className="font-body text-base md:text-lg text-white/80 leading-relaxed max-w-md mb-8"
                    >
                      {heroContent.subline}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.62, ease }}
                    >
                      <Link
                        href={heroContent.ctaHref}
                        className="inline-flex items-center gap-2 border border-white text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-white hover:text-primary transition-all duration-200 group"
                      >
                        {heroContent.ctaLabel}
                        <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  </div>

                  {/* Form card — desktop only */}
                  <motion.div
                    className="hidden lg:block"
                    variants={formVariant}
                    initial="hidden"
                    animate="show"
                  >
                    <HeroAdmissionForm variant="hero" />
                  </motion.div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Slide indicator dots — carousel only */}
        {!USE_VIDEO_HERO && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
          {banners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-300 rounded-full"
              style={{
                width:      i === current ? '24px' : '8px',
                height:     '8px',
                background: i === current ? '#E8622A' : 'rgba(255,255,255,0.5)',
              }}
            />
          ))}
        </div>
        )}

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 z-20">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown size={18} className="animate-bounce" style={{ animationDelay: '1.2s' }} />
        </div>

      </section>

      {/* Form card — mobile only, rendered below hero */}
      <div className="lg:hidden bg-surface border-t-4 border-primary px-4 py-10 flex justify-center">
        <HeroAdmissionForm variant="hero" />
      </div>
    </>
  )
}
