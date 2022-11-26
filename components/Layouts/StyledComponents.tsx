import styled, { css } from 'styled-components';
import {
  componenSubtitleColor,
  componentTextColor,
  componentTitleColor,
  pageSubtitleColor,
  pageTitleColor,
} from 'styles/Theme';
import { Headline4Style, Headline5Style, Headline7Style } from 'styles/Typo';

export const ComponentTitleStyle = css`
  ${componentTitleColor}
  ${Headline5Style}
  margin-bottom: 2rem;
`;
export const ComponentSubtitleStyle = css`
  ${componenSubtitleColor}
  ${Headline5Style}
  margin-bottom: 2rem;
`;
export const ComponentTextStyle = css`
  ${componentTextColor}
  ${Headline7Style}
  margin-bottom: 2rem;
`;
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
