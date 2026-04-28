import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "itsabhishek.vercel.app",
        pathname: "/assets/**",
      },
    ],
  },
};

export default nextConfig;
