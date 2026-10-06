import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    ['Buy', 'Shortlists built around your budget, preferred localities and how you plan to live.'],
    ['Rent', 'Straightforward options for families, professionals and small businesses.'],
    ['Sell', 'Clear pricing guidance and a practical plan to present your property.'],
    ['Commercial', 'Spaces for offices, showrooms, shops and business-led requirements.'],
    ['Land', 'Options for residential and commercial plots with context on access and use.'],
    ['Consultation', 'A quick, direct conversation to understand the right next step.'],
  ]

  return (
    <div className="mx-auto max-w-[1360px] px-4 py-16 md:px-6 lg:px-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Services</p>
      <h1 className="mt-2 font-display text-[3.2rem] tracking-[-0.05em] md:text-[5rem]">Property advice that stays grounded.</h1>

      <div className="mt-10 space-y-6">
        {services.map(([title, description]) => (
          <div key={title} className="grid gap-6 border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6 md:grid-cols-[220px_1fr_auto] md:items-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]">{title}</p>
            <p className="text-base leading-7 text-[var(--text-secondary)]">{description}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em]">
              Get started
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
