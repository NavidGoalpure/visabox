import ErrorToast from "Elements/Toast/Error";
import SuccessToast from "Elements/Toast/Success";
import { LocalStorageKeys, ThemeModes } from "Interfaces";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { MultiLanguageText } from "Interfaces";
import { useStaticTranslation } from "Hooks/useStaticTraslation";

const getThemeFromLocalStorage = (): ThemeModes => {
  const DEFAULT_THEME = ThemeModes.DARK;
  const res =
    typeof window === "undefined"
      ? DEFAULT_THEME
      : (localStorage.getItem(LocalStorageKeys.Theme) as ThemeModes);
  return res;
};
//

//
function isItOnLive(): boolean {
  const smartLocation =
    typeof window === "undefined" ? "" : window?.location?.href;
  if (
    smartLocation.includes("https://marabox.com") ||
    smartLocation.includes("http://marabox.com") ||
    smartLocation.includes("https://www.marabox.com") ||
    smartLocation.includes("http://www.marabox.com")
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
  if (typeof window === "undefined") return;
  //
  window.localStorage.setItem(key, value);
  //
  if (isReloadPage) window.location.reload();
}
function getLocalStorage(key: LocalStorageKeys): string | null {
  if (typeof window === "undefined") return null;
  //
  return window.localStorage.getItem(key);
  //
}
enum LanguageKeys {
  toastMessage = "toastMessage",
}
const componentStatements: Record<LanguageKeys, MultiLanguageText> = {
  toastMessage: {
    en: "Copied to clipboard",
    fa: "کپی شد",
  },
};

const copyContent = async (text: string) => {
  const { t } = useStaticTranslation(componentStatements);
  const toastMessage = t(LanguageKeys.toastMessage);
  await navigator.clipboard
    .writeText(text)
    .then(() => SuccessToast(toastMessage));
  //   ErrorToast("Copying to clipboard was not successful!");
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
        start: "20 bottom",
        toggleActions: "play none none none",
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
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export {
  getThemeFromLocalStorage,
  isItOnLive,
  setLocalStorage,
  getLocalStorage,
  copyContent,
  slugify,
  getGsapTimeLine_FadeUp,
};
