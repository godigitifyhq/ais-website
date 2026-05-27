import Link from 'next/link'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title:       'Page Not Found',
  description: 'The page you are looking for does not exist.',
  path:        '/404',
})

export default function NotFound() {
  return (
    <main
      className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center"
      style={{ background: 'var(--color-bg)' }}
    >
      <p
        className="font-display font-black select-none leading-none mb-6"
        style={{ fontSize: 'clamp(6rem, 20vw, 14rem)', color: 'var(--color-surface-alt)' }}
        aria-hidden="true"
      >
        404
      </p>

      <h1
        className="font-display text-2xl sm:text-3xl font-bold mb-3"
        style={{ color: 'var(--color-text)', marginTop: '-3rem' }}
      >
        Page Not Found
      </h1>
      <p
        className="font-body text-base mb-8 max-w-sm"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have moved or been removed.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-white transition-colors duration-200"
          style={{ background: 'var(--color-primary)' }}
        >
          Go Home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-200"
          style={{
            border:  '1.5px solid var(--color-primary)',
            color:   'var(--color-primary)',
            background: 'transparent',
          }}
        >
          Contact Us
        </Link>
      </div>
    </main>
  )
}
