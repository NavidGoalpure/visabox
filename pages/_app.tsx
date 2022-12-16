import { useLocale } from 'Hooks/useLocale';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components/macro';
import '../Styles/global.css';
import { LanguageDirection, Languages } from 'Interfaces';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState } from 'react';
import useTheme from 'Hooks/useTheme';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const { locale } = useLocale();
  const { theme } = useTheme();
  return (
    <>
      <NextNProgress height={2} />
      <ThemeProvider
        theme={{
          mode: theme,
          languageDirection:
            locale === Languages.fa
              ? LanguageDirection.RTL
              : LanguageDirection.LTR,
        }}
      >
        <QueryClientProvider client={queryClient}>
          {/* @ts-ignore */}
          <Hydrate state={pageProps.dehydratedState}>
            <Head>
              <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
              </style>
            </Head>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
