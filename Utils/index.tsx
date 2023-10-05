import SuccessToast from 'Elements/Toast/Success';
import { LocalStorageKeys, ThemeModes } from 'Interfaces';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import crypto from 'crypto';
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
    smartLocation.includes('https://marabox.com') ||
    smartLocation.includes('http://marabox.com') ||
    smartLocation.includes('https://www.marabox.com') ||
    smartLocation.includes('http://www.marabox.com')
  )
    return true;
  return false;
}
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
///////////////
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
function getGsapTimeLine_FadeUp(id: string | number) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    `.${id}`,
    {
      y: 40,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: `.${id}`,
        start: '20 bottom',
        toggleActions: 'play none none none',
      },
      y: 0,
      opacity: 1,
      duration: 1,
    }
  );
}

/////////////////
const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

function convertToMd5(text: string) {
  return crypto.createHash('md5').update(text).digest('hex');
}

export {
  getThemeFromLocalStorage,
  isItOnLive,
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
  removeALLLocalStorage,
  deleteAllCookies,
  copyContent,
  slugify,
  getGsapTimeLine_FadeUp,
  convertToMd5,
};
