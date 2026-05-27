export default function GalleryLoading() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-bg)' }}>
      {/* Hero skeleton */}
      <div className="h-48 rounded-2xl animate-pulse mb-16" style={{ background: 'var(--color-surface-alt)' }} />

      {/* Filter tabs skeleton */}
      <div className="flex gap-3 justify-center mb-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-9 w-24 rounded-full animate-pulse"
            style={{ background: 'var(--color-surface-alt)' }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-xl animate-pulse"
              style={{ background: 'var(--color-surface-alt)' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
