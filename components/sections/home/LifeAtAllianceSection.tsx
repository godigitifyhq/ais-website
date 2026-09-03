'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useReveal } from '@/hooks/useReveal'
import { GhostSectionHeading } from '@/components/ui/GhostSectionHeading'
import { VideoModal } from '@/components/ui/VideoModal'
import { admissionStoryFilm } from '@/data/videos'

const ease = [0.33, 1, 0.68, 1] as const

const lifeContent = {
  eyebrow:      'Life at Alliance',
  ghostLabel:   'LIFE',
  heading:      'A campus where every\nchild finds their place.',
  body: [
    'From the swimming pool to the Robotics Lab, from the auditorium stage to the sports ground — Alliance International School is designed to let every child discover what makes them exceptional.',
    'Our hostel ensures that students from across Punjab can access world-class facilities without compromise. Safety, community, and care define every corner of our campus.',
  ],
  ctaLabel:     'Life at Alliance',
  ctaHref:      '/life-at-alliance',
  videoImage:   admissionStoryFilm.poster,
  videoUrl:     admissionStoryFilm.src,
  videoAlt:     'A teacher welcoming a student at Alliance International School',
  videoCaption: 'See how our students live, learn, and grow',
}

export function LifeAtAllianceSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const { ref, inView } = useReveal(0.1)

  return (
    <>
      <section ref={ref} className="bg-bg py-20 lg:py-28 overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[48fr_52fr] gap-12 lg:gap-20 items-center">

            {/* ── Left: Text column ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease }}
            >
              <GhostSectionHeading
                eyebrow={lifeContent.eyebrow}
                ghostLabel={lifeContent.ghostLabel}
                heading={lifeContent.heading}
                align="left"
                className="mb-8"
              />

              {lifeContent.body.map((para, i) => (
                <p key={i} className="font-body text-base leading-relaxed text-text mb-4 last:mb-0">
                  {para}
                </p>
              ))}

              <Link
                href={lifeContent.ctaHref}
                className="inline-flex items-center gap-2 mt-7 font-body text-xs font-bold tracking-[0.2em] uppercase text-primary hover:text-primary-dark transition-colors group"
              >
                {lifeContent.ctaLabel}
                <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* ── Right: Video column ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.15, ease }}
            >
              {/* Thumbnail + play button */}
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={lifeContent.videoImage}
                  alt={lifeContent.videoAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 52vw"
                />

                {/* Dark overlay for contrast */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-text/30 pointer-events-none"
                />

                {/* Play button */}
                <button
                  onClick={() => setModalOpen(true)}
                  aria-label="Play campus life video"
                  className="absolute inset-0 flex items-center justify-center group/play"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <Play size={22} className="text-white ml-1 fill-white" />
                  </motion.div>
                </button>
              </div>

              {/* Caption */}
              <p className="font-body text-xs text-text-muted mt-3 text-center tracking-wide">
                {lifeContent.videoCaption}
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoUrl={lifeContent.videoUrl}
        poster={admissionStoryFilm.poster}
        ratio={admissionStoryFilm.ratio}
        title={admissionStoryFilm.title}
      />
    </>
  )
}
