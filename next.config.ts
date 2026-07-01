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

      // Known old individual article slugs that don't exist on new site → /news
      { source: '/news/proudly-made-in-britain-todd-engineering-in-mem-magazine', destination: '/news', permanent: true },
      { source: '/news/comprehensive-turnkey-project-for-gemini-taunton', destination: '/news', permanent: true },
      { source: '/news/custom-titan-cv-spray-booth-installation-for-rmd-kwikform', destination: '/projects', permanent: true },
      { source: '/news/full-turn-key-project-complete-at-al-haddad-motors-mercedes-benz-bahrain', destination: '/projects', permanent: true },
      { source: '/news/project-success-al-haddad-motors-mercedes-benz-bahrain', destination: '/projects', permanent: true },
      { source: '/news/published-in-the-repairers-magazine-winter-edition', destination: '/news', permanent: true },
      { source: '/news/todd-engineering-triumphs-at-the-night-of-knights-awards', destination: '/news', permanent: true },
      { source: '/news/angus-mackinnon-advancing-sustainability-with-todd-engineering', destination: '/projects', permanent: true },
      { source: '/news/hgv-solutions', destination: '/projects', permanent: true },
      { source: '/news/todd-engineering-and-mg-accident-repair-centres-carbon-neutral-partnership', destination: '/news', permanent: true },
      { source: '/news/hills-helicopters', destination: '/news', permanent: true },
      { source: '/news/rhodes-rugeley', destination: '/projects', permanent: true },
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
