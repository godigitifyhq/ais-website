import { buildMetadata }  from '@/lib/seo'
import { PageTransition }  from '@/components/ui/PageTransition'
import { PageHero }        from '@/components/ui/PageHero'
import Link                from 'next/link'
import { ArrowLeft }       from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return buildMetadata({
    title,
    description: `Read our blog post: ${title} — insights and updates from Alliance International School.`,
    path:        `/blogs/${slug}`,
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const title = slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return (
    <PageTransition>
      <PageHero
        title={title}
        breadcrumbs={[{ label: 'Blogs', href: '/blogs' }, { label: title }]}
      />

      <article className="py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <div className="aspect-video rounded-2xl bg-surface-alt border border-border flex items-center justify-center text-text-muted/30 mb-8">
              <p className="font-body text-sm">Blog cover image</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="font-body text-base text-text-muted leading-relaxed">
              This is a placeholder blog post. Content for <strong>{title}</strong> will be added here. In a production build, this page would be powered by a CMS (Contentful, Sanity, or Notion) with rich text content pulled at build time or on-demand.
            </p>
            <p className="font-body text-base text-text-muted leading-relaxed mt-4">
              For now, please visit the main blogs listing page to see all available articles.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
            >
              <ArrowLeft size={16} /> Back to Blogs
            </Link>
          </div>
        </div>
      </article>
    </PageTransition>
  )
}
