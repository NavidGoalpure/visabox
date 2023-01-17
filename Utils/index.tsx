import { LocalStorageKeys, ThemeModes } from 'Interfaces';

const getThemeFromLocalStorage = (): ThemeModes => {
  const DEFAULT_THEME = ThemeModes.DARK;
  const res =
    typeof window === 'undefined'
      ? DEFAULT_THEME
      : (localStorage.getItem(LocalStorageKeys.Theme) as ThemeModes);
  return res;
};
//
const setThemeFromLocalStorage = (newTheme: ThemeModes) => {
  localStorage?.setItem(LocalStorageKeys.Theme, newTheme);
};
//
function isItOnLive(location?: string): boolean {
  const smartLocation = location || window.location.href;

  if (
    smartLocation.includes('https://marabox.com') ||
    smartLocation.includes('http://marabox.com') ||
    smartLocation.includes('https://www.marabox.com') ||
    smartLocation.includes('http://www.marabox.com')
  )
    return true;
  return false;
}
export { getThemeFromLocalStorage, setThemeFromLocalStorage, isItOnLive };
