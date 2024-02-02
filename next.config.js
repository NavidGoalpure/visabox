const { withSentryConfig } = require('@sentry/nextjs');

const withImages = require('next-images');
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
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
    locales: ['en', 'fa', 'zh'],
    defaultLocale: 'en',
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
    domains: ['binsta.dev', 'lh3.googleusercontent.com', 'cdn.sanity.io'],
    disableStaticImages: false,
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

//در هر لحظه باید یکی از دو حالت رو فقط انتخاب کنیم
// بسته به این که میخوایم سنتری فعال باشه یا نه
/////////////////////////////
///////active sentry/////////
/////////////////////////////
// module.exports = withSentryConfig(
//   withImages(config),
//   sentryWebpackPluginOptions
// );

/////////////////////////////
///////deactive sentry/////////
/////////////////////////////
module.exports = withImages(config);
