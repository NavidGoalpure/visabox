import { css } from "styled-components";
import { Headline4Style, Headline5Style, Headline6Style } from "Styles/Typo";
import { directionStyles } from "..";

export const Hint_TitleStyle = css`
  ${directionStyles};
  ${Headline4Style};
  color: white;
`;
export const Hint_SubTitleStyle = css`
  ${directionStyles};
  ${Headline5Style};
  color: white;
`;
export const Hint_TextStyle = css`
  ${directionStyles};
  ${Headline6Style};
  color: white;
`;
