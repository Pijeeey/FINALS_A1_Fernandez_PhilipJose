import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    'http://192.168.254.109:3000',
    'http://localhost:3000'
  ]
};

export default nextConfig;
