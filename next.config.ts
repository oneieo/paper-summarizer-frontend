import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "http://ec2-43-202-9-100.ap-northeast-2.compute.amazonaws.com:8080/api/:path*",
      },
    ];
  },
};

export default nextConfig;
