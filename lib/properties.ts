export type Property = { id: string; title: string; location: string; city: string; price: string; type: 'Buy' | 'Rent' | 'Commercial' | 'Land'; meta: string; image: string; tag: string; description: string }

export const properties: Property[] = [
  { id: 'SSPROPID261', title: '2 BHK Ready-to-Move Apartment', location: 'Mukundapur, Kolkata', city: 'South Kolkata', price: '₹39 L', type: 'Buy', meta: '710 Sq Ft · 2 Baths', tag: 'Ready to move', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85', description: 'A bright, well-planned home for easy everyday living, close to the places that make South Kolkata feel like home.' },
  { id: 'SSPROPID278', title: 'Modern 3 BHK Family Home', location: 'New Town, Kolkata', city: 'New Town', price: '₹86 L', type: 'Buy', meta: '1,248 Sq Ft · 3 Baths', tag: 'Featured', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=85', description: 'A generous family residence with natural light, thoughtful finishes and room to grow.' },
  { id: 'SSPROPID284', title: 'Light-filled 2 BHK Residence', location: 'Rajarhat, Kolkata', city: 'Rajarhat', price: '₹25,000/mo', type: 'Rent', meta: '980 Sq Ft · Semi-furnished', tag: 'For rent', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85', description: 'A calm semi-furnished rental with generous windows and an easy connection to Rajarhat.' },
  { id: 'SSPROPID299', title: 'Corner Office at New Town', location: 'Action Area 1, Kolkata', city: 'New Town', price: '₹1.2 Cr', type: 'Commercial', meta: '1,850 Sq Ft · Office', tag: 'Commercial', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85', description: 'A flexible workspace for teams looking to make a confident start in New Town.' },
  { id: 'SSPROPID304', title: 'Residential Plot near Rajarhat', location: 'Rajarhat, Kolkata', city: 'Rajarhat', price: '₹48 L', type: 'Land', meta: '2.5 Kottah · Clear title', tag: 'Land & plots', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=85', description: 'A well-positioned plot with the freedom to build something that is truly yours.' }
]

export const getProperty = (id: string) => properties.find((property) => property.id === id)
export const locations = ['New Town', 'Rajarhat', 'Salt Lake', 'Mukundapur', 'Howrah', 'South Kolkata']
export const typeCopy: Record<string, { title: string; description: string }> = { Buy: { title: 'Find a home to buy', description: 'Homes chosen with a little more care, across the neighbourhoods of Kolkata.' }, Rent: { title: 'Rent with confidence', description: 'Comfortable spaces, clear conversations and a smoother move.' }, Commercial: { title: 'Spaces that work harder', description: 'Offices and commercial spaces for the next chapter of your business.' }, Land: { title: 'Room to build your future', description: 'Land and plots with the context you need to make a good decision.' } }

export const filteredProperties = (type?: string, location?: string) => properties.filter((property) => (!type || property.type.toLowerCase() === type.toLowerCase()) && (!location || property.location.toLowerCase().includes(location.toLowerCase()) || property.city.toLowerCase().includes(location.toLowerCase())))

export const siteLinks = [{ label: 'Properties', href: '/properties' }, { label: 'Buy', href: '/buy' }, { label: 'Rent', href: '/rent' }, { label: 'Commercial', href: '/commercial' }, { label: 'Land', href: '/land' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }]

export const imageSizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'

export const propertyImage = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90'

export const propertyTypes = ['Buy', 'Rent', 'Commercial', 'Land'] as const

export const serviceCards = [{ title: 'Buy a property', text: 'A considered shortlist and clear guidance from first viewing to final signature.', href: '/buy' }, { title: 'Rent a property', text: 'Find a place that works for your current chapter, without the runaround.', href: '/rent' }, { title: 'List your property', text: 'Present your property thoughtfully and reach the right people in Kolkata.', href: '/sell-property' }]

export const faqs = [{ q: 'What areas do you cover?', a: 'We focus on Kolkata and its surrounding growth corridors, including New Town, Rajarhat, Salt Lake, Mukundapur and South Kolkata.' }, { q: 'Can you help me list my property?', a: 'Yes. Share the details through our contact form and our team will get in touch to understand the property and your goals.' }, { q: 'Do you help with both buying and renting?', a: 'We do. Our team works across homes, rentals, land and commercial spaces.' }]

export const legalSections = [{ title: 'Privacy', href: '/privacy' }, { title: 'Terms', href: '/terms' }, { title: 'FAQ', href: '/faq' }]

export const formatTitle = (value: string) => value.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())

export const contactDetails = { phone: '+91 98300 00000', email: 'hello@ssproperty.in', address: 'PS Newtown Square, Chinar Park / Atghora Newtown Road, Kolkata 700136' }

export const brandPromise = 'Apka sapna, humara apna.'

export const contentSections = [{ title: 'A local point of view', text: 'Kolkata is not one market. Every neighbourhood has its own rhythm, and the right property starts with understanding that context.' }, { title: 'Less noise, better options', text: 'We believe a property search should feel considered, not overwhelming. Our shortlists are built around what actually fits your life.' }, { title: 'Here for the whole journey', text: 'The conversation does not end when you find a place. We stay close through the details that turn a decision into a home.' }]

export const sitemapRoutes = ['/properties', '/buy', '/rent', '/commercial', '/land', '/locations', '/about', '/services', '/sell-property', '/contact', '/faq', '/privacy', '/terms']

export const locationDescriptions: Record<string, string> = { 'new-town': 'A planned, connected part of Kolkata with room for homes, work and what comes next.', rajarhat: 'A fast-growing corridor where everyday convenience meets breathing room.', 'salt-lake': 'An established neighbourhood with a strong community feel and a calm rhythm.', mukundapur: 'A South Kolkata favourite with excellent everyday access and a more residential pace.', howrah: 'A city on the move, with strong connections across the river.', 'south-kolkata': 'A collection of distinctive neighbourhoods, each with its own sense of place.' }

export const editorialPosts = [{ slug: 'how-to-choose-the-right-neighbourhood-in-kolkata', title: 'How to choose the right neighbourhood in Kolkata', excerpt: 'The right address is about more than a pin on a map. Start with the life you want to lead there.', category: 'Guides' }, { slug: 'a-practical-guide-to-buying-your-first-home', title: 'A practical guide to buying your first home', excerpt: 'A clearer way to think about the big decision, from budget to the final walk-through.', category: 'Buying' }, { slug: 'why-new-town-keeps-growing', title: 'Why New Town keeps growing', excerpt: 'A closer look at the infrastructure, energy and everyday life shaping one of Kolkata's newest centres.', category: 'Kolkata' }]

export const testimonials = [{ quote: 'The process felt clear from the beginning. We never felt rushed into a decision.', name: 'A family in New Town' }, { quote: 'They listened to what we actually needed, then showed us options that made sense.', name: 'A first-time buyer' }, { quote: 'Professional, responsive and genuinely local. That combination made all the difference.', name: 'A commercial client' }]

export const companyValues = ['Local perspective', 'Curated choices', 'Clear guidance', 'Human service']

export const phoneHref = 'tel:+919830000000'
export const whatsappHref = 'https://wa.me/919830000000'

export const footerNote = 'Thoughtful property guidance for a city we call home.'

export const metaDescription = 'S S Property helps you buy, rent, sell and discover property across Kolkata with clear, local guidance.'

export const companyName = 'S S Property'

export const brandAccent = '#f6c515'

export const defaultProperty = properties[0]

export const currentYear = new Date().getFullYear()

export const isKnownType = (value?: string): value is (typeof propertyTypes)[number] => Boolean(value && propertyTypes.includes(value as (typeof propertyTypes)[number]))

export const getLocationSlug = (value: string) => value.toLowerCase().replace(/\s+/g, '-')

export const getTypeHref = (type: string) => `/${type.toLowerCase()}`

export const relatedProperties = (property: Property) => properties.filter((item) => item.id !== property.id && (item.city === property.city || item.type === property.type)).slice(0, 3)

export const enquiryReasons = ['I want to buy', 'I want to rent', 'I want to sell', 'I need commercial space', 'I am exploring land']

export const hours = 'Monday – Saturday, 9:30 AM – 7:00 PM'

export const socialLinks = [{ label: 'Instagram', href: 'https://www.instagram.com/sspropertykol' }, { label: 'YouTube', href: 'https://www.youtube.com/@sspropertykol' }]

export const structuredData = { '@context': 'https://schema.org', '@type': 'RealEstateAgent', name: companyName, url: 'https://ssproperty.in', areaServed: 'Kolkata', email: contactDetails.email, telephone: contactDetails.phone }

export const brandEyebrow = 'Kolkata, made personal'

export const defaultImageAlt = 'S S Property home in Kolkata'

export const noResultsCopy = 'Nothing matches that search yet. Try another neighbourhood or property type.'

export const formIntro = 'Tell us what you are looking for and we will get back to you shortly.'

export const privacyIntro = 'We respect your information and only use it to respond to your property enquiry.'

export const termsIntro = 'These terms explain the general conditions for using the S S Property website.'

export const faqIntro = 'A few useful answers before you begin your property search.'

export const locationIntro = 'Explore the places shaping Kolkata, one neighbourhood at a time.'

export const aboutIntro = 'A local property team for decisions that deserve more than a quick answer.'

export const servicesIntro = 'From search to shortlist, guidance to handover, we keep property personal.'

export const sellIntro = 'Have a property to list? Let us understand it properly.'

export const journalIntro = 'Notes on property, neighbourhoods and making a place your own.'

export const sectionRule = 'border-black/10'

export const accentClass = 'text-[#f6c515]'

export const darkSurface = 'bg-[#171717]'

export const lightSurface = 'bg-[#f6f5f1]'

export const whiteSurface = 'bg-white'

export const primaryText = 'text-[#151515]'

export const mutedText = 'text-black/55'

export const serifClass = 'font-serif font-normal'

export const maxWidth = 'max-w-[1380px]'

export const contactAnchor = '#contact'

export const siteTitle = 'S S Property | Property in Kolkata'

export const thankYouCopy = 'Thank you. We will be in touch soon.'

export const notFoundCopy = 'We could not find that property.'

export const companyTagline = 'Find a place that feels like home.'

export const pagePadding = 'px-5 lg:px-10'

export const sectionPadding = 'py-20 lg:py-28'

export const uppercaseTracking = 'text-xs font-bold uppercase tracking-[0.22em]'

export const legalUpdated = 'Last updated October 2026'

export const authorName = 'S S Property'

export const listingDisclaimer = 'Prices and availability are indicative and subject to confirmation.'

export const noExternalData = true

export const brandInitials = 'SS'

export const menuItems = ['Buy', 'Rent', 'Commercial', 'Land', 'About', 'Contact']

export const primaryCta = 'Talk to us'

export const searchPlaceholder = 'Search by neighbourhood or city'

export const propertyCardAction = 'View details'

export const allPropertiesLabel = 'View all properties'

export const navigationLabel = 'Primary navigation'

export const footerLabel = 'Footer navigation'

export const phoneLabel = 'Call S S Property'

export const emailLabel = 'Email S S Property'

export const whatsappLabel = 'WhatsApp S S Property'

export const logoLabel = 'S S Property home'

export const imagePriority = true

export const defaultType = 'Buy'

export const errorCopy = 'Something went wrong. Please try again.'

export const submissionLabel = 'Send enquiry'

export const menuLabel = 'Open menu'

export const closeLabel = 'Close menu'

export const searchLabel = 'Search properties'

export const locationLabel = 'Location'

export const budgetLabel = 'Budget'

export const featuredLabel = 'Featured properties'

export const typeLabel = 'Property type'

export const whyLabel = 'Why S S Property'

export const exploreLabel = 'Explore Kolkata'

export const readyLabel = 'Ready when you are'

export const addressLabel = 'Visit us'

export const enquiryLabel = 'Property enquiry'

export const journalLabel = 'The journal'

export const legalLabel = 'Legal'
