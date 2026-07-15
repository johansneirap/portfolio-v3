/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "media2.dev.to",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;