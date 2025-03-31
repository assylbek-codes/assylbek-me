import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Configure static export
  output: "export",
  // Required for static export of Next.js app - forces images to be unoptimized
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are used
  trailingSlash: true,
  // Set output directory for static export
  distDir: "out",
  
  // Reduce development recompilations
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Reduce the frequency of HMR checks in development
      config.watchOptions = {
        ...config.watchOptions,
        aggregateTimeout: 300, // Delay before rebuilding
        poll: false, // Use filesystem events instead of polling
        ignored: ['**/node_modules', '**/.git', '**/out'],
      };
    }
    return config;
  },
  
  // Reduce static generation verbosity
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 60 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 5,
  },
};

export default nextConfig;
