import PageLayout from "Components/Layouts/PageContainer";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import {
  LanguageKeys,
  componentStatements,
} from "PagesComponents/Lists/Agents/AgentPage/const";
import { useLocale } from "Hooks/useLocale";
import Content from "PagesComponents/Lists/Agents/AgentPage";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";
import Seo from "Components/Seo";
import { Agents } from "Consts/Lists/agents";
import { GetStaticProps, NextPage } from "next/types";
import { MaraAgent } from "Interfaces/Database/Lists/agents";
import Error from "next/error";
import { Languages } from "Interfaces";

interface Props {
  chosenAgent?: MaraAgent;
  errorCode?: number;
}
const VipAgentPage: NextPage<Props> = ({ chosenAgent, errorCode }) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const { dt } = useDynamicTranslation();
  if (errorCode) return <Error statusCode={errorCode} />;
  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle, [
          { $agent: dt(chosenAgent?.name) || "" },
        ])}
        image={chosenAgent?.avatar}
        description={chosenAgent?.desc}
        canonical={`https://www.marabox.com/${locale}/lists/agents/${
          chosenAgent?.slug ? chosenAgent?.slug : ""
        }`}
      />
      <Content chosenAgent={chosenAgent} />
    </PageLayout>
  );
};
export default VipAgentPage;

export const getStaticPaths = async ({ locales }: any) => {
  let paths: { params: { slug: string }; locale: Languages }[] = [];

  Agents.map((agent) => {
    locales.map((locale: Languages) => {
      if (agent?.slug) paths.push({ params: { slug: agent.slug }, locale });
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const chosenAgents = Agents.filter((agent) => agent.slug === params?.slug)[0];
  if (!chosenAgents)
    return {
      props: {
        errorCode: 404,
      },
    };
  return {
    props: {
      chosenAgent: chosenAgents,
    },
  };
};
