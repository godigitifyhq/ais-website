'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function JoinTeamCTA() {
  const { ref, inView } = useReveal(0.15)

  return (
    <section className="bg-black py-24 lg:py-32 overflow-hidden relative">
      {/* bg-image-cta.png - /images/educators/bg-image-cta.png */}
      <div className="absolute inset-0">
        <Image
          src="/images/educators/bg-image-cta.png"
          alt=""
          fill
          priority
          className="object-cover opacity-50 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-linear-to-br from-black/95 via-black/80 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      {/* Ghost label */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-display font-black uppercase leading-none select-none pointer-events-none whitespace-nowrap text-white/5 text-[5rem] sm:text-[8rem] lg:text-[12rem]"
      >
        JOIN US
      </span>

      <div ref={ref} className="relative z-10 max-w-xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, ease }}
          className="font-body text-[11px] font-bold tracking-[0.28em] uppercase text-white/60 mb-4"
        >
          Join Our Team
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease }}
          className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
        >
          Interested in{' '}
          <span className="font-accent italic text-primary-light">
            Teaching at AIS?
          </span>
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease }}
          className="font-body text-base text-white/80 leading-relaxed mb-10"
        >
          We are always looking for passionate, qualified educators who believe
          in every child's potential. Come grow with us.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="flex flex-col items-center gap-5"
        >
          {/* Primary — outlined white */}
          <Link
            href="https://ais-dashboard-eta.vercel.app/form"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white text-white rounded-full px-8 py-3.5 font-body text-sm font-semibold tracking-wide hover:bg-white hover:text-primary transition-all duration-200 group"
          >
            Apply for a Position
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>

          {/* Secondary — email */}
          <a
            href="mailto:info@ais.ac.in"
            className="font-body text-sm font-semibold text-primary-light underline underline-offset-4 hover:text-white transition-colors duration-200"
          >
            Email us at info@ais.ac.in
          </a>
        </motion.div>
      </div>
    </section>
  )
}
