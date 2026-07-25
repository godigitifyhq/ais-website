'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SplitHeading }    from '@/components/ui/SplitHeading'
import { LoopingKeyword } from '@/components/ui/LoopingKeyword'

const ease = [0.33, 1, 0.68, 1] as const

export function PageHero() {
  return (
    <section
      className="relative w-full overflow-hidden mt-5"
      style={{ height: 'clamp(320px, 70vh, 580px)' }}
    >
      <Image
        src="/images/life_at_alliance/hero-final.png"
        alt="AIS students enjoying a vibrant school activity"
        fill
        priority
        className="object-cover object-top"
        style={{ objectPosition: 'center 40%' }}
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.52) 100%)' }}
      />

      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-accent italic font-black uppercase leading-none select-none pointer-events-none z-[1] whitespace-nowrap"
        style={{ fontSize: 'clamp(5rem, 16vw, 14rem)', color: 'rgba(255,255,255,0.055)' }}
      >
        LIFE AT AIS
      </span>

      {/* Content — bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] px-6 sm:px-10 lg:px-16 pb-10 lg:pb-14">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className="font-body font-bold uppercase mb-3"
          style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.75)' }}
        >
          Alliance International School
        </motion.p>

        {/* Heading — word-split reveal, two-line */}
        <h1 className="leading-tight mb-3">
          <SplitHeading
            text="Life at"
            tag="span"
            delay={0.08}
            stagger={0.08}
            duration={0.55}
            className="block font-display font-bold text-white"
            // font-size applied inline via style on wrapper
          />
          <span style={{ color: 'var(--color-primary-light)' }}>
            <SplitHeading
              text="Alliance"
              tag="span"
              delay={0.25}
              stagger={0.07}
              duration={0.6}
              className="block font-accent italic"
            />
          </span>
        </h1>

        {/* Tagline with looping keyword */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease }}
          className="font-accent italic"
          style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.85)' }}
        >
          Going beyond the{' '}
          <LoopingKeyword
            words={['best.', 'ordinary.', 'expected.', 'possible.']}
            className="text-primary-light font-bold not-italic"
            interval={2700}
          />
        </motion.p>
      </div>
    </section>
  )
}
