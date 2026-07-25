'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'
import { excellenceImages } from '@/data/lifeAtAlliance'

const ease = [0.33, 1, 0.68, 1] as const

// Double arrays for seamless loop in both directions
const row1 = [...excellenceImages, ...excellenceImages]
const row2 = [...[...excellenceImages].reverse(), ...[...excellenceImages].reverse()]

export function ExcellenceMarquee() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-primary py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div ref={ref} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease }}
              className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-white/55 mb-2"
            >
              BEYOND THE CLASSROOM
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08, ease }}
              className="font-display text-2xl md:text-3xl font-bold text-white"
            >
              Students Excelling{' '}
              <span className="font-accent italic text-primary-light">Everywhere</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2, ease }}
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 font-body text-sm font-semibold text-white/70 hover:text-white transition-colors border-b border-white/30 hover:border-white pb-0.5"
            >
              View Full Gallery →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="mb-3 overflow-hidden">
        <div
          className="flex gap-3 w-max"
          style={{ animation: 'marquee-left 22s linear infinite' }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {row1.map((img, idx) => (
            <div key={idx} className="relative w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-xl overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="overflow-hidden">
        <div
          className="flex gap-3 w-max"
          style={{ animation: 'marquee-right 26s linear infinite' }}
          onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
          onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
        >
          {row2.map((img, idx) => (
            <div key={idx} className="relative w-28 h-28 md:w-32 md:h-32 shrink-0 rounded-xl overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
