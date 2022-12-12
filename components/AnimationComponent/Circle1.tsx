import styled, { keyframes } from "styled-components/macro";

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

const Content = styled.span`
  width: 5rem;
  height: 5rem;
  border: 6px solid var(--color-primary3);
  transform: rotate(45deg);
  border-radius: 50%;
  position: absolute;
  top: 30%;
  left:10%;
  animation: ${MovingAnimation} 15s infinite ease;
  :before {
    content: "";
    border-radius: 50%;
    position: absolute;
    width: 5rem;
    height: 5rem;
    top: -30%;
    left: -30%;
    border: 6px solid var(--color-primary1);
  }
`;
