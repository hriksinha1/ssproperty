import Image from 'next/image'
import Link from 'next/link'

import { locations } from '@/data/locations'

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-[1360px] px-4 py-16 md:px-6 lg:px-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">City guide</p>
      <h1 className="mt-2 font-display text-[3rem] tracking-[-0.05em] md:text-[5rem]">Explore Kolkata</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {locations.map((location) => (
          <Link key={location.slug} href={`/locations/${location.slug}`} className="group block overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-primary)]">
            <div className="relative aspect-[1.2] overflow-hidden">
              <Image src={location.image} alt={location.name} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
            <div className="p-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">Area guide</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">{location.name}</h2>
              <p className="mt-2 text-base leading-7 text-[var(--text-secondary)]">{location.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
