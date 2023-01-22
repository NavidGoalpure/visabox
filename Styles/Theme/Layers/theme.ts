import { css } from 'styled-components/macro';
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
    color: var(--color-gray10);
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
//////////LAYER2_A/////////
export const layer2A_BG = theme('mode', {
  light: css`
    background-color: var(--color-gray6);
  `,
  dark: css`
    background-color: var(--color-gray6);
  `,
});
export const layer2A_HeaderBG = theme('mode', {
  light: css`
    background-color: var(--color-gray12);
  `,
  dark: css`
    background-color: var(--color-gray7);
  `,
});
export const layer2A_BodyBg = theme('mode', {
  light: css`
    background: #ffffff;
    border: 1px solid var(--color-gray11);
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
    border: 2px solid var(--color-gray11);
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
