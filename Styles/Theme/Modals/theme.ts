import { css } from 'styled-components';
import theme from 'styled-theming';

//////////Module/////////
export const Module_Style = theme('mode', {
  light: css`
  background-color: var(--color-gray6);
  border: 0.2px solid var(--color-gray9);
  `,
  dark: css`
    background-color: var(--color-gray13);
    border: 0.2px solid var(--color-gray12);
  `,
});
export const Module_TitleColor = theme('mode', {
  light: css`
    color: var(--color-primary6);
  `,
  dark: css`
    color: var(--color-gray6);
  `,
});
export const Module_SubtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray7);
  `,
  dark: css`
    color: var(--color-gray7);
  `,
});
export const Module_TextColor = theme('mode', {
  light: css`
    color: var(--color-gray13);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
export const Module_RadioBtnBG = theme('mode', {
  light: css`
    background-color: var(--color-gray7);
  `,
  dark: css`
   background-color: var(--color-gray12);
  `,
});
export const Module_ElementTheme = theme('mode', {
  light: css`
    color: var(--color-gray13);
  `,
  dark: css`
   color: var(--color-gray4);
  `,
});