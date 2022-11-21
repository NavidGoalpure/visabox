import theme from 'styled-theming';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Loading } from '@elements/Loading';
import Layout from 'components/Layout';
import Navid from 'components/navid';
import { useTranslation } from 'hooks/useTraslation';
import { PageKeys, componrntStatements } from './LocaleConst';
import styled from 'styled-components/macro';
import { Headline4Style, Headline5Style } from 'styles/Typo';

const List: NextPage = () => {
  const { t } = useTranslation(componrntStatements);

  return (
    <Layout>
      <Head>
        <title>{t(PageKeys.PageTitle)}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageTitle>{t(PageKeys.PageTitle)}</PageTitle>
      <PageSubtitle>
        {t(PageKeys.PageSubtitle, [{ تست: 'نوید' }, { test: 'navid' }])}
        LIN 19/051
      </PageSubtitle>
    </Layout>
  );
};
export default List;
const PageTitle = styled.h1`
  ${Headline4Style}
`;
const PageSubtitle = styled.h2`
  ${Headline5Style}
`;
