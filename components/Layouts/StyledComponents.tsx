import styled, { css } from 'styled-components';
import { pageTitleColor, pageSubtitleColor } from 'Styles/Theme/Page';
import { Headline4Style, Headline5Style } from 'Styles/Typo';
///////////pages//////////////
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
