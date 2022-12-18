import styled, { css, keyframes } from "styled-components/macro";
import theme from "styled-theming";
import { CircleCss } from "./StyledComponents";

const Circle1 = () => {
  return <Content aria-hidden={true} />;
};

export default Circle1;
const MovingAnimation = keyframes`
25%{
transform: rotate(135deg);
top:40%;
left:20%;
}

50%{
transform: rotate(90deg);
top:55%;
left:5%;
}

75%{
  transform: rotate(0deg);
  top:70%;
left:20%;
}

100% {
  transform: rotate(45deg);
  top: 30%;
  left:10%;
}
`;

export const borderColorContent = theme('mode', {
  light: css`
    border: 6px solid var(--color-gray10);
  `,
  dark: css`
    border: 6px solid var(--color-primary1);
  `,
});

const Content = styled.span`
  ${CircleCss}
  top: 30%;
  left: 10%;
  animation: ${MovingAnimation} 15s infinite ease;
`;
