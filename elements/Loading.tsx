import { HtmlHTMLAttributes } from 'react';
import styled, { css, keyframes } from 'styled-components/macro';
import theme from 'styled-theming';
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
export const SquareBg = theme('mode', {
  light: css`
    background: var(--color-primary2);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});
const Square = styled.div`
  ${SquareBg}
  ${directionStyles}
  width: 12px;
  height: 12px;
  border-radius: 4px;
  animation: ${Rotate} 1.5s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
  margin: 0 2px;
`;
