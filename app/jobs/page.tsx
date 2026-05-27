import { buildMetadata } from '@/lib/seo'
import { PageTransition } from '@/components/ui/PageTransition'
import { PageHero }       from '@/components/ui/PageHero'
import Link               from 'next/link'
import { ArrowRight }     from 'lucide-react'

export const metadata = buildMetadata({
  title:       'Jobs at AIS',
  description: 'Explore career opportunities at Alliance International School, Banur. Join our team of passionate educators and support staff.',
  path:        '/jobs',
  keywords:    ['jobs at AIS', 'teaching jobs Punjab', 'Alliance International School careers'],
})

export default function JobsPage() {
  return (
    <PageTransition>
      <PageHero
        title="Join Our Team"
        subtitle="We are always looking for passionate educators and staff who share our belief in holistic education."
        breadcrumbs={[{ label: 'Jobs' }]}
      />

      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ background: 'var(--color-bg)' }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="font-body text-base leading-relaxed mb-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Current openings are posted on our recruitment portal. Visit the link below to browse
            available positions and submit your application.
          </p>

          <a
            href="https://ais-dashboard-eta.vercel.app/form"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-colors duration-200"
            style={{ background: 'var(--color-primary)' }}
          >
            View Open Positions
            <ArrowRight size={16} />
          </a>

          <p className="mt-8 font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>
            Questions? Email us at{' '}
            <a
              href="mailto:info@ais.ac.in"
              className="font-semibold"
              style={{ color: 'var(--color-primary)' }}
            >
              info@ais.ac.in
            </a>
            {' '}or{' '}
            <Link href="/contact" style={{ color: 'var(--color-primary)' }} className="font-semibold">
              contact us
            </Link>
            .
          </p>
        </div>
      </section>
    </PageTransition>
  )
}
