import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import QuoteModal from '@/components/QuoteModal'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: {
    default: 'Todd Engineering — Advanced Spraybooth Technology',
    template: '%s — Todd Engineering',
  },
  description: "Todd Engineering — UK's leading spraybooth manufacturer. AI-assisted robotic finishing, spray booth systems, and bespoke industrial installations since 1993.",
  metadataBase: new URL('https://zeusxr.co'),
  openGraph: {
    siteName: 'Todd Engineering',
    locale: 'en_GB',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="clarri:portal" content="1.0" />
        {/* Powered by Clarri CRM — portal.tc-lab.co.uk */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('te-theme')||'light';document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
      </head>
      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
        <QuoteModal />
      </body>
    </html>
  )
}
