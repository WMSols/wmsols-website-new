/** @type {import('next').NextConfig} */

function strapiImagePort() {
  const raw = process.env.NEXT_PUBLIC_STRAPI_URL;
  if (raw) {
    try {
      return new URL(raw).port;
    } catch {
      // Fall through to the explicit port.
    }
  }
  const port = process.env.NEXT_PUBLIC_STRAPI_PORT || '';
  return port === '443' || port === '80' ? '' : port;
}

const nextConfig = {
  images: {
    remotePatterns: [
      // 1. Static pattern for your dummy data
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      // 2. Dynamic pattern for Strapi (only added if the env variable exists)
      ...(process.env.NEXT_PUBLIC_STRAPI_HOSTNAME
        ? [
            {
              protocol: process.env.NEXT_PUBLIC_STRAPI_PROTOCOL || 'http',
              hostname: process.env.NEXT_PUBLIC_STRAPI_HOSTNAME || 'localhost',
              port: strapiImagePort(),
              pathname: '/uploads/**', // Specifically targets Strapi's media folder
            },
          ]
        : []),
    ],
  },
  async redirects() {
    return [
      // Old site blog path
      {
        source: '/blog',
        destination: '/blogs-newsroom',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: '/blogs-newsroom',
        permanent: true,
      },
      // Old-site case study URLs — keep permanently; use different slugs in Strapi
      {
        source: '/case-studies/elegant-advisor',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/case-studies/amora',
        destination: '/case-studies',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;