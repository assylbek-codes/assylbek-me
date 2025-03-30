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
  // Ensure output is configured properly for Cloudflare
  output: 'standalone',
};

export default nextConfig;
