/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/YOUR_REPO_NAME",
  assetPrefix: "/YOUR_REPO_NAME/",
};

module.exports = nextConfig;
