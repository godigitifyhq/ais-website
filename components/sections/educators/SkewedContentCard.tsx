'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Dot } from 'lucide-react'
import type { SkewedSection } from '@/data/educators'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.22, 1, 0.36, 1] as const

// SKEW ANGLE: content overlaps the image column by this much (% of content width).
// The clip-path cuts away exactly this much from the near-image edge at the top,
// tapering to 0 at the bottom — creating a diagonal that reveals the photo beneath.
const SKEW = 10

interface Props {
  section:         SkewedSection
  animationDelay?: number
}

export function SkewedContentCard({ section, animationDelay = 0 }: Props) {
  const { ref, inView }   = useReveal(0.15)
  const contentRef        = useRef<HTMLDivElement>(null)
  const isImageLeft       = section.imagePosition === 'left'

  // Content overlaps image by SKEW% via negative margin; clip-path cuts a
  // diagonal notch on the near edge so the photo shows through from behind.
  // Image column is NOT clipped — it fills its column and shows through the notch.
  useEffect(() => {
    function apply() {
      const el = contentRef.current
      if (!el) return

      if (window.innerWidth < 1024) {
        el.style.clipPath    = 'none'
        el.style.marginLeft  = ''
        el.style.marginRight = ''
      } else if (isImageLeft) {
        el.style.marginLeft  = `-${SKEW}%`
        el.style.marginRight = ''
        el.style.clipPath    = `polygon(${SKEW}% 0%, 100% 0%, 100% 100%, 0% 100%)`
      } else {
        el.style.marginRight = `-${SKEW}%`
        el.style.marginLeft  = ''
        el.style.clipPath    = `polygon(0% 0%, ${100 - SKEW}% 0%, 100% 100%, 0% 100%)`
      }
    }
    apply()
    window.addEventListener('resize', apply)
    return () => window.removeEventListener('resize', apply)
  }, [isImageLeft])

  // Full literal class strings required for Tailwind v4 static analysis
  const gridCols     = isImageLeft ? 'lg:grid-cols-[5fr_7fr]'  : 'lg:grid-cols-[7fr_5fr]'
  const imageOrder   = isImageLeft ? 'order-1'                  : 'order-1 lg:order-2'
  const contentOrder = isImageLeft ? 'order-2'                  : 'order-2 lg:order-1'
  const imgX         = isImageLeft ? -40                        : 40
  const cardX        = isImageLeft ? 40                         : -40

  // Extra padding on the side facing the image to keep text clear of the angle.
  // At the vertical mid-point of the card the clip is at SKEW/2 % from the edge;
  // we add a comfortable buffer on top of standard padding.
  const innerPad = isImageLeft
    ? 'relative z-10 w-full px-8 py-14 sm:px-12 lg:py-16 lg:pl-24 lg:pr-14'
    : 'relative z-10 w-full px-8 py-14 sm:px-12 lg:py-16 lg:pl-14 lg:pr-24'

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 ${gridCols} relative min-h-auto lg:min-h-140`}
    >
      {/* ── Image column ─────────────────────────────────────── */}
      {/* overflow-hidden clips the photo to its cell; the content's
          negative margin + clip-path reveals the photo at the diagonal. */}
      <motion.div
        initial={{ opacity: 0, x: imgX }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: animationDelay, ease }}
        className={`relative min-h-75 lg:min-h-0 overflow-hidden ${imageOrder}`}
      >
        <Image
          src={section.imageSrc}
          alt={section.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
      </motion.div>

      {/* ── Content panel ────────────────────────────────────── */}
      {/* Rendered after the image in DOM so it naturally paints on top
          in the overlapping zone (no explicit z-index needed). */}
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, x: cardX }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: animationDelay + 0.05, ease }}
        className={`relative bg-primary z-10 flex items-center overflow-hidden ${contentOrder}`}
        style={{
          // SSR value matches desktop clip so there's no flash on hydration.
          // The useEffect corrects to 'none' on mobile after mount.
          clipPath: isImageLeft
            ? `polygon(${SKEW}% 0%, 100% 0%, 100% 100%, 0% 100%)`
            : `polygon(0% 0%, ${100 - SKEW}% 0%, 100% 100%, 0% 100%)`,
        }}
      >
        {/* Ghost label */}
        <span
          aria-hidden="true"
          className="absolute -top-2 left-20 font-accent italic font-black uppercase
            whitespace-nowrap leading-none select-none pointer-events-none
            text-[clamp(3.5rem,10vw,8rem)] text-white/[0.07] z-0"
        >
          {section.ghostLabel}
        </span>

        {/* Text content */}
        <div className={innerPad}>
          <p className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-white/55 mb-3">
            {section.eyebrow}
          </p>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-white leading-tight mb-6">
            {section.headingPlain}{' '}
            <span className="font-accent italic text-primary-light">
              {section.headingAccent}
            </span>
          </h2>

          <div className="space-y-3 mb-6">
            {section.body.map((para, i) => (
              <p key={i} className="font-body text-sm lg:text-base leading-relaxed text-white/85">
                {para}
              </p>
            ))}
          </div>

          {section.bullets && section.bullets.length > 0 && (
            <ul className="space-y-2 mb-8">
              {section.bullets.map((bullet, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Dot size={18} className="text-primary-light shrink-0" />
                  <span className="font-body text-sm text-white/80">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {section.ctaLabel && section.ctaHref && (
            <Link
              href={section.ctaHref}
              className="inline-flex items-center gap-2 font-body text-xs font-bold tracking-[0.14em]
                uppercase text-primary-light hover:text-white transition-colors duration-200
                group border-b border-primary-light/40 hover:border-white/50 pb-0.5"
            >
              {section.ctaLabel}
              <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          )}

          {section.highlight && (
            <span
              className="inline-flex items-center gap-1.5 mt-4 px-3 py-1 rounded-full
                font-body text-xs font-semibold uppercase tracking-wide"
              style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.85)' }}
            >
              <CheckCircle2 size={12} />
              {section.highlight}
            </span>
          )}
        </div>
      </motion.div>
    </div>
  )
}
