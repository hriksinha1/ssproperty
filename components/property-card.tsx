import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Heart, MapPin } from 'lucide-react'

import type { PropertyRecord } from '@/data/properties'

export function PropertyCard({ property }: { property: PropertyRecord }) {
  return (
    <article className="group overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-primary)] shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 bg-[var(--brand-yellow)] px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--brand-black)]">
          {property.status}
        </span>
        <button
          type="button"
          aria-label={`Save ${property.title}`}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-black/10 bg-white/85 text-[var(--brand-black)] backdrop-blur-sm"
        >
          <Heart size={16} />
        </button>
      </div>

      <div className="space-y-4 p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">{property.id}</p>
        <div>
          <h3 className="text-[1.6rem] font-semibold leading-tight tracking-[-0.04em] text-[var(--text-primary)]">{property.title}</h3>
          <div className="mt-2 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <MapPin size={14} />
            <span>{property.locality}</span>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4 border-t border-[var(--border-subtle)] pt-4">
          <div>
            <div className="text-[2rem] font-bold tracking-[-0.04em] text-[var(--text-primary)]">{property.price}</div>
            <div className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--text-muted)]">{property.meta}</div>
          </div>
          <Link
            href={`/property/${property.slug}`}
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-primary)]"
          >
            View property
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  )
}
