import styled from 'styled-components';

import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import BlogCardType2Slim from './Cards/Desktop/Type2Slim';
import BlogCardType1Slim from './Cards/Desktop/Type1Slim';
import BlogCardType1Wide from './Cards/Desktop/Type1Wide';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { IBlog } from 'Interfaces/Database/blog';
import { urlFor } from 'Utils/sanity';

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
      <TwoItemWrapper>
        <StyledBlogCardType1Wide
          title={blogs[0]?.title || ''}
          desc={blogs[0]?.excerpt || ''}
          img={urlFor(blogs[0]?.mainImage)?.url() || ''}
          href={`blog/${blogs[0]?.slug?.current || '#'}`}
        />
        <StyledBlogCardType1WideLeft
          title={blogs[1]?.title || ''}
          desc={blogs[1]?.excerpt || ''}
          img={urlFor(blogs[1]?.mainImage)?.url() || ''}
          href={`blog/${blogs[1]?.slug?.current || '#'}`}
        />
      </TwoItemWrapper>
      <br />
      <ThreeItemWrapper>
        <StyledBlogCardType2Slim
          title={blogs[2]?.title || ''}
          desc={blogs[2]?.excerpt || ''}
          img={urlFor(blogs[2]?.mainImage)?.url() || ''}
          href={`blog/${blogs[2]?.slug?.current || '#'}`}
        />

        <StyledBlogCardType2SlimBelow
          title={blogs[3]?.title || ''}
          desc={blogs[3]?.excerpt || ''}
          img={urlFor(blogs[3]?.mainImage)?.url() || ''}
          href={`blog/${blogs[3]?.slug?.current || '#'}`}
        />

        <StyledBlogCardType1Slim
          title={blogs[4]?.title || ''}
          desc={blogs[4]?.excerpt || ''}
          img={urlFor(blogs[4]?.mainImage)?.url() || ''}
          href={`blog/${blogs[4]?.slug?.current || '#'}`}
        />
      </ThreeItemWrapper>
    </Container>
  );
}

export default BlogsContent;

const Container = styled.div`
  width: 100%;
`;

const Title = styled.div`
  ${Layer1_TitleStyle}
`;

const Subtitle = styled.div`
  ${Layer1_SubtitleStyle}
`;

const ThreeItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 1rem 30%;
  grid-template-rows: 0.48fr 1rem 0.48fr;
`;

// const First = styled.div`
// display: flex;
// gap: 2rem;
// flex-direction: row-reverse;
// `

// const Leftside = styled.div`
// display: flex;
// flex-direction: column;
// gap: 2rem;
// `

const StyledBlogCardType2Slim = styled(BlogCardType2Slim)`
  height: 100% !important;
`;

const StyledBlogCardType2SlimBelow = styled(StyledBlogCardType2Slim)`
  grid-row-start: 3;
`;

const StyledBlogCardType1Slim = styled(BlogCardType1Slim)`
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 3;
`;

const StyledBlogCardType1Wide = styled(BlogCardType1Wide)`
  width: 100% !important;
`;

const StyledBlogCardType1WideLeft = styled(StyledBlogCardType1Wide)`
  grid-column-start: 3;
`;

const TwoItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 1rem 50%;
  grid-template-rows: 1fr;
`;
