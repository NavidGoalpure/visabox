import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import {
  PageKeys,
  componentStatements,
  OCCUPATION_PER_PAGE,
} from '../../../PagesComponents/Occupations/const';
import { useTranslation } from 'hooks/useTraslation';
import Content from 'PagesComponents/Occupations';
import PageLayout from 'components/Layouts/PageContainer';
import { sanityClient } from '../../../sanity';
import { Occupation } from 'interfaces/Documents/Occupation';
import {
  dehydrate,
  InfiniteData,
  QueryClient,
  useInfiniteQuery,
  useQuery,
} from 'react-query';
import { Loading } from 'elements/Loading';
import { getListQuery, getOccupationsList } from 'PagesComponents/utils';

interface Props {
  occupations: Occupation[];
  allOcupationsCount: number;
}
const OccupationList: NextPage<Props> = (
  //   {
  //   occupations,
  //   allOcupationsCount,
  // }
  props
) => {
  const { t } = useTranslation(componentStatements);

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

export const getServerSideProps: GetServerSideProps = async (context) => {
  //
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['occupations', { lastCode: 0 }], () =>
    sanityClient.fetch(getListQuery({}))
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default OccupationList;
