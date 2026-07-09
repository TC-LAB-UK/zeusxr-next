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
  metadataBase: new URL('https://toddengineering.co.uk'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    siteName: 'Todd Engineering',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/icon-512.png', width: 512, height: 512 }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <meta name="clarri:portal" content="1.0" />
        {/* Powered by Clarri CRM — portal.tc-lab.co.uk */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Todd Engineering',
            url: 'https://toddengineering.co.uk',
            logo: 'https://toddengineering.co.uk/icon-512.png',
            image: 'https://toddengineering.co.uk/icon-512.png',
            description: "UK's leading spraybooth manufacturer. AI-assisted robotic finishing, spray booth systems, and bespoke industrial installations since 1993.",
            telephone: '+44-845-017-6465',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Gregory Works, Armitage Road',
              addressLocality: 'Rugeley',
              postalCode: 'WS15 1PW',
              addressCountry: 'GB',
            },
            sameAs: [
              'https://www.linkedin.com/company/todd-engineering-ltd',
            ],
          })}}
        />
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
            function retry(fn, delay) {
              setTimeout(function() { if (typeof fn === 'function') fn(); }, delay);
            }
            function handleTarget(e) {
              var t = e.target;
              if (!t || !t.closest) return false;
              var q = t.closest('[data-quote]');
              if (q) {
                e.preventDefault();
                var title = q.getAttribute('data-quote') || 'Get a Quote';
                if (typeof window.openQuoteModal === 'function') { window.openQuoteModal(title); }
                else { retry(function(){ window.openQuoteModal && window.openQuoteModal(title); }, 400); }
                return true;
              }
              var d = t.closest('[data-demo]');
              if (d) {
                e.preventDefault();
                if (typeof window.openDemoModal === 'function') { window.openDemoModal(); }
                else { retry(function(){ window.openDemoModal && window.openDemoModal(); }, 400); }
                return true;
              }
              var v = t.closest('[data-play-vid]');
              if (v) {
                e.preventDefault();
                var vid = v.getAttribute('data-play-vid');
                var fn = vid === '1' ? window.playVid1 : window.playVid2;
                if (typeof fn === 'function') { fn(); }
                else { retry(function(){ var f = vid === '1' ? window.playVid1 : window.playVid2; f && f(); }, 400); }
                return true;
              }
              var y = t.closest('[data-yt-vid]');
              if (y) {
                e.preventDefault();
                var ytId = y.getAttribute('data-yt-vid');
                y.innerHTML = '<iframe src="https://www.youtube.com/embed/' + ytId + '?autoplay=1&playsinline=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;" title="Zeus XR"></iframe>';
                return true;
              }
              return false;
            }
            window.addEventListener('touchend', function(e) {
              if (handleTarget(e)) lt = Date.now();
            }, false);
            window.addEventListener('click', function(e) {
              if (Date.now() - lt < 600) return;
              handleTarget(e);
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
