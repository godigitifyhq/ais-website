import { buildMetadata }            from '@/lib/seo'
import { PageTransition }           from '@/components/ui/PageTransition'
import { HeroSection }              from '@/components/sections/home/HeroSection'
import { TrustStrip }               from '@/components/sections/home/TrustStrip'
import { AchievementsStrip }        from '@/components/sections/home/AchievementsStrip'
import { AtmosphereReel }           from '@/components/sections/home/AtmosphereReel'
import { AboutSection }             from '@/components/sections/home/AboutSection'
import { WhyAISSection }            from '@/components/sections/home/WhyAISSection'
import { LifeAtAllianceSection }    from '@/components/sections/home/LifeAtAllianceSection'
import { EventsSection }            from '@/components/sections/home/EventsSection'
import { FacilitiesSection }        from '@/components/sections/home/FacilitiesSection'
import { TestimonialsSection }      from '@/components/sections/home/TestimonialsSection'
import { CBSECornerHook }           from '@/components/sections/home/CBSECornerHook'
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
      <AchievementsStrip />
      <AtmosphereReel />
      <AboutSection />
      <WhyAISSection />
      <LifeAtAllianceSection />
      <EventsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <CBSECornerHook />
      <AdmissionCTASection />
      <AffiliationsSection />
    </PageTransition>
  )
}
