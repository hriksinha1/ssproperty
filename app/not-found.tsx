import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1360px] px-4 py-24 text-center md:px-6 lg:px-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">404</p>
      <h1 className="mt-3 font-display text-[3.5rem] tracking-[-0.05em] md:text-[6rem]">Page not found.</h1>
      <p className="mt-5 text-lg text-[var(--text-secondary)]">The page you’re looking for may have moved, or it may not exist.</p>
      <Link href="/" className="mt-8 inline-flex items-center justify-center bg-[var(--brand-yellow)] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]">
        Back home
      </Link>
    </div>
  )
}
