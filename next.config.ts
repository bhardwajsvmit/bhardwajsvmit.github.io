/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/sumit-portfolio",
  assetPrefix: "/sumit-portfolio/",
};

module.exports = nextConfig;
