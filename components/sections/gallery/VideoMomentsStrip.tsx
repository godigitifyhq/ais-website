'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { videoMoments, type VideoMoment } from '@/data/gallery'
import { VideoModal } from '@/components/ui/VideoModal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const ease = [0.33, 1, 0.68, 1] as const

export function VideoMomentsStrip() {
  const [activeVideo, setActiveVideo] = useState<VideoMoment | null>(null)

  return (
    <>
      <section className="bg-surface-alt py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

          <SectionHeading
            eyebrow="MOMENTS THAT MOVE"
            title="Watch AIS Come Alive"
            align="center"
            className="mb-12 mx-auto max-w-lg"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoMoments.map((video, i) => (
              <motion.button
                key={video.youtubeId}
                type="button"
                onClick={() => setActiveVideo(video)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                whileHover={{ y: -4 }}
                className="group relative aspect-video overflow-hidden rounded-2xl cursor-pointer text-left w-full"
              >
                {/* Thumbnail */}
                <Image
                  src={video.thumbnailSrc}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-400 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <Play size={22} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="font-body text-[10px] font-bold uppercase tracking-wider text-primary-light">
                    {video.category}
                  </span>
                  <p className="font-display text-sm font-semibold text-white leading-snug mt-0.5">
                    {video.title}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        videoUrl={activeVideo ? `https://www.youtube.com/embed/${activeVideo.youtubeId}` : ''}
        title={activeVideo?.title ?? ''}
        isOpen={activeVideo !== null}
        onClose={() => setActiveVideo(null)}
      />
    </>
  )
}
