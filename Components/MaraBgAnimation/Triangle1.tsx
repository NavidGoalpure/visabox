import styled, { css, keyframes } from 'styled-components';
import theme from 'styled-theming';
import {
  StyledTriangleIcon,
  TriangleCss,
  TriangleShadow,
} from './StyledComponents';

const Triangle1 = () => {
  return (
    <Content aria-hidden={true}>
      <StyledTriangleIcon aria-hidden={true} />
      <TriangleShadow aria-hidden={true} />{' '}
    </Content>
  );
};

export default Triangle1;
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

const Content = styled.span`
  ${TriangleCss}
  top: 80%;
  left: 10%;
  animation: ${MovingAnimation} 15s infinite ease;
`;
