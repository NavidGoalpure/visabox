import PageLayout from "Components/Layouts/PageContainer";
import { useLocale } from "Hooks/useLocale";
import Seo from "Components/Seo";
import Content from "PagesComponents/Occupations/UniversitySectionTracker";


const UniversitySection = () => {
  const { locale } = useLocale();
  //
  return (
    <PageLayout>
      {/* navid fix seo title and desc */}
      <Seo
        title={"navid"}
        description={"navid"}
        canonical={`https://www.marabox.com/${locale}/occupations/university-section-tracker`}
      />
      <Content />
    </PageLayout>
  );
};



export default UniversitySection;
