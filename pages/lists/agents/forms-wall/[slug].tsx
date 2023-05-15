import PageLayout from "Components/Layouts/PageContainer";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import {
  LanguageKeys,
  componentStatements,
} from "PagesComponents/Lists/Agents/AgentPage/const";
import { useLocale } from "Hooks/useLocale";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";
import Seo from "Components/Seo";
import {NextPage } from "next/types";
import { Agent } from "Interfaces/Lists/agents";
import Error from "next/error";
import Content from "PagesComponents/Lists/Agents/FormsWall/FormPage";

interface Props {
  chosenAgent?: Agent;
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
          { $agent: dt(chosenAgent?.name) || "" },
        ])}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/lists/agents/${chosenAgent?.slug}`}
      />
      <Content chosenAgent={chosenAgent} />
    </PageLayout>
  );
};
export default VipAgentPage;

