'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import type { VideoLoop } from '@/data/videos'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

interface Props {
  loop:             VideoLoop
  /** CSS object-position for the video layer. Defaults to centre. */
  objectPosition?:  string
  className?:       string
  /** Eager-load the reduced-motion poster. Only for above-the-fold use. */
  priority?:        boolean
  sizes?:           string
}

/**
 * Silent, looping video background.
 *
 * Falls back to the poster image when the visitor prefers reduced motion, and
 * pauses whenever the section scrolls out of view so we are never decoding
 * frames nobody is looking at.
 */
export function BackgroundVideo({
  loop,
  objectPosition = 'center 30%',
  className = '',
  priority = false,
  sizes = '100vw',
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  // Pause while off-screen.
  useEffect(() => {
    const el = videoRef.current
    if (!el || reducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void el.play().catch(() => {})
        else el.pause()
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reducedMotion])

  if (reducedMotion) {
    return (
      <Image
        src={loop.poster}
        alt={loop.alt}
        fill
        priority={priority}
        className={`object-cover ${className}`}
        style={{ objectPosition }}
        sizes={sizes}
      />
    )
  }

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={loop.poster}
      aria-label={loop.alt}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
      style={{ objectPosition }}
    >
      {loop.webm && <source src={loop.webm} type="video/webm" />}
      <source src={loop.mp4} type="video/mp4" />
    </video>
  )
}
