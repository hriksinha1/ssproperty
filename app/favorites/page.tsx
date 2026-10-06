import Link from 'next/link'

import { SavedProperties } from '@/components/property-collection'
import { properties } from '@/data/properties'

export default function FavoritesPage() {
  return (
    <div className="mx-auto max-w-[1360px] px-4 py-16 md:px-6 lg:px-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Saved listings</p>
      <h1 className="mt-2 font-display text-[3rem] tracking-[-0.05em] md:text-[4.5rem]">Favourites</h1>
      <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)]">Your saved homes and spaces.</p>
      <SavedProperties properties={properties} />
      <Link href="/contact" className="mt-8 inline-flex items-center justify-center border border-[var(--border-subtle)] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-primary)]">
        Enquire now
      </Link>
    </div>
  )
}
