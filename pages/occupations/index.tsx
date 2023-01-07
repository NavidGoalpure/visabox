import type { GetServerSideProps, NextPage, NextPageContext } from 'next';
import Head from 'next/head';
import {
  LanguageKeys,
  componentStatements,
} from 'PagesComponents/Occupations/List/const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import Content from 'PagesComponents/Occupations/List';
import PageLayout from 'Components/Layouts/PageContainer';
import { sanityClient } from 'Utils/sanity';
import { dehydrate, QueryClient } from 'react-query';
import { OccupationsQueryKeys } from 'Utils/query';
import { getListQuery } from 'Queries/occupations/List';
import { withCSR } from 'Hoc/withCSR';
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
