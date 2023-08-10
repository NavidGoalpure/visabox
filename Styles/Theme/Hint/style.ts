import { css } from "styled-components";
import {
  Headline4Style,
  Headline5Style,
  Headline6Style,
  Headline7Style,
} from "Styles/Typo";
import { directionStyles } from "..";
import { SecondaryTextTheme, IconTheme, Hint_BG } from "./theme";

export const Hint_TitleStyle = css`
  ${Headline4Style};
  ${directionStyles};
  color: var(--color-secondary4) !important;
  text-align: center !important;
`;
export const Hint_SubTitleStyle = css`
  ${directionStyles};
  ${Headline5Style};
  color: white;
`;
export const Hint_TextStyle = css`
  ${directionStyles};
  ${Headline6Style};
  color: white !important;
`;
export const Hint_BGStyle = css`
  ${Hint_BG}
  border-radius: 15px;
  padding: 2rem 4rem;
`;
export const Hint_SecondaryContainer = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3rem;
`;
export const Hint_SecondaryTextStyle = css`
  ${SecondaryTextTheme};
  ${Headline7Style};
  list-style: disc;
`;
export const Hint_SecondaryIcon = css`
  ${IconTheme};
  width: 2.4rem;
  height: auto;
  flex-shrink: 0;
`;
