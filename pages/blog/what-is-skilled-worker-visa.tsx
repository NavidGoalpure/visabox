import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import PostContent from 'PagesComponents/Blog/Blogs/what-is-skilled-worker-visa';

const BlogPage: NextPage = () => {
  const { locale } = useLocale();
  return (
    <PageLayout>
      <Seo
        title={'ویزای مهارتی استرالیا (Skilled worker) چیست؟  | مارا باکس'}
        description={`ویزای تخصصی استرالیا از متداول‌ترین روش‌های مهاجرت به استرالیا می‌باشد.
         روش مهاجرتی اسکیل ورکر یا مهارتی یک سیستم امتیازی است که در آن افراد
         متقاضی کار در استرالیا، بر اساس شرایط سنی، سطح زبان، سوابق کاری و میزان
         تحصیلات خود برای دریافت ویزای کاری واجد شرایط می‌شوند. این برنامه
         مهاجرتی به افراد ماهر یا خانواده‌هایی که قصد مهاجرت دائمی به استرالیا را
         دارند کمک می‌کند تا کمبود نیروی حرفه‌ای در این کشور را تکمیل نمایند.
         شرایط اختصاصی دریافت ویزای مهارتی برای هر رشته متفاوت است، اما شرایط
         عمو‌می دریافت ویزای مهارتی شامل موارد زیر می‌شود...`}
        canonical={`https://www.marabox.com.au/${locale}/blog/what-is-skilled-worker-visa`}
      />
      <PostContent />
    </PageLayout>
  );
};
export default BlogPage;
