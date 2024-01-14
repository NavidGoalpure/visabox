import { GetStaticProps, NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import Content from 'PagesComponents/Lists/Agents/AgentPage';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements } from 'PagesComponents/Lists/Agents/AgentPage/const';
import Error from 'next/error';
import { useLocale } from 'Hooks/useLocale';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import styled from 'styled-components';
import { IBlog } from 'Interfaces/Database/Lists/blog';
import { getAllBlogsSlugs, getBlogDetail } from 'Queries/blog/Detail';

interface Props {
  blog?: IBlog;
  errorCode?: number;
}
const BlogPage: NextPage<Props> = ({ blog, errorCode }) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  if (errorCode) return <Error statusCode={errorCode} />;
  const date = new Date();
  return (
    <StyledPageLayout>
      <Content blog={blog} />
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
