import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import {
  PageKeys,
  componentStatements,
} from '../../../PagesComponents/Occupations/const';
import { useStaticTranslation } from 'hooks/useStaticTraslation';
import Content from 'PagesComponents/Occupations';
import PageLayout from 'components/Layouts/PageContainer';
import { sanityClient } from '../../../sanity';
import { dehydrate, QueryClient } from 'react-query';
import { getListQuery } from 'PagesComponents/Occupations/utils';

const OccupationList: NextPage = () => {
  const { t } = useStaticTranslation(componentStatements);

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

export const getServerSideProps: GetServerSideProps = async () => {
  //
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ['occupations', 'list', { lastCode: 0 }],
    () => sanityClient.fetch(getListQuery({}))
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default OccupationList;
