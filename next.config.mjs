import remarkGfm from 'remark-gfm';
import { withSentryConfig } from '@sentry/nextjs';
import createMDX from '@next/mdx';
import withImages from 'next-images';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

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
        SENTRY_DEBUG: false,
        SENTRY_TRACING: false,
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

export default withSentryConfig(
  withImages(withMDX(config)),
  sentryWebpackPluginOptions
);