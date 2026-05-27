import { buildMetadata }                                from '@/lib/seo'
import { PageTransition }                              from '@/components/ui/PageTransition'
import { PageHero }                                    from '@/components/life/PageHero'
import { PhilosophyIntro }                             from '@/components/life/PhilosophyIntro'
import { PillarsOfLifeGrid }                           from '@/components/life/PillarsOfLifeGrid'
import { BreatherImage }                               from '@/components/life/BreatherImage'
import { ActivityListAndGrid }                         from '@/components/life/ActivityListAndGrid'
import { SkewedContentCard }                           from '@/components/sections/educators/SkewedContentCard'
import { ActivityBasedLearning }                       from '@/components/life/ActivityBasedLearning'
import { StudentCouncil }                              from '@/components/life/StudentCouncil'
import { LifeGalleryCTA }                              from '@/components/life/LifeGalleryCTA'
import { lifeSections, breatherImages }                from '@/data/lifeAtAlliance'

export const metadata = buildMetadata({
  title:       'Life at Alliance',
  description: 'Discover the vibrant life at Alliance International School — hostel life, arts, clubs, MUN, literary activities, sports, and a curriculum that goes beyond the best.',
  path:        '/life-at-alliance',
  keywords:    ['life at Alliance International School', 'AIS student life', 'AIS hostel', 'AIS activities Banur', 'AIS clubs MUN', 'activity based learning Punjab'],
})

export default function LifeAtAlliancePage() {
  return (
    <PageTransition>

      {/* 01. Hero */}
      <PageHero />

      {/* 02. Philosophy intro — "Going Beyond" */}
      <PhilosophyIntro />

      {/* 03. Five Pillars dark grid */}
      <PillarsOfLifeGrid />

      {/* 04. Breather image #1 */}
      <BreatherImage
        src={breatherImages.first.src}
        alt={breatherImages.first.alt}
      />

      {/* 05. Activity list + photo-card grid */}
      <ActivityListAndGrid />

      {/* 06. Hostel Life */}
      <section id="hostel-life" style={{ background: 'var(--color-bg)' }}>
        <SkewedContentCard section={lifeSections[0]} />
      </section>

      {/* 07. Art & Craft */}
      <section id="art-and-craft" style={{ background: 'var(--color-surface-alt)' }}>
        <SkewedContentCard section={lifeSections[1]} />
      </section>

      {/* 08. Clubs & Societies */}
      <section id="clubs" style={{ background: 'var(--color-bg)' }}>
        <SkewedContentCard section={lifeSections[2]} />
      </section>

      {/* 09. Literary & Quizzing */}
      <section id="literary-quizzing" style={{ background: 'var(--color-surface-alt)' }}>
        <SkewedContentCard section={lifeSections[3]} />
      </section>

      {/* 10. Breather image #2 */}
      <BreatherImage
        src={breatherImages.second.src}
        alt={breatherImages.second.alt}
      />

      {/* 11. Activity-Based Learning editorial */}
      <ActivityBasedLearning />

      {/* 12. Student Council */}
      <StudentCouncil />

      {/* 13. Gallery mosaic + CTA band */}
      <LifeGalleryCTA />

    </PageTransition>
  )
}
