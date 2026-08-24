import { buildMetadata } from "@/lib/seo";
import { PageTransition } from "@/components/ui/PageTransition";
import { PageHero } from "@/components/life/PageHero";
import { PhilosophyIntro } from "@/components/life/PhilosophyIntro";
import { HandsOnProjectsSection } from "@/components/life/HandsOnProjectsSection";
import { PillarsOfLifeGrid } from "@/components/life/PillarsOfLifeGrid";
import { HolisticFilmSection } from "@/components/life/HolisticFilmSection";
import { BreatherImage } from "@/components/life/BreatherImage";
import { ActivityShowcaseGrid } from "@/components/life/ActivityShowcaseGrid";
import { SkewedContentCard } from "@/components/sections/educators/SkewedContentCard";
import { ActivityBasedLearning } from "@/components/life/ActivityBasedLearning";
import { DayAtAISTimeline } from "@/components/life/DayAtAISTimeline";
import { StudentCouncil } from "@/components/life/StudentCouncil";
import { ExcellenceMarquee } from "@/components/life/ExcellenceMarquee";
import { lifeSections, breatherImages } from "@/data/lifeAtAlliance";

export const metadata = buildMetadata({
  title: "Life at Alliance",
  description:
    "Discover the vibrant life at Alliance International School — hostel life, arts, clubs, MUN, literary activities, sports, and a curriculum that goes beyond the best.",
  path: "/life-at-alliance",
  keywords: [
    "life at Alliance International School",
    "AIS student life",
    "AIS hostel",
    "AIS activities Banur",
    "AIS clubs MUN",
    "activity based learning Punjab",
  ],
});

export default function LifeAtAlliancePage() {
  return (
    <PageTransition>
      {/* 01. Hero */}
      <PageHero />

      {/* 02. Philosophy intro */}
      <PhilosophyIntro />

      {/* 02b. The whole-child claim, on film */}
      <HolisticFilmSection />

      {/* 02c. Creative projects and hands-on learning */}
      <HandsOnProjectsSection />

      {/* 03. Five Pillars — image-led cards */}
      <PillarsOfLifeGrid />

      {/* 04. Breather image */}
      <BreatherImage
        src={breatherImages.first.src}
        alt={breatherImages.first.alt}
      />

      {/* 05. Activity Showcase Grid (replaces ActivityListAndGrid) */}
      <ActivityShowcaseGrid />

      {/* 06. Hostel Life */}
      <section id="hostel-life" style={{ background: "var(--color-bg)" }}>
        <SkewedContentCard section={lifeSections[0]} />
      </section>

      {/* 07. Art & Craft */}
      <section
        id="art-and-craft"
        style={{ background: "var(--color-surface-alt)" }}
      >
        <SkewedContentCard section={lifeSections[1]} />
      </section>

      {/* 08. Clubs & Societies */}
      <section id="clubs" style={{ background: "var(--color-bg)" }}>
        <SkewedContentCard section={lifeSections[2]} />
      </section>

      {/* 09. Literary & Quizzing */}
      <section
        id="literary-quizzing"
        style={{ background: "var(--color-surface-alt)" }}
      >
        <SkewedContentCard section={lifeSections[3]} />
      </section>

      {/* 10. Activity-Based Learning — image grid */}
      <ActivityBasedLearning />

      {/* 11. A Day at AIS Timeline */}
      {/* <DayAtAISTimeline /> */}

      {/* 12. Breather image */}
      <BreatherImage
        src={breatherImages.second.src}
        alt={breatherImages.second.alt}
      />

      {/* 13. Student Council */}
      <StudentCouncil />

      {/* 14. Excellence Marquee — auto-scrolling achievement strip */}
      <ExcellenceMarquee />
    </PageTransition>
  );
}
