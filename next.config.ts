import type { NextConfig } from "next";

const securityHeaders = [
  // Enforce HTTPS for 2 years, include subdomains
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Prevent clickjacking
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // Prevent MIME-type sniffing
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Only send origin in Referer header on same-origin requests
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Disable unused browser features
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Content Security Policy
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Next.js requires unsafe-inline for hydration; GA4 loaded via gtag
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      // Allow images from Supabase storage, data URIs, and any https (product/article images)
      "img-src 'self' data: blob: https:",
      // API calls: Supabase + GA4
      "connect-src 'self' https://gmpqytfjcmgmrhqocdyk.supabase.co https://www.google-analytics.com https://analytics.google.com https://region1.google-analytics.com https://region1.analytics.google.com",
      // YouTube embeds
      "frame-src https://www.youtube.com https://youtube-nocookie.com",
      // Prevent this site being embedded elsewhere
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests",
    ].join('; '),
  },
  // Remove X-Powered-By (already off in Next.js by default, but belt+braces)
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,

  // 301 redirects: toddengineering.co.uk URL structure → zeusxr.co structure
  async redirects() {
    return [
      // ── Core pages ──────────────────────────────────────────────────────
      { source: '/about-us', destination: '/about/company', permanent: true },
      { source: '/about-us/:path*', destination: '/about/company', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/finance-options', destination: '/contact', permanent: true },
      { source: '/privacy-policy', destination: '/privacy', permanent: true },
      { source: '/sitemap', destination: '/sitemap.xml', permanent: true },

      // ── Products ─────────────────────────────────────────────────────────
      // Zeus electric upgrade → Zeus XR product page
      {
        source: '/products/spraybooth-technology/zeus-all-electric-upgrade',
        destination: '/zeus-xr',
        permanent: true,
      },
      // All other product sub-pages → products listing
      { source: '/products/preparation', destination: '/products', permanent: true },
      { source: '/products/smart-repair', destination: '/products', permanent: true },
      { source: '/products/spraybooths', destination: '/products', permanent: true },
      { source: '/products/spraybooth-features', destination: '/products', permanent: true },
      { source: '/products/spraybooth-technology', destination: '/products', permanent: true },
      { source: '/products/spraybooth-technology/:path*', destination: '/products', permanent: true },
      { source: '/products/paint-mixing-room', destination: '/products', permanent: true },
      { source: '/products/export', destination: '/products', permanent: true },

      // ── Support ──────────────────────────────────────────────────────────
      { source: '/support/servicing', destination: '/solutions/maintenance', permanent: true },
      { source: '/support/training', destination: '/solutions/installation', permanent: true },
      { source: '/support/:path*', destination: '/solutions/installation', permanent: true },

      // ── News & content ───────────────────────────────────────────────────
      // Old news sub-categories
      { source: '/news/news', destination: '/news', permanent: true },
      { source: '/news/news/:path*', destination: '/news', permanent: true },
      { source: '/news/case-studies', destination: '/projects', permanent: true },
      { source: '/news/case-studies/:path*', destination: '/projects', permanent: true },
      { source: '/news/recent-installations', destination: '/projects', permanent: true },
      { source: '/news/recent-installations/:path*', destination: '/projects', permanent: true },

      // Old individual article slugs → specific new article pages
      { source: '/news/proudly-made-in-britain-todd-engineering-in-mem-magazine', destination: '/news/mem-magazine-made-in-britain', permanent: true },
      { source: '/news/project-success-al-haddad-motors-mercedes-benz-bahrain', destination: '/news/al-haddad-motors-bahrain', permanent: true },
      { source: '/news/full-turn-key-project-complete-at-al-haddad-motors-mercedes-benz-bahrain', destination: '/news/al-haddad-motors-bahrain', permanent: true },
      { source: '/news/published-in-the-repairers-magazine-winter-edition', destination: '/news/repairers-magazine-winter-2024', permanent: true },
      { source: '/news/todd-engineering-triumphs-at-the-night-of-knights-awards', destination: '/news/night-of-knights-award-2024', permanent: true },
      { source: '/news/todd-engineering-and-mg-accident-repair-centres-carbon-neutral-partnership', destination: '/news/mg-carbon-neutral-partnership', permanent: true },
      { source: '/news/hills-helicopters', destination: '/news/hills-helicopters-2024', permanent: true },
      { source: '/news/angus-mackinnon-expands-with-carbon-neutral-bodyshop-featuring-todd-engineering-s-zeus-spray-booths', destination: '/news/angus-mackinnon-carbon-neutral-2024', permanent: true },
      { source: '/news/angus-mackinnon-advancing-sustainability-with-todd-engineering', destination: '/news/angus-mackinnon-carbon-neutral-2024', permanent: true },
      { source: '/news/rhodes-accident-repair-centre-leading-the-way-in-carbon-neutrality', destination: '/news/rhodes-carbon-neutrality-2024', permanent: true },
      { source: '/news/rhodes-rugeley', destination: '/news/rhodes-carbon-neutrality-2024', permanent: true },
      { source: '/news/repair-centre-marking-two-years-of-sustainable-excellence', destination: '/news/mg-two-years-sustainable', permanent: true },
      { source: '/news/vcr-vehicle-crash-repairs-invests-in-a-greener-future', destination: '/news/vcr-greener-future', permanent: true },
      { source: '/news/nbra-the-repairer-magazine-feature-todd-engineering-pioneering-sustainability-in-spray-booth-technology', destination: '/news/nbra-repairer-magazine-2024', permanent: true },
      { source: '/news/bodyshop-magazine-feature-todd-engineering-in-partnership-with-bmw-sandal-wakefield', destination: '/news/sandal-bmw-bodyshop-magazine', permanent: true },
      { source: '/news/todd-engineering-secures-multi-million-pound-contract', destination: '/news/seah-wind-multi-million-contract', permanent: true },
      { source: '/news/todd-engineering-completes-750k-wfel-project-for-military-boxer-program', destination: '/news/wfel-boxer-750k', permanent: true },
      { source: '/news/the-smallest-cog-richard-hammond-s-workshop-powered-by-todd-engineering', destination: '/news/richard-hammond-smallest-cog', permanent: true },
      { source: '/news/latest-spraybooths-from-todd-engineering-make-global-waves', destination: '/news/global-waves-spraybooths', permanent: true },
      { source: '/news/500k-contract-begins-todds-smart-repair-facilities-rollout', destination: '/news/500k-smart-repair-rollout', permanent: true },
      { source: '/news/todd-celebrates-750k-order-to-help-with-boxer-programme', destination: '/news/750k-boxer-programme', permanent: true },
      // Other old article slugs with no direct equivalent → /news listing
      { source: '/news/comprehensive-turnkey-project-for-gemini-taunton', destination: '/news', permanent: true },
      { source: '/news/custom-titan-cv-spray-booth-installation-for-rmd-kwikform', destination: '/projects', permanent: true },
      { source: '/news/hgv-solutions', destination: '/projects', permanent: true },

      // ── Case study slug renames ───────────────────────────────────────────
      { source: '/projects/case-study-1', destination: '/projects/uk-offshore-wind-farm', permanent: true },
      { source: '/projects/case-study-2', destination: '/projects/bahrain-aerospace-facility', permanent: true },
      { source: '/projects/case-study-3', destination: '/projects/k-and-s', permanent: true },
      { source: '/projects/amalgam', destination: '/projects/k-and-s', permanent: true },
      { source: '/projects/british-wind-farm', destination: '/projects/uk-offshore-wind-farm', permanent: true },
      { source: '/projects/dubai-aerospace', destination: '/projects/bahrain-aerospace-facility', permanent: true },
      // Old toddengineering.co.uk news paths for case studies → specific project pages
      { source: '/news/hills-helicopters-advanced-solutions-for-aerospace-manufacturing', destination: '/projects/hills-helicopters', permanent: true },
      { source: '/news/sail-gp', destination: '/projects/sail-gp', permanent: true },
      { source: '/news/wfel', destination: '/projects/wfel', permanent: true },
      { source: '/news/gemini-taunton', destination: '/projects/gemini-taunton', permanent: true },
      { source: '/news/al-haddad-motors-mercedes-benz-bahrain', destination: '/projects/al-haddad-motors', permanent: true },
      { source: '/news/angus-mackinnon', destination: '/projects/angus-mackinnon', permanent: true },
      { source: '/news/rhodes-carbon-neutral', destination: '/projects/rhodes', permanent: true },
      { source: '/news/rmd-kwikform', destination: '/projects/rmd-kwikform', permanent: true },
      { source: '/news/hgv-solutions-zeus-commercial', destination: '/projects/hgv-solutions', permanent: true },
      { source: '/news/autolux', destination: '/projects/autolux', permanent: true },
      { source: '/news/jet-glow', destination: '/projects/jet-glow', permanent: true },
      { source: '/news/mg-accident-repair', destination: '/projects/mg-accident-repair', permanent: true },
      { source: '/news/sandal-bmw', destination: '/projects/sandal-bmw', permanent: true },
      { source: '/news/smallest-cog', destination: '/projects/smallest-cog', permanent: true },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gmpqytfjcmgmrhqocdyk.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'zeusxr.co',
      },
    ],
  },
};

export default nextConfig;
