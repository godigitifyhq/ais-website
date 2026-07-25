'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { achieverPortraits, achievementsContent } from '@/data/home'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

// Duplicate array for seamless marquee loop
const doubled = [...achieverPortraits, ...achieverPortraits]

function AchieverCard({ portrait }: { portrait: (typeof achieverPortraits)[0] }) {
  return (
    <div className="relative w-36 h-48 shrink-0 rounded-xl overflow-hidden">
      <Image
        src={portrait.image}
        alt={portrait.name}
        fill
        className="object-cover object-top"
        sizes="144px"
      />
      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-2.5">
        <p className="font-display text-xs font-bold text-white leading-tight">{portrait.name}</p>
        <p className="font-body text-[10px] text-primary-light leading-snug mt-0.5 line-clamp-2">
          {portrait.achievement}
        </p>
      </div>
    </div>
  )
}

export function AchievementsStrip() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-primary py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div ref={ref} className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
            className="font-body text-[11px] font-bold tracking-[0.2em] uppercase text-white/55 mb-3"
          >
            {achievementsContent.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="font-display text-2xl md:text-3xl font-bold text-white"
          >
            Students Who Made Alliance{' '}
            <span className="font-accent italic text-primary-light">Proud</span>
          </motion.h2>
        </div>

        {/* Marquee strip */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-3"
            style={{ animation: 'marquee-left 28s linear infinite' }}
            onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
            onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
          >
            {doubled.map((portrait, idx) => (
              <AchieverCard key={`${portrait.id}-${idx}`} portrait={portrait} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href={achievementsContent.ctaHref}
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-white/70 hover:text-white transition-colors border-b border-white/30 hover:border-white pb-0.5"
          >
            {achievementsContent.ctaLabel}
          </a>
        </div>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
