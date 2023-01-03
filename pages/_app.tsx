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
import ErrorBoundary from 'Components/errorBoundary';
import Script from 'next/script';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const { locale } = useLocale();
  const { theme } = useTheme();
  //

  useEffect(() => {
    hotjar.initialize(
      Number(process.env.NEXT_PUBLIC_HJID),
      Number(process.env.NEXT_PUBLIC_HJSV)
    );
  }, []);
  //
  return (
    <>
      <NextNProgress height={2} />
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy='afterInteractive'>
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
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
            <ErrorBoundary>
              <Component {...pageProps} />
            </ErrorBoundary>
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
