import styled, { keyframes } from "styled-components/macro";

const Square1 = () => {
  return <Content  aria-hidden={true} />;
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
  width: 5rem;
  height: 5rem;
  border: 6px solid var(--color-primary3);
  transform: rotate(45deg);
  position: absolute;
  top: 10%;
  left: 15%;
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
