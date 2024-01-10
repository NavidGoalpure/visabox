import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import { componentStatements, LanguageKeys } from 'PagesComponents/Blog/const';
import SmartBlogWall from 'Components/Cards/Type1/BlogCards';
import NotFound from 'pages/404';
import { isUserLiveInIran } from 'Utils/country-state-city';

const BlogPage: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);

  //
  if (isUserLiveInIran())
    return (
      <PageLayout>
        <Seo
          title={t(LanguageKeys.SeoTitle)}
          canonical={`https://www.marabox.com.au/${locale}/blog`}
          description={t(LanguageKeys.SeoDesc)}
        />
        <SmartBlogWall />
      </PageLayout>
    );
  return <NotFound />;
};
export default BlogPage;
