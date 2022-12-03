import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import {
  PageKeys,
  componentStatements,
  OCCUPATION_PER_PAGE,
} from '../../../PagesComponents/Occupations/Const';
import { useTranslation } from 'hooks/useTraslation';
import Content from 'PagesComponents/Occupations';
import PageLayout from 'components/Layouts/PageContainer';
import { sanityClient } from '../../../sanity';
import { Occupation } from 'interfaces/Documents/Occupation';
import {
  dehydrate,
  QueryClient,
  useInfiniteQuery,
  useQuery,
} from 'react-query';
import { Loading } from 'elements/Loading';

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
  const query = `*[_type=='occupation' ]| order(_id) [0...9] {
  _id,
  slug,
  code,
  title,
  anzsco_section,
}`;

  // const {
  //   isSuccess,
  //   data: occupations,
  //   isLoading,
  //   isError,
  // } = useQuery(['occupations', { lastCode: 0 }], () =>
  //   sanityClient.fetch(query)
  // );

  const {
    isLoading,
    isError,
    data: occupations,
  } = useInfiniteQuery(['occupations', { lastCode: 0 }], () =>
    sanityClient.fetch(query)
  );

  if (isLoading) console.log('navid isLoading=', isLoading);
  if (isError) console.log('navid isError=', isError);
  if (occupations) console.log('navid data=', occupations);

  return (
    <PageLayout>
      <Head>
        <title>{t(PageKeys.PageTitle)}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Content occupations={occupations} allOcupationsCount={200} /> */}
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {},
  };
  // const lastCode = context?.query?.['start-code'] || 0;
  // اگه بازه ای که میخواستیم بزرگتر از چیزی بود که توی سرور رکوئست میزنیم
  // رکوئست الکی نزن و بزار رکوئست سمت فرانت زده بشه
  // if (lastCode > OCCUPATION_PER_PAGE) return { props: {} };
  const query = `*[_type=='occupation' ]| order(_id) [0...${OCCUPATION_PER_PAGE}] {
  _id,
  slug,
  code,
  title,
  anzsco_section,
}`;
  //
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['occupations', { lastCode: 0 }], () =>
    sanityClient.fetch(query)
  );
  // const occupations = await sanityClient.fetch(query);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default OccupationList;
