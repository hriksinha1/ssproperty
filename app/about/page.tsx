import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1360px] px-4 py-16 md:px-6 lg:px-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">About us</p>
      <h1 className="mt-2 max-w-3xl font-display text-[3.2rem] tracking-[-0.05em] md:text-[5rem]">Property guidance with a local point of view.</h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
        S S Property helps buyers, renters, landlords and businesses find practical addresses in Kolkata with clear advice and honest conversations.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          ['Local', 'We focus on the neighbourhoods buyers actually care about.'],
          ['Practical', 'Clear, direct advice without the usual noise.'],
          ['Kolkata-aware', 'From New Town to Salt Lake, we understand the city’s patterns.'],
        ].map(([title, copy]) => (
          <div key={title} className="border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">{title}</p>
            <p className="mt-4 text-base leading-7 text-[var(--text-secondary)]">{copy}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <h2 className="font-display text-[2.8rem] tracking-[-0.04em]">What we do</h2>
          <p className="text-base leading-8 text-[var(--text-secondary)]">
            We help people find homes, commercial spaces and land with a practical lens shaped by Kolkata’s routes, timings and neighbourhood character.
          </p>
          <p className="text-base leading-8 text-[var(--text-secondary)]">
            We start with what matters to you most: budget, location, layout, commute and future use. Then we narrow the search and keep the conversation grounded in the real options that fit.
          </p>
        </div>
        <div className="bg-[var(--brand-yellow)] p-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[rgba(11,11,11,0.7)]">Still exploring?</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[var(--brand-black)]">Tell us what you need.</h3>
          <Link href="/contact" className="mt-6 inline-flex items-center justify-center bg-[var(--brand-black)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-inverse)]">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  )
}
