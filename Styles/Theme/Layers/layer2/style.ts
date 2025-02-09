import { css } from 'styled-components';
import theme from 'styled-theming';
import { Headline5Style, Headline6Style, Headline7Style } from 'Styles/Typo';
import { borderTheme, directionStyles } from '../..';
import {
  layer2A_Bg,
  layer2A_HeaderBG,
  layer2A_SubtitleColor,
  layer2A_TextColor,
  layer2B_SubtitleColor,
  layer2B_TextColor,
} from './theme';

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

export const layer2A_HeaderStyle = css`
  ${layer2A_HeaderBG}
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

  /////////////
  p {
    text-align: start;
  }
`;
export const layer2B_TitleStyle = css`
  ${directionStyles}
  ${layer2B_TextColor}
  ${Headline5Style}
`;
export const layer2B_SubtitleStyle = css`
  ${directionStyles}
  ${layer2B_SubtitleColor}
  ${Headline6Style}
`;
export const layer2B_TextStyle = css`
  ${directionStyles}
  ${layer2B_TextColor}
  ${Headline7Style}
`;
export const layer2B_HeaderBg = theme("mode", {
  light: css`
    background: var(--color-gray7);
  `,
  dark: css`
    background: var(--color-gray5);
  `,
});
export const layer2B_HeaderStyle = css`
  ${layer2B_HeaderBg}
  padding: 1rem 1.5rem;
  border-radius: 10px;
`;