import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Html, Head, Main, NextScript } from 'next/document';
import { isItOnLive } from 'Utils';
import { Partytown } from '@builder.io/partytown/react';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {/* ////////////////////////////////////////////
          /////////////GTAG With Partytown////////////
          //////////////////////////////////////////// */}
          <Partytown
            debug={true}
            forward={['dataLayer.push']}
            set={(opts) => {
              const isDebugging =
                opts?.window?.location?.search.includes('gtm_debug');
              if (
                isDebugging &&
                opts?.name === 'type' &&
                opts?.nodeName === 'SCRIPT'
              ) {
                return opts.prevent;
              }
              return opts.continue;
            }}
          />

          <script
            defer
            type='text/partytown'
            dangerouslySetInnerHTML={{
              __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM}');
      `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {isItOnLive() && (
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM}" height="0" width="0" style="display: none; visibility: hidden;" />`,
              }}
            />
          )}
        </body>
      </Html>
    );
  }
}
