import { css } from 'styled-components/macro';
import theme from 'styled-theming';
import {
  Headline4Style,
  Headline5Style,
  Headline6Style,
  Headline7Style,
} from 'Styles/Typo';
import { borderTheme, directionStyles } from '..';
import {
  layer1_SubtitleColor,
  layer1_TextColor,
  layer1_TitleColor,
  layer2A_Bg,
  layer2A_HeaderBG,
  layer2A_SubtitleColor,
  layer2A_TextColor,
  layer3_SubtitleColor,
  layer3_TextColor,
} from './theme';

///////////////layer1//////////////////
export const Layer1_TitleStyle = css<{
  color?: string;
}>`
  ${Headline4Style}
  ${layer1_TitleColor}
  ${({ color }) => color && color};
  margin-bottom: 2.5rem;
`;
export const Layer1_SubtitleStyle = css<{
  color?: string;
}>`
  ${Headline5Style}
  ${layer1_SubtitleColor}
  ${({ color }) => color && color};
  margin-bottom: 2.5rem;
`;
export const Layer1_TextStyle = css`
  ${directionStyles}
  ${layer1_TextColor}
  ${Headline5Style}
  margin-bottom: 1rem;
`;
///////////////layer2/////////////
export const layer2A_TitleStyle = css`
  ${directionStyles}
  ${layer2A_TextColor}
  ${Headline5Style}
`;
export const layer2A_SubtitleStyle = css`
  ${directionStyles}
  ${layer2A_SubtitleColor}
  ${Headline6Style}
`;
export const layer2A_TextStyle = css`
  ${directionStyles}
  ${layer2A_TextColor}
  ${Headline7Style}
`;

export const layer2A_HeaderBg = theme('mode', {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray7);
  `,
});

export const layer2A_HeaderStyle = css`
  ${layer2A_HeaderBg}
  padding: 1rem 2rem;
  border-radius: 15px 15px 0 0;
  border-top: none;
  border-right: none;
  border-left: none;
`;
export const layer2A_BodyStyle = css`
  ${layer2A_Bg}
  padding: 2rem 1rem;
  border-radius: 0 0 15px 15px;
`;
export const layer2A_style = css`
  ${layer2A_Bg}
  ${directionStyles}
  border-radius: 15px;
  overflow: hidden;
  /////////////
  header {
    ${layer2A_HeaderBG}
    text-align: center;
  }
  #header {
    ${layer2A_HeaderBG}
    text-align: center;
  }
  ////////////
  article {
    ${layer2A_Bg}
  }

  /////////////
  p {
    text-align: start;
  }
`;
export const layer2A_TableStyle = css`
  ${borderTheme}
  ${layer2A_style}
  width: 100%;
  margin-bottom: 1rem;

  thead {
    display: block;
    background-color: transparent !important;
    padding: 0.5rem 0 !important;
    ${borderTheme}
    border-top: none;
    border-left: none;
    border-right: none;
  }

  tbody {
    text-align: center;
    padding: 1rem 0 !important;
    display: block;
  }
  tr {
    width: 100%;
    font-weight: 500;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 1rem;
    :last-child {
      margin-bottom: 0;
    }
  }
  td {
      margin: 0;
      font-weight: 500;
    }
  }
`;
/////////
///////////////layer3/////////////
export const layer3_TitleStyle = css`
  ${directionStyles}
  ${layer3_TextColor}
  ${Headline5Style}
`;
export const layer3_SubtitleStyle = css`
  ${directionStyles}
  ${layer3_SubtitleColor}
  ${Headline6Style}
`;
export const layer3_TextStyle = css`
  ${directionStyles}
  ${layer3_TextColor}
  ${Headline7Style}
`;

export const layer3_HeaderBg = theme('mode', {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray7);
  `,
});

export const layer3_HeaderStyle = css`
  ${layer3_HeaderBg}
  padding: 1rem 2rem;
  border-radius: 15px 15px 0 0;
  border-top: none;
  border-right: none;
  border-left: none;
`;
