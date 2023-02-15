import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import Head from 'next/head';

import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Occupations/AssssingAuthoritties/const';
import { useLocale } from 'Hooks/useLocale';
import Content from 'PagesComponents/Occupations/AssssingAuthoritties';
import Seo from 'Components/Seo';

const OccupationPage: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);

  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/occupations/assssing-authorities`}
        //navid temporari
        isNoIndex={locale === Languages.fa}
      />
      <Content />
    </PageLayout>
  );
};
export default OccupationPage;
