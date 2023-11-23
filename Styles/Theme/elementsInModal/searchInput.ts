import { deviceMin } from "Consts/device";
import css from "styled-jsx/css";

export const search_Input_Modal = css`
  background: var(--color-gray13);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  color: var(--color-gray6);
  :focus {
    background: white;
  }
  ::placeholder {
    color: var(--color-gray9);
  }
`;
export const search_Input_Modal_Focus = css`
  border-bottom: 2px solid var(--color-gray2);
  background: white;
  box-shadow: var(--box-shadow-layer2);
`;
export const search_Input_Modal_Bg = css`
  background: var(--color-gray12);
`;
export const search_Input_Card = css`
  background-color: var(--color-gray12);
  border-bottom: 3px solid var(--color-gray11);
`;
export const search_Input_Card_Name = css`
  color: var(--color-gray6);
`;
export const search_Input_Card_Section = css`
  color: var(--color-primary2);
`;
export const search_Input_Card_City = css`
  color: var(--color-gray6);
  :hover {
    color: var(--color-gray13);
  }
`;