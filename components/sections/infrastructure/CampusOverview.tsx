'use client'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { campusOverview } from '@/data/infrastructure'
import { campusTourFilm } from '@/data/videos'
import { VideoFeature } from '@/components/ui/VideoFeature'
import { useReveal } from '@/hooks/useReveal'

const ease = [0.33, 1, 0.68, 1] as const

export function CampusOverview() {
  const { ref, inView } = useReveal(0.1)

  return (
    <section className="bg-surface-alt py-20 lg:py-28">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-10 lg:gap-16 items-center">

          {/* Video — order 2 on mobile, order 1 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="order-1 lg:order-1"
          >
            <VideoFeature
              film={campusTourFilm}
              rounded="rounded-xl"
              showCaption
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </motion.div>

          {/* Content — order 1 on mobile, order 2 on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease }}
            className="order-2 lg:order-2"
          >
            <p className="font-body text-[11px] font-bold tracking-[0.25em] uppercase text-primary mb-3">
              Our Campus
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text leading-tight mb-3">
              {campusOverview.heading}
            </h2>
            <p className="flex items-center gap-1.5 font-body text-sm text-text-muted mb-6">
              <MapPin size={14} className="text-primary shrink-0" />
              {campusOverview.location}
            </p>

            <div className="space-y-4 mb-8">
              {campusOverview.body.map((para, i) => (
                <p key={i} className="font-body text-sm lg:text-base text-text-muted leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 divide-x divide-y divide-border border border-border rounded-xl overflow-hidden">
              {campusOverview.stats.map((stat) => (
                <div key={stat.id} className="flex flex-col items-center justify-center py-5 px-4 bg-surface">
                  <span className="font-display text-2xl font-bold text-primary leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="font-body text-xs text-text-muted text-center">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
