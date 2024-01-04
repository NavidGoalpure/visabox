import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import { structuredData } from 'PagesComponents/Blog/Blogs/assessment-organizations-in-australia/const';
import PostContent from 'PagesComponents/Blog/Blogs/assessment-organizations-in-australia';

const BlogPage: NextPage = () => {
  const { locale } = useLocale();
  return (
    <PageLayout>
      <Seo
        title={'ویزای مهارتی استرالیا (Skilled worker) چیست؟  | مارا باکس'}
        description={
          'در استرالیا بیش از 40 سازمان ارزیاب وجود دارد.در اینجا می‌خواهیم به خصوصیات کلی برخی از سازمانهای ارزیاب که بیشترین کد های شغلی را پوشش می دهند، بپردازیم '
        }
        canonical={`https://www.marabox.com.au/${locale}/blog/assessment-organizations-in-australia`}
        structuredData={structuredData}
      />

      <PostContent />
    </PageLayout>
  );
};
export default BlogPage;
