'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { heroContent } from '@/data/home'
import { HeroAdmissionForm } from './HeroAdmissionForm'

const textVariants = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
}

const lineVariant = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as const } },
}

const formVariant = {
  hidden: { opacity: 0, x: 30 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4, ease: [0.33, 1, 0.68, 1] as const } },
}

export function HeroSection() {
  return (
    <>
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        {/* Background image */}
        <Image
          src={heroContent.image}
          alt={heroContent.imageAlt}
          fill
          priority
          className="object-cover object-[center_30%]"
          sizes="100vw"
        />

        {/* Gradient overlay — left dark for text, fades right for form */}
        <div className="absolute inset-0 bg-gradient-to-r from-text/75 via-text/45 to-transparent" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center py-24 lg:py-28">

            {/* Text column */}
            <motion.div
              className="max-w-xl"
              variants={textVariants}
              initial="hidden"
              animate="show"
            >
              <motion.p
                variants={lineVariant}
                className="font-body text-xs font-bold tracking-[0.22em] uppercase text-primary-light mb-4"
              >
                {heroContent.eyebrow}
              </motion.p>

              <motion.h1
                variants={lineVariant}
                className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-5"
              >
                {heroContent.headline.split('\n').map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </motion.h1>

              <motion.p
                variants={lineVariant}
                className="font-body text-base md:text-lg text-white/80 leading-relaxed max-w-md mb-8"
              >
                {heroContent.subline}
              </motion.p>

              <motion.div variants={lineVariant}>
                <Link
                  href={heroContent.ctaHref}
                  className="inline-flex items-center gap-2 border border-white text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-white hover:text-primary transition-all duration-200 group"
                >
                  {heroContent.ctaLabel}
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

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

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
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
