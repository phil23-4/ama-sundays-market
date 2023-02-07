/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: { locales: ['en'], defaultLocale: 'en' },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**tailwindui.com',
      },
      {
        protocol: 'https',
        hostname: '**flowbite.com',
      },
      {
        protocol: 'https',
        hostname: '**images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**image.flaticon.com',
      },
    ],
  },
};

module.exports = nextConfig;
