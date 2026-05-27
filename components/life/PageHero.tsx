'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ease = [0.33, 1, 0.68, 1] as const

export function PageHero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(320px, 70vh, 580px)' }}
    >
      {/* Background image */}
      <Image
        src="/images/life_at_alliance/hero.jpg"
        alt="AIS students enjoying a vibrant school activity"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: 'center 40%' }}
        sizes="100vw"
      />

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Ghost heading — SFHS pattern */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-accent italic font-black uppercase leading-none select-none pointer-events-none z-[1] whitespace-nowrap"
        style={{
          fontSize: 'clamp(5rem, 16vw, 14rem)',
          color:    'rgba(255,255,255,0.06)',
        }}
      >
        LIFE AT AIS
      </span>

      {/* Overlay content — bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 z-[2] px-6 sm:px-10 lg:px-16 pb-10 lg:pb-14">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="font-body font-bold uppercase mb-3"
          style={{
            fontSize:      '0.65rem',
            letterSpacing: '0.2em',
            color:         'rgba(255,255,255,0.75)',
          }}
        >
          Alliance International School
        </motion.p>

        <h1 className="leading-tight mb-3">
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="block font-display font-bold text-white"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Life at
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22, ease }}
            className="block font-accent italic"
            style={{
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              color:    'var(--color-primary-light)',
            }}
          >
            Alliance
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.36, ease }}
          className="font-accent italic"
          style={{
            fontSize: '1.25rem',
            color:    'rgba(255,255,255,0.85)',
          }}
        >
          Going beyond the best.
        </motion.p>
      </div>
    </section>
  )
}
