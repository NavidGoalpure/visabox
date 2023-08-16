import PageLayout from "Components/Layouts/PageContainer";
import { useLocale } from "Hooks/useLocale";
import Seo from "Components/Seo";
import Content from "PagesComponents/Occupations/UniversitySectionTracker";


const UniversitySection = () => {
  const { locale } = useLocale();
  //
  return (
    <PageLayout>
      <Seo
        title={"جستجوی سکشن دانشگاه" + " | Mara Box"}
        description={`با استفاده از این ابزار می توانید بفهمید دانشگاهی که در آن درس خوانده
        اید از نظر اداره مهاجرت استرالیا دارای چه سکشنی می باشد.`}
        canonical={`https://www.marabox.com/${locale}/occupations/university-section-search`}
      />
      <Content />
    </PageLayout>
  );
};



export default UniversitySection;
