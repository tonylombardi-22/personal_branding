import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/static-site/index.html",
      },
      {
        source: "/projects",
        destination: "/static-site/projects.html",
      },
      {
        source: "/salterra",
        destination: "/static-site/salterra.html",
      },
      {
        source: "/tonyos",
        destination: "/static-site/tonyos.html",
      },
      {
        source: "/work-with-me",
        destination: "/static-site/work-with-me.html",
      },
    ];
  },
};

export default nextConfig;