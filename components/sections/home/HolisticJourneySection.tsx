'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const ease = [0.33, 1, 0.68, 1] as const

const allianceItems = [
  {
    letter: 'A',
    title:  'Academic\nExcellence',
    body:   'CBSE curriculum enriched with modern pedagogy',
    image:  '/images/home/A1.png',
    alt:    'Students in AIS library',
  },
  {
    letter: 'L',
    title:  'Leadership\nTraining',
    body:   'Building tomorrow\'s leaders through structured mentorship',
    image:  '/images/home/L1.png',
    alt:    'Students performing at AIS auditorium',
  },
  {
    letter: 'L',
    title:  'Life\nSkills',
    body:   'Real-world readiness beyond classroom walls',
    image:  '/images/home/L2.png',
    alt:    'AIS life skills programme',
  },
  {
    letter: 'I',
    title:  'Innovation\nFirst',
    body:   'Robotics, science and creative problem-solving',
    image:  '/images/home/I.png',
    alt:    'AIS Robotics Lab',
  },
  {
    letter: 'A',
    title:  'Arts &\nSports',
    body:   'Every child finds their stage — on field or on stage',
    image:  '/images/home/A2.png',
    alt:    'AIS sports and arts',
  },
  {
    letter: 'N',
    title:  'Nurturing\nCare',
    body:   'A safe, joyful environment where every child is seen',
    image:  '/images/home/N.png',
    alt:    'AIS students together',
  },
  {
    letter: 'C',
    title:  'Confidence\nBuilding',
    body:   'Competitions, clubs, and platforms to lead and grow',
    image:  '/images/home/C.png',
    alt:    'Students in AIS lab',
  },
  {
    letter: 'E',
    title:  'Experiential\nLearning',
    body:   'Hands-on every day — because doing beats memorising',
    image:  '/images/home/E2.png',
    alt:    'AIS campus life',
  },
]

interface CardProps {
  item:       typeof allianceItems[0]
  isPrimary:  boolean
}

function AllianceCard({ item, isPrimary }: CardProps) {
  const bgClass     = isPrimary ? 'bg-primary' : 'bg-primary-light'
  const gradFrom    = isPrimary ? 'from-primary' : 'from-primary-light'

  return (
    <div className={`group relative ${bgClass} rounded-2xl overflow-hidden w-full`}>

      {/* Title area */}
      <div className="relative px-4 pt-5 pb-0 z-10 min-h-[5rem]">
        <p className="font-body text-[0.7rem] sm:text-xs font-bold text-white/95 leading-snug whitespace-pre-line">
          {item.title}
        </p>
      </div>

      {/* Giant letter watermark */}
      <span
        aria-hidden="true"
        className="absolute top-6 right-2 font-display font-black text-[5.5rem] sm:text-[6.5rem] leading-none text-white/15 select-none pointer-events-none"
      >
        {item.letter}
      </span>

      {/* Image */}
      <div className="relative mt-4 h-44 sm:h-52 lg:h-48 xl:h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 13vw"
        />
        {/* Gradient bridge — blends card colour into image */}
        {/* <span
          aria-hidden="true"
          className={`absolute top-0 left-0 right-0 h-14 bg-gradient-to-b ${gradFrom} to-transparent pointer-events-none`}
        /> */}
      </div>
    </div>
  )
}

export function HolisticJourneySection() {
  return (
    <section className="bg-text py-16 lg:py-24 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-primary-light mb-3">
            Our Approach
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            The Alliance Path
          </h2>
        </div>

        {/* ── Desktop: horizontal row, alternating vertical offset ── */}
        <div className="hidden lg:flex items-start justify-center gap-3 xl:gap-4">
          {allianceItems.map((item, i) => (
            <motion.div
              key={i}
              className={`flex-shrink-0 w-[11.5%] xl:w-[11%] ${i % 2 === 1 ? 'mt-14' : ''} ${i < allianceItems.length - 1 ? 'border-r border-white/10 pr-3 xl:pr-4' : ''}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: i * 0.07, ease }}
            >
              <AllianceCard item={item} isPrimary={i % 2 === 0} />
            </motion.div>
          ))}
        </div>

        {/* ── Mobile / tablet: 2-col grid, right column offset down ── */}
        <div className="lg:hidden grid grid-cols-2 gap-3 sm:gap-4">
          {allianceItems.map((item, i) => (
            <motion.div
              key={i}
              className={i % 2 === 1 ? 'mt-36' : ''}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: Math.floor(i / 2) * 0.08, ease }}
            >
              <AllianceCard item={item} isPrimary={i % 2 === 0} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
