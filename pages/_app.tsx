import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { QueryClient, QueryClientProvider, Hydrate } from "react-query";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Montserrat, Vazirmatn } from "@next/font/google";
import "../Styles/global.css";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import ErrorBoundary from "Components/errorBoundary";
import { globalStyles } from "Styles/Theme";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
import {
  CustomThemeContextProvider,
} from "Contexts/ThemeContext";

const GlobalStyle = createGlobalStyle`
${globalStyles}
`;
const montserrat = Montserrat({ subsets: ["latin"] });
const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  //
  // useEffect(() => {
  //   TagManager.initialize({ gtmId: 'GTM-MLB3RGM' });
  // }, []);
  // useEffect(() => {
  //   smartActiveHotjar(router.route);
  // }, []);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${montserrat.style.fontFamily},
            ${vazirmatn.style.fontFamily}, "Open Sans", "Poppin";
        }
      `}</style>
      {/* ////////////////////////////////////////////
          /////////////GTAG Without Partytown////////////
          //وقتی این رو آنکامنت میکنیم  باید جیتگ/پارتیتاون رو از توی کاستوم داکیومنت کامنت کنیم
          //////////////////////////////////////////// */}

      {/* <Script id='google-tag-manager' strategy='afterInteractive'>
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
        <CustomThemeContextProvider>
          <GlobalStyle />
          <QueryClientProvider client={queryClient}>
            {/* @ts-ignore */}
            <Hydrate state={pageProps.dehydratedState}>
              <ErrorBoundary>
                <Head>
                  <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                  />
                </Head>
                <Component {...pageProps} />
              </ErrorBoundary>
              <ReactQueryDevtools initialIsOpen={false} />
            </Hydrate>
          </QueryClientProvider>
        </CustomThemeContextProvider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
