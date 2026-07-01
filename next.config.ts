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
