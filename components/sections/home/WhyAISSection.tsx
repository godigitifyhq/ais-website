'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { whyAISPillars } from '@/data/home'
import { GhostSectionHeading } from '@/components/ui/GhostSectionHeading'

const imageMap: Record<string, string> = {
  joyful:       '/images/teaching.png',
  experiential: '/images/home/robotics-lab.png',
  confidence:   '/images/confidence.png',
  transport:    '/images/transport.png'
}

const ease = [0.33, 1, 0.68, 1] as const

export function WhyAISSection() {
  return (
    <section className="bg-surface-alt py-20 lg:py-28 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        <GhostSectionHeading
          eyebrow="Our Strengths"
          ghostLabel="STRENGTHS"
          heading={'Why families\nchoose Alliance'}
          align="left"
          className="max-w-lg"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {whyAISPillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              className={`group relative overflow-hidden rounded-3xl ${i === 3 ? 'aspect-4/5 sm:aspect-4/5 lg:col-span-3 lg:aspect-video' : 'aspect-4/5'}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              {/* ── Background image ── */}
              <Image
                src={imageMap[pillar.id]}
                alt={pillar.headline}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                sizes={i === 3 ? '(max-width: 1024px) 100vw, 100vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
              />

              {/* ── Base dark gradient overlay (bottom-heavy) ── */}
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-text/95 via-text/55 to-text/15 pointer-events-none z-1"
              />

              {/* ── Top shadow — ensures band always contrasts against the image ── */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-40 bg-linear-to-b from-text/60 to-transparent pointer-events-none z-2"
              />

              {/* ── Skewed top accent band ── */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-24 bg-primary/80 pointer-events-none origin-left -skew-y-6 z-3"
              />

              {/* ── Corner glow — soft radial accent top-right ── */}
              <span
                aria-hidden="true"
                className="absolute -top-12 -right-12 w-48 h-48 bg-primary-light/25 rounded-full blur-3xl pointer-events-none"
              />

              {/* ── Diagonal bottom-left accent line ── */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-primary-light/60 via-primary/20 to-transparent pointer-events-none"
              />

              {/* ── Ghost step number — watermark ── */}
              <span
                aria-hidden="true"
                className="absolute top-4 right-5 font-display text-8xl font-black text-white/[0.06] leading-none select-none pointer-events-none"
              >
                0{i + 1}
              </span>

              {/* ── Content ── */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10">

                {/* Gradient heading text */}
                <h3 className="font-display text-2xl lg:text-[1.65rem] font-bold leading-tight mb-3 bg-gradient-to-r from-white via-white to-primary-light bg-clip-text text-transparent">
                  {pillar.headline}
                </h3>

                <p className="font-body text-sm leading-relaxed text-white/70 max-w-[28ch]">
                  {pillar.body}
                </p>

                {/* Animated underline accent */}
                <span
                  aria-hidden="true"
                  className="block mt-5 h-[2px] bg-gradient-to-r from-primary-light to-primary/40 w-10 transition-all duration-500 group-hover:w-20 rounded-full"
                />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
