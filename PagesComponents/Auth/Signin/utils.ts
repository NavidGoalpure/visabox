import { CookieKeys } from 'Interfaces';

export function getValueFromCookies({
  cookies,
  key,
}: {
  cookies: string | undefined;
  key: CookieKeys;
}) {
  if (cookies) {
    return cookies
      ?.split(';')
      ?.find((cookie) => cookie?.trim().startsWith(CookieKeys?.TemporaryLocale))
      ?.replace(`${key}=`, '')
      ?.trim();
  }
}
