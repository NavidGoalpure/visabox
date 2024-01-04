import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import PostContent from 'PagesComponents/Blog/Blogs/Language-score-and-skilled-worker-visa';

const BlogPage: NextPage = () => {
  const { locale } = useLocale();
  return (
    <PageLayout>
      <Seo
        title={'ویزای زبان نمره و نیروی متخصص | مارا باکس'}
        description={'مقاله های کاربردی و کمکی برای مهاجران به استرالیا'}
        canonical={`https://www.marabox.com.au/${locale}/blog/Language-score-and-skilled-worker-visa`}
      />
      <PostContent />
    </PageLayout>
  );
};
export default BlogPage;
