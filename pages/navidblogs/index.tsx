import { GetStaticProps, NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import { componentStatements, LanguageKeys } from 'PagesComponents/Blog/const';
import BlogsContent from 'PagesComponents/navidBlogs';
import { getBlogsWithExcerpts } from 'Queries/blog';
import { Languages } from 'Interfaces';
import { IBlog } from 'Interfaces/Database/blog';
import { ContentOrError } from 'Components/contentOrError';

interface Props {
  blogs?: IBlog[];
  errorCode?: number;
}
const BlogPage: NextPage<Props> = ({ blogs, errorCode }) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);

  //
  return (
    <PageLayout>
      {/* //navid seo */}
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        canonical={`https://www.marabox.com.au/${locale}/blog`}
        description={t(LanguageKeys.SeoDesc)}
      />
      <ContentOrError
        isError={!blogs || !!errorCode}
        content={<BlogsContent blogs={blogs} />}
      />
    </PageLayout>
  );
};
export default BlogPage;
//

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  try {
    const blogs = await getBlogsWithExcerpts(locale as Languages);
    console.log('***navid blog=', blogs);

    return {
      props: {
        blogs,
      },
    };
  } catch (error) {
    return {
      props: {
        errorCode: 500,
      },
    };
  }
};
