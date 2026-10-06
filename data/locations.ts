export type LocationRecord = {
  slug: string
  name: string
  label: string
  summary: string
  image: string
}

export const locations: LocationRecord[] = [
  {
    slug: 'new-town',
    name: 'New Town',
    label: 'Planned living, schools and green space',
    summary: 'A strong choice for families looking for newer housing stock, open roads and easy access across the eastern city.',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'salt-lake',
    name: 'Salt Lake',
    label: 'Commercial hubs and residential comfort',
    summary: 'A well-known residential and business district with established neighbourhoods and strong connectivity.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'rajarhat',
    name: 'Rajarhat',
    label: 'Growth, road access and broad options',
    summary: 'A fast-moving locality with a mix of apartment stock, plots and commercial opportunities.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'mukundapur',
    name: 'Mukundapur',
    label: 'Urban convenience with a neighbourhood feel',
    summary: 'Popular with buyers wanting a balanced mix of everyday services, access and practical housing.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'howrah',
    name: 'Howrah',
    label: 'Strong transport access and value-led homes',
    summary: 'A useful option for buyers and tenants prioritising easy travel links and practical budgets.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'south-kolkata',
    name: 'South Kolkata',
    label: 'Established addresses and longstanding neighbourhoods',
    summary: 'A classic choice for buyers seeking mature residential areas and a familiar city rhythm.',
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'north-kolkata',
    name: 'North Kolkata',
    label: 'City heritage and practical family homes',
    summary: 'A well-established part of the city with a strong mix of older homes and compact residential stock.',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=85',
  },
  {
    slug: 'vip-road',
    name: 'VIP Road',
    label: 'Commercial activity and client-facing spaces',
    summary: 'A high-visibility stretch for commercial buyers, service businesses and retail operations.',
    image: 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=85',
  },
]

export const locationMap = Object.fromEntries(locations.map((location) => [location.slug, location]))
