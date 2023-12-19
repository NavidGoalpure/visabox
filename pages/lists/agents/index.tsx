import type { GetServerSideProps, NextPage, NextPageContext } from 'next';
import {
  LanguageKeys,
  componentStatements,
} from 'PagesComponents/Agents/List/const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import Content from 'PagesComponents/Agents/List';
import PageLayout from 'Components/Layouts/PageContainer';
import { sanityClient } from 'Utils/sanity';
import { dehydrate, QueryClient } from 'react-query';
import { getAgentsListQuery } from 'Queries/agents/List';
import { withCSR } from 'Hoc/withCSR';
import Error from 'next/error';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import { FiltersContextProvider } from 'PagesComponents/Agents/List/Context/SearchFilter';
import { AgentsQueryKeys } from 'Utils/query/keys';
import { useRouter } from 'next/router';
import { getCountryBasedOnSymbol } from 'Utils/country-state-city';

interface Props {
  statusCode: number | null;
}

const AgentList: NextPage<Props> = ({ statusCode }) => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  //
  if (statusCode) <Error statusCode={statusCode} />;
  // get Url Params
  const router = useRouter();
  const countryInUrlParam = router?.query?.country?.toString();

  function getSeoTitle(countrySymbol: string | undefined): string {
    if (!countrySymbol) return t(LanguageKeys.SeoDesc);
    else {
      const country = getCountryBasedOnSymbol(countryInUrlParam);
      return t(LanguageKeys.SeoTitleWithCountry, [
        {
          $countryName: country?.name || '',
        },
      ]);
    }
  }
  return (
    <PageLayout>
      <Seo
        title={getSeoTitle(countryInUrlParam)}
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
      await queryClient.fetchQuery(AgentsQueryKeys.list({ search: '' }), () =>
        sanityClient.fetch(getAgentsListQuery({}))
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
