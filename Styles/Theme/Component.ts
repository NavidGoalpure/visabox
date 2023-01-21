import { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { Headline5Style, Headline6Style, Headline7Style } from 'Styles/Typo';
import { directionStyles } from '.';
import { layer2A_TextColor } from './Layers/theme';

///////////////////////
//////common///////////
///////////////////////
const componentBorderColor = theme('mode', {
  light: css`
    border: 2px solid var(--color-gray11);
  `,
  dark: css`
    border: 1px solid var(--color-gray13);
  `,
});
const textTitleColor = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray11);
  `,
});
/////////////////
const componentTitleColor = theme('mode', {
  light: css`
    color: var(--color-gray7);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});

///////////

const componentSubtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});

///////////////

const componentTextColor = theme('mode', {
  light: css`
    color: var(--color-gray4);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
const componentTextColor_small = theme('mode', {
  light: css`
     var(--color-gray4)
  `,
  dark: css`
    var(--color-gray13)
  `,
});

///////////

///////////
const componentBodyBackground_NoBorder = theme('mode', {
  light: css`
    background: #ffffff;
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});
const componentBodyTheme_NoBorder = css`
  ${componentBodyBackground_NoBorder}
  padding: 2rem 1rem;
  border-radius: 0 0 15px 15px;
`;
//////////////////
const componentBodyBackground = theme('mode', {
  light: css`
    background: #ffffff;
    border: 1px solid var(--color-gray11);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});
const componentBodyTheme = css`
  ${componentBodyBackground}
  padding: 2rem 1rem;
  border-radius: 0 0 15px 15px;
`;
//////////
const layer2A_Key = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray10);
  `,
});
//////////////
const layer2A__Value = theme('mode', {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: white;
  `,
});
////////////
const componentWarningTheme = theme('mode', {
  light: css`
    background: var(--color-gray12);
    color: var(--color-gray4);
  `,
  dark: css`
    background: var(--color-gray6);
    color: var(--color-gray13);
  `,
});
