const withImages = require('next-images');
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/occupations',
        permanent: false,
      },
    ];
  },
};

module.exports = withImages(config);
