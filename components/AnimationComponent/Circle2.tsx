import styled, { keyframes } from "styled-components/macro";

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
  width: 5rem;
  height: 5rem;
  border: 6px solid var(--color-primary3);
  opacity: 0.2;
  transform: rotate(45deg);
  border-radius: 50%;
  position: absolute;
  top: 20%;
  left:80%;
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
