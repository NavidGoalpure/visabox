import { useLocale } from "hooks/useLocale";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "styled-components";
import "../styles/global.css";
import { Languages } from "./interfaces";
enum ThemeModes {
  LIGHT = "light",
  DARK = "dark",
}
enum LanguageDirection {
  LTR = "ltr",
  RTL = "rtl",
}
function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useLocale();
  return (
    <>
      <NextNProgress height={2} />
      <ThemeProvider
        theme={{
          mode: ThemeModes.DARK,
          languageDirection:
            locale === Languages.ir
              ? LanguageDirection.RTL
              : LanguageDirection.LTR,
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
