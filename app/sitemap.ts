import type { MetadataRoute } from 'next'

const routes = [
  '',
  '/about',
  '/blog',
  '/buy',
  '/commercial',
  '/compare',
  '/contact',
  '/faq',
  '/favorites',
  '/land',
  '/locations',
  '/privacy',
  '/properties',
  '/rent',
  '/sell-property',
  '/services',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return routes.map((route) => ({
    url: `https://ssproperty.in${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.7,
  }))
}
