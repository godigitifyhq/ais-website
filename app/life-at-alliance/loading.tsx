export default function LifeAtAllianceLoading() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8" style={{ background: 'var(--color-bg)' }}>
      {/* Hero skeleton */}
      <div className="h-48 rounded-2xl animate-pulse mb-16" style={{ background: 'var(--color-surface-alt)' }} />

      {/* Content skeletons */}
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
        >
          <div
            className="aspect-[4/3] rounded-2xl animate-pulse"
            style={{ background: 'var(--color-surface-alt)' }}
          />
          <div className="space-y-4 self-center">
            <div className="h-3 w-28 rounded animate-pulse" style={{ background: 'var(--color-surface-alt)' }} />
            <div className="h-8 w-3/4 rounded animate-pulse" style={{ background: 'var(--color-surface-alt)' }} />
            <div className="h-4 w-full rounded animate-pulse" style={{ background: 'var(--color-surface-alt)' }} />
            <div className="h-4 w-5/6 rounded animate-pulse" style={{ background: 'var(--color-surface-alt)' }} />
            <div className="h-4 w-4/5 rounded animate-pulse" style={{ background: 'var(--color-surface-alt)' }} />
          </div>
        </div>
      ))}
    </div>
  )
}
