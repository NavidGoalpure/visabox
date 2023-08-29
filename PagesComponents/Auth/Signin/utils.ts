import { CookieKeys } from 'Interfaces';

// این فانکشن برای این استفاده میشه که بتونیم در توابع مربوط به سرورساید نکست جی اس،
// کل کوکی هایی که نکست جی اس میده رو بدیم و مقدار کوکی خاص رو ازش بگیریم
export function geCookieFromServerSide({
  cookies,
  key,
}: {
  cookies: string | undefined;
  key: CookieKeys;
}) {
  if (cookies) {
    return cookies
      ?.split(';')
      ?.find((cookie) => cookie?.trim().startsWith(key))
      ?.replace(`${key}=`, '')
      ?.trim();
  }
}
