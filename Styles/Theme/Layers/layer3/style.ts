import { css } from 'styled-components';
import theme from 'styled-theming';
import { Headline5Style, Headline6Style, Headline7Style } from 'Styles/Typo';
import { borderTheme, directionStyles } from '../..';
import {
  layer3_AnotherMessage_style,
  layer3_BG,
  layer3_SubtitleColor,
  layer3_TextColor,
} from './theme';

///////////////layer3/////////////
export const layer3_TitleStyle = css`
  ${directionStyles}
  ${layer3_TextColor}
  ${Headline5Style}
`;
export const layer3_SubtitleStyle = css`
  ${directionStyles}
  ${layer3_SubtitleColor}
  ${Headline6Style}
`;
export const layer3_TextStyle = css`
  ${directionStyles}
  ${layer3_TextColor}
  ${Headline7Style}
`;

export const layer3_HeaderBg = theme('mode', {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray7);
  `,
});

export const layer3_HeaderStyle = css`
  ${layer3_HeaderBg}
  padding: 1rem 2rem;
  border-radius: 15px 15px 0 0;
  border-top: none;
  border-right: none;
  border-left: none;
`;
export const AnotherMessage_Style = css`
  ${layer3_AnotherMessage_style}
  ${directionStyles}
  font-size:18px;
  line-height: 26px;
`;
export const SelfMessage_Style = css`
  ${directionStyles}
  background-color: var(--color-primary5);
  font-size: 18px;
  line-height: 26px;
`;
export const layer3_style = css`
  ${layer3_BG}
  ${directionStyles}
  border-radius: 15px;
  overflow: hidden;
  /////////////
  header {
    ${layer3_HeaderBg}
    text-align: center;
  }
  #header {
    ${layer3_HeaderBg}
    text-align: center;
  }

  /////////////
  p {
    text-align: start;
  }
`;

export const layer3_TableStyle = css`
  ${borderTheme}
  ${layer3_style}
  box-shadow: none;
  width: 100%;
  margin-bottom: 1rem;

  thead {
    display: block;
    background-color: transparent !important;
    padding: 0.5rem 0 !important;
    ${borderTheme}
    border-top: none;
    border-left: none;
    border-right: none;
  }

  tbody {
    text-align: center;
    padding: 1rem 0 !important;
    display: block;
  }
  tr {
    width: 100%;
    font-weight: 500;
    display: grid;
    grid-template-columns: 50% 50%;
    margin-bottom: 1rem;
    :last-child {
      margin-bottom: 0;
    }
  }
  td {
      margin: 0;
      font-weight: 500;
    }
  }
`;
