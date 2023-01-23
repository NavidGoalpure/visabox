import { css } from 'styled-components/macro';
import theme from 'styled-theming';

export const globalStyles = theme('mode', {
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

//// فعلا فقط توی منو استفاده شده
export const boxShadow = theme('mode', {
  light: 'box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);',
  dark: 'box-shadow: 0px 1px 4px rgba(255, 255, 255, 0.25);',
});

export const directionStyles = theme('languageDirection', {
  ltr: css`
    direction: ltr;
  `,
  rtl: css`
    direction: rtl;
  `,
});
export const scrollbarStyles = theme('mode', {
  light: css`
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px var(--color-gray12);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-gray10);
    }
  `,
  dark: css`
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px var(--color-gray13);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-gray7);
    }
  `,
});
export const TagTheme = theme('mode', {
  light: css`
    background: var(--color-primary4);
    color: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-primary6);
    color: var(--color-gray4);
  `,
});
export const warningTheme = theme('mode', {
  light: css`
    background: var(--color-gray12);
    color: var(--color-gray4);
  `,
  dark: css`
    background: var(--color-gray6);
    color: var(--color-gray13);
  `,
});
export const borderTheme = theme('mode', {
  light: css`
    border: 2px solid var(--color-gray11);
  `,
  dark: css`
    border: 1px solid var(--color-gray13);
  `,
});
