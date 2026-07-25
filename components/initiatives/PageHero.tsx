'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SplitHeading }    from '@/components/ui/SplitHeading'
import { LoopingKeyword } from '@/components/ui/LoopingKeyword'
import { initiativeNavItems } from '@/data/ourInitiatives'

const ease = [0.33, 1, 0.68, 1] as const

export function PageHero() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(300px, 68vh, 560px)' }}
    >
      <Image
        src="/images/initiatives/hero-initiatives.png"
        alt="AIS students working on a robotics project"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: 'center 35%' }}
      />

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(40,89,184,0.75) 0%, rgba(0,0,0,0.25) 60%, transparent 100%)',
        }}
      />

      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute top-0 right-0 font-accent italic font-black leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(5rem, 15vw, 13rem)', color: 'rgba(255,255,255,0.05)', zIndex: 1 }}
      >
        INITIATIVES
      </span>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end" style={{ zIndex: 2 }}>
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-10 lg:px-16 pb-10 sm:pb-14">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="font-body font-bold uppercase mb-3"
            style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.7rem', letterSpacing: '0.2em' }}
          >
            Alliance International School
          </motion.p>

          {/* Heading — word-split reveal */}
          <h1 className="leading-tight mb-3">
            <SplitHeading
              text="Our"
              tag="span"
              delay={0.08}
              stagger={0.07}
              duration={0.5}
              className="font-display font-bold text-white block"
            />
            <span style={{ color: 'var(--color-primary-light)' }}>
              <SplitHeading
                text="Initiatives"
                tag="span"
                delay={0.2}
                stagger={0.07}
                duration={0.58}
                className="font-accent italic font-bold block"
              />
            </span>
          </h1>

          {/* Tagline with looping keyword */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.46, ease }}
            className="font-accent italic"
            style={{ fontSize: '1.25rem', color: 'white', opacity: 0.85 }}
          >
            Going beyond the{' '}
            <LoopingKeyword
              words={['classroom.', 'textbook.', 'ordinary.', 'possible.']}
              className="text-primary-light font-bold not-italic"
              interval={2700}
            />
          </motion.p>

          {/* Anchor pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.56, ease }}
            className="flex flex-wrap gap-2 mt-8"
          >
            {initiativeNavItems.map(({ id, label, anchorId }) => (
              <a
                key={id}
                href={`#${anchorId}`}
                className="font-body text-xs font-bold uppercase tracking-widest text-white
                  rounded-full border transition-colors duration-200
                  bg-[rgba(255,255,255,0.15)] border-[rgba(255,255,255,0.35)]
                  hover:bg-primary-dark hover:border-transparent"
                style={{ padding: '0.5rem 1.25rem' }}
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
