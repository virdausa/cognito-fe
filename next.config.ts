import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://bodo.nerpai.space/api/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
