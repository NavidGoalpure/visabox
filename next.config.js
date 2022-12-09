const withImages = require('next-images');
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

module.exports = withImages(config);
