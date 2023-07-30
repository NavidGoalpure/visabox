import { th_a_Color } from 'PagesComponents/Occupations/Detail/DetailTab/styledComponents';
import { borderTheme } from 'Styles/Theme';
import Image from 'next/image';

import {
  Hint_BGStyle,
  Hint_TextStyle,
  Hint_TitleStyle,
} from 'Styles/Theme/Hint/style';

import {
  Layer1_TextStyle,
  Layer1_TitleStyle,
  Layer1_SubtitleStyle,
} from 'Styles/Theme/Layers/layer1/style';
import { layer2A_TextStyle } from 'Styles/Theme/Layers/layer2/style';
import { layer2A_HeaderBG } from 'Styles/Theme/Layers/layer2/theme';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';

const boldTheme = theme('mode', {
  light: css`
    color: var(--color-secondary1);
  `,
  dark: css`
    color: var(--color-secondary3);
  `,
});
export const BlogContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
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
  b {
    ${boldTheme}
  }
  h1 {
    ${Layer1_TitleStyle}
    margin-top: 2rem;
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
export const HintBG = styled.section`
  ${Hint_BGStyle}
`;
export const HintTitle = styled.p`
  ${Hint_TitleStyle}
`;
export const HintText = styled.p`
  ${Hint_TextStyle}
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 80%;
  margin-bottom: 2rem;
  height: 25rem;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
  align-self: center;
`;
export const Images = styled(Image)`
  border-radius: 15px;
  object-fit: cover;
`;
