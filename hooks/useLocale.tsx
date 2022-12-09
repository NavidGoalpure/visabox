import { useRouter } from 'next/router';
import { Languages } from 'interfaces';
import { proxyUrlLocaleToLocale } from 'utils/Language';

/**
 * زبان کاربر را بر اساس یوآرال برمیگرداند. اگر در یوآرال چیز مناسبی پیدا نکند انگلیسی را برمیگرداند
 * @return     زبان کاربر که از قبل در برنامه تعریف شده
 */
//nav
export const useLocale = (): { locale: Languages } => {
  const { locale, defaultLocale } = useRouter();
  console.log('navid locale=', locale);

  return { locale: proxyUrlLocaleToLocale(locale) || defaultLocale };
};
