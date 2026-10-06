import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { locations } from '@/data/locations'
import { properties } from '@/data/properties'

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }))
}

export default async function LocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const location = locations.find((item) => item.slug === slug)

  if (!location) {
    notFound()
  }

  const localProperties = properties.filter((property) => property.locationSlug === slug)

  return (
    <div className="mx-auto max-w-[1360px] px-4 py-16 md:px-6 lg:px-8">
      <Link href="/locations" className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">← Back to locations</Link>

      <div className="mt-8 overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-primary)]">
        <div className="relative h-[280px] md:h-[420px]">
          <Image src={location.image} alt={location.name} fill className="object-cover" sizes="100vw" />
        </div>
        <div className="p-6 md:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">{location.propertyCount} listings</p>
          <h1 className="mt-3 font-display text-[3rem] tracking-[-0.05em] md:text-[5rem]">{location.name}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">{location.summary}</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-[2.4rem] tracking-[-0.04em]">Available in this area</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {localProperties.length > 0 ? (
            localProperties.map((property) => (
              <Link key={property.id} href={`/properties/${property.slug}`} className="border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-4">
                <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">{property.id}</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">{property.title}</h3>
                <p className="mt-3 text-base text-[var(--text-secondary)]">{property.price}</p>
              </Link>
            ))
          ) : (
            <p className="text-base text-[var(--text-secondary)]">No live properties listed for this area yet, but we can help find something matching your brief.</p>
          )}
        </div>
      </div>
    </div>
  )
}
