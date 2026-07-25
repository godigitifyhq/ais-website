'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { aboutOpener } from '@/data/about'
import { SplitHeading }    from '@/components/ui/SplitHeading'
import { LoopingKeyword } from '@/components/ui/LoopingKeyword'

const ease = [0.33, 1, 0.68, 1] as const

export function AboutPageOpener() {
  return (
    <section className="min-h-[90svh] grid grid-cols-1 lg:grid-cols-[52fr_48fr] overflow-hidden">

      {/* ── Left: Text column ── */}
      <div className="relative flex flex-col justify-center px-6 py-20 sm:px-10 lg:px-16 xl:px-20 bg-bg overflow-hidden">

        {/* Ghost label */}
        <span
          aria-hidden="true"
          className="absolute -top-4 -left-4 select-none pointer-events-none font-body font-black uppercase leading-none text-[5rem] sm:text-[7rem] lg:text-[11rem] text-text/[0.04] whitespace-nowrap"
        >
          {aboutOpener.ghostLabel}
        </span>

        {/* Content */}
        <div className="relative z-10 max-w-lg">

          {/* Eyebrow */}
          <motion.p
            className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-4"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0 }}
          >
            {aboutOpener.eyebrow}
          </motion.p>

          {/* Heading — static lines + looping keyword */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-[1.06] mb-6">
            <SplitHeading
              text="We evaluate intelligence"
              tag="span"
              delay={0.1}
              stagger={0.055}
              duration={0.55}
              className="block"
            />
            <span className="block">
              <SplitHeading
                text="beyond just"
                tag="span"
                delay={0.38}
                stagger={0.06}
                duration={0.55}
                className="inline"
              />
              {' '}
              <LoopingKeyword
                words={['grades.', 'tests.', 'numbers.', 'scores.']}
                className="text-primary"
                interval={2800}
              />
            </span>
          </h1>

          {/* Sub-text */}
          <motion.p
            className="font-body text-base leading-relaxed text-text-muted max-w-md"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.24 }}
          >
            {aboutOpener.sub}
          </motion.p>

          {/* Scroll indicator */}
          <motion.div
            className="mt-10 flex items-center gap-2 text-text-muted"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.36 }}
          >
            <ChevronDown size={16} className="animate-bounce" />
            <span className="font-body text-[11px] tracking-[0.25em] uppercase">Continue</span>
          </motion.div>
        </div>
      </div>

      {/* ── Right: Image column ── */}
      <motion.div
        className="relative min-h-[50svh] lg:min-h-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src={aboutOpener.image}
          alt={aboutOpener.imageAlt}
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 48vw"
        />

        {/* Caption bar — no border-radius, bleeds to edges */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary px-6 py-3">
          <p className="font-accent italic text-sm text-white/90">
            {aboutOpener.imageCaptionText}
          </p>
        </div>
      </motion.div>

    </section>
  )
}
