/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["ik.imagekit.io", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
