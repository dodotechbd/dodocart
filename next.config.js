/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NEXT_PUBLIC_NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  reactStrictMode: false,
};

module.exports = nextConfig;
