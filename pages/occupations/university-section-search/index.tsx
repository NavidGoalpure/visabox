import PageLayout from 'Components/Layouts/PageContainer';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import Content from 'PagesComponents/Occupations/UniversitySectionTracker';
import NotFound from 'pages/404';
import { isUserLiveInIran } from 'Utils/country-state-city';

const UniversitySection = () => {
  const { locale } = useLocale();
  //
  if (isUserLiveInIran())
    return (
      <PageLayout>
        <Seo
          title={'جستجوی سکشن دانشگاه' + ' | Mara Box'}
          description={`با استفاده از این ابزار می توانید بفهمید دانشگاهی که در آن درس خوانده
        اید از نظر اداره مهاجرت استرالیا دارای چه سکشنی می باشد.`}
          canonical={`https://www.marabox.com.au/${locale}/occupations/university-section-search`}
        />
        <Content />
      </PageLayout>
    );
  return <NotFound />;
};

export default UniversitySection;
