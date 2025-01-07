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
        {blogs?.map((blog, i) => (
          <StyledBlogCard
            key={i}
            title={blog?.title || ''}
            desc={blog?.excerpt || ''}
            img={urlFor(blog?.mainImage)?.url() || ''}
            href={`blog/${blog?.slug?.current || '#'}`}
            imgPriority={i < 4}
          />
        ))}
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
