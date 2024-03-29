import SuccessToast from 'Elements/Toast/Success';
import {
  Languages,
  LocalStorageKeys,
  SessionStorageKeys,
  ThemeModes,
} from 'Interfaces';

import TagManager from 'react-gtm-module';

const getThemeFromLocalStorage = (): ThemeModes => {
  const DEFAULT_THEME = ThemeModes.DARK;
  const res =
    typeof window === 'undefined'
      ? DEFAULT_THEME
      : (localStorage.getItem(LocalStorageKeys.Theme) as ThemeModes);
  return res;
};
//
export const fireGtmEvent = ({
  eventName,
  parameters = {},
}: {
  eventName: string;
  parameters: Record<string, unknown>;
}) => {
  if (isItOnLive()) {
    const tagManagerArgs = {
      dataLayer: {
        event: eventName,
        platform: 'web',
        ...parameters,
      },
    };
    TagManager.dataLayer(tagManagerArgs);
  } else {
    console.log(
      `We dont fires events in test environment.evenName="${eventName}". parametersValues="${Object.values(
        parameters
      )}. parametersKeys="${Object.keys(parameters)}"`
    );
  }
};
//
function isItOnLive(): boolean {
  const smartLocation =
    typeof window === 'undefined' ? '' : window?.location?.href;
  if (
    smartLocation.includes('https://marabox.com.au') ||
    smartLocation.includes('http://marabox.com.au') ||
    smartLocation.includes('https://www.marabox.com.au') ||
    smartLocation.includes('http://www.marabox.com.au')
  )
    return true;
  return false;
}
//////////SessionStorage tools////////////

function setSessionStorage({
  key,
  value,
  isReloadPage = false,
}: {
  key: SessionStorageKeys;
  value: string;
  isReloadPage?: boolean;
}) {
  if (typeof window === 'undefined') return;
  //
  window.sessionStorage.setItem(key, value);
  //
  if (isReloadPage) window.location.reload();
}
///////////////////
function getSessionStorage(key: SessionStorageKeys): string | null {
  if (typeof window === 'undefined') return null;
  //
  return window.sessionStorage.getItem(key);
  //
}
///////////////////////
function removeSessionStorage(key: SessionStorageKeys) {
  sessionStorage.removeItem(key);
}
////////////////
function removeALLSessionStorage() {
  sessionStorage.clear();
}
///////////////
//////////LocalStorage tools////////////

function setLocalStorage({
  key,
  value,
  isReloadPage = false,
}: {
  key: LocalStorageKeys;
  value: string;
  isReloadPage?: boolean;
}) {
  if (typeof window === 'undefined') return;
  //
  window.localStorage.setItem(key, value);
  //
  if (isReloadPage) window.location.reload();
}
///////////////////
function getLocalStorage(key: LocalStorageKeys): string | null {
  if (typeof window === 'undefined') return null;
  //
  return window.localStorage.getItem(key);
  //
}
///////////////////////
function removeLocalStorage(key: LocalStorageKeys) {
  localStorage.removeItem(key);
}
////////////////
function removeALLLocalStorage() {
  localStorage.clear();
}
///////////////
function deleteAllCookies() {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf('=');
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
}
/////////////
const copyContent = async ({
  text,
  toastMessage,
}: {
  text: string | undefined;
  toastMessage: string;
}) => {
  if (!text) return null;
  await navigator.clipboard
    .writeText(text)
    .then(() => SuccessToast(toastMessage));
};

/////////////////
const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

export function containsArabicOrPersianAlphabets(inputString: string): boolean {
  // Regular expression for Arabic and Persian alphabets
  const arabicOrPersianRegex =
    /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;

  // Check if the input string contains any character within the Arabic and Persian Unicode ranges
  return arabicOrPersianRegex.test(inputString);
}
function isRtl(locale: Languages): boolean {
  return locale === Languages.fa;
}
export {
  getThemeFromLocalStorage,
  isItOnLive,
  //
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  removeALLLocalStorage,
  //
  setSessionStorage,
  getSessionStorage,
  removeSessionStorage,
  removeALLSessionStorage,
  //
  deleteAllCookies,
  copyContent,
  slugify,
  //
  isRtl,
};
