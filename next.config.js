/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? 'https://gabmir.dev' : undefined,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['images.ctfassets.net'],
  },
  async rewrites() {
    return isProd
      ? [
          {
            source: '/:path*',
            destination: '/blog/:path*',
          },
        ]
      : [];
  },
};

module.exports = nextConfig;
