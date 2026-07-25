'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { HeroAdmissionForm } from '@/components/sections/home/HeroAdmissionForm'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

const bullets = [
  'CBSE affiliated — academics that open every door',
  'World-class sports, robotics & arts programmes',
  'Safe, caring hostel for outstation families',
  'Nurturing faculty with 10+ years average experience',
]

export function AdmissionCTASection() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section ref={ref} className="relative bg-primary overflow-hidden py-20 lg:py-28">
      {/* admission-cta.png - /images/admission-cta.png */}
      <div className="absolute inset-0">
        <Image
          src="/images/admission-cta.png"
          alt=""
          fill
          priority
          className="object-cover mix-blend-screen"
        />
        <div className="absolute inset-0 bg-linear-to-br from-black/95 via-black/80 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      </div>

      {/* ── Radial gradient texture ── */}
      {/* <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 50%, rgba(232, 98, 42, 0.25) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(155, 27, 32, 0.30) 0%, transparent 50%)
          `,
        }}
      /> */}

      {/* ── Decorative background shapes ── */}
      {/* <span
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/[0.04] pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-white/[0.04] pointer-events-none"
      />
      <span
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] rounded-full bg-primary-dark/40 blur-3xl pointer-events-none"
      /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease }}
          >
            {/* Eyebrow */}
            <p className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-white/60 mb-4">
              Admissions Open · Session 2026–27
            </p>

            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Admissions open.
              <span className="block text-primary-light italic font-accent mt-1">
                Session 2026–27
              </span>
            </h2>

            {/* Body */}
            <p className="font-body text-base leading-relaxed text-white/70 mb-8 max-w-[42ch]">
              A seamless admissions process for Day Scholars and Boarding students.
              Begin your child&apos;s Alliance journey today.
            </p>

            {/* Bullet list */}
            <ul className="space-y-3 mb-10">
              {bullets.map((b, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.25 + i * 0.08, ease }}
                >
                  <CheckCircle2
                    size={18}
                    className="text-primary-light shrink-0 mt-0.5"
                  />
                  <span className="font-body text-sm text-white/80">{b}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stat row */}
            <div className="flex gap-8 pt-8 border-t border-white/20">
              {[
                { value: '2500+', label: 'Happy Students' },
                { value: '98%',   label: 'Board Results' },
                { value: '10+',   label: 'Years of Excellence' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-display text-2xl font-bold text-white">{value}</p>
                  <p className="font-body text-xs text-white/55 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15, ease }}
            className="flex justify-center lg:justify-end"
          >
            <HeroAdmissionForm variant="cta" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
