import Link from 'next/link'

import { PropertyCard } from '@/components/property-card'
import type { PropertyRecord, PropertyType } from '@/data/properties'

export type PropertySearchParams = {
  q?: string | string[]
  type?: string | string[]
  location?: string | string[]
  maxPrice?: string | string[]
}

function firstValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] ?? '' : value ?? ''
}

export function PropertyBrowser({
  properties,
  allProperties,
  searchParams = {},
  fixedType,
  action = '/properties',
}: {
  properties: PropertyRecord[]
  allProperties: PropertyRecord[]
  searchParams?: PropertySearchParams
  fixedType?: PropertyType
  action?: string
}) {
  const query = firstValue(searchParams.q).trim().toLocaleLowerCase()
  const selectedType = fixedType ?? firstValue(searchParams.type)
  const selectedLocation = firstValue(searchParams.location)
  const maxPriceText = firstValue(searchParams.maxPrice)
  const maxPrice = Number(maxPriceText)
  const locations = [...new Set(allProperties.map((property) => property.locality))].sort()
  const filtered = properties.filter((property) => {
    const matchesQuery = !query || `${property.title} ${property.locality} ${property.address}`.toLocaleLowerCase().includes(query)
    const matchesType = !selectedType || property.type === selectedType
    const matchesLocation = !selectedLocation || property.locality === selectedLocation
    const matchesPrice = !maxPriceText || (Number.isFinite(maxPrice) && property.priceValue <= maxPrice)
    return matchesQuery && matchesType && matchesLocation && matchesPrice
  })

  return (
    <>
      <form action={action} method="get" className="grid gap-3 border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-4 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1fr_auto_auto] xl:items-end">
        {fixedType ? <input type="hidden" name="type" value={fixedType} /> : null}
        <label className="block text-xs font-semibold text-[var(--text-secondary)]">
          Search
          <input name="q" type="search" defaultValue={firstValue(searchParams.q)} placeholder="Title, locality or address" className="mt-2 block h-11 w-full border border-[var(--border-subtle)] bg-[var(--surface-secondary)] px-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--brand-yellow)]" />
        </label>

        {!fixedType ? (
          <label className="block text-xs font-semibold text-[var(--text-secondary)]">
            Property type
            <select name="type" defaultValue={selectedType} className="mt-2 block h-11 w-full border border-[var(--border-subtle)] bg-[var(--surface-secondary)] px-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--brand-yellow)]">
              <option value="">All types</option>
              <option value="buy">For sale</option>
              <option value="rent">For rent</option>
              <option value="commercial">Commercial</option>
              <option value="land">Land</option>
            </select>
          </label>
        ) : null}

        <label className="block text-xs font-semibold text-[var(--text-secondary)]">
          Locality
          <select name="location" defaultValue={selectedLocation} className="mt-2 block h-11 w-full border border-[var(--border-subtle)] bg-[var(--surface-secondary)] px-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--brand-yellow)]">
            <option value="">All localities</option>
            {locations.map((location) => <option key={location} value={location}>{location}</option>)}
          </select>
        </label>

        <label className="block text-xs font-semibold text-[var(--text-secondary)]">
          Max budget (INR)
          <input name="maxPrice" type="number" min="0" step="10000" inputMode="numeric" defaultValue={maxPriceText} placeholder="No limit" className="mt-2 block h-11 w-full border border-[var(--border-subtle)] bg-[var(--surface-secondary)] px-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--brand-yellow)]" />
        </label>

        <button type="submit" className="h-11 bg-[var(--brand-yellow)] px-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-black)]">Apply</button>
        <Link href={action} className="inline-flex h-11 items-center justify-center border border-[var(--border-subtle)] px-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-primary)]">Reset</Link>
      </form>

      <p className="mt-6 text-sm text-[var(--text-muted)]" aria-live="polite">{filtered.length} {filtered.length === 1 ? 'property' : 'properties'}</p>
      {filtered.length ? (
        <div className="mt-4 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((property) => <PropertyCard key={property.id} property={property} />)}
        </div>
      ) : (
        <div className="mt-4 border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6">
          <p className="text-base text-[var(--text-secondary)]">No properties match these filters.</p>
          <Link href={action} className="mt-4 inline-flex text-[11px] font-bold uppercase tracking-[0.16em]">Clear filters</Link>
        </div>
      )}
    </>
  )
}