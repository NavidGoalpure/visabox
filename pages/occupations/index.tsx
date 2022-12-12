import type { GetServerSideProps, NextPage, NextPageContext } from 'next';
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
import { withCSR } from 'hoc/withCSR';
import Error from 'next/error';

interface Props {
  statusCode: number | null;
}
const OccupationList: NextPage<Props> = ({ statusCode }) => {
  const { t } = useStaticTranslation(componentStatements);
  //
  if (statusCode) <Error statusCode={statusCode} />;
  return (
    <PageLayout>
      <Head>
        <title>{t(LanguageKeys.SeoTitle)}</title>
        <meta name='description' content={t(LanguageKeys.SeoTitle)} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Content />
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = withCSR(
  async (ctx: NextPageContext) => {
    //
    const queryClient = new QueryClient();
    let statusCode = null;

    try {
      await queryClient.fetchQuery(OccupationsQueryKeys.list({}), () =>
        sanityClient.fetch(getListQuery({ searchCondition: '' }))
      );
    } catch (error: any) {
      if (ctx.res) ctx.res.statusCode = error?.response?.status;
      statusCode = ctx?.res?.statusCode || null;
    }
    return {
      props: {
        statusCode: statusCode,
        dehydratedState: dehydrate(queryClient),
      },
    };
  }
);

export default OccupationList;
