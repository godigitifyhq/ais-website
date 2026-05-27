'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { aboutContent } from '@/data/home'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function AboutSection() {
  const { ref, inView } = useReveal(0.1)

  const stats = [
    { value: aboutContent.stat1Value, label: aboutContent.stat1Label },
    { value: aboutContent.stat2Value, label: aboutContent.stat2Label },
    { value: aboutContent.stat3Value, label: aboutContent.stat3Label },
  ]

  return (
    <section ref={ref} className="bg-bg overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[52fr_48fr] min-h-[560px]">

        {/* ── Left: Text column ── */}
        <motion.div
          className="relative flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-16 xl:px-20"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease }}
        >
          {/* Ghost label — decorative */}
          <motion.span
            aria-hidden="true"
            className="
              absolute -top-4 left-0
              font-body font-black uppercase
              text-[4rem] sm:text-[5.5rem] lg:text-[7rem] xl:text-[8.5rem]
              text-text/4 leading-none select-none pointer-events-none
              whitespace-nowrap overflow-hidden max-w-full
            "
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 0.04 } : { opacity: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            {aboutContent.ghostLabel}
          </motion.span>

          {/* Content — sits above ghost label */}
          <div className="relative z-10 max-w-lg">
            <motion.p
              className="font-body text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1, ease }}
            >
              {aboutContent.eyebrow}
            </motion.p>

            <motion.h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-6 whitespace-pre-line"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.18, ease }}
            >
              {aboutContent.headline}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.26, ease }}
            >
              {aboutContent.body.map((para, i) => (
                <p key={i} className="font-body text-base leading-relaxed text-text mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.34, ease }}
            >
              <Link
                href={aboutContent.ctaHref}
                className="inline-flex items-center gap-2 mt-6 font-body text-xs font-bold tracking-[0.2em] uppercase text-primary hover:text-primary-dark transition-colors group"
              >
                {aboutContent.ctaLabel}
                <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Right: Image + stats overlay ── */}
        <div className="relative min-h-120 lg:min-h-140 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.75, ease }}
          >
            <Image
              src={aboutContent.image}
              alt={aboutContent.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </motion.div>

          {/* Stats bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 bg-primary/90 grid grid-cols-3 divide-x divide-white/20 px-4 py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease }}
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center px-2 text-center">
                <span className="font-display text-2xl font-bold text-white leading-none">{value}</span>
                <span className="font-body text-[10px] text-white/70 mt-1 leading-tight">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
