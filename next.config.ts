import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['zarkkash.s3.ap-south-1.amazonaws.com', 'zkhub.s3.ap-south-1.amazonaws.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
