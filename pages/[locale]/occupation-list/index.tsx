import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from 'components/Layout';
import {
  PageKeys,
  componrntStatements,
} from '../../../components/Pages/OccupationList/Const';
import { useTranslation } from '@hooks/useTraslation';
import Content from '@components/Pages/OccupationList';

const OccupationList: NextPage = () => {
  const { t } = useTranslation(componrntStatements);

  return (
    <Layout>
      <Head>
        <title>{t(PageKeys.PageTitle)}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Content />
    </Layout>
  );
};
export default OccupationList;
