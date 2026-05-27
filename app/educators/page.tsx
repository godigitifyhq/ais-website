import { buildMetadata }         from '@/lib/seo'
import { PageTransition }        from '@/components/ui/PageTransition'
import { EducatorsPageHero }     from '@/components/sections/educators/PageHero'
import { IntroStatement }        from '@/components/sections/educators/IntroStatement'
import { SkewedContentCard }     from '@/components/sections/educators/SkewedContentCard'
import { StatsStrip }            from '@/components/sections/educators/StatsStrip'
import { TeacherQuoteSection }   from '@/components/sections/educators/TeacherQuoteSection'
import { ManagementCarousel }    from '@/components/sections/educators/ManagementCarousel'
import { JoinTeamCTA }           from '@/components/sections/educators/JoinTeamCTA'
import { educatorSections }      from '@/data/educators'

export const metadata = buildMetadata({
  title:       'Our Educators',
  description: "Meet the passionate, qualified faculty at Alliance International School — self-evolving teachers committed to every child's growth.",
  path:        '/educators',
  keywords:    ['AIS teachers', 'Alliance International School faculty', 'best teachers Banur Punjab'],
  image:       '/images/og-educators.jpg',
})

export default function EducatorsPage() {
  return (
    <PageTransition>
      <EducatorsPageHero />
      <IntroStatement />
      {educatorSections.map((section) => (
        <SkewedContentCard key={section.id} section={section} />
      ))}
      <StatsStrip />
      <TeacherQuoteSection />
      <ManagementCarousel />
      <JoinTeamCTA />
    </PageTransition>
  )
}
