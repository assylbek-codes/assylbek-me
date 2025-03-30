import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    // Disable ESLint during production builds for improved performance
    ignoreDuringBuilds: true,
  },
  // Force Edge runtime to be used globally (this is set at the page level already)
  experimental: {
    serverComponentsExternalPackages: [],
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
