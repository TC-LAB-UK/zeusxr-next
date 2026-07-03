import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
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
        {/* Native [data-quote] CTA wiring — bypasses React event delegation entirely.
            window.openQuoteModal is exposed by QuoteModal.tsx on mount.
            touchend fires reliably on iOS Safari from any element incl. position:fixed. */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var lt = 0;
            function tryOpen(el) {
              var title = el.getAttribute('data-quote') || 'Get a Quote';
              if (typeof window.openQuoteModal === 'function') {
                window.openQuoteModal(title);
              } else {
                /* React not hydrated yet — retry after short delay */
                setTimeout(function() {
                  if (typeof window.openQuoteModal === 'function') window.openQuoteModal(title);
                }, 400);
              }
            }
            window.addEventListener('touchend', function(e) {
              var el = e.target && e.target.closest && e.target.closest('[data-quote]');
              if (el) { e.preventDefault(); lt = Date.now(); tryOpen(el); }
            }, false);
            window.addEventListener('click', function(e) {
              if (Date.now() - lt < 600) return;
              var el = e.target && e.target.closest && e.target.closest('[data-quote]');
              if (el) tryOpen(el);
            }, false);
          })();
        ` }} />
        {/* Inline script — runs synchronously after DOM is parsed, no framework delay.
            Uses every possible scroll detection method for iOS Safari compatibility. */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            function initScroll() {
              var nav = document.getElementById('nav');
              if (!nav) return;
              function update() {
                var y = document.documentElement.scrollTop
                     || document.body.scrollTop
                     || window.pageYOffset
                     || window.scrollY
                     || 0;
                nav.classList.toggle('scrolled', y > 10);
              }
              /* Every scroll signal we know of */
              window.addEventListener('scroll',   update, { passive: true });
              document.addEventListener('scroll', update, { passive: true });
              document.documentElement.addEventListener('scroll', update, { passive: true });
              /* touchmove fires live during a finger drag on iOS */
              window.addEventListener('touchmove', update, { passive: true });
              window.addEventListener('touchend',  update, { passive: true });
              /* IntersectionObserver as an additional trigger */
              var s = document.getElementById('nav-sentinel');
              if (s && window.IntersectionObserver) {
                new IntersectionObserver(function(e) {
                  nav.classList.toggle('scrolled', !e[0].isIntersecting);
                }, { rootMargin: '56px 0px 0px 0px' }).observe(s);
              }
              update();
            }
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initScroll);
            } else {
              initScroll();
            }
          })();
        ` }} />
      </body>
    </html>
  )
}
