'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SplitHeading }    from '@/components/ui/SplitHeading'
import { LoopingKeyword } from '@/components/ui/LoopingKeyword'

const ease = [0.33, 1, 0.68, 1] as const

export function InfraPageHero() {
  return (
    <section className="relative min-h-[65vh] flex items-end overflow-hidden">
      <Image
        src="/images/infrastructure/hero-campus.png"
        alt="Alliance International School campus facade"
        fill
        priority
        className="object-cover object-[center_30%]"
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(26,26,26,0.72) 0%, rgba(26,26,26,0.45) 60%, transparent 100%)',
        }}
      />

      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute top-[-2rem] left-0 font-accent italic font-black uppercase leading-none select-none pointer-events-none text-[12vw] text-white/[0.055]"
      >
        CAMPUS
      </span>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 w-full">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary-light mb-4"
        >
          Alliance International School
        </motion.p>

        {/* Heading — word reveal */}
        <SplitHeading
          text={['Our Campus &', 'Infrastructure']}
          tag="h1"
          delay={0.12}
          stagger={0.065}
          duration={0.55}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl mb-4"
        />

        {/* Tagline with looping keyword */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.52, ease }}
          className="font-accent italic text-lg lg:text-xl text-white/75 max-w-lg"
        >
          A space designed to inspire every{' '}
          <LoopingKeyword
            words={['learner.', 'child.', 'mind.', 'student.']}
            className="text-primary-light font-bold not-italic"
            interval={2700}
          />
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 0.6, ease }}
          className="mt-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={28} className="text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
