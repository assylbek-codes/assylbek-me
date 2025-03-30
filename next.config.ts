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
  // Ensure output is configured properly for Cloudflare Pages/Workers
  output: 'export',
  // Disable image optimization as Cloudflare Pages has its own handling
  images: {
    unoptimized: true,
  },
  // Disable server-side processing
  trailingSlash: true,
};

export default nextConfig;
