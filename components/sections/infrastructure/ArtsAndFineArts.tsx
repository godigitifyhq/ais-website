'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { artsData } from '@/data/infrastructure'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function ArtsAndFineArts() {
  const { ref: sectionRef, inView } = useReveal(0.1)
  const cardRef = useRef<HTMLDivElement>(null)

  // Content overlaps image by 8% via negative margin; clip cuts the diagonal
  // so the photo shows through the notch. Image column is not clipped.
  useEffect(() => {
    function applyClip() {
      const card = cardRef.current
      if (!card) return

      if (window.innerWidth >= 1024) {
        card.style.clipPath   = 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)'
        card.style.marginLeft = '-8%'
      } else {
        card.style.clipPath   = 'none'
        card.style.marginLeft = ''
      }
    }
    applyClip()
    window.addEventListener('resize', applyClip)
    return () => window.removeEventListener('resize', applyClip)
  }, [])

  return (
    <section id={artsData.anchorId} className="bg-surface-alt overflow-hidden">
      {/* ── Editorial split ── */}
      <div
        ref={sectionRef}
        className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] min-h-125"
      >
        {/* Image — always first on mobile */}
        <div className="relative min-h-75 lg:min-h-0 order-1">
          <Image
            src={artsData.imageSrc}
            alt={artsData.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <span
            aria-hidden="true"
            className="absolute top-6 left-6 font-accent italic font-black uppercase text-white/10 leading-none select-none pointer-events-none text-[4rem] sm:text-[5rem]"
          >
            {artsData.ghostLabel}
          </span>
        </div>

        {/* Content card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
          className="relative flex items-center bg-primary text-white px-8 py-14 sm:px-12 lg:px-14 lg:py-16 xl:px-16 order-2"
          style={{ clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
        >
          <div className="w-full lg:pl-6">
            <p className="font-body text-xs font-bold tracking-[0.18em] uppercase text-white/70 mb-4">
              {artsData.eyebrow}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight mb-6">
              {artsData.headingPlain}{' '}
              <span className="font-accent italic">{artsData.headingAccent}</span>
            </h2>
            <div className="space-y-4">
              {artsData.body.map((para, i) => (
                <p key={i} className="font-body text-sm lg:text-base leading-relaxed text-white/90">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Activities grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.2, ease }}
          className="font-display text-xl sm:text-2xl font-bold text-text mb-8"
        >
          Activities at AIS
        </motion.h3>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {artsData.activities.map((activity, i) => {
            const Icon = LucideIcons[activity.icon as keyof typeof LucideIcons] as LucideIcon | undefined
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.25 + i * 0.08, ease }}
                className="bg-surface border border-border rounded-lg p-5 flex flex-col items-center text-center"
              >
                {Icon && <Icon size={22} className="text-primary mb-3 shrink-0" />}
                <span className="font-body text-xs font-medium text-text-muted leading-snug">
                  {activity.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
