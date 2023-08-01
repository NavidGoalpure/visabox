import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import {
  componentStatements,
  LanguageKeys,
  structuredData,
} from 'PagesComponents/Blog/Blogs/getting-skilled-worker-visa/const';
import PostContent from 'PagesComponents/Blog/Blogs/getting-skilled-worker-visa';
import Seo from 'Components/Seo';

const BlogPage: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/blog/getting-skilled-worker-visa`}
        structuredData={structuredData}
      />
      <PostContent />
    </PageLayout>
  );
};
export default BlogPage;
