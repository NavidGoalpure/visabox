import styled, { css, keyframes } from "styled-components/macro";
import theme from "styled-theming";

const Circle = () => {
  return <Content aria-hidden={true} />;
};

export default Circle;
const MovingAnimation = keyframes`
25%{
transform: rotate(135deg);
top:60%;
left:20%;
}

50%{
transform: rotate(90deg);
top:45%;
left:5%;
}

75%{
  transform: rotate(0deg);
  top:55%;
left:20%;
}

100% {
  transform: rotate(45deg);
  top: 80%;
  left: 10%;
}
`;

export const borderColorContent = theme('mode', {
  light: css`
    background-color: 6px solid var(--color-gray10);
  `,
  dark: css`
  background-color: 6px solid var(--color-primary1);
  `,
});

const Content = styled.span`
width: 5rem;
height: 5rem;
transform: rotate(45deg);
background-color: var(--color-primary3);
position: absolute;
top: 80%;
left: 10%;
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
animation: ${MovingAnimation} 15s infinite ease;
:before {
  content: "";
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background-color: var(--color-gray8);
  ${borderColorContent}
  position: absolute;
  width: 85%;
  height: 85%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
`;