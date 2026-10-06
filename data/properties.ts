export type PropertyType = 'buy' | 'rent' | 'commercial' | 'land'

export type PropertyRecord = {
  id: string
  slug: string
  title: string
  type: PropertyType
  category: string
  locality: string
  locationSlug: string
  address: string
  price: string
  priceValue: number
  period?: 'month'
  meta: string
  status: 'Ready to move' | 'Under construction' | 'Available' | 'Sample'
  description: string
  image: string
  isDemo: boolean
  featured?: boolean
}

export const properties: PropertyRecord[] = [
  {
    id: 'SSPROPID261',
    slug: 'sspropid261',
    title: '2 BHK Ready-to-Move Apartment',
    type: 'buy',
    category: 'Residential',
    locality: 'Mukundapur',
    locationSlug: 'mukundapur',
    address: 'Mukundapur, Kolkata 700099',
    price: '₹39 L',
    priceValue: 3900000,
    meta: '710 sq ft · 2 baths · 2 bedrooms',
    status: 'Ready to move',
    description: 'A bright and practical apartment with a calm layout, natural light and easy access to the city core.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    isDemo: true,
    featured: true,
  },
  {
    id: 'SSPROPID278',
    slug: 'sspropid278',
    title: 'Modern 3 BHK Family Home',
    type: 'buy',
    category: 'Residential',
    locality: 'New Town',
    locationSlug: 'new-town',
    address: 'New Town, Kolkata 700156',
    price: '₹86 L',
    priceValue: 8600000,
    meta: '1,248 sq ft · 3 baths · 3 bedrooms',
    status: 'Available',
    description: 'A well-planned family home near green spaces, schools and everyday convenience in New Town.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85',
    isDemo: true,
    featured: true,
  },
  {
    id: 'SSPROPID284',
    slug: 'sspropid284',
    title: 'Light-filled 2 BHK Residence',
    type: 'rent',
    category: 'Residential',
    locality: 'Rajarhat',
    locationSlug: 'rajarhat',
    address: 'Rajarhat, Kolkata 700135',
    price: '₹25,000/mo',
    priceValue: 25000,
    period: 'month',
    meta: '980 sq ft · 2 bedrooms · semi-furnished',
    status: 'Available',
    description: 'A comfortable residence with a generous living area and easy access to metro and business corridors.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85',
    isDemo: true,
  },
  {
    id: 'SSPROPID301',
    slug: 'sspropid301',
    title: 'Shopfront on VIP Road',
    type: 'commercial',
    category: 'Commercial',
    locality: 'VIP Road',
    locationSlug: 'vip-road',
    address: 'VIP Road, Kolkata 700054',
    price: '₹68,000/mo',
    priceValue: 68000,
    period: 'month',
    meta: '450 sq ft · ground floor · prime frontage',
    status: 'Available',
    description: 'A flexible commercial frontage suited to retail or service-led businesses in a busy neighbourhood.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
    isDemo: true,
  },
  {
    id: 'SSPROPID310',
    slug: 'sspropid310',
    title: 'Commercial Office Suite',
    type: 'commercial',
    category: 'Commercial',
    locality: 'Salt Lake',
    locationSlug: 'salt-lake',
    address: 'Salt Lake Sector V, Kolkata 700091',
    price: '₹1.25 Cr',
    priceValue: 12500000,
    meta: '1,200 sq ft · 3 cabins · fit-out ready',
    status: 'Ready to move',
    description: 'An efficient office setup for growing teams, positioned close to established business hubs.',
    image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1400&q=85',
    isDemo: true,
  },
  {
    id: 'SSPROPID325',
    slug: 'sspropid325',
    title: 'Rajarhat Plot with Road Access',
    type: 'land',
    category: 'Land',
    locality: 'Rajarhat',
    locationSlug: 'rajarhat',
    address: 'Rajarhat, Kolkata 700135',
    price: '₹62 L',
    priceValue: 6200000,
    meta: '2,400 sq ft · approved plot · 20 ft road',
    status: 'Available',
    description: 'A usable plot with clear road access, making it suitable for residential or mixed-use planning.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85',
    isDemo: true,
  },
  {
    id: 'SSPROPID333',
    slug: 'sspropid333',
    title: 'North Kolkata Family Flat',
    type: 'buy',
    category: 'Residential',
    locality: 'North Kolkata',
    locationSlug: 'north-kolkata',
    address: 'North Kolkata, Kolkata 700005',
    price: '₹54 L',
    priceValue: 5400000,
    meta: '870 sq ft · 2 bedrooms · covered parking',
    status: 'Ready to move',
    description: 'A compact, practical home with good light and easy city access, designed for everyday living.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=85',
    isDemo: true,
  },
  {
    id: 'SSPROPID340',
    slug: 'sspropid340',
    title: 'Howrah Studio Rental',
    type: 'rent',
    category: 'Residential',
    locality: 'Howrah',
    locationSlug: 'howrah',
    address: 'Howrah, Kolkata 711101',
    price: '₹18,000/mo',
    priceValue: 18000,
    period: 'month',
    meta: '550 sq ft · 1 bedroom · furnished',
    status: 'Available',
    description: 'A neat studio rental for professionals wanting a practical address close to transport and work zones.',
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1400&q=85',
    isDemo: true,
  },
]

export const featuredProperties = properties.filter((property) => property.featured || property.type === 'buy')
