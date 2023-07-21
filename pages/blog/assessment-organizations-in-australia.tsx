import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import {
  componentStatements,
  LanguageKeys,
  structuredData,
} from 'PagesComponents/Blog/Blogs/assessment-organizations-in-australia/const';
import PostContent from 'PagesComponents/Blog/Blogs/assessment-organizations-in-australia';

const BlogPage: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/blog/assessment-organizations-in-australia`}
        structuredData={structuredData}
      />

      <PostContent />
    </PageLayout>
  );
};
export default BlogPage;
