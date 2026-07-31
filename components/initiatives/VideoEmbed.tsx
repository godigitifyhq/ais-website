import { VideoFeature } from '@/components/ui/VideoFeature'
import type { VideoFilm } from '@/data/videos'

interface Props {
  film: VideoFilm
}

export function VideoEmbed({ film }: Props) {
  return (
    <section
      className="py-10 md:py-16"
      style={{ background: 'var(--color-text)',
        backgroundImage: `url(/images/initiatives/bg-image.png)`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
       }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <VideoFeature film={film} rounded="rounded-lg" sizes="(max-width: 896px) 100vw, 896px" />

        {film.caption && (
          <p
            className="text-center mt-4 font-accent italic text-base"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            {film.caption}
          </p>
        )}
      </div>
    </section>
  )
}
