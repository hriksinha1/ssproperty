import Link from 'next/link'

import { siteConfig } from '@/config/site'
import { properties } from '@/data/properties'

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ property?: string }> }) {
  const { property: propertyId } = await searchParams
  const property = properties.find((item) => item.id === propertyId || item.slug === propertyId)

  return (
    <div className="mx-auto max-w-[1360px] px-4 py-16 md:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Contact</p>
          <h1 className="mt-2 font-display text-[3rem] tracking-[-0.05em] md:text-[5rem]">Let’s talk property.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-secondary)]">
            Tell us what you’re looking for and we’ll help you narrow the next steps with practical guidance.
          </p>

          <div className="mt-10 space-y-4 text-base text-[var(--text-secondary)]">
            <p>{siteConfig.address}</p>
            <a href={`mailto:${siteConfig.email}`} className="block underline underline-offset-4">{siteConfig.email}</a>
            {siteConfig.phone ? <a href={`tel:${siteConfig.phone}`} className="block">{siteConfig.phone}</a> : null}
          </div>
        </div>

        <div className="border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6 md:p-8">
          <form action={`mailto:${siteConfig.email}`} method="post" encType="text/plain" className="space-y-5">
            <input type="hidden" name="subject" value="Property enquiry - S S Property" />
            <label className="block text-sm font-medium text-[var(--text-primary)]">
              Name
              <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                className="mt-2 block w-full border border-[var(--border-subtle)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--brand-yellow)]"
                required
              />
            </label>

            <label className="block text-sm font-medium text-[var(--text-primary)]">
              Email
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="mt-2 block w-full border border-[var(--border-subtle)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--brand-yellow)]"
                required
              />
            </label>

            <label className="block text-sm font-medium text-[var(--text-primary)]">
              I’m interested in
              <select name="interest" defaultValue={property ? 'property' : ''} className="mt-2 block w-full border border-[var(--border-subtle)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--brand-yellow)]">
                <option value="" disabled>Select a requirement</option>
                <option value="property">A specific property</option>
                <option value="buy">Buying</option>
                <option value="rent">Renting</option>
                <option value="commercial">Commercial property</option>
                <option value="land">Land</option>
                <option value="sell">Selling or leasing</option>
              </select>
            </label>

            <label className="block text-sm font-medium text-[var(--text-primary)]">
              Property requirement
              <textarea
                name="message"
                rows={5}
                defaultValue={property ? `I’d like to know more about ${property.title} (${property.id}) in ${property.locality}.` : undefined}
                placeholder="Tell us about the kind of property or requirement you're interested in"
                className="mt-2 block w-full resize-none border border-[var(--border-subtle)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--brand-yellow)]"
                required
              />
            </label>

            <button type="submit" className="inline-flex items-center justify-center bg-[var(--brand-yellow)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]">
              Prepare email enquiry
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap gap-4 text-[11px] font-bold uppercase tracking-[0.18em]">
        <Link href="/properties" className="border border-[var(--border-subtle)] px-4 py-2">Browse properties</Link>
        <Link href="/sell-property" className="border border-[var(--border-subtle)] px-4 py-2">Sell your property</Link>
      </div>
    </div>
  )
}
