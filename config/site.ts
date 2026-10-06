export const siteConfig = {
  name: 'S S Property',
  tagline: 'Kolkata real estate with a local point of view.',
  address: 'PS Newtown Square, Chinar Park / Atghora Newtown Road, Kolkata 700136',
  email: 'hello@ssproperty.in',
  phone: process.env.NEXT_PUBLIC_PHONE || '',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '',
  instagram: 'https://www.instagram.com/sspropertykol',
  facebook: 'https://www.facebook.com/sspropertykol',
  linkedin: 'https://www.linkedin.com/company/s-s-property',
  youtube: 'https://www.youtube.com/@sspropertykol',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ssproperty.in',
}

export const navItems = [
  { href: '/buy', label: 'Buy' },
  { href: '/rent', label: 'Rent' },
  { href: '/commercial', label: 'Commercial' },
  { href: '/land', label: 'Land' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]
