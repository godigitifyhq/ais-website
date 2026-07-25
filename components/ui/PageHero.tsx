'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { SplitHeading }    from '@/components/ui/SplitHeading'
import { LoopingKeyword } from '@/components/ui/LoopingKeyword'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  title:            string
  subtitle?:        string
  breadcrumbs?:     Breadcrumb[]
  backgroundImage?: string
  /** If provided, the last word of `title` is replaced by a looping keyword cycle */
  loopingWords?:    string[]
}

const ease = [0.33, 1, 0.68, 1] as const

export function PageHero({ title, subtitle, breadcrumbs, backgroundImage, loopingWords }: PageHeroProps) {
  // If loopingWords supplied, split title into "static prefix" + looping last word
  const titleWords  = title.split(' ')
  const staticPart  = loopingWords ? titleWords.slice(0, -1).join(' ') : title
  const lastWord    = loopingWords ? titleWords[titleWords.length - 1]  : null
  return (
    <section className="relative bg-black py-20 md:py-28 overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* Decorative top rule */}
      <div className="absolute left-0 top-0 h-1 w-full bg-primary" />

      {/* Ghost label — large faded text behind content */}
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-start pl-6 lg:pl-16 font-accent italic font-black uppercase leading-none select-none pointer-events-none overflow-hidden"
        style={{ fontSize: 'clamp(5rem, 18vw, 14rem)', color: 'rgba(255,255,255,0.035)', zIndex: 0 }}
      >
        {title.split(' ')[0]}
      </span>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1.5 text-sm text-white/70 mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-primary-light transition-colors">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={13} className="opacity-40" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-primary-light transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="font-body text-[11px] font-bold tracking-[0.22em] uppercase text-primary-light mb-4"
        >
          Alliance International School
        </motion.p>

        {/* Heading — word-split reveal, optional looping last word */}
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
          {loopingWords && lastWord ? (
            <>
              <SplitHeading text={staticPart} tag="span" delay={0.08} stagger={0.06} duration={0.55} className="inline" />
              {' '}
              <LoopingKeyword words={loopingWords} className="text-primary-dark" interval={2700} />
            </>
          ) : (
            <SplitHeading text={title} tag="span" delay={0.08} stagger={0.06} duration={0.55} className="inline" />
          )}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42, ease }}
            className="mt-4 font-body text-base md:text-lg text-white/75 max-w-2xl leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}

// I have added 3 images inside images/home with name banner-2 banner-3 and banner-4 and they are png files. The home page should be a carousel (automatic slider) Keep the existing hero section as it its and add these inside it as sliders