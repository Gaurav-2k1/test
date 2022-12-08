/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["infodalstorage.blob.core.windows.net"],
  },
};
module.exports = withBundleAnalyzer({});
module.exports = nextConfig;
