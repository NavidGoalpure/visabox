import styled, { css, keyframes } from 'styled-components';
import theme from 'styled-theming';
import { SquareCss } from './StyledComponents';

const Square2 = () => {
  return <Content aria-hidden={true} />;
};
export default Square2;
const MovingAnimation = keyframes`
25%{
transform: rotate(135deg);
top:90%;
left:80%;
}

50%{
transform: rotate(90deg);
top:70%;
left:70%;
}

75%{
  transform: rotate(0deg);
  top:45%;
left:85%;
}

100% {
  transform: rotate(45deg);
  top:60%;
  left:50%;
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
  ${SquareCss}
  top: 60%;
  left: 50%;
  animation: ${MovingAnimation} var(--animation-speed) infinite ease;
`;
