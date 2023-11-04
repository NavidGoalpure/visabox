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
import {
  getAgentDetail,
  getAllPersianAgentsSlugs,
} from 'Queries/agents/Detail';
import { ComponentError } from 'Elements/Error/componentContent';
import styled from 'styled-components';

interface Props {
  agent?: MaraAgent;
  errorCode?: number;
}
const AgentPage: NextPage<Props> = ({ agent, errorCode }) => {
  console.log('navid agent=', agent);

  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  if (errorCode) return <Error statusCode={errorCode} />;
  const date = new Date();
  return (
    <PageLayout style={{padding:"0"}}>
      <Seo
        //navid fix persian seo
        title={
          t(LanguageKeys.SeoTitle, [{ $agent: agent?.name?.en || '' }]) +
          ` | ${date.getFullYear()}`
        }
        description={t(LanguageKeys.SeoDesc, [
          { $businessName: agent?.agencies?.[0]?.title?.en || '' },
          { $maraNumber: agent?.mara_number || '' },
        ])}
        canonical={`https://www.marabox.com/${locale}/lists/agents/${agent?.slug?.current}`}
      />
      {/* // navid change errorTitle and errorSubtitle */}
      {/* mobin */}
      {agent ? (
        <Content agent={agent} />
      ) : (
        <ComponentError
          errorTitle='No Agent'
          errorSubTitle={`Sorry, we couldn't find the page you're looking for. Please check the URL you entered or try searching for what you need. If you believe this is an issue on our end, please contact our support team for assistance.`}
        />
      )}
    </PageLayout>
  );
};
export default AgentPage;

export const getStaticPaths = async () => {
  let paths: { params: { slug: string }; locale: Languages }[] = [];
  /////get Allpage base on their slug/////////
  const allAgents_Slug = await getAllPersianAgentsSlugs();
  if (allAgents_Slug?.length > 0)
    allAgents_Slug?.map((agent: MaraAgent) => {
      if (agent?.slug?.current)
        paths.push({
          params: { slug: agent?.slug?.current },
          locale: Languages.fa,
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
padding: 0;
`