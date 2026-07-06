import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compiler: {
    styledComponents: true,
  },
  turbopack: {
    root: path.resolve('.'),
  },
};

export default nextConfig;
