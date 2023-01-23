import { css } from 'styled-components/macro';
import theme from 'styled-theming';

//////////LAYER2_A/////////

export const layer2A_HeaderBG = theme('mode', {
  light: css`
    background-color: var(--color-gray12);
  `,
  dark: css`
    background-color: var(--color-gray7);
  `,
});
export const layer2A_Bg = theme('mode', {
  light: css`
    // navid test
    // background: #ffffff;
    background: var(--color-gray13);

    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});

export const layer2A_TitleColor = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
export const layer2A_SubtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray7);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
export const layer2A_TextColor = theme('mode', {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
export const layer2A_Key = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray10);
  `,
});
//////////////
export const layer2A_Value = theme('mode', {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: white;
  `,
});
export const layer2A_BorderColor = theme('mode', {
  light: css`
    border: 2px solid var(--color-gray12);
  `,
  dark: css`
    border: 1px solid var(--color-gray13);
  `,
});
//////////LAYER2B/////////
export const layer2B_BG = theme('mode', {
  light: css`
    background-color: var(--color-gray8);
  `,
  dark: css`
    background-color: var(--color-gray2);
  `,
});
export const layer2B_TitleColor = theme('mode', {
  light: css`
    color: var(--color-gray13);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
export const layer2B_SubtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray13);
  `,
  dark: css`
    color: var(--color-primary6);
  `,
});
export const layer2B_TextColor = theme('mode', {
  light: css`
    color: var(--color-gray13);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
