import { css } from 'styled-components/macro';
import theme from 'styled-theming';

export const boxShadow = theme('mode', {
  light: '0px 1px 4px rgba(0, 0, 0, 0.25)',
  dark: '0px 1px 4px rgba(255, 255, 255, 0.25)',
});

export const pageColorBody = theme('mode', {
  light: css`
    background: #ffffff;
    color: #414244;
  `,
  dark: css`
    background: #3d3d3d;
    color: #ffffff;
  `,
});
export const elementColorBody = theme('mode', {
  light: css`
    background: #ffffff;
    color: var(--color-gray2);
  `,
  dark: css`
    background: var(--color-backhround4-dark);
    color: var(--color-gray6);
  `,
});
export const elementColorHeader = theme('mode', {
  light: css`
    background: --color-gray6;
    color: --color-gray2;
  `,
  dark: css`
    background: --color-backhround5-dark;
    color: --color-gray6;
  `,
});
export const titleColor = theme('mode', {
  light: css`
    color: var(--color-primary2);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});
export const subtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray3);
  `,
  dark: css`
    color: var(--color-gray5);
  `,
});
export const directionStyles = theme('languageDirection', {
  ltr: css`
    direction: ltr;
  `,
  rtl: css`
    direction: rtl;
  `,
});
