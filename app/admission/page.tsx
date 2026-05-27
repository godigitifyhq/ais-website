import { buildMetadata }            from '@/lib/seo'
import { PageTransition }           from '@/components/ui/PageTransition'
import { AdmissionPageOpener }      from '@/components/sections/admission/AdmissionPageOpener'
import { AdmissionLayout }          from '@/components/sections/admission/AdmissionLayout'
import { MobileSidebarStrip }       from '@/components/sections/admission/AdmissionSidebar'
import { ProcessStepsSection }      from '@/components/sections/admission/ProcessStepsSection'
import { ScholarTypeSection }       from '@/components/sections/admission/ScholarTypeSection'
import { FeeStructureSection }      from '@/components/sections/admission/FeeStructureSection'
import { DocumentsSection }         from '@/components/sections/admission/DocumentsSection'
import { AdmissionCriteriaSection } from '@/components/sections/admission/AdmissionCriteriaSection'
import { FAQSection }               from '@/components/sections/admission/FAQSection'
import { AdmissionCTASection }      from '@/components/sections/home/AdmissionCTASection'

export const metadata = buildMetadata({
  title:       'Admission 2026–27',
  description: 'Apply to Alliance International School, Banur. CBSE admissions open for Day Scholars and Boarding students — Pre-Nursery to Class XII. Transparent fee structure and simple process.',
  path:        '/admission',
  keywords:    ['AIS admission', 'Alliance school Banur admission', 'CBSE school Banur fees', 'boarding school Punjab admission 2026'],
  image:       '/images/og-admission.jpg',
})

export default function AdmissionPage() {
  return (
    <PageTransition>

      {/* 1. Hero opener + inline enquiry form */}
      <AdmissionPageOpener />

      {/* Mobile quick-links strip (lg:hidden) */}
      <div className="lg:hidden bg-surface border-b border-border py-3 px-4">
        <MobileSidebarStrip />
      </div>

      {/* 2. How to join — full-width step cards */}
      <ProcessStepsSection />

      {/* 3. Day Scholar vs Boarding chooser — full-width */}
      <ScholarTypeSection />

      {/* 4–7. Reference sections with sticky sidebar */}
      <AdmissionLayout>
        <FeeStructureSection />
        <DocumentsSection />
        <AdmissionCriteriaSection />
        <FAQSection />
      </AdmissionLayout>

      {/* 8. Final conversion CTA */}
      <AdmissionCTASection />

    </PageTransition>
  )
}
