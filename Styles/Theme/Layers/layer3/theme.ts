import { css } from 'styled-components';
import theme from 'styled-theming';

//////////LAYER3/////////
export const layer3_BG = theme('mode', {
  light: css`
    background-color: var(--color-gray12);
  `,
  dark: css`
    background-color: var(--color-gray2);
  `,
});
export const layer3_TitleColor = theme('mode', {
  light: css`
    color: var(--color-gray4);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
export const layer3_SubtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray4);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
export const layer3_TextColor = theme('mode', {
  light: css`
    color: var(--color-gray4);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
