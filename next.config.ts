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
};

export default nextConfig;
