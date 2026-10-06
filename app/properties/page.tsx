import Link from 'next/link'

import { PropertyCard } from '@/components/property-card'
import { properties } from '@/data/properties'

export default function PropertiesPage() {
  return (
    <div className="mx-auto max-w-[1360px] px-4 py-16 md:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Browse all</p>
          <h1 className="mt-2 font-display text-[3.2rem] tracking-[-0.05em] md:text-[4.5rem]">Properties</h1>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
          <Link href="/buy" className="border border-[var(--border-subtle)] px-3 py-2">Buy</Link>
          <Link href="/rent" className="border border-[var(--border-subtle)] px-3 py-2">Rent</Link>
          <Link href="/commercial" className="border border-[var(--border-subtle)] px-3 py-2">Commercial</Link>
          <Link href="/land" className="border border-[var(--border-subtle)] px-3 py-2">Land</Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}
