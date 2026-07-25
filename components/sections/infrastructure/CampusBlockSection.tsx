'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import * as LucideIcons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { CampusBlock } from '@/data/infrastructure'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

interface Props {
  block: CampusBlock
  index: number
}

export function CampusBlockSection({ block, index }: Props) {
  const { ref: sectionRef, inView } = useReveal(0.1)
  const cardRef = useRef<HTMLDivElement>(null)

  const isImageLeft = block.imagePosition === 'left'

  // Content overlaps image by 8% via negative margin; clip-path cuts a
  // diagonal notch on the near edge so the photo shows through from behind.
  useEffect(() => {
    function applyClip() {
      const card = cardRef.current
      if (!card) return

      if (window.innerWidth < 1024) {
        card.style.clipPath    = 'none'
        card.style.marginLeft  = ''
        card.style.marginRight = ''
      } else if (isImageLeft) {
        card.style.clipPath    = 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)'
        card.style.marginLeft  = '-8%'
        card.style.marginRight = ''
      } else {
        card.style.clipPath    = 'polygon(0% 0%, 92% 0%, 100% 100%, 0% 100%)'
        card.style.marginRight = '-8%'
        card.style.marginLeft  = ''
      }
    }
    applyClip()
    window.addEventListener('resize', applyClip)
    return () => window.removeEventListener('resize', applyClip)
  }, [isImageLeft])

  // Full class literals so Tailwind can detect them
  const gridCols = isImageLeft
    ? 'lg:grid-cols-[55fr_45fr]'
    : 'lg:grid-cols-[45fr_55fr]'

  const bgClass = index % 2 === 0 ? 'bg-bg' : 'bg-surface-alt'

  // Mobile: image always first, content always second.
  // Desktop: follows imagePosition (left = image first, right = content first).
  const imageOrder   = isImageLeft ? 'order-1'            : 'order-1 lg:order-2'
  const contentOrder = isImageLeft ? 'order-2'            : 'order-2 lg:order-1'

  return (
    <section id={block.anchorId} className={`${bgClass} overflow-hidden`}>
      <div
        ref={sectionRef}
        className={`grid grid-cols-1 ${gridCols} min-h-125`}
      >
        {/* ── Image column ── */}
        <div className={`relative min-h-75 lg:min-h-0 ${imageOrder}`}>
          <Image
            src={block.imageSrc}
            alt={block.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          {/* Ghost label watermark over image */}
          <span
            aria-hidden="true"
            className="absolute top-6 left-6 font-accent italic font-black uppercase text-white/10 leading-none select-none pointer-events-none text-[4rem] sm:text-[5rem]"
          >
            {block.ghostLabel}
          </span>
        </div>

        {/* ── Content card ── */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, x: isImageLeft ? 60 : -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.65, ease, delay: 0.1 }}
          className={`relative z-10 flex items-center bg-primary text-white px-8 py-14 sm:px-12 lg:px-14 lg:py-16 xl:px-16 ${contentOrder}`}
          style={{
            clipPath: isImageLeft
              ? 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)'
              : 'polygon(0% 0%, 92% 0%, 100% 100%, 0% 100%)',
          }}
        >
          <div className={`w-full ${isImageLeft ? 'lg:pl-6' : 'lg:pr-6'}`}>
            {block.eyebrow && (
              <p className="font-body text-xs font-bold tracking-[0.18em] uppercase text-white/70 mb-4">
                {block.eyebrow}
              </p>
            )}

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white leading-tight mb-6">
              {block.headingPlain}{' '}
              <span className="font-accent italic">{block.headingAccent}</span>
            </h2>

            <div className="space-y-4 mb-6">
              {block.body.map((para, i) => (
                <p key={i} className="font-body text-sm lg:text-base leading-relaxed text-white/90">
                  {para}
                </p>
              ))}
            </div>

            {block.studentQuote && (
              <div className="border-t border-white/20 pt-5 mt-2">
                <p className="font-accent italic text-base text-primary-light leading-snug">
                  &ldquo;{block.studentQuote.text}&rdquo;
                </p>
                <p className="font-body text-xs text-white/50 mt-1.5">— {block.studentQuote.name}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* ── Feature tiles (optional) ── */}
      {block.features && block.features.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-1 relative z-10 pb-12 lg:pb-16 pt-6 lg:pt-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {block.features.map((feat, i) => {
              const Icon = LucideIcons[feat.icon as keyof typeof LucideIcons] as LucideIcon | undefined
              return (
                <motion.div
                  key={feat.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: 0.35 + i * 0.08, ease }}
                  className="bg-surface border border-border rounded-lg p-5 flex flex-col items-center text-center"
                >
                  {Icon && <Icon size={22} className="text-primary mb-3 shrink-0" />}
                  <span className="font-body text-xs text-text-muted leading-snug">
                    {feat.label}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
