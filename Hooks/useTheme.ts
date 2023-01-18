import { LocalStorageKeys, ThemeModes } from 'Interfaces';
import { useState } from 'react';
import { setLocalStorage } from 'Utils';

export default function useTheme<ThemeModes>() {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [theme, setThemeState] = useState<ThemeModes | ThemeModes.DARK>(() => {
    if (typeof window === 'undefined') {
      return ThemeModes.DARK;
    }
    try {
      // Get from local storage by key
      const item = localStorage.getItem(LocalStorageKeys.Theme);
      // Parse stored json or if none return initialValue
      return item ? (item as unknown as ThemeModes) : ThemeModes.DARK;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return ThemeModes.DARK;
    }
  });
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
