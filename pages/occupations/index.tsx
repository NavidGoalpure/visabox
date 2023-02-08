import type { GetServerSideProps, NextPage, NextPageContext } from 'next';
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
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import { Languages } from 'Interfaces';

interface Props {
  statusCode: number | null;
}
const OccupationList: NextPage<Props> = ({ statusCode }) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  //
  if (statusCode) <Error statusCode={statusCode} />;
  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/occupations/`}
        //navid temporari
        isNoIndex={locale === Languages.fa}
      />
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
