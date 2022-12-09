import { Languages } from 'interfaces';

/**
 *  اگر کلمه لوکال با زبان های از پیش تعریف شده ما مساوی باشد، همان زبان را با تایپ مناسب -بر اساس اینام اینترفیس تایپ اسکریپت- برمیگرداند
 * اگر کلمه ای که از یوآرال گرفته ایم در لیست زبان های ما نباشد، زبان انگلیسی را به صورت دیفالت برمیگرداند
 * @param  locale زبان که مورد نظر
 * @return       یکی از زبانهای تعریف شده یا زبان پیشفرض
 */
export function proxyUrlLocaleToLocale(locale: string | undefined): Languages {
  console.log(Object.values(Languages));
  if (!locale) return Languages.en;
  if (Object.values(Languages).includes(locale as Languages))
    return locale as Languages;
  return Languages.en;
}
