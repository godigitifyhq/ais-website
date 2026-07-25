import { buildMetadata }            from '@/lib/seo'
import { PageTransition }           from '@/components/ui/PageTransition'
import { ResourcesHero }            from '@/components/sections/resources/ResourcesHero'
import { ResourcesPageClient }      from '@/components/sections/resources/ResourcesPageClient'
import { UsefulLinksStrip }         from '@/components/sections/resources/UsefulLinksStrip'
import { AdmissionCTASection }      from '@/components/sections/home/AdmissionCTASection'

export const metadata = buildMetadata({
  title:       'Academic Resources',
  description: 'Free CBSE resources for AIS students — NCERT solutions, sample papers, and syllabus for Class 1 to 12. Your academic companion from Alliance International School, Banur.',
  path:        '/resources',
  keywords:    ['CBSE resources', 'NCERT solutions Banur', 'CBSE sample papers Punjab', 'class 10 solutions', 'Alliance school resources'],
})

export default function ResourcesPage() {
  return (
    <PageTransition>
      <ResourcesHero />
      <ResourcesPageClient />
      <UsefulLinksStrip />
      <AdmissionCTASection />
    </PageTransition>
  )
}
