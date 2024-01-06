import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import { structuredData } from 'PagesComponents/Blog/Blogs/getting-skilled-worker-visa/const';
import PostContent from 'PagesComponents/Blog/Blogs/getting-skilled-worker-visa';
import Seo from 'Components/Seo';

const BlogPage: NextPage = () => {
  const { locale } = useLocale();
  return (
    <PageLayout>
      <Seo
        title={'قدم به قدم تا ویزای اسکیل ورکر (مهارتی) | مارا باکس'}
        description={
          'مهاجرت به استرالیا، از طریق ویزای مهارتی یا اسکیل ورکر، طرفداران زیادی دارد، با توجه به اینکه بسیاری از واجدین شرایط این ویزا ، در ابتدای کار با این سوال مواجه هستند که از کجا باید شروع کنند و چه مسیری پیش رویشان است، ما در اینجا بر آن شدیم تا به زبانی ساده، مراحل و شرایط مهاجرت به استرالیا از طریق ویزای مهارتی را توضیح دهیم.'
        }
        canonical={`https://www.marabox.com.au/${locale}/blog/getting-skilled-worker-visa`}
        structuredData={structuredData}
      />
      <PostContent />
    </PageLayout>
  );
};
export default BlogPage;
