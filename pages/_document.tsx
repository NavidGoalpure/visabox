import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { Html, Head, Main, NextScript } from 'next/document';
import { isItOnLive } from 'Utils';

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
          <script
            data-partytown-config
            // navid test set
            dangerouslySetInnerHTML={{
              __html: `
            partytown = {
              lib: '/_next/static/~partytown/',
              debug: true,
              forward: ['dataLayer.push'],
              set:{(opts) => { const isDebugging = opts.window.location.search.includes("gtm_debug"); if ( isDebugging && opts.name === "type" && opts.nodeName === "SCRIPT" ) { return opts.prevent; } return opts.continue; }}
            };
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
