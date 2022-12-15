import { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { Headline5Style, Headline6Style, Headline7Style } from 'Styles/Typo';
import { directionStyles } from '.';

export const componentBorderColor = theme('mode', {
  light: css`
    border-color: var(--color-gray11);
  `,
  dark: css`
    border-color: var(--color-gray9);
  `,
});
//////
export const componentTitleColor = theme('mode', {
  light: css`
    color: var(--color-gray7);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
export const componentTitleStyle = css`
  ${directionStyles}
  ${componentTitleColor}
  ${Headline5Style}
  margin-bottom: 2rem;
`;
///////////

export const componenSubtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color--primary6);
  `,
});
export const componentSubtitleStyle = css`
  ${directionStyles}
  ${componenSubtitleColor}
  ${Headline6Style}
  margin-bottom: 2rem;
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
  margin-bottom: 2rem;
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
  border-bottom: 1px solid;
  ${componentBorderColor}
`;

///////////
export const componentBodyBackground = theme('mode', {
  light: css`
    background: #ffffff;
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});
export const componentBodyTheme = css`
  ${componentBodyBackground}
  padding: 1rem 2rem;
  border-radius: 0 0 15px 15px;
`;
//////////

export const componentTheme = css`
  ${componentBodyBackground}
  ${directionStyles}
  border-radius: 15px;
  border: 1px solid;
  ${componentBorderColor}

  header {
    ${componentHeaderTheme}
  }
  article {
    ${componentBodyTheme}
  }
  p {
    text-align: start;
  }
`;
