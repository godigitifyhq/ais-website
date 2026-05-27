import { buildMetadata }         from '@/lib/seo'
import { PageHero }               from '@/components/ui/PageHero'
import { PageTransition }         from '@/components/ui/PageTransition'
import { SectionHeading }         from '@/components/ui/SectionHeading'
import Link                       from 'next/link'
import { ArrowRight }             from 'lucide-react'
import { blogPosts, formatPublishedDate } from '@/data/blogs'

export const metadata = buildMetadata({
  title:       'Blogs',
  description: 'Read insights, news, and stories from Alliance International School — parenting advice, academic updates, school events, and more.',
  path:        '/blogs',
  keywords:    ['AIS blog', 'school news Punjab', 'education blog India', 'Alliance school updates'],
})

export default function BlogsPage() {
  return (
    <PageTransition>
      <PageHero
        title="Blogs"
        subtitle="Insights, stories, and updates from the Alliance International School community."
        breadcrumbs={[{ label: 'Blogs' }]}
      />

      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Latest Posts" title="From our community" className="mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <article
                key={post.slug}
                className="group flex flex-col bg-surface border border-border rounded-2xl overflow-hidden
                  hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-video bg-surface-alt flex items-center justify-center text-text-muted/30">
                  <p className="font-body text-xs">Blog image</p>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold text-primary uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted">
                      {formatPublishedDate(post.publishedAt)}
                    </span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-text leading-snug mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-sm text-text-muted leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    Read More <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
