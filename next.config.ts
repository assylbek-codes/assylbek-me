import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Indicated that the app should be deployed to a target other than "server"
  output: "export",
  // Required for static export of Next.js app
  images: {
    unoptimized: true,
  },
  // Ensure trailing slashes are used
  trailingSlash: true,
};

export default nextConfig;
