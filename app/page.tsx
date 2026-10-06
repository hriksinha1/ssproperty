'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowRight,
  BedDouble,
  Building2,
  ChevronDown,
  Heart,
  LandPlot,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from 'lucide-react'

const properties = [
  { id: 'SSPROPID261', title: '2 BHK Ready-to-Move Apartment', location: 'Mukundapur, Kolkata', price: '₹39 L', meta: '710 Sq Ft · 2 Baths', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85', tag: 'Ready to move' },
  { id: 'SSPROPID278', title: 'Modern 3 BHK Family Home', location: 'New Town, Kolkata', price: '₹86 L', meta: '1,248 Sq Ft · 3 Baths', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85', tag: 'Featured' },
  { id: 'SSPROPID284', title: 'Light-filled 2 BHK Residence', location: 'Rajarhat, Kolkata', price: '₹25,000/mo', meta: '980 Sq Ft · Semi-furnished', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85', tag: 'For rent' },
]

const areas = ['New Town', 'Rajarhat', 'Salt Lake', 'Mukundapur', 'Howrah', 'South Kolkata']
const types = [
  { name: 'Apartments', count: 'Homes for every chapter', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=85', icon: Building2 },
  { name: 'Commercial', count: 'Spaces that work harder', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85', icon: Building2 },
  { name: 'Land & Plots', count: 'Room to build your future', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=85', icon: LandPlot },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchType, setSearchType] = useState('Buy')
  const [location, setLocation] = useState('')
  const [liked, setLiked] = useState<string[]>([])

  const toggleLike = (id: string) => setLiked((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])

  return (
    <main className="min-h-screen bg-[#f6f5f1] text-[#151515]">
      <header className="absolute inset-x-0 top-0 z-30 border-b border-white/20 bg-black/20 text-white backdrop-blur-sm">
        <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between px-5 lg:px-10">
          <Link href="#top" className="flex items-center gap-2.5" aria-label="S S Property home">
            <span className="flex size-10 items-center justify-center bg-[#f6c515] text-xl font-black text-black">SS</span>
            <span className="text-[15px] font-bold tracking-[0.18em]">PROPERTY</span>
          </Link>
          <nav className="hidden items-center gap-7 text-[13px] font-semibold lg:flex" aria-label="Primary navigation">
            {['Buy', 'Rent', 'Commercial', 'Land', 'About'].map((item) => <Link key={item} href={`#${item.toLowerCase()}`} className="transition-colors hover:text-[#f6c515]">{item}</Link>)}
            <Link href="#contact" className="transition-colors hover:text-[#f6c515]">Contact</Link>
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <button className="rounded-full p-2 hover:bg-white/10" aria-label="Search"><Search size={18} /></button>
            <Link href="#contact" className="bg-[#f6c515] px-5 py-3 text-xs font-bold uppercase tracking-widest text-black transition hover:bg-white">Talk to us</Link>
          </div>
          <button className="rounded-full p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-white/20 bg-black px-6 py-6 lg:hidden">{['Buy', 'Rent', 'Commercial', 'Land', 'About', 'Contact'].map((item) => <Link onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold">{item}</Link>)}</nav>}
      </header>

      <section id="top" className="relative flex min-h-[740px] items-end overflow-hidden bg-black pb-14 pt-32 text-white lg:min-h-[800px] lg:pb-20">
        <Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90" alt="Warm modern home interior" fill priority className="object-cover opacity-75" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />
        <div className="relative mx-auto w-full max-w-[1380px] px-5 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#f6c515]"><span className="h-px w-10 bg-[#f6c515]" />Kolkata, made personal</p>
            <h1 className="max-w-3xl text-[clamp(3.5rem,7vw,6.8rem)] font-semibold leading-[0.93] tracking-[-0.065em]">Find a place that feels like <em className="font-serif font-normal text-[#f6c515]">home.</em></h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/75 lg:text-lg">Discover considered homes, workspaces and land across Kolkata — with a local team that listens first.</p>
          </div>
          <div className="mt-10 max-w-5xl bg-white p-2 text-[#151515] shadow-2xl lg:mt-16 lg:flex lg:items-end">
            <div className="flex gap-1 border-b border-black/10 px-3 lg:border-0 lg:pb-2">
              {['Buy', 'Rent', 'Commercial', 'Land'].map((item) => <button key={item} onClick={() => setSearchType(item)} className={`px-4 py-4 text-xs font-bold uppercase tracking-wider ${searchType === item ? 'border-b-2 border-[#f6c515] text-black' : 'text-black/45'}`}>{item}</button>)}
            </div>
            <label className="flex flex-1 items-center gap-3 border-b border-black/10 px-4 py-4 lg:border-l lg:border-b-0"><MapPin className="text-black/45" size={19} /><span className="sr-only">Location</span><input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Search by neighbourhood or city" className="w-full bg-transparent text-sm outline-none placeholder:text-black/40" /></label>
            <label className="hidden min-w-[180px] items-center gap-3 border-l border-black/10 px-5 py-4 lg:flex"><span className="text-xs font-bold uppercase tracking-wider text-black/45">Budget</span><ChevronDown size={16} /></label>
            <Link href={`/properties?type=${searchType.toLowerCase()}${location ? `&location=${location}` : ''}`} className="mt-2 flex items-center justify-center gap-3 bg-[#f6c515] px-7 py-4 text-xs font-bold uppercase tracking-widest transition hover:bg-black hover:text-white lg:mt-0"><Search size={17} /> Search properties</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f6c515]" aria-label="S S Property highlights"><div className="mx-auto grid max-w-[1380px] divide-y divide-black/15 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10"><div className="flex items-center gap-4 py-6 sm:px-7"><Sparkles size={22} /><div><p className="text-2xl font-bold tracking-tight">Curated</p><p className="text-xs uppercase tracking-widest text-black/60">Property options</p></div></div><div className="flex items-center gap-4 py-6 sm:px-7"><MapPin size={22} /><div><p className="text-2xl font-bold tracking-tight">Kolkata</p><p className="text-xs uppercase tracking-widest text-black/60">Local expertise</p></div></div><div className="flex items-center gap-4 py-6 sm:px-7"><ShieldCheck size={22} /><div><p className="text-2xl font-bold tracking-tight">Human</p><p className="text-xs uppercase tracking-widest text-black/60">Guidance, always</p></div></div></div></section>

      <section id="buy" className="mx-auto max-w-[1380px] px-5 py-20 lg:px-10 lg:py-28"><div className="mb-10 flex items-end justify-between gap-5"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-black/45">A considered shortlist</p><h2 className="text-4xl font-semibold tracking-[-0.05em] lg:text-6xl">Featured <em className="font-serif font-normal">properties</em></h2></div><Link href="/properties" className="hidden items-center gap-2 text-xs font-bold uppercase tracking-widest underline decoration-[#f6c515] decoration-4 underline-offset-8 sm:flex">View all <ArrowRight size={16} /></Link></div><div className="grid gap-8 lg:grid-cols-[1.25fr_0.88fr_0.88fr]">{properties.map((property) => <article key={property.id} className="group bg-white"><div className="relative aspect-[1.2] overflow-hidden"><Image src={property.image} alt={property.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" /><span className="absolute left-4 top-4 bg-[#f6c515] px-3 py-2 text-[10px] font-bold uppercase tracking-widest">{property.tag}</span><button onClick={() => toggleLike(property.id)} className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/90" aria-label={`Save ${property.title}`}><Heart size={18} fill={liked.includes(property.id) ? 'currentColor' : 'none'} className={liked.includes(property.id) ? 'text-red-600' : ''} /></button></div><div className="p-5 lg:p-6"><p className="mb-2 text-xs font-medium uppercase tracking-wider text-black/45">{property.id}</p><h3 className="text-xl font-semibold tracking-tight">{property.title}</h3><p className="mt-2 flex items-center gap-1.5 text-sm text-black/55"><MapPin size={14} />{property.location}</p><div className="mt-6 flex items-end justify-between border-t border-black/10 pt-4"><div><p className="text-2xl font-bold">{property.price}</p><p className="mt-1 text-xs text-black/50">{property.meta}</p></div><Link href={`/property/${property.id.toLowerCase()}`} className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider">Details <ArrowRight size={15} /></Link></div></div></article>)}</div></section>

      <section id="commercial" className="bg-[#171717] py-20 text-white lg:py-28"><div className="mx-auto max-w-[1380px] px-5 lg:px-10"><div className="mb-10 max-w-xl"><p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#f6c515]">Start somewhere</p><h2 className="text-4xl font-semibold tracking-[-0.05em] lg:text-6xl">Browse by <em className="font-serif font-normal text-[#f6c515]">property type</em></h2></div><div className="grid gap-4 md:grid-cols-3">{types.map((type) => <Link href={`/properties?type=${type.name.toLowerCase()}`} key={type.name} className="group relative aspect-[1.05] overflow-hidden bg-black"><Image src={type.image} alt={type.name} fill className="object-cover opacity-65 transition duration-700 group-hover:scale-105 group-hover:opacity-45" sizes="(max-width: 768px) 100vw, 33vw" /><div className="absolute inset-0 flex flex-col justify-between p-6"><type.icon className="text-[#f6c515]" size={26} /><div><p className="text-sm text-white/70">{type.count}</p><h3 className="mt-1 text-3xl font-semibold tracking-tight">{type.name}</h3><span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#f6c515]">Explore <ArrowRight size={15} /></span></div></div></Link>)}</div></div></section>

      <section id="about" className="mx-auto grid max-w-[1380px] gap-14 px-5 py-20 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:px-10 lg:py-32"><div className="relative aspect-[0.9] overflow-hidden bg-black"><Image src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85" alt="Sunlit living room" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" /><div className="absolute bottom-5 left-5 bg-[#f6c515] p-5 text-black lg:bottom-8 lg:left-8"><p className="text-3xl font-bold">SS</p><p className="mt-1 text-[10px] font-bold uppercase tracking-widest">Apka sapna,<br />humara apna.</p></div></div><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-black/45">Why S S Property</p><h2 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] lg:text-6xl">Property is personal. <em className="font-serif font-normal">We get that.</em></h2><p className="mt-7 max-w-lg text-base leading-8 text-black/60">From the first conversation to the keys in your hand, we make finding the right place feel clear, considered and genuinely human.</p><div className="mt-10 grid max-w-lg grid-cols-2 gap-x-8 gap-y-7 border-t border-black/10 pt-7"><div><Users className="mb-3" size={21} /><p className="font-semibold">Local perspective</p><p className="mt-1 text-sm text-black/50">Deeply rooted in Kolkata</p></div><div><Star className="mb-3" size={21} /><p className="font-semibold">Curated choices</p><p className="mt-1 text-sm text-black/50">Less noise, better options</p></div><div><ShieldCheck className="mb-3" size={21} /><p className="font-semibold">Clear guidance</p><p className="mt-1 text-sm text-black/50">Support at every step</p></div><div><BedDouble className="mb-3" size={21} /><p className="font-semibold">Every kind of space</p><p className="mt-1 text-sm text-black/50">Buy, rent, sell or list</p></div></div></div></section>

      <section className="border-y border-black/10 bg-white py-20 lg:py-24"><div className="mx-auto max-w-[1380px] px-5 lg:px-10"><div className="mb-10 flex items-end justify-between"><div><p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-black/45">Make the city yours</p><h2 className="text-4xl font-semibold tracking-[-0.05em] lg:text-6xl">Explore <em className="font-serif font-normal">Kolkata</em></h2></div><Link href="/locations" className="hidden text-xs font-bold uppercase tracking-widest underline decoration-[#f6c515] decoration-4 underline-offset-8 sm:block">All locations</Link></div><div className="flex flex-wrap gap-3">{areas.map((area) => <Link key={area} href={`/locations/${area.toLowerCase().replace(' ', '-')}`} className="border border-black/15 px-5 py-4 text-sm font-semibold transition hover:border-[#f6c515] hover:bg-[#f6c515]">{area}<ArrowRight className="ml-5 inline" size={15} /></Link>)}</div></div></section>

      <section id="contact" className="bg-[#f6c515] px-5 py-20 lg:px-10 lg:py-24"><div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-black/55">Ready when you are</p><h2 className="max-w-2xl text-5xl font-semibold leading-[0.95] tracking-[-0.065em] lg:text-7xl">Your next property may be closer than you think.</h2></div><div className="flex shrink-0 flex-col gap-3 sm:flex-row"><Link href="/properties" className="flex items-center justify-center gap-3 bg-black px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-black">Explore properties <ArrowRight size={16} /></Link><a href="https://wa.me/919830000000" className="flex items-center justify-center gap-3 border border-black/25 px-7 py-4 text-xs font-bold uppercase tracking-widest transition hover:bg-black hover:text-white">WhatsApp us</a></div></div></section>

      <footer className="bg-[#151515] px-5 py-14 text-white lg:px-10 lg:py-20"><div className="mx-auto max-w-[1380px]"><div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]"><div><div className="flex items-center gap-2.5"><span className="flex size-10 items-center justify-center bg-[#f6c515] text-xl font-black text-black">SS</span><span className="text-[15px] font-bold tracking-[0.18em]">PROPERTY</span></div><p className="mt-6 max-w-xs text-sm leading-7 text-white/50">Thoughtful property guidance for a city we call home.</p><div className="mt-7 flex gap-3"><a href="https://www.instagram.com/sspropertykol" aria-label="Instagram" className="rounded-full border border-white/20 px-4 py-3 text-xs font-bold hover:border-[#f6c515] hover:text-[#f6c515]">IG</a><a href="https://www.youtube.com/@sspropertykol" aria-label="YouTube" className="rounded-full border border-white/20 px-4 py-3 text-xs font-bold hover:border-[#f6c515] hover:text-[#f6c515]">YT</a></div></div><div><p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#f6c515]">Explore</p><div className="flex flex-col gap-3 text-sm text-white/60"><Link href="/properties">All properties</Link><Link href="/buy">Buy</Link><Link href="/rent">Rent</Link><Link href="/commercial">Commercial</Link><Link href="/land">Land</Link></div></div><div><p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#f6c515]">Company</p><div className="flex flex-col gap-3 text-sm text-white/60"><Link href="/about">About us</Link><Link href="/sell-property">List your property</Link><Link href="/services">Services</Link><Link href="/contact">Contact</Link><Link href="/faq">FAQ</Link></div></div><div><p className="mb-5 text-xs font-bold uppercase tracking-widest text-[#f6c515]">Visit us</p><p className="text-sm leading-7 text-white/60">PS Newtown Square,<br />Chinar Park / Atghora Newtown Road,<br />Kolkata 700136</p><a href="mailto:hello@ssproperty.in" className="mt-5 inline-block text-sm font-semibold text-white underline decoration-[#f6c515] underline-offset-4">hello@ssproperty.in</a></div></div><div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row"><p>© 2026 S S Property. All rights reserved.</p><div className="flex gap-5"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div></div></div></footer>
    </main>
  )
}
