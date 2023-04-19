import { NextPage } from "next";
import PageLayout from "Components/Layouts/PageContainer";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { useLocale } from "Hooks/useLocale";
import Seo from "Components/Seo";
import { componentStatements } from "PagesComponents/Landings/Agents/const";
import styled from "styled-components";
import Content from "PagesComponents/Forms/User";
import { LanguageKeys } from "PagesComponents/Forms/User/const";
import { FormDataContextProvider } from "PagesComponents/Forms/User/Contexts/FormDataContext/Context";
import { dehydrate, QueryClient } from "react-query";
import { getClientDetail_Form } from "Queries/client";

const AgentsIntroduction: NextPage = ({}) => {
  console.log("navid dehydratedState ===");
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <StyledPageLayout hasFooter={false}>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/landing/agents`}
        isNoIndex={true}
      />
      <FormDataContextProvider>
        <Content />
      </FormDataContextProvider>
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
export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
   await getClientDetail_Form("name == 'farzam'")

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
