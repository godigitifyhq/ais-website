'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { facilities, type Facility } from '@/data/home'
import { GhostSectionHeading } from '@/components/ui/GhostSectionHeading'

const imageOverride: Record<string, string> = {
  academics:  '/images/home/library.png',
  sports:     '/images/home/sport.png',
  arts:       '/images/home/audi.png',
  robotics:   '/images/home/Robolab1.png',
  pool:       '/images/home/experience.png',
  hostel:     '/images/home/hostel.png',
}

const ease = [0.33, 1, 0.68, 1] as const

function FacilityCard({ facility }: { facility: Facility }) {
  const src = imageOverride[facility.id] ?? facility.image
  return (
    <Link
      href={facility.href}
      className="group block rounded-2xl overflow-hidden relative aspect-[4/3] focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <Image
        src={src}
        alt={facility.imageAlt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 640px) 72vw, (max-width: 1024px) 50vw, 33vw"
      />

      {/* Label bar — expands on hover to reveal description */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary px-4 pt-3 pb-3 group-hover:pb-5 transition-all duration-300">
        <div className="flex items-center">
          <span className="font-body text-sm font-semibold text-white tracking-wide">
            {facility.label}
          </span>
          <ArrowRight
            size={14}
            className="ml-auto text-primary-light flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>

        {/* Description — hidden until hover */}
        <p className="font-body text-xs text-white/80 leading-relaxed overflow-hidden max-h-0 opacity-0 group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-2 transition-all duration-300 delay-75">
          {facility.description}
        </p>
      </div>
    </Link>
  )
}

export function FacilitiesSection() {
  return (
    <section className="bg-bg py-20 lg:py-28 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        <GhostSectionHeading
          eyebrow="Our Campus"
          ghostLabel="CAMPUS"
          heading="Explore Alliance"
          align="left"
          className="max-w-lg"
        />

        {/* Mobile — horizontal snap scroll */}
        <div className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-none">
          {facilities.map((f, i) => (
            <motion.div
              key={f.id}
              className="flex-shrink-0 w-[72vw] max-w-[300px] snap-start"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease }}
            >
              <FacilityCard facility={f} />
            </motion.div>
          ))}
        </div>

        {/* Desktop — 3-col grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {facilities.map((f, i) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
            >
              <FacilityCard facility={f} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
