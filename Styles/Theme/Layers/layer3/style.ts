import { css } from 'styled-components';
import theme from 'styled-theming';
import { Headline5Style, Headline6Style, Headline7Style } from 'Styles/Typo';
import { directionStyles } from '../..';
import { layer3_SubtitleColor, layer3_TextColor } from './theme';

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
