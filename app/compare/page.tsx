import Link from 'next/link'

export default function ComparePage() {
  return (
    <div className="mx-auto max-w-[1360px] px-4 py-16 md:px-6 lg:px-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">Compare</p>
      <h1 className="mt-2 font-display text-[3rem] tracking-[-0.05em] md:text-[4.5rem]">Shortlists side by side</h1>
      <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
        Choose up to a few properties to compare the key details before you enquire.
      </p>
      <div className="mt-10 flex gap-4">
        <Link href="/properties" className="inline-flex items-center justify-center bg-[var(--brand-black)] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-inverse)]">
          Find properties
        </Link>
      </div>
    </div>
  )
}
