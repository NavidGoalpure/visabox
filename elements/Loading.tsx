import { HtmlHTMLAttributes } from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { directionStyles } from 'Styles/Theme';

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
  width: 100%;
  justify-content: center;
`;
const Rotate = keyframes`
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
  ${directionStyles}
  background: var(--color-primary2);
  width: 12px;
  height: 12px;
  border-radius: 4px;
  animation: ${Rotate} 1.5s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
  margin: 0 2px;
`;
