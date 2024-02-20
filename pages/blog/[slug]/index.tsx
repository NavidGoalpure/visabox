import { GetStaticProps, NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import Content from 'PagesComponents/Blog/BlogPage';

import styled from 'styled-components';
import { IBlog } from 'Interfaces/Database/blog';
import { getAllBlogsSlugs, getBlogDetail } from 'Queries/blog/Detail';
import { ContentOrError } from 'Components/contentOrError';
import Seo from 'Components/Seo';
import { useLocale } from 'Hooks/useLocale';
import { getBlogStructuredData } from 'PagesComponents/Blog/BlogPage/utils';

interface Props {
  blog?: IBlog;
  errorCode?: number;
}
const BlogPage: NextPage<Props> = ({ blog, errorCode }) => {
  const structureData = getBlogStructuredData(blog);

  const { locale } = useLocale();
  return (
    <StyledPageLayout>
      <Seo
        title={blog?.title}
        description={blog?.excerpt}
        canonical={`https://www.marabox.com.au/${locale}/blog/${blog?.slug}`}
        structuredData={structureData}
      />
      <ContentOrError
        isError={!blog || !!errorCode}
        content={<Content blog={blog as IBlog} />}
      />
    </StyledPageLayout>
  );
};
export default BlogPage;

export const getStaticPaths = async () => {
  let paths: { params: { slug: string } }[] = [];
  /////get Allpage base on their slug////////
  const allBlogs_Slug = await getAllBlogsSlugs();
  if (allBlogs_Slug?.length > 0)
    allBlogs_Slug?.map((blog: IBlog) => {
      if (blog?.slug?.current)
        paths.push({
          params: { slug: blog?.slug?.current },
        });
    });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const blog = await getBlogDetail({ slug: params?.slug?.toString() });

    return {
      props: {
        blog,
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

const StyledPageLayout = styled(PageLayout)`
  #PageContainer-content {
    padding: 0;
    align-items: center;
  }
`;
