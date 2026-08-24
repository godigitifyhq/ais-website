'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { achievements, achievementsContent } from '@/data/home'

const INTERVAL = 3200

const photoMap: Record<string, string> = {
  a1: '/images/Aryan.jpg',
  a2: '/images/Dipti-Kumari.jpg',
  a3: '/images/Kaavya-Sharma.jpg',
  a4: '/images/Manish-Kashyap.jpg',
  a5: '/images/Paridhi.jpg',
  a6: '/images/Prabhleen-Kaur.jpg',
  a7: '/images/Priyanshi-Seeja.jpg',
}

const ringMap: Record<string, string> = {
  teal:   '/images/green-ring.png',
  orange: '/images/golden-ring.png',
  coral:  '/images/bronze-ring.png',
  sage:   '/images/silver-ring.png',
}

const tierLabel: Record<string, string> = {
  teal:   'Gold',
  orange: 'Silver',
  coral:  'Bronze',
  sage:   'Merit',
}

const tierColor: Record<string, string> = {
  teal:   '#4ECDC4',
  orange: '#FFB347',
  coral:  '#FF6B6B',
  sage:   '#A8E6CF',
}

const N = achievements.length

function getVisibleCount() {
  if (typeof window === 'undefined') return 3
  if (window.innerWidth < 640) return 1
  if (window.innerWidth < 1024) return 2
  return 3
}

export function AchievementsSection() {
  const [visibleCount, setVisibleCount] = useState(3)
  const [pos, setPos] = useState(0)
  const [dur, setDur] = useState(0.65)

  // Sync visibleCount to viewport
  useEffect(() => {
    const update = () => {
      const next = getVisibleCount()
      setVisibleCount(prev => {
        if (prev !== next) {
          setDur(0)
          setPos(0)
        }
        return next
      })
    }
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  // Cloned array for seamless loop
  const cloned = [...achievements, ...achievements.slice(0, visibleCount)]

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => {
      setDur(0.65)
      setPos(p => p + 1)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [])

  // When pos hits N (we're showing clones), snap back to 0 instantly
  useEffect(() => {
    if (pos === N) {
      const t = setTimeout(() => {
        setDur(0)
        setPos(0)
      }, 720)
      return () => clearTimeout(t)
    }
    if (dur === 0 && pos === 0) {
      const t = setTimeout(() => setDur(0.65), 30)
      return () => clearTimeout(t)
    }
  }, [pos, dur])

  const xPct   = `${-(pos / cloned.length) * 100}%`
  const trackW = `${(cloned.length / visibleCount) * 100}%`

  const activeDot = pos % N

  return (
    <section className="bg-text py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading — dark-variant style */}
        <div className="mb-12 lg:mb-16 text-center">
          <p className="font-body text-[10px] font-bold tracking-[0.22em] uppercase text-primary-light mb-3">
            {achievementsContent.eyebrow}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
            {achievementsContent.heading}
          </h2>
        </div>

        {/* Carousel track */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            style={{ width: trackW }}
            animate={{ x: xPct }}
            transition={{ duration: dur, ease: [0.33, 1, 0.68, 1] }}
          >
            {cloned.map((item, i) => {
              const photo = photoMap[item.id]
              const ring  = ringMap[item.color]

              return (
                <div
                  key={i}
                  style={{ width: `${100 / cloned.length}%` }}
                  className="px-4 sm:px-6 lg:px-8 shrink-0"
                >
                  <div className="flex flex-col items-center text-center">

                    {/* Badge: ring framing the circular photo */}
                    <div className="relative w-44 h-44 sm:w-52 sm:h-52 lg:w-56 lg:h-56 mb-6 flex items-center justify-center">

                      {/* Photo circle */}
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full overflow-hidden">
                        <Image
                          src={photo}
                          alt={item.name}
                          fill
                          className="object-cover object-top"
                          sizes="160px"
                        />
                      </div>

                      {/* Ring overlay */}
                      <Image
                        src={ring}
                        alt=""
                        aria-hidden
                        fill
                        className="object-contain pointer-events-none"
                        sizes="224px"
                      />
                    </div>

                    {/* Tier label — brighter colors for dark bg */}
                    <p
                      className="font-body text-[11px] font-bold tracking-[0.18em] uppercase mb-2"
                      style={{ color: tierColor[item.color] }}
                    >
                      {tierLabel[item.color]}
                    </p>

                    {/* Name */}
                    <p className="font-display text-xl sm:text-2xl font-bold text-white leading-tight mb-2">
                      {item.name}
                    </p>

                    {/* Achievement */}
                    <p className="font-body text-sm text-white/60 leading-snug max-w-[22ch]">
                      {item.achievement}
                    </p>

                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {achievements.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => { setDur(0.65); setPos(i) }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeDot === i
                  ? 'w-6 bg-primary-light'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href={achievementsContent.ctaHref}
            className="inline-flex items-center gap-2 font-body text-[11px] font-bold tracking-[0.22em] uppercase text-white/60 hover:text-white transition-colors group"
          >
            {achievementsContent.ctaLabel}
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  )
}
