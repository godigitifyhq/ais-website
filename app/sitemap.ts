import { MetadataRoute } from 'next'

const routes = [
  '/',
  '/about',
  '/educators',
  '/infrastructure',
  '/life-at-alliance',
  '/admission',
  '/initiatives',
  '/gallery',
  '/blogs',
  '/contact',
  '/resources',
  '/terms',
  '/privacy',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(route => ({
    url:             `https://ais.ac.in${route}`,
    lastModified:    new Date(),
    changeFrequency: (route === '/' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority:        route === '/' ? 1 : 0.8,
  }))
}
