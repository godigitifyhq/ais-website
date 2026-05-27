'use client'
import { useEffect } from 'react'

interface Props {
  error:  Error & { digest?: string }
  reset:  () => void
}

export default function GlobalError({ error, reset }: Props) {
  useEffect(() => {
    console.error('[GlobalError]', error)
  }, [error])

  return (
    <main
      className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center"
      style={{ background: 'var(--color-bg)' }}
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
        style={{ background: 'rgba(192,39,45,0.10)' }}
      >
        <svg
          width="28" height="28" viewBox="0 0 24 24"
          fill="none" stroke="var(--color-primary)" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>

      <h1
        className="font-display text-2xl sm:text-3xl font-bold mb-3"
        style={{ color: 'var(--color-text)' }}
      >
        Something went wrong
      </h1>
      <p
        className="font-body text-base mb-8 max-w-sm"
        style={{ color: 'var(--color-text-muted)' }}
      >
        An unexpected error occurred. Please try again — if the problem persists, contact us.
      </p>

      <button
        type="button"
        onClick={reset}
        className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-white transition-colors duration-200"
        style={{ background: 'var(--color-primary)' }}
      >
        Try Again
      </button>
    </main>
  )
}
