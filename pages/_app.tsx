import { useLocale } from 'Hooks/useLocale';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components/macro';
import '../Styles/global.css';
import 'vazirmatn/Vazirmatn-font-face.css';
import { LanguageDirection, Languages } from 'Interfaces';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState } from 'react';
import useTheme from 'Hooks/useTheme';
import ErrorBoundary from 'Components/errorBoundary';
import Script from 'next/script';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from 'Utils/gtag';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
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
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  //
  return (
    <>
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <NextNProgress height={2} />

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
