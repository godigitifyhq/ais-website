'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { VideoModal } from '@/components/ui/VideoModal'
import { BackgroundVideo } from '@/components/ui/BackgroundVideo'
import { useIsMobile } from '@/hooks/useMediaQuery'
import type { VideoFilm } from '@/data/videos'

interface Props {
  film:          VideoFilm
  /** Overrides the film's own ratio for the poster frame (the modal keeps the film's). */
  posterRatio?:  string
  /** Show the film's caption under the frame. */
  showCaption?:  boolean
  /** Tailwind rounding on the poster frame. */
  rounded?:      string
  /** Fill the parent instead of sizing to an aspect ratio. */
  fill?:         boolean
  priority?:     boolean
  className?:    string
  sizes?:        string
}

/**
 * Poster frame with a play button that opens the full film in a modal.
 *
 * On phones and tablets the frame autoplays the film's short silent preview
 * loop instead of showing a static poster, so the page feels alive without a
 * tap. Desktop keeps the still — a grid of moving thumbnails is noisy on a
 * large screen, and hovering already signals interactivity there.
 *
 * Either way the full film (10–20 MB) is only fetched once the visitor clicks.
 */
export function VideoFeature({
  film,
  posterRatio,
  showCaption = false,
  rounded = 'rounded-2xl',
  fill = false,
  priority = false,
  className = '',
  sizes = '(max-width: 1024px) 100vw, 50vw',
}: Props) {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()
  const autoplayPreview = isMobile && Boolean(film.previewLoop)

  return (
    <>
      <div className={className}>
        <div
          className={`relative w-full overflow-hidden ${rounded} ${fill ? 'h-full' : ''}`}
          style={fill ? undefined : { aspectRatio: posterRatio ?? film.ratio }}
        >
          {autoplayPreview && film.previewLoop ? (
            <BackgroundVideo
              loop={film.previewLoop}
              objectPosition="center"
              priority={priority}
              sizes={sizes}
            />
          ) : (
            <Image
              src={film.poster}
              alt={film.title}
              fill
              priority={priority}
              className="object-cover"
              sizes={sizes}
            />
          )}

          {/* Contrast layer so the play button always reads.
              Lighter over a moving preview — the footage is the point there. */}
          <span
            aria-hidden="true"
            className={`absolute inset-0 pointer-events-none ${autoplayPreview ? 'bg-text/15' : 'bg-text/30'}`}
          />

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={
              autoplayPreview
                ? `Watch the full film with sound: ${film.title}`
                : `Play video: ${film.title}`
            }
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 group/play cursor-pointer"
          >
            <motion.span
              className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Play size={22} className="text-white ml-1 fill-white" />
            </motion.span>

            {/* The preview is silent, so say what tapping actually gets you */}
            {autoplayPreview && (
              <span className="font-body text-[10px] font-bold tracking-[0.18em] uppercase text-white/90 bg-text/45 rounded-full px-3 py-1.5">
                Watch with sound
              </span>
            )}
          </button>
        </div>

        {showCaption && film.caption && (
          <p className="font-body text-xs text-text-muted mt-3 text-center tracking-wide">
            {film.caption}
          </p>
        )}
      </div>

      <VideoModal
        isOpen={open}
        onClose={() => setOpen(false)}
        videoUrl={film.src}
        poster={film.poster}
        ratio={film.ratio}
        title={film.title}
      />
    </>
  )
}
