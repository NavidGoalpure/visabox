import * as Sentry from '@sentry/nextjs';
import { isItOnLive } from 'Utils';

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;

// بین سنتری و هاتجر یکی باید فعال باشه. با آنکامنت بودن خط های زیر سنتری فعاله
Sentry.init({
  dsn:
    SENTRY_DSN ||
    'https://f7e189da0d4b4a14bdc3691078e6ec6d@o4504577263206400.ingest.sentry.io/4504577279787008',
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  // ...
  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
  enabled: isItOnLive(),
});
