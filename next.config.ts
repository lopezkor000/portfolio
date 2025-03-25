import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    token: process.env.TOKEN,
  },
};

export default nextConfig;
