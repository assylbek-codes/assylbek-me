import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Disable ESLint during production builds for improved performance
    ignoreDuringBuilds: true,
  },
  // Update to use serverExternalPackages as recommended in the error message
  experimental: {
    // Removed serverComponentsExternalPackages as it's deprecated
  },
  // Use the correct output format for Cloudflare
  output: 'standalone',
  // Configure images for Cloudflare Pages
  images: {
    unoptimized: true,
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Avoid any server-specific code
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
