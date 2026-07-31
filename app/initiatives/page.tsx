import { buildMetadata }           from '@/lib/seo'
import { PageTransition }          from '@/components/ui/PageTransition'
import { PageHero }                from '@/components/initiatives/PageHero'
import { VideoEmbed }              from '@/components/initiatives/VideoEmbed'
import { InitiativeNav }           from '@/components/initiatives/InitiativeNav'
import { SkewedContentCard }       from '@/components/sections/educators/SkewedContentCard'
import { EquipmentAndToolsGrid }   from '@/components/initiatives/EquipmentAndToolsGrid'
import { HowToJoinProcess }        from '@/components/initiatives/HowToJoinProcess'
import { ProgrammeCards }          from '@/components/initiatives/ProgrammeCards'
import { BreatherImage }           from '@/components/life/BreatherImage'
import { VideoFeature }            from '@/components/ui/VideoFeature'
import { initiativeSections } from '@/data/ourInitiatives'
import { roboticsFilm, sportsFilm } from '@/data/videos'

export const metadata = buildMetadata({
  title:       'Our Initiatives',
  description: "Explore Alliance International School's flagship initiatives — Robotics Lab, Sports Academy, and Day Boarding. Enrolments open for 2025–26.",
  path:        '/initiatives',
  keywords:    ['AIS robotics lab', 'Alliance International School sports academy', 'AIS day boarding Banur', 'STEM school Punjab'],
})

export default function InitiativesPage() {
  return (
    <PageTransition>
      <PageHero />

      <VideoEmbed film={roboticsFilm} />

      <InitiativeNav />

      <section id="robotics-lab" style={{ background: 'var(--color-bg)' }}>
        <SkewedContentCard section={initiativeSections[0]} />
      </section>

      <section id="sports-academy" style={{ background: 'var(--color-surface-alt)' }}>
        <SkewedContentCard section={initiativeSections[1]} />

        {/* Facilities tour — the courts and grounds the academy trains on */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20 lg:pb-28">
          <VideoFeature film={sportsFilm} showCaption sizes="(max-width: 896px) 100vw, 896px" />
        </div>
      </section>

      <section id="day-boarding" style={{ background: 'var(--color-bg)' }}>
        <SkewedContentCard section={initiativeSections[2]} />
      </section>

      <BreatherImage
        src="/images/initiatives/image.png"
        alt="AIS students collaborating on a robotics project"
      />

      <EquipmentAndToolsGrid />
      <HowToJoinProcess />
      <ProgrammeCards />
    </PageTransition>
  )
}
