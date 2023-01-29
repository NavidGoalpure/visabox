import * as Sentry from '@sentry/nextjs';
import type { NextPage } from 'next';
import type { ErrorProps } from 'next/error';
import NextErrorComponent from 'next/error';

const CustomErrorComponent: NextPage<ErrorProps> = (props) => {
  // If you're using a Nextjs version prior to 12.2.1, uncomment this to
  // compensate for https://github.com/vercel/next.js/issues/8592
  // Sentry.captureUnderscoreErrorException(props);
  return <NextErrorComponent statusCode={props.statusCode} />;
};

CustomErrorComponent.getInitialProps = async (contextData) => {
  // In case this is running in a serverless function, await this in order to give Sentry
  // time to send the error before the lambda exits
  await Sentry.captureUnderscoreErrorException(contextData);

  // This will contain the status code of the response
  return NextErrorComponent.getInitialProps(contextData);
};

export default CustomErrorComponent;

////////////////////////
// import PageLayout from 'Components/Layouts/PageContainer';
// import Head from 'next/head';
// import React from 'react';
// import PageErrorContent from 'Elements/Error/pageContent';

// export default function Error() {
//   return (
//     <PageLayout>
//       <Head>
//         <title>Error</title>
//         <link rel='icon' href='/favicon.ico' />
//       </Head>
//       <PageErrorContent />
//     </PageLayout>
//   );
// }
