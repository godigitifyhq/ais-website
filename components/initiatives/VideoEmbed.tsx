interface Props {
  videoId: string
  title:   string
  caption?: string
}

export function VideoEmbed({ videoId, title, caption }: Props) {
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
        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position:     'absolute',
              inset:        0,
              width:        '100%',
              height:       '100%',
              borderRadius: '0.5rem',
              border:       'none',
            }}
          />
        </div>

        {caption && (
          <p
            className="text-center mt-4 font-accent italic text-base"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            {caption}
          </p>
        )}
      </div>
    </section>
  )
}
