import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    TOKEN: process.env.TOKEN,
  },
};

export default nextConfig;
