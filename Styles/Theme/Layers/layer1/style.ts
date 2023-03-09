import { deviceMin } from "Consts/device";
import { css } from "styled-components";
import { Headline4Style, Headline5Style } from "Styles/Typo";
import { directionStyles } from "../..";
import {
  layer1_TitleColor,
  layer1_SubtitleColor,
  layer1_TextColor,
} from "./theme";

///////////////layer1//////////////////
export const Layer1_TitleStyle = css<{
  color?: string;
}>`
  ${Headline4Style}
  ${layer1_TitleColor}
  ${({ color }) => color && color};
  margin-bottom: 2.5rem;
  margin-top: 1rem;
  font-weight: bold;
  text-align: center;
  @media ${deviceMin.tabletS} {
    text-align: start;
  }
`;
export const Layer1_SubtitleStyle = css<{
  color?: string;
}>`
  ${Headline5Style}
  ${layer1_SubtitleColor}
  ${({ color }) => color && color};
  margin-bottom: 2.5rem;
  width: 100%;
  text-align: center;
  @media ${deviceMin.tabletS} {
    text-align: start;
  }
`;
export const Layer1_TextStyle = css`
  ${directionStyles}
  ${layer1_TextColor}
  ${Headline5Style}
  margin-bottom: 1rem;
`;
export const Layer1_HrStyle = css`
  border: 2px solid var(--color-gray9);
  width: 16rem;
  border-radius: 15px;
  margin: 4rem auto;
`;
