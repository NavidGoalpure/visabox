import { HtmlHTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { navidColor, elementColorBody, directionStyles } from 'styles/Theme';

interface Props extends HtmlHTMLAttributes<HTMLDivElement> {}
const Loading: React.FC<Props> = ({ ...props }) => {
  return (
    <Container {...props}>
      <Square />
      <Square />
      <Square />
    </Container>
  );
};
export { Loading };

const Container = styled.div`
  display: flex;
`;
const rotate = keyframes`
0% {
    transform: translate(0, 0) rotate(0deg);
}
50% {
    transform: translate(70px, 0) rotate(360deg);
}

100% {
    transform: translate(0, 0) rotate(0deg);
}
`;
const Square = styled.div`
  ${elementColorBody}
  ${directionStyles}
  width: 12px;
  height: 12px;
  border-radius: 4px;
  // background-color: ${navidColor};
  animation: ${rotate} 1.5s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
  margin: 0 2px;
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;
