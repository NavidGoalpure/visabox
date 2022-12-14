import { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { Headline3Style, Headline4Style, Headline5Style } from 'Styles/Typo';
import { directionStyles } from '.';

export const billboardTitleColor = theme('mode', {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});
export const billboardSubtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray11);
  `,
});
export const billboardTextColor = theme('mode', {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: white;
  `,
});
//////
export const billboardTitleStyle = css`
  ${directionStyles}
  ${billboardTitleColor}
  ${Headline3Style}
  font-weight: bold;
  margin-bottom: 2rem;
`;
export const billboardSubtitleStyle = css`
  ${directionStyles}
  ${billboardSubtitleColor}
  ${Headline4Style}
  font-weight: 600;
  margin-bottom: 2rem;
`;
export const billboardTextStyle = css`
  ${directionStyles}
  ${billboardTextColor}
  ${Headline5Style}
  margin-bottom: 2rem;
`;
///////////
