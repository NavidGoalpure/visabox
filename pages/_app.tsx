import { useLocale } from 'Hooks/useLocale';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '../Styles/global.css';
import 'vazirmatn/Vazirmatn-font-face.css';
import { LanguageDirection, Languages } from 'Interfaces';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useEffect, useState } from 'react';
import useTheme from 'Hooks/useTheme';
import ErrorBoundary from 'Components/errorBoundary';
// import { hotjar } from 'react-hotjar';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { globalStyles } from 'Styles/Theme';
import { Montserrat } from '@next/font/google';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

const GlobalStyle = createGlobalStyle`
 ${globalStyles}
`;
const montserrat = Montserrat({ subsets: ['latin'] });

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
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

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>
      {/* ////////////////////////////////////////////
          /////////////GTAG Without Partytown////////////
          //وقتی این رو آنکامنت میکنیم  باید جیتگ/پارتیتاون رو از توی کاستوم داکیومنت کامنت کنیم
          //////////////////////////////////////////// */}
      {/* 
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`
         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM}');
      `}
      </Script> */}
      <NextNProgress height={2} />

      <SessionProvider session={session}>
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
      </SessionProvider>
    </>
  );
}

export default MyApp;
