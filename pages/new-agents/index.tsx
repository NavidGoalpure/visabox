import type { GetServerSideProps, NextPage, NextPageContext } from 'next';
import {
  LanguageKeys,
  componentStatements,
  FILTERD_Codes__HIGHEST_NUMBER__DEFAULT,
} from 'PagesComponents/Agents/List/const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import Content from 'PagesComponents/Agents/List';
import PageLayout from 'Components/Layouts/PageContainer';
import { sanityClient } from 'Utils/sanity';
import { dehydrate, QueryClient } from 'react-query';
import { getListQuery } from 'Queries/agents/List';
import { withCSR } from 'Hoc/withCSR';
import Error from 'next/error';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import { FiltersContextProvider } from 'PagesComponents/Agents/List/Context/SearchFilter';
import { AgentsQueryKeys } from 'Utils/query/keys';

interface Props {
  statusCode: number | null;
}
const AgentList: NextPage<Props> = ({ statusCode }) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  //
  if (statusCode) <Error statusCode={statusCode} />;
  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/agents/`}
      />
      <FiltersContextProvider>
        <Content />
      </FiltersContextProvider>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = withCSR(
  async (ctx: NextPageContext) => {
    //
    const queryClient = new QueryClient();
    let statusCode = null;

    try {
      await queryClient.fetchQuery(AgentsQueryKeys.list({}), () =>
        sanityClient.fetch(
          getListQuery({
            filteredMaraAgentRange: {
              highestNumber: FILTERD_Codes__HIGHEST_NUMBER__DEFAULT,
              lowerNumber: '0',
            },
          })
        )
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

export default AgentList;
