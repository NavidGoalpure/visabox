import { css } from 'styled-components';
import { Headline4Style, Headline5Style } from 'Styles/Typo';
import { directionStyles } from '../..';
import {
  layer1_TitleColor,
  layer1_SubtitleColor,
  layer1_TextColor,
} from './theme';

///////////////layer1//////////////////
export const Layer1_TitleStyle = css<{
  color?: string;
}>`
  ${Headline4Style}
  ${layer1_TitleColor}
  ${({ color }) => color && color};
  margin-bottom: 2.5rem;
  font-weight: bold;
`;
export const Layer1_SubtitleStyle = css<{
  color?: string;
}>`
  ${Headline5Style}
  ${layer1_SubtitleColor}
  ${({ color }) => color && color};
  margin-bottom: 2.5rem;
`;
export const Layer1_TextStyle = css`
  ${directionStyles}
  ${layer1_TextColor}
  ${Headline5Style}
  margin-bottom: 1rem;
`;
