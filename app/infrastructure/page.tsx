import { buildMetadata }             from '@/lib/seo'
import { PageTransition }            from '@/components/ui/PageTransition'
import { InfraPageHero }             from '@/components/sections/infrastructure/InfraPageHero'
import { CampusPhilosophy }          from '@/components/sections/infrastructure/CampusPhilosophy'
import { CampusOverview }            from '@/components/sections/infrastructure/CampusOverview'
import { CampusGalleryStrip }        from '@/components/sections/infrastructure/CampusGalleryStrip'
import { AllianceDifferenceInfra }   from '@/components/sections/infrastructure/AllianceDifferenceInfra'
import { CampusBlocksNav }           from '@/components/sections/infrastructure/CampusBlocksNav'
import { CampusBlockSection }        from '@/components/sections/infrastructure/CampusBlockSection'
import { SportsAndGrounds }          from '@/components/sections/infrastructure/SportsAndGrounds'
import { ArtsAndFineArts }           from '@/components/sections/infrastructure/ArtsAndFineArts'
import { HealthAndWellbeing }        from '@/components/sections/infrastructure/HealthAndWellbeing'
import { StaffFacilities }           from '@/components/sections/infrastructure/StaffFacilities'
import { TransportSection }          from '@/components/sections/infrastructure/TransportSection'
import { VisitCampusCTA }            from '@/components/sections/infrastructure/VisitCampusCTA'
import { campusBlocks }              from '@/data/infrastructure'

export const metadata = buildMetadata({
  title:       'Infrastructure & Campus',
  description: 'Explore the world-class campus of Alliance International School in Banur, Punjab — kindergarten block, academic block, sports grounds, arts studio, health services, and transport.',
  path:        '/infrastructure',
  keywords:    ['AIS campus', 'Alliance International School infrastructure', 'school facilities Banur Punjab'],
  image:       '/images/infrastructure/og-campus.jpg',
})

export default function InfrastructurePage() {
  return (
    <PageTransition>
      <InfraPageHero />
      <CampusPhilosophy />
      <CampusOverview />

      {/* Visual-first: one bento of the campus before the block descriptions.
          FacilityInUseSection used to sit here too, but it showed the same
          campus in the same way directly below — a full screen of scrolling
          for no new information. Each block now carries its own photography. */}
      <CampusGalleryStrip />

      <AllianceDifferenceInfra />
      <CampusBlocksNav />
      {campusBlocks.map((block, index) => (
        <CampusBlockSection key={block.id} block={block} index={index} />
      ))}
      <SportsAndGrounds />
      <ArtsAndFineArts />
      <HealthAndWellbeing />
      <StaffFacilities />
      <TransportSection />
      <VisitCampusCTA />
    </PageTransition>
  )
}
