import type { NextPage } from 'next';
import Head from 'next/head';
import {
  PageKeys,
  componrntStatements,
} from '../../../components/Pages/OccupationList/Const';
import { useTranslation } from '@hooks/useTraslation';
import Content from '@components/Pages/OccupationList';
import PageLayout from '@components/Layouts/PageContainer';

const OccupationList: NextPage = () => {
  const { t } = useTranslation(componrntStatements);

  return (
    <PageLayout>
      <Head>
        <title>{t(PageKeys.PageTitle)}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Content />
    </PageLayout>
  );
};
export default OccupationList;
