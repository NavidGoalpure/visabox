import styled, { css, keyframes } from 'styled-components';
import theme from 'styled-theming';
import {
  StyledTriangleIcon,
  TriangleCss,
  TriangleShadow,
} from './StyledComponents';

const Triangle3 = () => {
  return (
    <Content aria-hidden={true}>
      <StyledTriangleIcon aria-hidden={true} />
      <TriangleShadow aria-hidden={true} />{' '}
    </Content>
  );
};

export default Triangle3;
const MovingAnimation = keyframes`
25%{
transform: rotate(135deg);
top:90%;
left:40%;
}

50%{
transform: rotate(90deg);
top:40%;
left:40%;
}

75%{
  transform: rotate(0deg);
  top:20%;
left:80%;
}

100% {
  transform: rotate(45deg);
  top: 90%;
  left: 90%
}
`;

const Content = styled.span`
  ${TriangleCss}
  top: 90%;
  left: 90%;
  animation: ${MovingAnimation} 15s infinite ease;
`;
