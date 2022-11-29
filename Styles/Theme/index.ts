import { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { Headline5Style } from '../Typo';

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

