export const properties = [
  { id: 'SSPROPID261', title: '2 BHK Ready-to-Move Apartment', location: 'Mukundapur, Kolkata', price: '₹39 L', meta: '710 Sq Ft · 2 Baths', type: 'Buy', tag: 'Ready to move', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85', description: 'A bright, practical home with generous natural light and the ease of a ready-to-move address.' },
  { id: 'SSPROPID278', title: 'Modern 3 BHK Family Home', location: 'New Town, Kolkata', price: '₹86 L', meta: '1,248 Sq Ft · 3 Baths', type: 'Buy', tag: 'Featured', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85', description: 'A considered family residence close to New Town’s everyday conveniences.' },
  { id: 'SSPROPID284', title: 'Light-filled 2 BHK Residence', location: 'Rajarhat, Kolkata', price: '₹25,000/mo', meta: '980 Sq Ft · Semi-furnished', type: 'Rent', tag: 'For rent', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85', description: 'An airy semi-furnished residence with a calm palette and an easy commute.' },
] as const

export type Property = (typeof properties)[number]

export function getProperty(id: string) { return properties.find((property) => property.id === id) }
