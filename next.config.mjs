import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  turbopack: {
    root: path.resolve('.'),
  },
};

export default nextConfig;
