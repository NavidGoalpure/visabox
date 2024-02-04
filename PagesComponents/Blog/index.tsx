import styled from 'styled-components';

import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';

import BlogCardType1Wide from './Cards/BlogCard';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { IBlog } from 'Interfaces/Database/blog';
import { urlFor } from 'Utils/sanity';
import { deviceMin } from 'Consts/device';

interface Props {
  blogs: IBlog[] | undefined;
}
function BlogsContent({ blogs }: Props) {
  if (!blogs) return null;

  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <Title>{t(LanguageKeys.PageTitle)}</Title>
      <Subtitle>{t(LanguageKeys.PageSubtitle)}</Subtitle>
      <BlogsContainer>
        <StyledBlogCard
          title={blogs[0]?.title || ''}
          desc={blogs[0]?.excerpt || ''}
          img={urlFor(blogs[0]?.mainImage)?.url() || ''}
          href={`blog/${blogs[0]?.slug?.current || '#'}`}
        />
        <StyledBlogCard
          title={blogs[1]?.title || ''}
          desc={blogs[1]?.excerpt || ''}
          img={urlFor(blogs[1]?.mainImage)?.url() || ''}
          href={`blog/${blogs[1]?.slug?.current || '#'}`}
        />

        <StyledBlogCard
          title={blogs[2]?.title || ''}
          desc={blogs[2]?.excerpt || ''}
          img={urlFor(blogs[2]?.mainImage)?.url() || ''}
          href={`blog/${blogs[2]?.slug?.current || '#'}`}
        />

        <StyledBlogCard
          title={blogs[3]?.title || ''}
          desc={blogs[3]?.excerpt || ''}
          img={urlFor(blogs[3]?.mainImage)?.url() || ''}
          href={`blog/${blogs[3]?.slug?.current || '#'}`}
        />

        <StyledBlogCard
          title={blogs[4]?.title || ''}
          desc={blogs[4]?.excerpt || ''}
          img={urlFor(blogs[4]?.mainImage)?.url() || ''}
          href={`blog/${blogs[4]?.slug?.current || '#'}`}
        />
      </BlogsContainer>
    </Container>
  );
}

export default BlogsContent;

const Container = styled.div`
  width: 100%;
`;
const BlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
  @media ${deviceMin.tabletS} {
    flex-direction: row;
  }
`;

const Title = styled.div`
  ${Layer1_TitleStyle}
`;

const Subtitle = styled.div`
  ${Layer1_SubtitleStyle}
`;

const StyledBlogCard = styled(BlogCardType1Wide)`
  width: 100%;
  margin-bottom: 1rem;
  @media ${deviceMin.tabletS} {
    width: 48%;
  }
`;
