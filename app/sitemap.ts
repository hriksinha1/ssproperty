import type { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'
import { locations } from '@/data/locations'
import { properties } from '@/data/properties'

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
  '/thank-you',
  '/blog/new-town-buyers-guide',
  '/blog/how-to-compare-neighbourhoods',
  '/blog/commercial-spaces-that-fit-growth',
  ...locations.map((location) => `/locations/${location.slug}`),
  ...properties.map((property) => `/properties/${property.slug}`),
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const siteUrl = siteConfig.siteUrl.replace(/\/+$/, '')

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.7,
  }))
}
