import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/security",
        destination: "/security-compliance",
        permanent: true,
      },
      {
        source: "/app-download",
        destination: "/download",
        permanent: true,
      },
      {
        source: "/app-download/",
        destination: "/download",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/about/contact",
        permanent: true,
      },
      {
        source: "/contact/",
        destination: "/about/contact",
        permanent: true,
      },
      {
        source: "/for-organizations/story",
        destination: "/investors/pitch-deck",
        permanent: false,
      },
      {
        source: "/for-organizations/story/",
        destination: "/investors/pitch-deck",
        permanent: false,
      },
      {
        source: "/investors/unlock",
        destination: "/investors/pitch-deck",
        permanent: true,
      },
      {
        source: "/investors/unlock/",
        destination: "/investors/pitch-deck",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
