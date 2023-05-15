import { NextPage } from "next";
import PageLayout from "Components/Layouts/PageContainer";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { useLocale } from "Hooks/useLocale";
import Seo from "Components/Seo";
import {
  componentStatements,
  LanguageKeys,
} from "PagesComponents/Lists/Agents/const";
import Content from "PagesComponents/Lists/Agents/FormsWall";

const FormsWall: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <PageLayout>
        {/* navid seo title and desc */}
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/lists/agents/forms-wall`}
      />
      <Content />
    </PageLayout>
  );
};
export default FormsWall;
