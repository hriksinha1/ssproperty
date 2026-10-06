import Link from 'next/link'

export default function SellPropertyPage() {
  return (
    <div className="mx-auto max-w-[1360px] px-4 py-16 md:px-6 lg:px-8">
      <div className="rounded-none bg-[var(--brand-yellow)] p-8 md:p-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[rgba(11,11,11,0.7)]">Sell or list</p>
        <h1 className="mt-3 max-w-2xl font-display text-[3rem] tracking-[-0.05em] md:text-[5rem]">Thinking about selling or leasing?</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-[rgba(11,11,11,0.8)]">
          We can help position your property clearly, identify the right audience and keep the process straightforward.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          ['01', 'Tell us about the property'],
          ['02', 'We identify the right audience'],
          ['03', 'List and follow through'],
        ].map(([step, title]) => (
          <div key={step} className="border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">{step}</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{title}</h2>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-base leading-8 text-[var(--text-secondary)]">Looking for a practical plan for a sale or leasing conversation?</p>
        <Link href="/contact" className="inline-flex items-center justify-center bg-[var(--brand-black)] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-inverse)]">
          Talk to us
        </Link>
      </div>
    </div>
  )
}
