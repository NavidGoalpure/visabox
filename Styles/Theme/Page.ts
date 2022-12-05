import { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { Headline4Style, Headline5Style } from 'Styles/Typo';

///////Page///////////
export const pageBackground = theme('mode', {
  light: css`
    background: white;
  `,
  dark: css`
    background: var(--color-gray3);
  `,
});
export const pageTitleColor = theme('mode', {
  light: css`
    color: var(--color-primary2);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});
export const pageSubtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
export const pageTextColor = theme('mode', {
  light: css`
    color: var(--color-gray7);
  `,
  dark: css`
    color: white;
  `,
});
///////////////
export const PageTitleStyle = css<{
  color?: string;
}>`
  ${Headline4Style}
  ${pageTitleColor}
  ${({ color }) => color && color};
  margin-bottom: 2.5rem;
`;
export const PageSubtitleStyle = css<{
  color?: string;
}>`
  ${Headline5Style}
  ${pageSubtitleColor}
  ${({ color }) => color && color};
  margin-bottom: 2.5rem;
  //
  a {
    ${pageTitleColor}
  }
`;
