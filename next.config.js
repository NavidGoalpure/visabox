const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({});
const withImages = require('next-images');
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],

  //
  experimental: {
    nextScriptWorkers: true,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },

  i18n: {
    locales: ['en', 'fa', 'zh'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    formats: ['image/webp'],
    domains: ['binsta.dev', 'lh3.googleusercontent.com', 'cdn.sanity.io'],
    disableStaticImages: false,
  },
};

module.exports = withBundleAnalyzer(withImages(config));
