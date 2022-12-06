import { LocalStorageKeys, ThemeModes } from 'interfaces';

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

export { getThemeFromLocalStorage, setThemeFromLocalStorage };
