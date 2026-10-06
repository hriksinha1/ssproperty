import Link from 'next/link'
import { ArrowRight, Mail, MapPin, Menu, Phone } from 'lucide-react'

import { navItems, siteConfig } from '@/config/site'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-subtle)] bg-[rgba(247,245,239,0.88)] backdrop-blur-md">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="S S Property home">
          <span className="flex h-10 w-10 items-center justify-center bg-[var(--brand-yellow)] text-lg font-black text-[var(--brand-black)]">SS</span>
          <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[var(--text-primary)]">Property</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {siteConfig.whatsapp ? (
            <a href={siteConfig.whatsapp} className="inline-flex items-center gap-2 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--text-primary)]">
              WhatsApp
            </a>
          ) : null}
          <Link href="/contact" className="bg-[var(--brand-yellow)] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--brand-black)]">
            Talk to us
          </Link>
        </div>

        <details className="group relative lg:hidden">
          <summary aria-label="Toggle navigation" className="flex h-11 w-11 cursor-pointer list-none items-center justify-center border border-[var(--border-subtle)]">
            <Menu size={18} />
          </summary>
          <nav aria-label="Mobile navigation" className="absolute right-0 top-[calc(100%+0.75rem)] z-50 grid w-[min(90vw,20rem)] gap-1 border border-[var(--border-subtle)] bg-[var(--surface-primary)] p-3 shadow-lg">
            {[...navItems, { href: '/properties', label: 'All properties' }, { href: '/locations', label: 'Locations' }, { href: '/favorites', label: 'Favourites' }, { href: '/compare', label: 'Compare' }].map((item) => (
              <Link key={item.href} href={item.href} className="px-3 py-3 text-sm font-medium text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]">
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-[var(--brand-black)] text-[var(--text-inverse)]">
      <div className="mx-auto max-w-[1360px] px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center bg-[var(--brand-yellow)] text-lg font-black text-[var(--brand-black)]">SS</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Property</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-7 text-[rgba(247,245,239,0.7)]">{siteConfig.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={siteConfig.instagram} aria-label="Instagram" className="flex h-10 items-center justify-center border border-[rgba(247,245,239,0.2)] px-3 text-xs text-[var(--text-inverse)]">
                Instagram
              </a>
              <a href={siteConfig.facebook} aria-label="Facebook" className="flex h-10 items-center justify-center border border-[rgba(247,245,239,0.2)] px-3 text-xs text-[var(--text-inverse)]">
                Facebook
              </a>
              <a href={siteConfig.linkedin} aria-label="LinkedIn" className="flex h-10 items-center justify-center border border-[rgba(247,245,239,0.2)] px-3 text-xs text-[var(--text-inverse)]">
                LinkedIn
              </a>
              <a href={siteConfig.youtube} aria-label="YouTube" className="flex h-10 items-center justify-center border border-[rgba(247,245,239,0.2)] px-3 text-xs text-[var(--text-inverse)]">
                YouTube
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--brand-yellow)]">Explore</p>
            <div className="mt-5 grid gap-3 text-sm text-[rgba(247,245,239,0.72)]">
              <Link href="/properties">Properties</Link>
              <Link href="/buy">Buy</Link>
              <Link href="/rent">Rent</Link>
              <Link href="/commercial">Commercial</Link>
              <Link href="/land">Land</Link>
              <Link href="/locations">Locations</Link>
              <Link href="/favorites">Favourites</Link>
              <Link href="/compare">Compare</Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--brand-yellow)]">Company</p>
            <div className="mt-5 grid gap-3 text-sm text-[rgba(247,245,239,0.72)]">
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/sell-property">Sell property</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--brand-yellow)]">Visit</p>
            <div className="mt-5 space-y-4 text-sm text-[rgba(247,245,239,0.72)]">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="mt-1 shrink-0 text-[var(--brand-yellow)]" />
                <span>{siteConfig.address}</span>
              </div>
              {siteConfig.phone ? (
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3">
                  <Phone size={14} className="text-[var(--brand-yellow)]" />
                  <span>{siteConfig.phone}</span>
                </a>
              ) : null}
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3">
                <Mail size={14} className="text-[var(--brand-yellow)]" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[rgba(247,245,239,0.15)] pt-6 text-xs uppercase tracking-[0.16em] text-[rgba(247,245,239,0.68)] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} S S Property</span>
          <div className="flex items-center gap-5">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[var(--brand-yellow)]">
              Tell us what you need
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
