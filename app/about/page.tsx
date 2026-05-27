import { buildMetadata }       from '@/lib/seo'
import { PageTransition }      from '@/components/ui/PageTransition'
import { AboutPageOpener }     from '@/components/sections/about/AboutPageOpener'
import { CoreValuesSection }     from '@/components/sections/about/CoreValuesSection'
import { MissionVisionSection }  from '@/components/sections/about/MissionVisionSection'
import { PhilosophyPullQuote }   from '@/components/sections/about/PhilosophyPullQuote'
import { LeadershipSection }          from '@/components/sections/about/LeadershipSection'
import { AllianceDifferenceSection }  from '@/components/sections/about/AllianceDifferenceSection'
import { AdmissionCTASection }        from '@/components/sections/home/AdmissionCTASection'

export const metadata = buildMetadata({
  title:       'About Us',
  description: 'Alliance International School — founded in 2015, driven by values, committed to holistic education. Meet our leadership and discover what makes Alliance different.',
  path:        '/about',
  keywords:    ['about Alliance school', 'AIS Banur history', 'Alliance school chairman', 'CBSE school Punjab values'],
  image:       '/images/og-about.jpg',
})

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutPageOpener />
      <CoreValuesSection />
      <MissionVisionSection />
      <PhilosophyPullQuote />
      <LeadershipSection />
      <AllianceDifferenceSection />
      <AdmissionCTASection />
    </PageTransition>
  )
}
