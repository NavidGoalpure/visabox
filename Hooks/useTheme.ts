import { LocalStorageKeys, ThemeModes } from 'Interfaces';
import { useEffect, useState } from 'react';
import { setLocalStorage } from 'Utils';

export default function useTheme() {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once

  const [theme, setThemeState] = useState<ThemeModes>(ThemeModes.DARK);
  useEffect(() => {
    const item = localStorage?.getItem(LocalStorageKeys.Theme);
    if (item === ThemeModes.LIGHT) setThemeState(ThemeModes.LIGHT);
  }, []);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setTheme = (value: ThemeModes) => {
    try {
      // Save state
      setThemeState(value);
      // Save to local storage
      setLocalStorage({
        key: LocalStorageKeys.Theme,
        value: value as unknown as string,
        isReloadPage: true,
      });
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return { theme, setTheme };
}
