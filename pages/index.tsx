import type { NextPage } from 'next';
import Head from 'next/head';
import PageLayout from 'Components/Layouts/PageContainer';

// این پیج هیچوقت دیده نمیشه، در نکست-کانفیگ تنظیم شده که به صفحه دیگه ای ریدایرکت بشه
const Home: NextPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Visa Box</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </PageLayout>
  );
};
export default Home;

///////////////
