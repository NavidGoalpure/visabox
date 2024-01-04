import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import { structuredData } from 'PagesComponents/Blog/Blogs/document-assessment-in-australia/const';
import PostContent from 'PagesComponents/Blog/Blogs/document-assessment-in-australia';

const BlogPage: NextPage = () => {
  const { locale } = useLocale();
  return (
    <PageLayout>
      <Seo
        title={
          'آنچه باید درباره اسسمنت یا ارزیابی مدارک در استرالیا بدانیم | مارا باکس'
        }
        description={
          'ویزای اسکیل ورکر یا مهارتی سه مرحله دارد که «اسسمنت» مرحله اول آن است. اسسمنت به معنای ارزیابی است، برای شروع فرایند مهاجرت از طریق ویزای اسکیل ورکر ابتدا لازم است اسسمنت یا ارزیابی مثبت بگیرید، که این اتفاق با توجه به رزومه و تحصیلات و سابقه کاریتان رخ خواهد داد....'
        }
        canonical={`https://www.marabox.com.au/${locale}/blog/document-assessment-in-australia`}
        structuredData={structuredData}
      />
      <PostContent />
    </PageLayout>
  );
};
export default BlogPage;
