/** @type {import('next').NextConfig} */
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
      ...(process.env.STRAPI_HOSTNAME
        ? [
            {
              protocol: process.env.STRAPI_PROTOCOL || 'https',
              hostname: process.env.STRAPI_HOSTNAME,
              port: process.env.STRAPI_PORT || '',
              pathname: '/uploads/**', // Specifically targets Strapi's media folder
            },
          ]
        : []),
    ],
  },
};

export default nextConfig;