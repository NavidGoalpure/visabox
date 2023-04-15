import { NextPage } from "next";
import PageLayout from "Components/Layouts/PageContainer";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { useLocale } from "Hooks/useLocale";
import Seo from "Components/Seo";
import {
  componentStatements,
  LanguageKeys,
} from "PagesComponents/Landings/Agents/const";
import styled from "styled-components";
import Content from "PagesComponents/Forms/Agents";

const AgentsIntroduction: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <StyledPageLayout hasFooter={false}>
      {/* navid add seo  */}
      <Content />
    </StyledPageLayout>
  );
};
export default AgentsIntroduction;
const StyledPageLayout = styled(PageLayout)`
  max-width: none;
  #PageContainer-content {
    padding: 0;
  }
`;
