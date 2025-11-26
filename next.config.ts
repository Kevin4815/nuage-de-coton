import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",      // out
  images: {
    unoptimized: true,   // Images
  },
};

export default nextConfig;