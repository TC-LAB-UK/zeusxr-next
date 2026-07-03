import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import QuoteModal from '@/components/QuoteModal'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

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
        {/*
          Sentinel for scroll detection. Position: after the fixed nav (which is 72px tall).
          IntersectionObserver watches this. When it leaves the viewport (user scrolled),
          #nav gets .scrolled class. IntersectionObserver is the same API as ScrollReveal
          and is confirmed working on this device.
        */}
        <div id="nav-sentinel" aria-hidden="true" style={{ height: '1px', marginTop: '0px', pointerEvents: 'none' }} />
        {children}
        <Footer />
        <QuoteModal />
        <CookieConsent />
        {/*
          Scroll detection only. Hamburger is now handled by CSS checkbox hack — no JS needed.
          IntersectionObserver on nav-sentinel: when it leaves viewport, nav gets .scrolled.
          Fallback scroll listener covers edge cases.
        */}
        <Script id="nav-scroll" strategy="afterInteractive">{`
          (function() {
            var nav = document.getElementById('nav');
            if (!nav) return;

            function setScrolled(on) {
              if (on) { nav.classList.add('scrolled'); }
              else    { nav.classList.remove('scrolled'); }
            }

            /* Primary: IntersectionObserver on the sentinel element.
               rootMargin '56px' expands the root 56px upward, so the sentinel
               (at top of page) stays "intersecting" until the user scrolls 56px. */
            var sentinel = document.getElementById('nav-sentinel');
            if (sentinel && 'IntersectionObserver' in window) {
              var io = new IntersectionObserver(function(entries) {
                setScrolled(!entries[0].isIntersecting);
              }, { threshold: 0, rootMargin: '56px 0px 0px 0px' });
              io.observe(sentinel);
            }

            /* Fallback: scroll events on all possible scroll targets.
               On iOS, body{overflow-x:hidden} makes html the scroller. */
            function onScroll() {
              var y = window.pageYOffset
                   || window.scrollY
                   || document.documentElement.scrollTop
                   || document.body.scrollTop
                   || 0;
              setScrolled(y > 56);
            }
            window.addEventListener('scroll', onScroll, { passive: true });
            document.addEventListener('scroll', onScroll, { passive: true });
            document.documentElement.addEventListener('scroll', onScroll, { passive: true });
            onScroll();
          })();
        `}</Script>
      </body>
    </html>
  )
}
