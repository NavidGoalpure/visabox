import theme from 'styled-theming';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Loading } from 'element/Loading';
import Layout from 'components/Layout';
import Navid from 'components/navid';
import { useTranslation } from 'hooks/useTraslation';
import { ComponentKeys, componrntStatements } from './LocaleConst';

const List: NextPage = () => {
  const { t } = useTranslation(componrntStatements);

  return (
    <Layout>
      <Head>
        <title>{t(ComponentKeys.list)}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>{t(ComponentKeys.list)}</div>
      <Loading />
      <Navid />
    </Layout>
  );
};
export default List;
