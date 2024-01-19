/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    server: {
      serverActions: true,
      externalPackages: ["mongoose"],
    },
  },
  images: {
    domains: [
      "img.clerk.com",
      "images.clerk.dev",
      "uploadthing.com",
      "placehold.co",
      "utfs.io", 
    ],
  },
};

module.exports = nextConfig;
