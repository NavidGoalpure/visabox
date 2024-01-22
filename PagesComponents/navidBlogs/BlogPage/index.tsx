import { FiInfo } from 'react-icons/fi';
import styled, { css } from 'styled-components';
import { borderTheme } from 'Styles/Theme';
import {
  Hint_BGStyle,
  Hint_TitleStyle,
  Hint_TextStyle,
} from 'Styles/Theme/Hint/style';
import {
  Layer1_TextStyle,
  Layer1_TitleStyle,
  Layer1_SubtitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { layer2A_TextStyle } from 'Styles/Theme/Layers/layer2/style';
import { layer2A_HeaderBG } from 'Styles/Theme/Layers/layer2/theme';
import theme from 'styled-theming';
import { IBlog } from 'Interfaces/Database/blog';
import { PortableText } from '@portabletext/react';
import { useLocale } from 'Hooks/useLocale';
import { isRtl } from 'Utils';
import { urlFor } from 'Utils/sanity';
import { CustomPortableTextComponents } from './customComponents';
import { ImageContainer, Images } from './styed-components';
import Link from 'next/link';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import PagesConnectorCard from 'Components/Cards/Type1/PagesConnectorCard/PagesConnectorCard';

interface Props {
  blog: IBlog;
}
const NavidBlogContent: React.FC<Props> = ({ blog }) => {
  console.log('navid blog=', blog);
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);

  return (
    <>
      <Title>{blog.title}</Title>
      {blog?.mainImage && (
        <ImageContainer>
          <Images
            fill
            src={urlFor(blog?.mainImage).url()}
            alt={`${blog.title}-header`}
          />
        </ImageContainer>
      )}
      <BlogContainer isRTL={isRtl(locale)}>
        {blog?.body && (
          <PortableText
            value={blog?.body}
            components={CustomPortableTextComponents}
          />
        )}
      </BlogContainer>
      <HintBG>
        <HintTitle>{t(LanguageKeys.HintTitle)}</HintTitle>
        <HintText>
          {t(LanguageKeys.HintDesc)}
          <br />
          <Link href={t(LanguageKeys.HintLink)} target='_blank'>
            {t(LanguageKeys.HintLinkAlt)}
          </Link>
        </HintText>
      </HintBG>
      <MoreBlogsContainer>
        <h2>{t(LanguageKeys.SimilarArticle)}</h2>
        <MoreBlogsCardsContainer>
          {(blog?.otherArticles as IBlog[])?.map((article) => {
            if (article?.mainImage)
              return (
                <PagesConnectorCard
                  title={article?.title || ''}
                  href={article?.slug?.current || '#'}
                  img={urlFor(article?.mainImage)?.url()}
                />
              );
            else return null;
          })}
        </MoreBlogsCardsContainer>
      </MoreBlogsContainer>
    </>
  );
};
export default NavidBlogContent;
const boldTheme = theme('mode', {
  light: css`
    color: var(--color-secondary1) !important;
  `,
  dark: css`
    color: var(--color-secondary3) !important;
  `,
});
const th_a_Color = theme('mode', {
  light: css`
    color: var(--color-gray4) !important;
  `,
  dark: css`
    color: var(--color-gray13) !important;
  `,
});
const BlogContainer = styled.article<{ isRTL: boolean }>`
  direction: ${({ isRTL }) => (isRTL ? 'rtl' : 'ltr')};
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
  img {
    margin-bottom: 2rem;
    width: 80%;
    height: 25rem;
    border-radius: 15px;
    object-fit: cover;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
    align-self: center;
  }
  p {
    ${Layer1_TextStyle}
  }
  b,
  strong {
    ${boldTheme}
  }

  table {
    ${borderTheme}
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 4rem;
    margin-top: 4rem;
    border-spacing: 0px;
  }

  tbody {
    margin: 0 0 20px;
    padding: 0;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    overflow: hidden;
  }
  tr {
    width: auto;
    height: 4rem;
    th {
      max-width: 278px;
    }
  }
  td {
    text-align: center;
    ${layer2A_TextStyle}
    direction: ltr;
    height: 2rem;
    padding: 0.5rem;
    line-height: 1.5rem;
  }

  th {
    ${layer2A_HeaderBG}
    ${layer2A_TextStyle}
  direction: ltr;
    text-align: center;
    font-weight: 500;
    padding-inline-start: 32px;
    padding-inline-end: 32px;
    line-height: 1.5rem;
    border-color: #ececec;
    :last-child {
      border-right: none;
    }
    a {
      ${th_a_Color}
    }
  }
  h3,
  h2 {
    ${Layer1_SubtitleStyle}
    margin-top: 4rem;
    margin-bottom: 1.5rem;
  }
  h3 {
    font-size: larger;
  }
  ul {
    ${Layer1_TextStyle}
    list-style: disc !important;
    padding-inline-start: 2rem;
  }
  ol {
    ${Layer1_TextStyle}
    list-style: arabic-indic !important;
    padding-inline-start: 2rem;
    ul {
      padding-inline-start: 3rem;
    }
  }
  li {
    margin-bottom: 1rem;
  }
  :last-child {
    margin-bottom: 2rem;
  }
  em {
    color: var(--color-primary2);
  }
`;
const Title = styled.h1`
  ${Layer1_TitleStyle}
  margin-top: 2rem;
`;

const HintBG = styled.section`
  ${Hint_BGStyle}
`;
const HintTitle = styled.h4`
  ${Hint_TitleStyle}
`;
const HintText = styled.p`
  ${Hint_TextStyle}
`;

const MoreBlogsContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  h2 {
    ${Layer1_TitleStyle}
    text-align: center !important;
  }
`;

const MoreBlogsCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
