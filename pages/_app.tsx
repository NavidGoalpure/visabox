import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import styled, { ThemeProvider } from 'styled-components';
import '../styles/style.scss';
enum ThemeModes {
  LIGHT = 'light',
  DARK = 'dark',
}
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress height={2} />
      <ThemeProvider theme={{ mode: ThemeModes.DARK }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
