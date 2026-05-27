import { Phone, Mail } from 'lucide-react'

export function ContactStrip() {
  return (
    <section
      style={{
        background: 'var(--color-surface-alt)',
        borderTop: '1px solid var(--color-border)',
        padding: '2.5rem 0',
      }}
    >
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center"
      >
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'var(--color-text)',
          }}
        >
          Still have questions about CBSE at AIS?
        </p>

        <span className="hidden sm:block" style={{ color: 'var(--color-border)', fontSize: '1.25rem' }}>|</span>

        <a
          href="tel:+919464311111"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: 'var(--color-primary)',
            textDecoration: 'none',
          }}
          className="hover:underline"
        >
          <Phone size={15} />
          +91-94643-11111
        </a>

        <span className="hidden sm:block" style={{ color: 'var(--color-border)', fontSize: '1.25rem' }}>|</span>

        <a
          href="mailto:info@ais.ac.in"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.375rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            fontWeight: 600,
            color: 'var(--color-primary)',
            textDecoration: 'none',
          }}
          className="hover:underline"
        >
          <Mail size={15} />
          info@ais.ac.in
        </a>
      </div>
    </section>
  )
}
