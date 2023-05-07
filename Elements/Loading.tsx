import { HtmlHTMLAttributes } from "react";
import styled, { css, keyframes } from "styled-components";
import theme from "styled-theming";
import { directionStyles } from "Styles/Theme";

interface Props extends HtmlHTMLAttributes<HTMLOrSVGElement> {}
const Loading: React.FC<Props> = ({ ...props }) => {
  return (
    <Container width="50" height="50" viewBox="0 0 100 100" {...props}>
      <LoadingBackgroundCircle
        strokeWidth={7}
        r="30"
        cx={50}
        cy={50}
        x={0}
        y={0}
      />
      <LoadingMovingCircle strokeWidth={7} r="30" cx={50} cy={50} x={0} y={0} />
    </Container>
  );
};
export { Loading };
const LoadingTheme = theme("mode", {
  light: css`
    stroke: var(--color-primary2);
  `,
  dark: css`
    stroke: var(--color-primary5);
  `,
});
const RotateAnimation = keyframes`
0%{
transform:rotate(0);
}
100%{
transform:rotate(360deg);
}
`;
const Container = styled.svg`
  display: flex;
  margin: auto;
  justify-content: center;
  transform-origin: center center;
  animation: ${RotateAnimation} 1s linear infinite;
`;

const LoadingBackgroundCircle = styled.circle`
  ${LoadingTheme};
  fill: none;
  opacity: 0.1;
`;
const LoadingMovingCircle = styled.circle`
  ${LoadingTheme};
  fill: none;
  z-index: 10;
  stroke-linecap: round;
  stroke-dasharray: 2rem 10rem;
`;
