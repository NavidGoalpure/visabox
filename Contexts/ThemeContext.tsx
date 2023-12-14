import { useLocale } from "Hooks/useLocale";
import {
  LanguageDirection,
  Languages,
  LocalStorageKeys,
  ThemeModes,
} from "Interfaces";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { getLocalStorage, setLocalStorage } from "Utils";
type ThemeProps = {
  theme: ThemeModes;
  toggleTheme: () => void;
};
type Props = {
  children: React.ReactNode;
};
export const ThemeContext = React.createContext({} as ThemeProps);
export function CustomThemeContextProvider(props: Props) {
  const [theme, setTheme] = useState<ThemeModes>(
    (getLocalStorage(LocalStorageKeys.Theme) as ThemeModes) || ThemeModes.DARK
  );
  const { locale } = useLocale();
  useEffect(() => {
    setLocalStorage({
      key: LocalStorageKeys.Theme,
      value: theme as unknown as string,
    });
  }, [theme]);
  useEffect(() => {
    setTheme(getLocalStorage(LocalStorageKeys.Theme) as ThemeModes);
  }, []);
  const toggleTheme = () => {
    setTheme(theme === ThemeModes.DARK ? ThemeModes.LIGHT : ThemeModes.DARK);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider
        theme={{
          mode: theme,
          languageDirection:
            locale === Languages.fa
              ? LanguageDirection.RTL
              : LanguageDirection.LTR,
        }}
      >
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
