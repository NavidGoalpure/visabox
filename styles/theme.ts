import { css } from 'styled-components/macro';
import theme from 'styled-theming';

export const navidColor = theme('mode', {
  light: 'blue',
  dark: 'red',
});

export const PageColorBody = theme('mode', {
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
    color: --color-gray2;
  `,
  dark: css`
    background: --color-backhround4-dark;
    color: --color-gray6;
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
    color: --color-primary2;
  `,
  dark: css`
    color: --color-primary2;
  `,
});
export const subtitleColor = theme('mode', {
  light: css`
    color: --color-gray3;
  `,
  dark: css`
    color: --color-gray5;
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
