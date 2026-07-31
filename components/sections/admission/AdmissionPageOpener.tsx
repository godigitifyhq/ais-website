'use client'
import { motion } from 'framer-motion'
import { admissionOpener } from '@/data/admission'
import { admissionStoryFilm } from '@/data/videos'
import { VideoFeature } from '@/components/ui/VideoFeature'
import { AdmissionEnquiryForm } from './AdmissionEnquiryForm'
import { SplitHeading }    from '@/components/ui/SplitHeading'
import { LoopingKeyword } from '@/components/ui/LoopingKeyword'

const ease = [0.33, 1, 0.68, 1] as const

export function AdmissionPageOpener() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[58fr_42fr] min-h-[88svh] bg-bg">

      {/* ── Left: text + form ── */}
      <div className="relative flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-14 xl:px-20 overflow-hidden order-2 lg:order-1">

        {/* Ghost label */}
        <span
          aria-hidden="true"
          className="absolute -top-4 -left-2 font-body font-black uppercase leading-none
            text-[5rem] sm:text-[7rem] lg:text-[9rem] text-text/[0.04]
            whitespace-nowrap select-none pointer-events-none"
        >
          {admissionOpener.ghostLabel}
        </span>

        <div className="relative z-10 w-full">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="font-body text-xs font-bold tracking-[0.22em] uppercase text-primary mb-4"
          >
            {admissionOpener.eyebrow}
          </motion.p>

          {/* Headline — static + looping keyword */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text leading-[1.06] mb-5 max-w-lg">
            <span className="block">
              <SplitHeading text="A better" tag="span" delay={0.1} stagger={0.07} duration={0.55} className="inline" />
              {' '}
              <LoopingKeyword
                words={['future.', 'beginning.', 'tomorrow.', 'journey.']}
                className="text-primary"
                interval={2700}
              />
            </span>
            <SplitHeading text="begins with one step." tag="span" delay={0.35} stagger={0.055} duration={0.52} className="block" />
          </h1>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease }}
            className="font-body text-sm md:text-base leading-relaxed text-text-muted max-w-md mb-8"
          >
            {admissionOpener.sub}
          </motion.p>

          {/* Inline enquiry form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35, ease }}
          >
            <AdmissionEnquiryForm variant="opener" />
          </motion.div>

        </div>
      </div>

      {/* ── Right: film ── */}
      <div className="relative overflow-hidden order-1 lg:order-2 aspect-[4/3] lg:aspect-auto">
        <VideoFeature
          film={admissionStoryFilm}
          fill
          priority
          rounded="rounded-none"
          className="absolute inset-0"
          sizes="(max-width: 1024px) 100vw, 42vw"
        />

        {/* Caption bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="absolute bottom-0 inset-x-0 bg-primary px-6 py-3 pointer-events-none z-10"
        >
          <p className="font-accent italic text-sm text-white/90 leading-snug">
            "Every child deserves a school that believes in them."
          </p>
        </motion.div>
      </div>

    </section>
  )
}
