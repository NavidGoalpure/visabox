import { NextRouter } from 'next/router';

/**
 * Function to check the pathname and return a boolean value.
 * @param {NextRouter} router - The Next.js router object.
 * @returns {boolean} Returns `false` if URL is '/foo', otherwise returns `true`.
 */
export const mustShowSmartBannerBaseOnUrl = (router: NextRouter): boolean => {
  if (router.pathname === '/australia-migration-ai/chat') return false;
  return true;
};
