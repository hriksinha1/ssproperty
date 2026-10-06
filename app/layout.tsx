import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Manrope } from 'next/font/google'

import { SiteFooter, SiteHeader } from '@/components/site-shell'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: '400',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ssproperty.in'),
  title: {
    default: 'S S Property | Kolkata property specialists',
    template: '%s | S S Property',
  },
  description: 'Homes, commercial properties and land across Kolkata, guided by a local team with practical advice.',
  openGraph: {
    title: 'S S Property',
    description: 'Kolkata property specialists for homes, offices and land.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#F6C515',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${instrumentSerif.variable}`}>
      <body className="bg-[var(--surface-secondary)] text-[var(--text-primary)] antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-[var(--brand-yellow)] focus:px-4 focus:py-2 focus:text-[var(--brand-black)]">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
