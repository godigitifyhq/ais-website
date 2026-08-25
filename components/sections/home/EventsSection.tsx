'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { homeEvents, type HomeEvent } from '@/data/home'
import { GhostSectionHeading } from '@/components/ui/GhostSectionHeading'

const ease = [0.33, 1, 0.68, 1] as const

const imageOverride: Record<string, string> = {
  'national-flag-day':   '/images/flag-hosting.png',
  'sports-day':          '/images/home/sports.png',
  'robotics-showcase':   '/images/robotics-lab.png',
}

function EventCard({ event }: { event: HomeEvent }) {
  const src = imageOverride[event.id] ?? event.image
  const isEagerImage = event.id === 'national-flag-day' || event.id === 'sports-day'

  return (
    <Link
      href={event.href}
      className="group flex flex-col border border-border bg-white rounded-lg overflow-hidden hover:shadow-sm transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-3/2 overflow-hidden shrink-0">
        <Image
          src={src}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading={isEagerImage ? 'eager' : 'lazy'}
          priority={isEagerImage}
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Category badge + date row */}
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex items-center bg-primary/8 text-primary text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full">
            {event.category}
          </span>
          <span className="font-body text-xs text-text-muted">{event.date}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-base font-bold text-text leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
          {event.title}
        </h3>

        {/* Excerpt */}
        <p className="font-body text-xs leading-relaxed text-text-muted line-clamp-2 mb-4 flex-1">
          {event.excerpt}
        </p>

        {/* Read more */}
        <span className="inline-flex items-center gap-1.5 font-body text-xs font-bold text-primary tracking-wider uppercase">
          Read More
          <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

export function EventsSection() {
  return (
    <section className="bg-surface-alt py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <GhostSectionHeading
          eyebrow="Latest News"
          ghostLabel="NEWS"
          heading="From the Alliance Campus"
          align="left"
          className="max-w-xl"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeEvents.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
            >
              <EventCard event={event} />
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease }}
        >
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 border border-primary text-primary rounded-full px-8 py-3 text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-200 group"
          >
            View All News
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
