import { cbseUpdates } from '@/data/cbseCorner'

const doubled = [...cbseUpdates, ...cbseUpdates]

export function CBSEUpdatesStrip() {
  return (
    <>
      <div
        style={{ background: 'var(--color-primary)' }}
        className="w-full flex items-center overflow-hidden"
        aria-label="CBSE Updates ticker"
      >
        {/* Left label */}
        <div
          className="shrink-0 flex items-center gap-3 px-4 sm:px-6 py-3.5"
          style={{ borderRight: '1px solid rgba(255,255,255,0.25)', zIndex: 1, background: 'var(--color-primary)' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#ffffff',
              whiteSpace: 'nowrap',
            }}
          >
            CBSE Updates
          </span>
        </div>

        {/* Scrolling ticker */}
        <div className="overflow-hidden flex-1" aria-live="off">
          <div className="animate-marquee-slow flex whitespace-nowrap">
            {doubled.map((update, i) => (
              <span
                key={`${update.id}-${i}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0 2rem' }}
              >
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: 'var(--color-primary-dark)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {update.date}
                </span>
                {update.href ? (
                  <a
                    href={update.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.88)', textDecoration: 'underline' }}
                  >
                    {update.headline}
                  </a>
                ) : (
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.88)' }}>
                    {update.headline}
                  </span>
                )}
                <span style={{ color: 'rgba(255,255,255,0.3)', marginLeft: '0.75rem' }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Accessible static list for screen readers */}
      <details className="sr-only">
        <summary>CBSE Updates (screen reader version)</summary>
        <ul>
          {cbseUpdates.map((u) => (
            <li key={u.id}>
              {u.date} — {u.headline}
            </li>
          ))}
        </ul>
      </details>
    </>
  )
}
