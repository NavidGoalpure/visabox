const { withSentryConfig } = require('@sentry/nextjs');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

const withImages = require('next-images');
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  //
  webpack: (config, { webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __SENTRY_DEBUG__: false,
        __SENTRY_TRACING__: false,
      })
    );

    return config;
  },
  //
  experimental: {
    nextScriptWorkers: true,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  build: {
    transpile: ['gsap'],
  },
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'fa',
    localeDetection: false,
  },
  sentry: {
    // See the sections below for information on the following options:
    //   'Configure Source Maps':
    //     - disableServerWebpackPlugin
    //     - disableClientWebpackPlugin
    hideSourceMaps: true,
    //     - widenClientFileUpload
    //   'Configure Legacy Browser Support':
    //     - transpileClientSDK
    //   'Configure Serverside Auto-instrumentation':
    //     - autoInstrumentServerFunctions
    //     - excludeServerRoutes
    //   'Configure Tunneling to avoid Ad-Blockers':
    //     - tunnelRoute
  },
  images: {
    formats: ['image/webp'],
    domains: ['binsta.dev'],
  },
};
const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(
  withImages(withMDX(config)),
  sentryWebpackPluginOptions
);
