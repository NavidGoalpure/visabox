import styled, { css, keyframes } from "styled-components/macro";
import { borderColorContent, CircleCss } from "./StyledComponents";

const Circle2 = () => {
  return <Content aria-hidden={true} />;
};

export default Circle2;
const MovingAnimation = keyframes`
25%{
transform: rotate(135deg);
top:40%;
left:65%;
}

50%{
transform: rotate(90deg);
top:30%;
left:50%;
}

75%{
  transform: rotate(0deg);
  top:10%;
left:40%;
}

100% {
  transform: rotate(45deg);
  top: 20%;
  left:80%;
}
`;


const Content = styled.span`
${CircleCss}
top: 20%;
left:80%;
animation: ${MovingAnimation} 15s infinite ease;

`;
