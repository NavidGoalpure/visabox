import styled, { keyframes } from "styled-components/macro";

const Square2 = () => {
  return <Content  aria-hidden={true} />;
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

const Content = styled.span`
  width: 5rem;
  height: 5rem;
  border: 6px solid var(--color-primary3);
  opacity: 0.2;
  transform: rotate(45deg);
  position: absolute;
  top: 60%;
  left: 50%;
  animation: ${MovingAnimation} 15s infinite
    ease;
  :before {
    content: "";
    position: absolute;
    width: 5rem;
    height: 5rem;
    top: -30%;
    left: -30%;
    border: 6px solid var(--color-primary1);
  }
`;