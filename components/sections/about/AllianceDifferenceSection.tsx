'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Lightbulb, Music, Globe, Heart, Home, Bus,
  type LucideIcon,
} from 'lucide-react'
import { differenceFeatures, differenceImage } from '@/data/about'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Music,
  Globe,
  Heart,
  Home,
  Bus,
}

export function AllianceDifferenceSection() {
  const { ref: headingRef, inView: headingInView } = useReveal(0.1)
  const { ref: imageRef,   inView: imageInView }   = useReveal(0.1)

  return (
    <section className="bg-surface-alt py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={headingRef} className="relative mb-12 lg:mb-16 overflow-hidden">
          {/* Ghost label */}
          <span
            aria-hidden="true"
            className="absolute -top-4 -left-2 font-display font-black uppercase text-text/[0.04] leading-none select-none pointer-events-none text-[5rem] sm:text-[7rem] lg:text-[10rem] whitespace-nowrap"
          >
            DIFFERENCE
          </span>

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease }}
              className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3"
            >
              Why Choose AIS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={headingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1, ease }}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight max-w-xl"
            >
              What makes AIS different.
            </motion.h2>
          </div>
        </div>

        {/* Full-width image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={imageInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease }}
          className="relative w-full aspect-[4/3] md:aspect-[16/7] lg:aspect-[21/7] overflow-hidden rounded-2xl"
        >
          <Image
            src={differenceImage.src}
            alt={differenceImage.alt}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 90vw"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-primary/90 px-6 py-3">
            <p className="font-accent italic text-sm text-white/90">
              {differenceImage.caption}
            </p>
          </div>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-16">
          {differenceFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.07, ease }}
                className="flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 shrink-0">
                  {Icon && <Icon className="text-primary" size={18} />}
                </div>
                <h3 className="font-body text-sm font-bold text-text mb-1.5">
                  {feature.headline}
                </h3>
                <p className="font-body text-xs text-text-muted leading-relaxed">
                  {feature.body}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
