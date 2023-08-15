import { hotjar } from 'react-hotjar';

/**
 * این فانکشن تصمیم میگیره که هاتجر رو در یک صفحه خاص فعال کنیم یا خیر
 * اگه خواستیم صحفه ای فعال باشه اون رو در لیست اکیتوها میزاریم
 * اگه خواستیم صحفه ای رو حذف کنیم اون رو در لیست دی اکتیوها میزاریم
 * همچنین میتونیم لیست اکیتوها رو «آل» بزاریم و فقط یک صفحات خاصی رو دی اکتیو کنیم
 * @export
 * @param {string} currentRoute
 * @return {*}  {boolean}
 */
export function doMustActiveHotjar(currentRoute: string): boolean {
  // روت هایی که میخوایم هاتجر در اونها فعال باشه
  // const MUST_ACTIVE_ROUTES = ['/agents/forms-wall', '/clients/point-calculator'];
  const MUST_ACTIVE_ROUTES = ['ALL'];

  //روت هایی که نمیخوایم هاتجر در اونها فعال باشه
  const MUST_DEACTIVE_ROUTES = ['/404'];

  ////////////result///////////////
  // اگه تو لیست دی اکتیوها بود فالس برگردون
  if (MUST_DEACTIVE_ROUTES.includes(currentRoute)) return false;

  // اگه قرار شد همه صفحات رو اکتیو کنیم ترو برگردون
  //@ts-ignore
  if (MUST_ACTIVE_ROUTES.toString() === ['ALL'].toString()) return true;

  //اگه تو لیست اکتیوها بود ترو برگردون
  return MUST_ACTIVE_ROUTES.includes(currentRoute);
}

/**
 *  این فانکشن برای فعال کردن هاتجر استفاده می‌شود
 *
 * @export
 * @param {string} currentRoute
 */
export function smartActiveHotjar(currentRoute: string) {
  const isActiveHotjar = doMustActiveHotjar(currentRoute);
  console.log('navid isHotjar=', isActiveHotjar);
  if (isActiveHotjar)
    hotjar.initialize(
      Number(process.env.NEXT_PUBLIC_HJID),
      Number(process.env.NEXT_PUBLIC_HJSV)
    );
}
