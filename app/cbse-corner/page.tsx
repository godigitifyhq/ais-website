import { buildMetadata }       from '@/lib/seo'
import { PageTransition }      from '@/components/ui/PageTransition'
import { PageBanner }          from '@/components/cbse/PageBanner'
import { DocumentsGrid }       from '@/components/cbse/DocumentsGrid'
import { BookListCTA }         from '@/components/cbse/BookListCTA'
import { CBSEUpdatesStrip }    from '@/components/cbse/CBSEUpdatesStrip'
import { SyllabusSection }     from '@/components/cbse/SyllabusSection'
import { ImportantDates }      from '@/components/cbse/ImportantDates'
import { WhyCBSE }             from '@/components/cbse/WhyCBSE'
import { FAQAccordion }        from '@/components/cbse/FAQAccordion'
import { ContactStrip }        from '@/components/cbse/ContactStrip'

export const metadata = buildMetadata({
  title:       'CBSE Corner',
  description: 'Access CBSE compliance documents, academic calendar, mandatory disclosure, affiliation letters, class-wise syllabus PDFs, important dates, and FAQs — Alliance International School, Banur.',
  path:        '/cbse-corner',
  keywords:    ['AIS CBSE corner', 'CBSE syllabus 2025-26 PDF', 'Alliance International School CBSE documents', 'AIS mandatory disclosure', 'CBSE affiliation letter AIS', 'CBSE school Banur Punjab'],
})

export default function CBSECornerPage() {
  return (
    <PageTransition>
      <PageBanner />
      <CBSEUpdatesStrip />
      <DocumentsGrid />
      <BookListCTA />
      <SyllabusSection />
      <ImportantDates />
      <WhyCBSE />
      <FAQAccordion />
      <ContactStrip />
    </PageTransition>
  )
}
