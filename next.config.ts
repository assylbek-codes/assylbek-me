import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Disable ESLint during production builds for improved performance
    ignoreDuringBuilds: true,
  },
  // Specify that the application is compatible with the Edge Runtime
  experimental: {
    // Any experimental features needed for Cloudflare
  },
  // Use standalone output for Edge runtime compatibility
  output: 'standalone',
  // Configure images for Cloudflare Pages
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
