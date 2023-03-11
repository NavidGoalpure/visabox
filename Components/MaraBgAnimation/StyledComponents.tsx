import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { TriangleIcon } from './TriangleIcon';

export const borderColorContent = theme('mode', {
  light: css`
    border: 6px solid var(--color-gray10);
  `,
  dark: css`
    border: 6px solid var(--color-primary1);
  `,
});

////////////circle////////////////
export const CircleCss = css`
  width: 5rem;
  height: 5rem;
  border: 6px solid var(--color-primary3);
  transform: rotate(45deg);
  border-radius: 50%;
  position: absolute;
  :before {
    content: '';
    border-radius: 50%;
    position: absolute;
    width: 5rem;
    height: 5rem;
    top: -30%;
    left: -30%;
    ${borderColorContent}
  }
`;
////////////square///////////////
export const SquareCss = css`
  width: 5rem;
  height: 5rem;
  border: 6px solid var(--color-primary3);
  transform: rotate(45deg);
  position: absolute;
  :before {
    ${borderColorContent}
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
export const ShadowColor = theme('mode', {
  light: css`
    stroke: var(--color-gray10);
  `,
  dark: css`
    stroke: var(--color-primary1);
  `,
});
export const StyledTriangleIcon = styled(TriangleIcon)`
  width: 5rem;
  height: 5rem;
`;
export const TriangleShadow = styled(StyledTriangleIcon)`
  position: absolute;
  top: -10%;
  left: -30%;
  path {
    ${ShadowColor};
  }
`;
