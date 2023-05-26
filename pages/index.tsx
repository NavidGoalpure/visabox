import type { NextPage } from "next";
import Head from "next/head";
import PageLayout from "Components/Layouts/PageContainer";
import HomeContent from "PagesComponents/Home";
import styled from "styled-components";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "PagesComponents/Home/const";

// این پیج هیچوقت دیده نمیشه، در نکست-کانفیگ تنظیم شده که به صفحه دیگه ای ریدایرکت بشه
const Home: NextPage = () => {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <StyledPageLayout hasBanner={false}>
      <Head>
        <title>{t(LanguageKeys.SeoTitle)}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContent />
    </StyledPageLayout>
  );
};
export default Home;

///////////////
const StyledPageLayout = styled(PageLayout)`
  #PageContainer-content {
    padding: 0;
    max-width: unset;
  }
`;
