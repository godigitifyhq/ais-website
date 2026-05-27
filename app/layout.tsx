import type { Metadata }           from 'next'
import { Playfair_Display, DM_Sans, Cormorant } from 'next/font/google'
import { PageLoader }              from '@/components/ui/PageLoader'
import { Navbar }                  from '@/components/layout/Navbar'
import { Footer }                  from '@/components/layout/Footer'
import { AdmissionBanner }         from '@/components/ui/AdmissionBanner'
import { GlobalEnquiryWidget }     from '@/components/ui/GlobalEnquiryWidget'
import { siteMeta }                from '@/lib/seo'
import './globals.css'

const displayFont = Playfair_Display({
  subsets:  ['latin'],
  variable: '--font-playfair-display',
  weight:   ['400', '600', '700', '900'],
  display:  'swap',
})

const bodyFont = DM_Sans({
  subsets:  ['latin'],
  variable: '--font-dm-sans',
  weight:   ['300', '400', '500', '600'],
  display:  'swap',
})

const accentFont = Cormorant({
  subsets:  ['latin'],
  variable: '--font-cormorant',
  weight:   ['400', '600'],
  style:    ['normal', 'italic'],
  display:  'swap',
})

export const metadata: Metadata = {
  title:       { default: siteMeta.name, template: `%s | ${siteMeta.shortName}` },
  description: siteMeta.description,
  metadataBase: new URL(siteMeta.url),
  icons:       { icon: '/favicon.ico', apple: '/apple-icon.png' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${accentFont.variable}`}
    >
      <body className="bg-bg text-text antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999
            focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:text-white"
          style={{ background: 'var(--color-primary)' }}
        >
          Skip to content
        </a>

        <PageLoader />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <AdmissionBanner />
        <GlobalEnquiryWidget />
      </body>
    </html>
  )
}
