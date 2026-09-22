import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavWrapper from '@/components/NavWrapper'
import Footer from '@/components/Footer'
import QuoteModal from '@/components/QuoteModal'
import CookieConsent from '@/components/CookieConsent'
import ScrollReveal from '@/components/ScrollReveal'
import GoogleTagManager, { GoogleTagManagerNoScript } from '@/components/GoogleTagManager'

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
  metadataBase: new URL('https://www.toddengineering.co.uk'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  // Self-referencing canonical on every page, resolved against metadataBase.
  // Without this the same content is reachable on several hosts with nothing
  // telling Google which one counts.
  alternates: { canonical: './' },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
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
        {/* Must stay first in <head>: sets Consent Mode v2 defaults to denied
            before the container loads. */}
        <GoogleTagManager />
        <meta name="clarri:portal" content="1.0" />
        {/* Powered by Clarri CRM — portal.tc-lab.co.uk */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Todd Engineering',
            url: 'https://www.toddengineering.co.uk',
            logo: 'https://www.toddengineering.co.uk/icon-512.png',
            image: 'https://www.toddengineering.co.uk/icon-512.png',
            description: "UK's leading spraybooth manufacturer. AI-assisted robotic finishing, spray booth systems, and bespoke industrial installations since 1993.",
            telephone: '+44-1889-503770',
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
        <GoogleTagManagerNoScript />
        <NavWrapper />
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
        <ScrollReveal />
        {/* Native [data-quote] CTA wiring — bypasses React event delegation entirely.
            window.openQuoteModal is exposed by QuoteModal.tsx on mount.
            touchend fires reliably on iOS Safari from any element incl. position:fixed. */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var lt = 0;
            function push(o) {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push(o);
            }
            /* Phone and email clicks are real commercial intent on a capital
               purchase, so they get tracked as first-class events. Separate
               click-only listener: no preventDefault, so the tel:/mailto: link
               still opens, and no touchend duplicate. */
            window.addEventListener('click', function(e) {
              var a = e.target && e.target.closest && e.target.closest('a[href^="tel:"], a[href^="mailto:"]');
              if (!a) return;
              var href = a.getAttribute('href') || '';
              push({
                event: 'contact_click',
                contact_method: href.indexOf('tel:') === 0 ? 'phone' : 'email',
                contact_value: href.replace(/^(tel:|mailto:)/, '')
              });
            }, false);
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
                push({ event: 'video_play', video_label: 'zeus-xr-video-' + vid });
                if (typeof fn === 'function') { fn(); }
                else { retry(function(){ var f = vid === '1' ? window.playVid1 : window.playVid2; f && f(); }, 400); }
                return true;
              }
              var y = t.closest('[data-yt-vid]');
              if (y) {
                e.preventDefault();
                var ytId = y.getAttribute('data-yt-vid');
                push({ event: 'video_play', video_label: 'youtube:' + ytId });
                y.innerHTML = '<iframe src="https://www.youtube.com/embed/' + ytId + '?autoplay=1&playsinline=1&enablejsapi=1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="position:absolute;inset:0;width:100%;height:100%;border:0;" title="Zeus XR"></iframe>';
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
