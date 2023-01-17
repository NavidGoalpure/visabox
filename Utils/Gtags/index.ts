import { isItOnLive } from 'Utils';
import { GtagEvents } from './interface';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (!isItOnLive) return;
  // @ts-ignore
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export function fireGtagEvent({ action, category, label, value }: GtagEvents) {
  if (!isItOnLive) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}
