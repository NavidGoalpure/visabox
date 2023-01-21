import { css } from 'styled-components/macro';
import theme from 'styled-theming';
import {
  Headline4Style,
  Headline5Style,
  Headline6Style,
  Headline7Style,
} from 'Styles/Typo';
import { directionStyles } from '..';
import {
  layer1_SubtitleColor,
  layer1_TextColor,
  layer1_TitleColor,
  layer2A_BG,
  layer2A_BodyBg,
  layer2A_HeaderBG,
  layer2A_SubtitleColor,
  layer2A_TextColor,
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
  ${layer2A_BodyBg}
  padding: 2rem 1rem;
  border-radius: 0 0 15px 15px;
`;
export const layer2A_style = css`
  ${layer2A_BG}
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
    ${layer2A_BG}
  }
  #body {
    ${layer2A_BG}
  }
  /////////////
  p {
    text-align: start;
  }
`;
