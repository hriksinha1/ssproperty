import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, MapPin, Phone } from 'lucide-react'
import { getProperty, properties } from '@/lib/properties'

export function generateStaticParams() { return properties.map(({ id }) => ({ id })) }

export default async function PropertyDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = getProperty(id)
  if (!property) return <main className="p-10"><h1>Property not found</h1><Link href="/properties">Back to properties</Link></main>
  return <main className="min-h-screen bg-[#f6f5f1] text-[#151515]"><header className="border-b border-black/10 bg-white"><div className="mx-auto flex h-20 max-w-[1380px] items-center justify-between px-5 lg:px-10"><Link href="/" className="flex items-center gap-2.5"><span className="flex size-10 items-center justify-center bg-[#f6c515] text-xl font-black">SS</span><span className="text-[15px] font-bold tracking-[0.18em]">PROPERTY</span></Link><Link href="/properties" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><ArrowLeft size={16} />All properties</Link></div></header><div className="mx-auto grid max-w-[1380px] gap-10 px-5 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-16"><div className="relative aspect-[1.1] overflow-hidden bg-black lg:aspect-[1.2]"><Image src={property.image} alt={property.title} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 65vw" /></div><div className="flex flex-col justify-center"><p className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">{property.id} · {property.tag}</p><h1 className="mt-4 text-5xl font-semibold leading-[0.96] tracking-[-0.06em] lg:text-7xl">{property.title}</h1><p className="mt-5 flex items-center gap-2 text-black/55"><MapPin size={16} />{property.location}</p><p className="mt-9 text-4xl font-bold">{property.price}</p><p className="mt-2 text-sm text-black/50">{property.meta}</p><p className="mt-8 max-w-md text-base leading-8 text-black/60">{property.description}</p><Link href={`/contact?property=${property.id}`} className="mt-9 flex w-fit items-center gap-3 bg-[#f6c515] px-7 py-4 text-xs font-bold uppercase tracking-widest transition hover:bg-black hover:text-white">Enquire about this property <ArrowRight size={16} /></Link><a href="tel:+919830000000" className="mt-4 flex w-fit items-center gap-3 text-xs font-bold uppercase tracking-widest"><Phone size={15} /> Speak with an advisor</a></div></div></main>
}
