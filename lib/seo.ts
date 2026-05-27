export const siteMeta = {
  name:        'Alliance International School',
  shortName:   'AIS Banur',
  url:         'https://ais.ac.in',
  description: 'Alliance International School — A premier CBSE school in Banur, Punjab. Holistic education that nurtures every child academically, emotionally, and physically.',
  logo:        '/images/logo.png',
  locale:      'en_IN',
  twitter:     '@AISchoolBanur',
  keywords:    ['AIS','CBSE school Banur', 'best school Punjab', 'Alliance International School', 'boarding school Chandigarh', 'IB school Punjab'],
}

export function buildMetadata(page: {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
}) {
  return {
    title:       `${page.title} | ${siteMeta.shortName}`,
    description: page.description,
    keywords:    [...siteMeta.keywords, ...(page.keywords ?? [])],
    metadataBase: new URL(siteMeta.url),
    alternates:  { canonical: page.path },
    openGraph: {
      title:       `${page.title} | ${siteMeta.name}`,
      description: page.description,
      url:         `${siteMeta.url}${page.path}`,
      siteName:    siteMeta.name,
      locale:      siteMeta.locale,
      type:        'website' as const,
      images: [{ url: page.image ?? '/images/og-default.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card:        'summary_large_image' as const,
      site:        siteMeta.twitter,
      title:       `${page.title} | ${siteMeta.shortName}`,
      description: page.description,
      images:      [page.image ?? '/images/og-default.jpg'],
    },
  }
}
