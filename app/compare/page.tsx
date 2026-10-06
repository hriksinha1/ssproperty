import Link from 'next/link'

import { PropertyComparison } from '@/components/property-collection'
import { properties } from '@/data/properties'

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-[1360px] px-4 py-16 md:px-6 lg:px-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Compare</p>
      <h1 className="mt-2 font-display text-[3rem] tracking-[-0.05em] md:text-[4.5rem]">Shortlists side by side</h1>
      <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)]">Compare up to three properties side by side.</p>
      <PropertyComparison properties={properties} />
      <Link href="/properties" className="mt-8 inline-flex items-center justify-center border border-[var(--border-subtle)] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-primary)]">
        Find properties
      </Link>
    </div>
  )
}
