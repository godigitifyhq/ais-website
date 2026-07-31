'use client'
import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface Props {
  isOpen:   boolean
  onClose:  () => void
  videoUrl: string
  title:    string
  /** Poster frame — self-hosted files only. */
  poster?:  string
  /** CSS aspect-ratio for the frame. Defaults to 16 / 9. */
  ratio?:   string
}

export function VideoModal({ isOpen, onClose, videoUrl, title, poster, ratio = '16 / 9' }: Props) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Self-hosted files get a real <video> element; anything else stays an embed.
  const isSelfHosted = /\.(mp4|webm|mov)(\?|$)/i.test(videoUrl)

  const embedUrl = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')
    ? videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')
    : videoUrl

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9998] bg-black/80 flex items-center justify-center p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} video`}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden"
            style={{ aspectRatio: ratio }}
            onClick={e => e.stopPropagation()}
          >
            {isSelfHosted ? (
              <video
                key={videoUrl}
                src={videoUrl}
                poster={poster}
                title={title}
                controls
                autoPlay
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <iframe
                src={embedUrl}
                title={`${title} video`}
                allow="autoplay; fullscreen"
                className="absolute inset-0 w-full h-full"
              />
            )}
            <button
              onClick={onClose}
              aria-label="Close video"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black flex items-center justify-center text-white transition-colors z-10"
            >
              <X size={18} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
