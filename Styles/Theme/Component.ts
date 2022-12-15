import { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { Headline5Style, Headline6Style, Headline7Style } from 'Styles/Typo';
import { directionStyles } from '.';

//////
export const componentTitleColor = theme('mode', {
  light: css`
    color: var(--color-primary2);
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
  padding: 0 2rem;
`;
//////////

export const componentTheme = css`
  ${directionStyles}
  border: 1px solid var(--color-gray9);
  border-radius: 15px;

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
