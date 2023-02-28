import { css } from 'styled-components';
import theme from 'styled-theming';

//////////Module/////////
export const Module_Theme = theme('mode', {
  light: css`
    background-color: bisque;
  `,
  dark: css`
    background-color: white;
  `,
});
export const Module_TitleColor = theme('mode', {
  light: css`
    color: var(--color-primary6);
  `,
  dark: css`
    color: var(--color-primary3);
  `,
});
export const Module_SubtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray7);
  `,
  dark: css`
    color: var(--color-gray10);
  `,
});
export const Module_TextColor = theme('mode', {
  light: css`
    color: var(--color-gray13);
  `,
  dark: css`
    color: var(--color-gray6);
  `,
});
