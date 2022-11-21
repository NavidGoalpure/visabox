import { Languages } from 'pages/interfaces';

/**
 *  اگر کلمه لوکال که از یوآرال گرفته شده با زبان های از پیش تعریف شده ما مساوی باشد، همان زبان را با تایپ مناسب -بر اساس اینام اینترفیس تایپ اسکریپت- برمیگرداند
 * اگر کلمه ای که از یوآرال گرفته ایم در لیست زبان های ما نباشد، زبان انگلیسی را به صورت دیفالت برمیگرداند
 * @param  urlLocale زبان که از عموما از یوآرال گرفته میشود
 * @return      یکی از زبانهای تعریف شده سایت
 */
export function proxyUrlLocaleToLocale(
  urlLocale: string | string[] | undefined
): Languages {
  if (urlLocale === Languages.ir) return Languages.ir;
  return Languages.en;
}
