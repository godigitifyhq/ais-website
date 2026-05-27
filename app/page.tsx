import { buildMetadata }            from '@/lib/seo'
import { PageTransition }           from '@/components/ui/PageTransition'
import { HeroSection }              from '@/components/sections/home/HeroSection'
import { TrustStrip }               from '@/components/sections/home/TrustStrip'
import { AboutSection }             from '@/components/sections/home/AboutSection'
import { PhilosophyBreak }          from '@/components/sections/home/PhilosophyBreak'
import { WhyAISSection }            from '@/components/sections/home/WhyAISSection'
import { FacilitiesSection }        from '@/components/sections/home/FacilitiesSection'
import { CampusBreather }           from '@/components/sections/home/CampusBreather'
import { HolisticJourneySection }   from '@/components/sections/home/HolisticJourneySection'
import { LifeAtAllianceSection }    from '@/components/sections/home/LifeAtAllianceSection'
import { EventsSection }            from '@/components/sections/home/EventsSection'
import { AchievementsSection }      from '@/components/sections/home/AchievementsSection'
import { AdmissionCTASection }      from '@/components/sections/home/AdmissionCTASection'
import { AffiliationsSection }      from '@/components/sections/home/AffiliationsSection'

export const metadata = buildMetadata({
  title:       'Home',
  description: 'Alliance International School — A premier CBSE school in Banur, Punjab. Holistic education that nurtures every child academically, emotionally, and physically since 2015.',
  path:        '/',
  image:       '/images/og-home.jpg',
})

export default function HomePage() {
  return (
    <PageTransition>
      <HeroSection />
      <TrustStrip />
      <AboutSection />
      <PhilosophyBreak />
      <WhyAISSection />
      <FacilitiesSection />
      <CampusBreather />
      <HolisticJourneySection />
      <LifeAtAllianceSection />
      <EventsSection />
      <AchievementsSection />
      <AdmissionCTASection />
      <AffiliationsSection />
    </PageTransition>
  )
}
