import { LocalStorageKeys, ThemeModes } from 'interfaces';

const getThemeFromLocalStorage = (): ThemeModes => {
  const DEFAULT_THEME = ThemeModes.LIGHT;
  const res =
    typeof window === 'undefined'
      ? DEFAULT_THEME
      : (localStorage?.getItem(LocalStorageKeys.Theme) as ThemeModes);
  return res || DEFAULT_THEME;
};
//
const setThemeFromLocalStorage = (newTheme: ThemeModes) => {
  localStorage?.setItem(LocalStorageKeys.Theme, newTheme);
};
//

export { getThemeFromLocalStorage, setThemeFromLocalStorage };
