import PageLayout from 'Components/Layouts/PageContainer';
import Head from 'next/head';
import React from 'react';
import PageErrorContent from 'Elements/Error/pageContent';

export default function Error() {
  return (
    <PageLayout>
      <Head>
        <title>Error</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageErrorContent />
    </PageLayout>
  );
}
