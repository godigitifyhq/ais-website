export default function BlogsLoading() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-bg)' }}>
      {/* Hero skeleton */}
      <div className="h-48 rounded-2xl animate-pulse mb-16" style={{ background: 'var(--color-surface-alt)' }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden animate-pulse"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
            >
              <div className="aspect-video" style={{ background: 'var(--color-surface-alt)' }} />
              <div className="p-6 space-y-3">
                <div className="h-3 w-24 rounded" style={{ background: 'var(--color-surface-alt)' }} />
                <div className="h-5 w-full rounded" style={{ background: 'var(--color-surface-alt)' }} />
                <div className="h-5 w-4/5 rounded" style={{ background: 'var(--color-surface-alt)' }} />
                <div className="h-3 w-full rounded" style={{ background: 'var(--color-surface-alt)' }} />
                <div className="h-3 w-3/4 rounded" style={{ background: 'var(--color-surface-alt)' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
