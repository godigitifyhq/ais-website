import { AdmissionSidebar } from './AdmissionSidebar'

export function AdmissionLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 lg:gap-12 items-start">

        {/* Main content — scrolls normally */}
        <div className="space-y-20 lg:space-y-24 min-w-0">
          {children}
        </div>

        {/* Sidebar column — full height of layout, lg+ only */}
        <div className="hidden lg:block self-stretch border-l border-border pl-8">
          <div className="sticky top-28">
            <AdmissionSidebar />
          </div>
        </div>

      </div>
    </div>
  )
}
