import Link from 'next/link'

export default function ContactPage() {
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
            <p>PS Newtown Square, Chinar Park / Atghora Newtown Road, Kolkata 700136</p>
            <p>hello@ssproperty.in</p>
            <p>+91 98300 00000</p>
          </div>
        </div>

        <div className="border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-6 md:p-8">
          <form className="space-y-5">
            <label className="block text-sm font-medium text-[var(--text-primary)]">
              Name
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 block w-full border border-[var(--border-subtle)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--brand-yellow)]"
              />
            </label>

            <label className="block text-sm font-medium text-[var(--text-primary)]">
              Email
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 block w-full border border-[var(--border-subtle)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--brand-yellow)]"
              />
            </label>

            <label className="block text-sm font-medium text-[var(--text-primary)]">
              Property requirement
              <textarea
                rows={5}
                placeholder="Tell us about the kind of property or requirement you're interested in"
                className="mt-2 block w-full resize-none border border-[var(--border-subtle)] bg-[var(--surface-secondary)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--brand-yellow)]"
              />
            </label>

            <button type="submit" className="inline-flex items-center justify-center bg-[var(--brand-yellow)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]">
              Send enquiry
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
