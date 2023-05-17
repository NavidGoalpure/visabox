import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Lists/Agencies/const';
import PostContent from 'PagesComponents/Blog/Blogs/getting-skilled-worker-visa';

const BlogPage: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <PageLayout>
      {/* //navid  */}
      {/* <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/lists/agents`}
      /> */}
      <PostContent />
    </PageLayout>
  );
};
export default BlogPage;
