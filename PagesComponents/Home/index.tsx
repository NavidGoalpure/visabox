import type { NextPage } from 'next';
import Head from 'next/head';
import PageLayout from 'Components/Layouts/PageContainer';
import Hero from './Hero';

// این پیج هیچوقت دیده نمیشه، در نکست-کانفیگ تنظیم شده که به صفحه دیگه ای ریدایرکت بشه
const HomeContent: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <LowersList /> */}
    </>
  );
};
export default HomeContent;

///////////////
