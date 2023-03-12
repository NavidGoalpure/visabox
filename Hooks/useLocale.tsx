import { useRouter } from 'next/router';
import { LanguageDirection, Languages } from 'Interfaces';

/**
 * زبان کاربر را بر اساس یوآرال برمیگرداند. اگر در یوآرال چیز مناسبی پیدا نکند انگلیسی را برمیگرداند
 * نگه داشتن این چندان ضرورتی نداره اما به موضوع تایپ در تایپ اسکریپت کمک میکنه
 * اگه مسقیما از یوزروتر استفاده کنیم همیشه ارر تایپ میگیریم که شاید آندیفایند باشد اما اینجوری مطمئنش میکنیم که آندیفایند برنمیگرده
 * @return     زبان کاربر که از قبل در برنامه تعریف شده
 */

export const useLocale = (): {
  locale: Languages;
  direction: LanguageDirection;
} => {
  const { locale, defaultLocale } = useRouter();
  // اگر لوکال در لیست زبان های ما نبود، لوکیل پیشفرض را برگردان
  const smartLocale: Languages =
    locale && Object.values(Languages).includes(locale as Languages)
      ? (locale as Languages)
      : (defaultLocale as Languages);
  const direction: LanguageDirection = getDirection(smartLocale);

  return {
    locale: smartLocale,
    direction,
  };
};
/////////////
function getDirection(smartLocale: Languages): LanguageDirection {
  if (smartLocale === Languages.fa) return LanguageDirection.RTL;
  return LanguageDirection.LTR;
}
