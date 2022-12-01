import { useLocale } from 'hooks/useLocale';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';
import '../Styles/global.css';
import { Languages } from '../interfaces';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState } from 'react';

enum ThemeModes {
  LIGHT = 'light',
  DARK = 'dark',
}
enum LanguageDirection {
  LTR = 'ltr',
  RTL = 'rtl',
}
function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
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
        <QueryClientProvider client={queryClient}>
          {/* @ts-ignore */}
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
