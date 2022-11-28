import { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { Headline5Style } from './Typo';

//// فعلا فقط توی منو استفاده شده
export const boxShadow = theme('mode', {
  light: 'box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);',
  dark: 'box-shadow: 0px 1px 4px rgba(255, 255, 255, 0.25);',
});

export const directionStyles = theme('languageDirection', {
  ltr: css`
    direction: ltr;
  `,
  rtl: css`
    direction: rtl;
  `,
});

///////Page///////////
export const pageBackground = theme('mode', {
  light: css`
    background: white;
  `,
  dark: css`
    background: var(--color-gray3);
  `,
});
export const pageTitleColor = theme('mode', {
  light: css`
    color: var(--color-primary2);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});
export const pageSubtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray3);
  `,
  dark: css`
    color: var(--color-gray7);
  `,
});
export const pageTextColor = theme('mode', {
  light: css`
    color: var(--color-gray7);
  `,
  dark: css`
    color: white;
  `,
});
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
    color: var(--color-gray2);
  `,
  dark: css`
    color: var(--color-gray6);
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
export const componentTheme = css`
  ${componentBackground}
  ${directionStyles}
  padding: 0 2rem;
  p {
    text-align: start;
  }
`;

///////////////
