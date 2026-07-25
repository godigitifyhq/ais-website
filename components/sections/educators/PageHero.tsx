'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SplitHeading }    from '@/components/ui/SplitHeading'
import { LoopingKeyword } from '@/components/ui/LoopingKeyword'

const ease = [0.33, 1, 0.68, 1] as const

export function EducatorsPageHero() {
  return (
    <section
      className="relative w-full overflow-hidden flex items-end"
      style={{ minHeight: 'min(65vh, 560px)' }}
    >
      <Image
        src="/images/educators/hero.png"
        alt="AIS educators — passionate, qualified teachers"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay — bottom-heavy */}
      <div className="absolute inset-0 bg-gradient-to-b from-text/10 via-text/35 to-text/78" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-16">

        {/* Ghost label */}
        <motion.span
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease }}
          className="block font-accent italic font-black uppercase leading-none select-none pointer-events-none whitespace-nowrap text-white/6 text-[5rem] sm:text-[7rem] lg:text-[10rem] mb-2 -ml-1"
        >
          EDUCATORS
        </motion.span>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
          className="font-body text-[11px] font-bold tracking-[0.28em] uppercase text-primary-light mb-3"
        >
          Alliance International School
        </motion.p>

        {/* Heading — word reveal */}
        <SplitHeading
          text="Our Educators"
          tag="h1"
          delay={0.1}
          stagger={0.08}
          duration={0.58}
          className="font-display font-bold text-white leading-tight mb-3"
          // clamp applied via style below — className merges with component outer Tag
        />

        {/* Subtitle with looping keyword */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42, ease }}
          className="font-accent italic text-xl text-primary-light"
        >
          Shaping{' '}
          <LoopingKeyword
            words={['minds.', 'futures.', 'leaders.', 'hearts.']}
            className="font-bold not-italic text-white"
            interval={2600}
          />
          {' '}Inspiring lives.
        </motion.p>
      </div>
    </section>
  )
}
