import styled, { css, keyframes } from "styled-components/macro";
import theme from "styled-theming";
import {
  StyledTriangleIcon,
  TriangleCss,
  TriangleShadow,
} from "./StyledComponents";

const Triangle2 = () => {
  return (
    <Content aria-hidden={true}>
      <StyledTriangleIcon aria-hidden={true} />
      <TriangleShadow aria-hidden={true} />{" "}
    </Content>
  );
};

export default Triangle2;
const MovingAnimation = keyframes`
25%{
transform: rotate(135deg);
top:40%;
left:30%;
}

50%{
transform: rotate(90deg);
top:70%;
left:80%;
}

75%{
  transform: rotate(0deg);
  top:60%;
left:60%;
}

100% {
  transform: rotate(45deg);
  top: 20%;
  left: 50%;
}
`;

const Content = styled.span`
  ${TriangleCss}
  top: 20%;
  left: 50%;
  animation: ${MovingAnimation} 15s infinite ease;
`;
