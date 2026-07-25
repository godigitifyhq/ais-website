import { buildMetadata }          from '@/lib/seo'
import { PageHero }               from '@/components/ui/PageHero'
import { PageTransition }         from '@/components/ui/PageTransition'
import { GalleryGrid }            from '@/components/sections/gallery/GalleryGrid'
import { VideoMomentsStrip }      from '@/components/sections/gallery/VideoMomentsStrip'
import { AdmissionCTASection }    from '@/components/sections/home/AdmissionCTASection'

export const metadata = buildMetadata({
  title:       'Photo Gallery',
  description: 'Browse photos from Alliance International School — classrooms, sports events, annual days, robotics competitions, and campus life in Banur, Punjab.',
  path:        '/gallery',
  keywords:    ['AIS photo gallery', 'Alliance school photos', 'school events Punjab', 'AIS campus Banur'],
})

export default function GalleryPage() {
  return (
    <PageTransition>
      <PageHero
        title="Our Story in Pictures"
        subtitle="Life at Alliance International School — in classrooms, on fields, on stage, and everywhere in between."
        breadcrumbs={[{ label: 'Gallery' }]}
        backgroundImage='/images/gallery-grid.jpg'
        loopingWords={['Pictures', 'Moments', 'Memories', 'Stories']}
      />

      <GalleryGrid />

      <VideoMomentsStrip />

      <AdmissionCTASection />
    </PageTransition>
  )
}
