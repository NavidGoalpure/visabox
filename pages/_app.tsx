import { useLocale } from 'Hooks/useLocale';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '../Styles/global.css';
import 'vazirmatn/Vazirmatn-font-face.css';
import { LanguageDirection, Languages } from 'Interfaces';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState } from 'react';
import useTheme from 'Hooks/useTheme';
import ErrorBoundary from 'Components/errorBoundary';
import Script from 'next/script';
// import { hotjar } from 'react-hotjar';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { globalStyles } from 'Styles/Theme';
import { Montserrat } from '@next/font/google';
import Head from 'next/head';

const GlobalStyle = createGlobalStyle`
 ${globalStyles}
`;
const montserrat = Montserrat({ subsets: ['latin'] });

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const { locale } = useLocale();
  const { theme } = useTheme();
  //

  // useEffect(() => {
  //   hotjar.initialize(
  //     Number(process.env.NEXT_PUBLIC_HJID),
  //     Number(process.env.NEXT_PUBLIC_HJSV)
  //   );
  // }, []);
  //
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
          font-display: swap;
        }
      `}</style>

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
        <GlobalStyle />
        <QueryClientProvider client={queryClient}>
          {/* @ts-ignore */}
          <Hydrate state={pageProps.dehydratedState}>
            <ErrorBoundary>
              <Head>
                <meta
                  name='viewport'
                  content='width=device-width, initial-scale=1'
                />
              </Head>
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
