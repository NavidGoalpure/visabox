import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import styled, { ThemeProvider } from 'styled-components';
import '../styles/global.css';
enum ThemeModes {
  LIGHT = 'light',
  DARK = 'dark',
}
enum LanguageDirection {
  LTR = 'ltr',
  RTL = 'rtl',
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress height={2} />
      <ThemeProvider
        theme={{
          mode: ThemeModes.DARK,
          languageDirection: LanguageDirection.LTR,
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
