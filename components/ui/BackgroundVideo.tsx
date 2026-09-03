'use client'
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import Image from 'next/image'
import type { VideoLoop } from '@/data/videos'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

interface Props {
  loop:             VideoLoop
  /**
   * Full-length film to graduate to once it has buffered enough to play through
   * without stalling. The short loop carries the section from the first frame;
   * this streams in behind it and crossfades in when it is ready, so the visitor
   * never waits on a 20 MB download to see motion.
   *
   * Skipped entirely on Save-Data and 2G/3G connections — those keep the loop.
   */
  film?:            { src: string }
  /** CSS object-position for the video layer. Defaults to centre. */
  objectPosition?:  string
  className?:       string
  /** Eager-load the reduced-motion poster. Only for above-the-fold use. */
  priority?:        boolean
  sizes?:           string
}

type NetworkInformation = {
  saveData?:      boolean
  effectiveType?: string
  addEventListener?:    (type: 'change', fn: () => void) => void
  removeEventListener?: (type: 'change', fn: () => void) => void
}

function getConnection(): NetworkInformation | undefined {
  return (navigator as Navigator & { connection?: NetworkInformation }).connection
}

/**
 * True when the browser tells us bandwidth is scarce or metered.
 *
 * Same useSyncExternalStore shape as useMediaQuery — the server can't measure a
 * connection, so its snapshot assumes the worst and the film is only added once
 * the client has confirmed there is bandwidth for it.
 */
function useThinConnection(): boolean {
  const subscribe = useCallback((onChange: () => void) => {
    const conn = getConnection()
    conn?.addEventListener?.('change', onChange)
    return () => conn?.removeEventListener?.('change', onChange)
  }, [])

  return useSyncExternalStore(
    subscribe,
    () => {
      const conn = getConnection()
      if (!conn) return false
      if (conn.saveData) return true
      return ['slow-2g', '2g', '3g'].includes(conn.effectiveType ?? '')
    },
    () => true,
  )
}

/**
 * Silent, looping video background.
 *
 * Falls back to the poster image when the visitor prefers reduced motion, and
 * pauses whenever the section scrolls out of view so we are never decoding
 * frames nobody is looking at.
 *
 * Pass `film` to graduate from the short loop to the full production once it has
 * buffered — see the prop docs above.
 */
export function BackgroundVideo({
  loop,
  film,
  objectPosition = 'center 30%',
  className = '',
  priority = false,
  sizes = '100vw',
}: Props) {
  const loopRef = useRef<HTMLVideoElement>(null)
  const filmRef = useRef<HTMLVideoElement>(null)
  const reducedMotion  = usePrefersReducedMotion()
  const thinConnection = useThinConnection()

  // Flipped once the film can play through — this is what triggers the crossfade.
  const [filmReady, setFilmReady] = useState(false)
  // Cleared if the film 404s or fails to decode; the loop then stands alone.
  const [filmFailed, setFilmFailed] = useState(false)

  const wantsFilm = Boolean(film) && !reducedMotion && !thinConnection && !filmFailed

  // Pause while off-screen.
  useEffect(() => {
    const el = loopRef.current
    if (!el || reducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only the visible layer needs to be decoding frames.
        const active = filmReady ? filmRef.current : el
        const idle   = filmReady ? el : filmRef.current

        idle?.pause()
        if (entry.isIntersecting) void active?.play().catch(() => {})
        else active?.pause()
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reducedMotion, filmReady])

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
    <>
      <video
        ref={loopRef}
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

      {wantsFilm && film && (
        <video
          ref={filmRef}
          key={film.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={loop.poster}
          aria-hidden="true"
          onCanPlayThrough={() => setFilmReady(true)}
          onError={() => setFilmFailed(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${className}`}
          style={{ objectPosition, opacity: filmReady ? 1 : 0 }}
        >
          <source src={film.src} type="video/mp4" />
        </video>
      )}
    </>
  )
}
