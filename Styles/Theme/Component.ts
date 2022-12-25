import { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { Headline5Style, Headline6Style, Headline7Style } from 'Styles/Typo';
import { directionStyles } from '.';

///////////////////////
//////common///////////
///////////////////////
export const componentBorderColor = theme('mode', {
  light: css`
    border: 1px solid var(--color-gray11);
  `,
  dark: css`
    border: 1px solid var(--color-gray13);
  `,
});
/////////////////
export const componentTitleColor = theme('mode', {
  light: css`
    color: var(--color-gray7) !important;
  `,
  dark: css`
    color: var(--color-gray13) !important;
  `,
});
export const componentTitleStyle = css`
  ${directionStyles}
  ${componentTitleColor}
  ${Headline5Style}
`;
///////////

export const componentSubtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray11);
  `,
});
export const componentSubtitleStyle = css`
  ${directionStyles}
  ${componentSubtitleColor}
  ${Headline6Style}
`;
///////////////

export const componentTextColor = theme('mode', {
  light: css`
    color: var(--color-gray4);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
export const componentTextStyle = css`
  ${directionStyles}
  ${componentTextColor}
  ${Headline7Style}
`;

///////////

export const componentHeaderBackground = theme('mode', {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray7);
  `,
});

export const componentHeaderTheme = css`
  ${componentHeaderBackground}
  padding: 1rem 2rem;
  border-radius: 15px 15px 0 0;
  ${componentBorderColor}
  border-top:none;
  border-right: none;
  border-left: none;
`;

///////////
export const componentBodyBackground_NoBorder = theme('mode', {
  light: css`
    background: #ffffff;
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});
export const componentBodyTheme_NoBorder = css`
  ${componentBodyBackground_NoBorder}
  padding: 2rem 1rem;
  border-radius: 0 0 15px 15px;
`;
//////////////////
export const componentBodyBackground = theme('mode', {
  light: css`
    background: #ffffff;
    border: 1px solid var(--color-gray11);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});
export const componentBodyTheme = css`
  ${componentBodyBackground}
  padding: 2rem 1rem;
  border-radius: 0 0 15px 15px;
`;
//////////

export const componentTheme = css`
  ${componentBodyBackground}
  ${directionStyles}
  border-radius: 15px;
  ${componentBorderColor}
  overflow: hidden;
  /////////////
  header {
    ${componentHeaderTheme}
    text-align: center;
  }
  #header {
    ${componentHeaderTheme}
    text-align: center;
  }
  ////////////
  article {
    ${componentBodyTheme_NoBorder}
  }
  #body {
    ${componentBodyTheme_NoBorder}
  }
  /////////////
  p {
    text-align: start;
  }
`;
