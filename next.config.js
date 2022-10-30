/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["infodalstorage.blob.core.windows.net"],
  },
};

module.exports = nextConfig;
