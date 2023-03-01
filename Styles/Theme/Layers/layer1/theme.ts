import { css } from 'styled-components';
import theme from 'styled-theming';

export const publiStyles = theme('mode', {
  light: css`
    a {
      color: var(--color-primary4);
    }
  `,
  dark: css`
    a {
      color: var(--color-primary6);
    }
  `,
});
//////////LAYER1/////////
export const layer1_BG = theme('mode', {
  light: css`
    background-color: white;
  `,
  dark: css`
    background-color: var(--color-gray3);
  `,
});
export const layer1_TitleColor = theme('mode', {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary6);
  `,
});
export const layer1_SubtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray7);
  `,
  dark: css`
    color: var(--color-gray11);
  `,
});
export const layer1_TextColor = theme('mode', {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
