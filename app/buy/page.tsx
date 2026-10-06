import { PropertyCard } from '@/components/property-card'
import { properties } from '@/data/properties'

export default function BuyPage() {
  const buyProperties = properties.filter((property) => property.type === 'buy')

  return (
    <div className="mx-auto max-w-[1360px] px-4 py-16 md:px-6 lg:px-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Buy</p>
      <h1 className="mt-2 font-display text-[3rem] tracking-[-0.05em] md:text-[4.5rem]">Properties to buy in Kolkata</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {buyProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}
