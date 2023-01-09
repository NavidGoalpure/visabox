import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import Head from 'next/head';

import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Occupations/AssssingAuthoritties/const';
import { useLocale } from 'Hooks/useLocale';
import Content from 'PagesComponents/Occupations/AssssingAuthoritties/content';

const OccupationPage: NextPage = () => {
  const locale = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <PageLayout>
      <Head>
        <title>{t(LanguageKeys.SeoTitle)}</title>
        {/* for preventing from dublicate pages with code and slug  */}
        <link
          rel='canonical'
          href={`https://www.marabox.com/${locale}/occupations/assssing-authorities`}
        ></link>
        <meta name='description' content={t(LanguageKeys.SeoDesc)} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Content />
    </PageLayout>
  );
};
export default OccupationPage;
