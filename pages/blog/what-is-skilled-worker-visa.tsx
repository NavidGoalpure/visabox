import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Blog/Blogs/what-is-skilled-worker-visa/const';
import PostContent from 'PagesComponents/Blog/Blogs/what-is-skilled-worker-visa';

const BlogPage: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/blog/what-is-skilled-worker-visa`}
      />
      <PostContent />
    </PageLayout>
  );
};
export default BlogPage;
