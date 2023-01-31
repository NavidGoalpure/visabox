import PageLayout from "Components/Layouts/PageContainer";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import {
  componentStatements,
} from "PagesComponents/Occupations/Detail/const";
import { useLocale } from "Hooks/useLocale";
import { useRouter } from "next/router";
import Content from "PagesComponents/Businesses/Lawyers/LawyerPage";

const OccupationPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <PageLayout>
      {/* <Seo
        title={t(LanguageKeys.SeoTitle, [
          { $title: occupation?.title.en || "" },
          { $code: occupation?.code.toString() || "" },
        ])}
        description={
          occupation?.anzsco_section?.description?.en || t(LanguageKeys.SeoDesc)
        }
        canonical={`https://www.marabox.com/${locale}/occupations/${occupation?.slug?.current}`}
        //navid temporari
        isNoIndex={locale === Languages.fa}
      /> */}
      <Content slug={slug}  />
    </PageLayout>
  );
};
export default OccupationPage;

