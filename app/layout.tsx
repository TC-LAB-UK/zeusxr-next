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
        {children}
        <Footer />
        <QuoteModal />
        <CookieConsent />
        {/*
          nav-init: standalone native script for hamburger + scroll.
          Runs completely outside React — guaranteed to work on all mobile browsers.
          Drives state via html[data-mob-open] attribute; CSS handles all visuals.
        */}
        <Script id="nav-init" strategy="afterInteractive">{`
          (function() {
            var hamburger = document.getElementById('nav-hamburger');
            var mobMenu   = document.getElementById('mob-menu');
            var nav       = document.getElementById('nav');
            var lastTap   = 0;

            if (!hamburger || !mobMenu) return;

            function isOpen() {
              return document.documentElement.hasAttribute('data-mob-open');
            }

            function openMenu() {
              document.documentElement.setAttribute('data-mob-open', '');
              hamburger.setAttribute('aria-expanded', 'true');
              hamburger.setAttribute('aria-label', 'Close menu');
              mobMenu.setAttribute('aria-hidden', 'false');
            }

            function closeMenu() {
              document.documentElement.removeAttribute('data-mob-open');
              hamburger.setAttribute('aria-expanded', 'false');
              hamburger.setAttribute('aria-label', 'Open menu');
              mobMenu.setAttribute('aria-hidden', 'true');
            }

            function toggle(e) {
              e.preventDefault();
              e.stopPropagation();
              var now = Date.now();
              if (now - lastTap < 300) return;
              lastTap = now;
              if (isOpen()) { closeMenu(); } else { openMenu(); }
            }

            /* touchend: primary handler on mobile (fires before click) */
            hamburger.addEventListener('touchend', toggle, { passive: false });
            /* click: fallback for desktop / non-touch */
            hamburger.addEventListener('click', function(e) {
              if (Date.now() - lastTap > 200) toggle(e);
            });

            /* Close when a link inside the mobile menu is tapped */
            mobMenu.addEventListener('click', function(e) {
              var t = e.target;
              while (t && t !== mobMenu) {
                if (t.tagName === 'A' || t.classList.contains('mob-cta')) {
                  closeMenu();
                  return;
                }
                t = t.parentElement;
              }
            });

            /* Scroll detection — nav gets .scrolled class for solid background */
            if (nav) {
              function onScroll() {
                var y = window.scrollY || document.documentElement.scrollTop || 0;
                if (y > 56) { nav.classList.add('scrolled'); }
                else        { nav.classList.remove('scrolled'); }
              }
              window.addEventListener('scroll', onScroll, { passive: true });
              document.addEventListener('scroll', onScroll, { passive: true });
              onScroll(); /* run once immediately */
            }
          })();
        `}</Script>
      </body>
    </html>
  )
}
