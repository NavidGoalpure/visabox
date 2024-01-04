import { GetStaticProps, NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import Content from 'PagesComponents/Lists/Agents/AgentPage';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { Languages } from 'Interfaces';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Lists/Agents/AgentPage/const';
import Error from 'next/error';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import { getAgentDetail, getAllAgentsSlugs } from 'Queries/agents/Detail';
import { ComponentError } from 'Elements/Error/componentContent';
import styled from 'styled-components';

interface Props {
  agent?: MaraAgent;
  errorCode?: number;
}
const AgentPage: NextPage<Props> = ({ agent, errorCode }) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  if (errorCode) return <Error statusCode={errorCode} />;
  const date = new Date();
  return (
    <StyledPageLayout>
      <Seo
        title={
          t(LanguageKeys.SeoTitle, [{ $agent: agent?.name?.en || '' }]) +
          ` | ${date.getFullYear()}`
        }
        description={t(LanguageKeys.SeoDesc, [
          { $businessName: agent?.agencies?.[0]?.title?.en || '' },
          { $address: agent?.agencies?.[0]?.contact?.full_address || '' },
        ])}
        canonical={`https://www.marabox.com.au/${locale}/lists/agents/${agent?.slug?.current}`}
      />

      {agent ? (
        <Content chosenAgent={agent} />
      ) : (
        <ComponentError
          errorTitle={t(LanguageKeys.NoAgent)}
          errorSubTitle={t(LanguageKeys.NoAgentSub)}
        />
      )}
    </StyledPageLayout>
  );
};
export default AgentPage;

export const getStaticPaths = async () => {
  let paths: { params: { slug: string }; locale: Languages }[] = [];
  /////get Allpage base on their slug////////
  const allAgents_Slug = await getAllAgentsSlugs();
  if (allAgents_Slug?.length > 0)
    allAgents_Slug?.map((agent: MaraAgent) => {
      if (agent?.slug?.current)
        paths.push({
          params: { slug: agent?.slug?.current },
          locale: Languages.en,
        });
    });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const agent = await getAgentDetail({ slug: params?.slug?.toString() });
    return {
      props: {
        agent,
      },
    };
  } catch (error) {
    return {
      props: {
        errorCode: 500,
      },
    };
  }
};

const StyledPageLayout = styled(PageLayout)`
  #PageContainer-content {
    padding: 0;
    align-items: center;
  }
`;
