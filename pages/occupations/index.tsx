import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import {
  LanguageKeys,
  componentStatements,
} from 'PagesComponents/Occupations/const';
import { useStaticTranslation } from 'hooks/useStaticTraslation';
import Content from 'PagesComponents/Occupations';
import PageLayout from 'components/Layouts/PageContainer';
import { sanityClient } from 'sanity';
import { dehydrate, QueryClient } from 'react-query';
import { OccupationsQueryKeys } from 'utils/query';
import { getListQuery } from 'queries/occupations/List';

const OccupationList: NextPage = () => {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <PageLayout>
      <Head>
        <title>{t(LanguageKeys.PageTitle)}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Content />
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  //
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(OccupationsQueryKeys.list({}), () =>
    sanityClient.fetch(getListQuery({ searchCondition: '' }))
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default OccupationList;
