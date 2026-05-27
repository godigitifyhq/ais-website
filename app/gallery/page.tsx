import { buildMetadata }  from '@/lib/seo'
import { PageHero }        from '@/components/ui/PageHero'
import { PageTransition }  from '@/components/ui/PageTransition'
import { SectionHeading }  from '@/components/ui/SectionHeading'

export const metadata = buildMetadata({
  title:       'Photo Gallery',
  description: 'Browse photos from Alliance International School — classrooms, sports events, annual days, robotics competitions, and campus life.',
  path:        '/gallery',
  keywords:    ['AIS photo gallery', 'Alliance school photos', 'school events Punjab'],
})

const categories = ['All', 'Campus', 'Sports', 'Events', 'Academics', 'Robotics', 'Cultural']

export default function GalleryPage() {
  return (
    <PageTransition>
      <PageHero
        title="Gallery"
        subtitle="A glimpse into life at Alliance International School — in classrooms, on fields, on stage, and everywhere in between."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-20 bg-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Memories from our community"
            align="center"
            className="mb-10 mx-auto max-w-lg"
          />

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  cat === 'All'
                    ? 'bg-primary text-white'
                    : 'bg-surface border border-border text-text-muted hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid placeholder */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`rounded-2xl bg-surface-alt border border-border flex items-center justify-center text-text-muted/30 ${
                  i === 0 || i === 5 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
                }`}
              >
                <div className="text-center p-4">
                  <p className="font-body text-xs">Photo {i + 1}</p>
                  <p className="font-body text-xs mt-0.5 opacity-60">Add to /public/images/gallery/</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
