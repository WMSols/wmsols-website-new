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
      ...(process.env.NEXT_PUBLIC_STRAPI_HOSTNAME
        ? [
            {
              protocol: process.env.NEXT_PUBLIC_STRAPI_PROTOCOL || 'http',
              hostname: process.env.NEXT_PUBLIC_STRAPI_HOSTNAME || 'localhost',
              port: process.env.NEXT_PUBLIC_STRAPI_PORT || '1337',
              pathname: '/uploads/**', // Specifically targets Strapi's media folder
            },
          ]
        : []),
    ],
    unoptimized: true, // Disable Next.js's built-in image optimizationn
  },
};

export default nextConfig;