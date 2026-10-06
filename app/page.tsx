import Image from 'next/image'
import Link from 'next/link'

import { PropertyCard } from '@/components/property-card'
import { locations } from '@/data/locations'
import { properties } from '@/data/properties'

export default function HomePage() {
  const featured = properties.slice(0, 3)

  return (
    <>
      <section className="relative isolate overflow-hidden bg-[var(--brand-black)] text-[var(--text-inverse)]">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=90"
          alt="Contemporary Kolkata apartment living room"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/80 via-[#0B0B0B]/55 to-[#0B0B0B]/15" />

        <div className="relative mx-auto max-w-[1360px] px-4 pb-16 pt-20 md:px-6 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--brand-yellow)]">
              S S PROPERTY · KOLKATA
            </p>
            <h1 className="max-w-[12ch] text-[3.2rem] font-semibold leading-[0.9] tracking-[-0.07em] md:text-[4.6rem] lg:text-[6.4rem]">
              Kolkata, one address at a time.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[rgba(247,245,239,0.8)]">
              Homes, commercial space and land across New Town, Salt Lake, Rajarhat and beyond, guided by a local team.
            </p>
          </div>

          <form action="/properties" method="get" className="mt-10 grid max-w-5xl gap-3 border border-[rgba(255,255,255,0.2)] bg-[rgba(247,245,239,0.96)] p-3 text-[var(--text-primary)] shadow-none md:grid-cols-2 md:p-4 lg:grid-cols-[1fr_1.2fr_1fr_auto] lg:items-end">
            <label className="block text-xs font-semibold text-[var(--text-secondary)]">
              I’m looking to
              <select name="type" defaultValue="buy" className="mt-2 block h-12 w-full border border-[var(--border-subtle)] bg-white px-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--brand-yellow)]">
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
                <option value="commercial">Find commercial space</option>
                <option value="land">Find land</option>
              </select>
            </label>
            <label className="block text-xs font-semibold text-[var(--text-secondary)]">
              Locality
              <select name="location" defaultValue="" className="mt-2 block h-12 w-full border border-[var(--border-subtle)] bg-white px-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--brand-yellow)]">
                <option value="">Any locality</option>
                {locations.map((location) => <option key={location.slug} value={location.name}>{location.name}</option>)}
              </select>
            </label>
            <label className="block text-xs font-semibold text-[var(--text-secondary)]">
              Maximum budget
              <select name="maxPrice" defaultValue="" className="mt-2 block h-12 w-full border border-[var(--border-subtle)] bg-white px-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--brand-yellow)]">
                <option value="">Any budget</option>
                <option value="5000000">Up to ₹50 L</option>
                <option value="10000000">Up to ₹1 Cr</option>
                <option value="20000000">Up to ₹2 Cr</option>
              </select>
            </label>
            <button type="submit" className="flex h-12 items-center justify-center gap-2 bg-[var(--brand-yellow)] px-5 text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--brand-black)]">
              Search properties
            </button>
          </form>
        </div>
      </section>

      <section aria-label="Brand values" className="border-b border-[var(--border-subtle)] bg-[var(--brand-yellow)]">
        <div className="mx-auto grid max-w-[1360px] gap-1 px-4 py-6 md:grid-cols-3 md:px-6 lg:px-8">
          {[
            ['Curated', 'Homes, commercial space and land'],
            ['Local', 'Neighbourhood-level advice'],
            ['Clear', 'Straight answers and practical support'],
          ].map(([title, copy]) => (
            <div key={title} className="border border-[rgba(11,11,11,0.2)] bg-[rgba(255,255,255,0.05)] p-5 md:border-0 md:border-r md:last:border-r-0">
              <p className="text-[2rem] font-bold leading-none tracking-[-0.06em] text-[var(--brand-black)]">{title}</p>
              <p className="mt-2 text-sm text-[rgba(11,11,11,0.7)]">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-4 py-20 md:px-6 lg:px-8 lg:py-28">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">A considered shortlist</p>
            <h2 className="font-display text-[3rem] tracking-[-0.04em] text-[var(--text-primary)] md:text-[4rem]">Featured properties</h2>
          </div>
          <Link href="/properties" className="hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] md:inline-flex">
            View all
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_0.8fr_0.85fr]">
          {featured.map((property) => (
            <div key={property.id} className={property.id === 'SSPROPID261' ? 'lg:col-span-1' : ''}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--brand-black)] py-20 text-[var(--text-inverse)]">
        <div className="mx-auto max-w-[1360px] px-4 md:px-6 lg:px-8">
          <div className="mb-8 max-w-xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--brand-yellow)]">Property types</p>
            <h2 className="font-display text-[3rem] tracking-[-0.04em] md:text-[4rem]">Find a fit for the way you live and work.</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { href: '/buy', title: 'Residential', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=85' },
              { href: '/commercial', title: 'Commercial', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85' },
              { href: '/land', title: 'Land', image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85' },
            ].map((tile) => (
              <Link key={tile.title} href={tile.href} className="group relative block h-[420px] overflow-hidden border border-[rgba(255,255,255,0.12)]">
                <Image src={tile.image} alt={tile.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-70 transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-yellow)]">Explore</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em]">{tile.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-4 py-20 md:px-6 lg:px-8 lg:py-28">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">City guide</p>
            <h2 className="font-display text-[3rem] tracking-[-0.04em] md:text-[4rem]">Explore Kolkata</h2>
          </div>
          <Link href="/locations" className="hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] md:inline-flex">
            All locations
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-3">
            {['New Town', 'Salt Lake', 'Rajarhat', 'Mukundapur', 'Howrah', 'South Kolkata', 'North Kolkata', 'VIP Road'].map((item, index) => (
              <Link key={item} href={index === 0 ? '/locations/new-town' : '/locations'} className="block border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-4 text-left text-lg font-medium text-[var(--text-primary)] transition hover:border-[var(--brand-yellow)] hover:bg-[var(--surface-secondary)]">
                {item}
              </Link>
            ))}
          </div>

          <div className="relative overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-primary)]">
            <div className="relative h-[420px] md:h-[520px]">
              <Image src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1600&q=85" alt="Salt Lake and city skyline" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 80vw" />
            </div>
            <div className="space-y-3 p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">New Town</p>
              <h3 className="text-3xl font-semibold tracking-[-0.04em]">A practical address for growing families and businesses.</h3>
              <p className="max-w-xl text-base leading-7 text-[var(--text-secondary)]">
                Planned layouts, green edges and everyday access make New Town a dependable option for both residential and small commercial buyers.
              </p>
              <Link href="/locations/new-town" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
                Explore New Town
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-primary)] py-20">
        <div className="mx-auto max-w-[1360px] px-4 md:px-6 lg:px-8">
          <div className="mb-8 max-w-xl">
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">How we work</p>
            <h2 className="font-display text-[3rem] tracking-[-0.04em] md:text-[4rem]">Straightforward guidance at each step.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              ['01', 'Tell us what you need'],
              ['02', 'We shortlist suitable options'],
              ['03', 'Visit and compare the right fit'],
              ['04', 'Support through the final steps'],
            ].map(([step, title]) => (
              <div key={step} className="border border-[var(--border-subtle)] bg-[var(--surface-secondary)] p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">{step}</p>
                <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-yellow)] py-20">
        <div className="mx-auto max-w-[1360px] px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[rgba(11,11,11,0.7)]">Sell or list</p>
              <h2 className="max-w-lg text-[2.6rem] font-semibold tracking-[-0.06em] text-[var(--brand-black)] md:text-[4.2rem]">Thinking about selling?</h2>
            </div>
            <Link href="/sell-property" className="inline-flex items-center justify-center bg-[var(--brand-black)] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-inverse)]">
              List your property
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1360px] px-4 py-20 md:px-6 lg:px-8 lg:py-28">
        <div className="mb-8">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">FAQ</p>
          <h2 className="font-display text-[3rem] tracking-[-0.04em] md:text-[4rem]">Common questions</h2>
        </div>

        <div className="space-y-3">
          {[
            'What are the strongest areas to buy in Kolkata right now?',
            'Do you handle commercial and office spaces as well?',
            'Can I ask for a shortlist before visiting?',
            'How do I list my property with S S Property?',
            'Do you support renting and leasing in the same city?',
          ].map((question) => (
            <details key={question} className="group border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-5">
              <summary className="cursor-pointer list-none text-lg font-medium text-[var(--text-primary)]">
                {question}
              </summary>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--text-secondary)]">
                We can guide you through the local market, shortlist suitable addresses and help you understand what matters most for your budget and location.
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[var(--brand-black)] py-20 text-[var(--text-inverse)]">
        <div className="mx-auto max-w-[1360px] px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--brand-yellow)]">Need a quick answer?</p>
              <h2 className="font-display text-[3rem] tracking-[-0.04em] md:text-[4rem]">Tell us what you’re looking for.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--brand-yellow)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]">
                Contact us
              </Link>
              <Link href="/properties" className="inline-flex items-center justify-center border border-[rgba(247,245,239,0.25)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-inverse)]">
                Explore homes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
