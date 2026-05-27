'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useReveal } from '@/hooks/useReveal'

const mosaicPhotos = [
  { src: '/images/life_at_alliance/hero.jpg', alt: 'AIS students gathering on campus' },
  { src: '/images/life_at_alliance/sports-day.jpg', alt: 'AIS school sports day celebration' },
  { src: '/images/life_at_alliance/event-wide.png', alt: 'AIS students and families at a school event' },
  { src: '/images/life_at_alliance/breather-campus-life.png', alt: 'AIS students enjoying campus life together' },
  { src: '/images/life_at_alliance/art-craft.png', alt: 'AIS students working on art and craft projects' },
]

const ease = [0.33, 1, 0.68, 1] as const

export function LifeGalleryCTA() {
  const { ref, inView } = useReveal(0.15)

  return (
    <>
      {/* ── Zone A: Photo mosaic ── */}
      {/*
        Desktop 3-col × 2-row grid — center photo spans both rows:
        [Photo 2]  [Photo 1 — tall]  [Photo 3]
        [Photo 4]  [Photo 1 cont.]   [Photo 5]
        Mobile: 2-col uniform grid, first 4 photos only
      */}

      {/* Desktop mosaic */}
      <div
        className="hidden sm:grid grid-cols-3 grid-rows-2 gap-1 w-full"
        style={{ height: 'clamp(300px, 45vw, 520px)' }}
        aria-label="Photo gallery mosaic"
      >
        {/* Photo 2 — top-left */}
        <div className="relative overflow-hidden col-start-1 row-start-1">
          <Image src={mosaicPhotos[1].src} alt={mosaicPhotos[1].alt} fill className="object-cover" sizes="33vw" />
        </div>

        {/* Photo 1 — large center, spans 2 rows */}
        <div className="relative overflow-hidden col-start-2 row-start-1 row-span-2">
          <Image src={mosaicPhotos[0].src} alt={mosaicPhotos[0].alt} fill className="object-cover" sizes="34vw" />
        </div>

        {/* Photo 3 — top-right */}
        <div className="relative overflow-hidden col-start-3 row-start-1">
          <Image src={mosaicPhotos[2].src} alt={mosaicPhotos[2].alt} fill className="object-cover" sizes="33vw" />
        </div>

        {/* Photo 4 — bottom-left */}
        <div className="relative overflow-hidden col-start-1 row-start-2">
          <Image src={mosaicPhotos[3].src} alt={mosaicPhotos[3].alt} fill className="object-cover" sizes="33vw" />
        </div>

        {/* Photo 5 — bottom-right */}
        <div className="relative overflow-hidden col-start-3 row-start-2">
          <Image src={mosaicPhotos[4].src} alt={mosaicPhotos[4].alt} fill className="object-cover" sizes="33vw" />
        </div>
      </div>

      {/* Mobile mosaic — 2-col grid, 4 photos */}
      <div
        className="grid sm:hidden grid-cols-2 gap-1 w-full"
        style={{ height: '360px' }}
        aria-label="Photo gallery mosaic"
      >
        {mosaicPhotos.slice(0, 4).map((photo) => (
          <div key={photo.src} className="relative overflow-hidden">
            <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="50vw" />
          </div>
        ))}
      </div>

      {/* ── Zone B: CTA band ── */}
      <section
        ref={ref}
        style={{ background: 'var(--color-primary)', paddingBlock: '4rem' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <p
            className="font-body font-bold uppercase mb-4"
            style={{
              fontSize:      '0.65rem',
              letterSpacing: '0.2em',
              color:         'rgba(255,255,255,0.65)',
            }}
          >
            Ready to join the AIS family?
          </p>

          <h2
            className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4"
            style={{ color: 'var(--color-text-inverse)' }}
          >
            Experience Life{' '}
            <span
              className="font-accent italic"
              style={{ color: 'var(--color-primary-light)' }}
            >
              at Alliance
            </span>
          </h2>

          <p
            className="font-body mb-10 max-w-md mx-auto"
            style={{
              fontSize:   '0.9375rem',
              lineHeight: 1.7,
              color:      'rgba(255,255,255,0.75)',
            }}
          >
            Schedule a visit and see the campus and community for yourself.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border-2 border-white text-white font-body font-semibold text-sm tracking-wide transition-all duration-200 hover:bg-white hover:text-primary"
            >
              Schedule a Campus Visit
            </Link>

            <Link
              href="/admission"
              className="font-body text-sm font-semibold hover:underline underline-offset-4 transition-colors"
              style={{ color: 'var(--color-primary-light)' }}
            >
              → View Admission Process
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  )
}
