import { css } from 'styled-components/macro';
import theme from 'styled-theming';

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
///////////////
