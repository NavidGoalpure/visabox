import { NextPage } from "next";
import PageLayout from "Components/Layouts/PageContainer";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { useLocale } from "Hooks/useLocale";
import Seo from "Components/Seo";
import {
  componentStatements,
  LanguageKeys,
} from "PagesComponents/Businesses/Lawyers/const";
import Content from "PagesComponents/LawyersIntroduction";
import styled from "styled-components";

const LawyersIntroduction: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <StyledPageLayout>
      {/* navid change this */}
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/businesses/lawyers`}
      />
      <Content />
    </StyledPageLayout>
  );
};
export default LawyersIntroduction;
const StyledPageLayout = styled(PageLayout)`
  max-width: unset;
`;
