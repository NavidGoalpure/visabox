import { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { Headline5Style, Headline6Style, Headline7Style } from 'Styles/Typo';
import { directionStyles } from '.';

/////components////////
export const componentBackground = theme('mode', {
  light: css`
    background: #ffffff;
    border: 1px solid var(--color-gray9);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});

export const componentTitleColor = theme('mode', {
  light: css`
    color: var(--color-primary2);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});
export const componenSubtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color--primary6);
  `,
});
export const componentTextColor = theme('mode', {
  light: css`
    color: var(--color-gray2);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
//////
export const componentTitleStyle = css`
  ${componentTitleColor}
  ${Headline5Style}
  margin-bottom: 2rem;
`;
export const componentSubtitleStyle = css`
  ${componenSubtitleColor}
  ${Headline6Style}
  margin-bottom: 2rem;
`;
export const componentTextStyle = css`
  ${componentTextColor}
  ${Headline7Style}
  margin-bottom: 2rem;
`;
///////////
export const componentTheme = css`
  ${componentBackground}
  ${directionStyles}
  padding: 0 2rem;
  p {
    text-align: start;
  }
`;