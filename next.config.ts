import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
