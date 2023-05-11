import styled, { css } from "styled-components";
import theme from "styled-theming";
import { TriangleIcon } from "./TriangleIcon";

const primaryBorderColor = theme("mode", {
  light: css`
    border: 6px solid var(--light-primary-color);
  `,
  dark: css`
    border: 6px solid var(--dark-primary-color);
  `,
});
const borderColorContent = theme("mode", {
  light: css`
    border: 6px solid var(--light-secondary-color);
    opacity: 0.5;
  `,
  dark: css`
    border: 6px solid var(--dark-secondary-color);
  `,
});
const TriangleColorColor = theme("mode", {
  light: css`
    stroke: var(--light-primary-color);
  `,
  dark: css`
    stroke: var(--dark-primary-color);
  `,
});
const ShadowColor = theme("mode", {
  light: css`
    stroke: var(--light-secondary-color);
    opacity: 0.5;
  `,
  dark: css`
    stroke: var(--dark-secondary-color);
  `,
});
////////////circle////////////////
export const CircleCss = css`
  ${primaryBorderColor};
  width: 5rem;
  height: 5rem;
  transform: rotate(45deg);
  border-radius: 50%;
  position: absolute;
  :before {
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 5rem;
    height: 5rem;
    top: -30%;
    left: -30%;
    opacity: 0.4;
    ${borderColorContent}
  }
`;
////////////square///////////////
export const SquareCss = css`
  ${primaryBorderColor}
  width: 5rem;
  height: 5rem;

  transform: rotate(45deg);
  position: absolute;
  :before {
    ${borderColorContent}
    opacity: 0.4;
    content: "";
    position: absolute;
    width: 5rem;
    height: 5rem;
    top: -30%;
    left: -30%;
  }
`;
//////////triangle////////////
export const TriangleCss = css`
  width: 5rem;
  height: 5rem;
  transform: rotate(45deg);
  position: absolute;
`;

export const StyledTriangleIcon = styled(TriangleIcon)`
  width: 5rem;
  height: 5rem;
  opacity: 0.4;
  path {
    ${TriangleColorColor};
  }
`;
export const TriangleShadow = styled(StyledTriangleIcon)`
  position: absolute;
  top: -10%;
  left: -30%;
  path {
    ${ShadowColor};
  }
`;
