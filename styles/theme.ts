import { css } from 'styled-components/macro';
import theme from 'styled-theming';

export const navidColor = theme('mode', {
  light: 'blue',
  dark: 'red',
});

export const boxStyles = theme('mode', {
  light: css`
    background: #ffffff;
    color: 414244;
  `,
  dark: css`
    background: #3d3d3d;
    color: #ffffff;
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
