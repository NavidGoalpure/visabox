import { css } from "styled-components";
import { layer2A_Bg } from "../Layers/layer2/theme";
import { SmallBox_BG_Alternative, SmallBox_BG_Alternative_Hover } from "./theme";

export const SmallBox_Normal = css`
  ${layer2A_Bg};
`;
export const SmallBox_Alternative = css`
  ${SmallBox_BG_Alternative};
  :hover {
    ${SmallBox_BG_Alternative_Hover}
    filter: blur(22.5606746673584px);
  }
`;
