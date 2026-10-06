import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { properties } from '@/data/properties'

export async function generateStaticParams() {
  return properties.map((property) => ({ id: property.slug }))
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const property = properties.find((item) => item.slug === id || item.id === id)

  if (!property) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-[1360px] px-4 py-16 md:px-6 lg:px-8">
      <Link href="/properties" className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">← Back to properties</Link>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="relative aspect-[1.35] overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-primary)]">
            <Image src={property.image} alt={property.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 65vw" />
          </div>
        </div>

        <div className="border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6 md:p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">{property.id}</p>
          {property.isDemo ? <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--text-muted)]">Illustrative listing · verify details before making a decision</p> : null}
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[var(--text-primary)] md:text-[3.1rem]">{property.title}</h1>
          <p className="mt-3 text-base text-[var(--text-secondary)]">{property.locality}, Kolkata</p>
          <p className="mt-5 text-3xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">{property.price}</p>
          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{property.description}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="border border-[var(--border-subtle)] px-3 py-2">{property.status}</span>
            <span className="border border-[var(--border-subtle)] px-3 py-2">{property.category}</span>
          </div>
          <div className="mt-8 flex gap-3">
            <Link href={`/contact?property=${property.id}`} className="inline-flex items-center justify-center bg-[var(--brand-yellow)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]">
              Enquire now
            </Link>
            <Link href="/properties" className="inline-flex items-center justify-center border border-[var(--border-subtle)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-primary)]">
              View more
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
