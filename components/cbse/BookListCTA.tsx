import Link from 'next/link'
import { BookOpen, GraduationCap } from 'lucide-react'

export function BookListCTA() {
  return (
    <section style={{ background: 'var(--color-bg)', padding: '0 0 4rem' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
        <div
          style={{
            width: '100%',
            maxWidth: '640px',
            background: 'var(--color-surface-alt)',
            border: '1.5px solid var(--color-border)',
            borderRadius: '0.875rem',
            padding: '2rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              color: 'var(--color-text-muted)',
            }}
          >
            Looking for the prescribed textbook list?
          </p>

          <a
            href="/docs/cbse/book-list-2025-26.pdf"
            download
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2.25rem',
              border: '2px solid var(--color-primary)',
              borderRadius: '0.375rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-primary)',
              background: 'transparent',
              textDecoration: 'none',
              transition: 'background 200ms ease, color 200ms ease',
            }}
            className="hover:bg-primary hover:text-white"
            aria-label="Download Book List 2025-26 PDF"
          >
            <BookOpen size={16} />
            View Book List
          </a>
        </div>

        {/* Cross-link to study resources page */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.8125rem',
            color: 'var(--color-text-muted)',
            textAlign: 'center',
          }}
        >
          Need NCERT solutions, sample papers, or syllabus PDFs?{' '}
          <Link
            href="/resources"
            className="font-semibold hover:underline"
            style={{ color: 'var(--color-primary)' }}
          >
            <GraduationCap size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '3px' }} />
            Browse Academic Resources →
          </Link>
        </p>
      </div>
    </section>
  )
}
