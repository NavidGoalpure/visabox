import { useRouter } from 'next/router';
import { Languages } from 'pages/interfaces';
import { proxyUrlLocaleToLocale } from 'Utils/Language';

/**
 * زبان کاربر را بر اساس یوآرال برمیگرداند. اگر در یوآرال چیز مناسبی پیدا نکند انگلیسی را برمیگرداند
 * @return     زبان کاربر که از قبل در برنامه تعریف شده
 */
export const useLocale = (): { locale: Languages } => {
  const {
    query: { locale },
  } = useRouter();

  return { locale: proxyUrlLocaleToLocale(locale) || Languages.en };
};