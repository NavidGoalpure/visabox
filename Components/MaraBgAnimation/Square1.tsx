import styled, { css, keyframes } from 'styled-components';
import theme from 'styled-theming';
import { SquareCss } from './StyledComponents';

const Square1 = () => {
  return <Content aria-hidden={true} />;
};
export default Square1;
const MovingAnimation = keyframes`
25%{
transform: rotate(135deg);
top:5%;
left:25%;
}

50%{
transform: rotate(90deg);
top:25%;
left:50%;
}

75%{
  transform: rotate(0deg);
  top:20%;
left:30%;
}

100% {
  transform: rotate(45deg);
  top:10%;
  left:15%;
}
`;

const Content = styled.span`
  ${SquareCss};
  top: 10%;
  left: 15%;
  animation: ${MovingAnimation} var(--animation-speed) infinite ease;
`;
