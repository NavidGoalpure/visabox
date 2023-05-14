import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import Circle1 from "./Circle1";
import Circle2 from "./Circle2";
import Square1 from "./Square1";
import Square2 from "./Square2";
import Triangle1 from "./Triangle1";
import Triangle2 from "./Triangle2";
import Triangle3 from "./Triangle3";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isBlurContainer?: boolean;
  animationSpeed?: number;
  DarkPrimaryColor?: string;
  DarkSecondaryColor?: string;
  LightPrimaryColor?: string;
  LightSecondaryColor?: string;
}

const MaraBgAnimation: React.FC<Props> = ({
  children,
  className,
  DarkPrimaryColor = "var(--color-gray4)",
  LightPrimaryColor = "var(--color-gray13)",
  DarkSecondaryColor = "var(--color-gray5)",
  LightSecondaryColor = "var(--color-gray12)",
  animationSpeed = 15,
}) => (
  <Container
    DarkSecondaryColor={DarkSecondaryColor}
    DarkPrimaryColor={DarkPrimaryColor}
    LightPrimaryColor={LightPrimaryColor}
    LightSecondaryColor={LightSecondaryColor}
    animationSpeed={animationSpeed}
    className={className}
  >
    <Square1 />
    <Square2 />
    <Circle1 />
    <Circle2 />
    <Triangle1 />
    <Triangle2 />
    <Triangle3 />
    {children}
  </Container>
);
export default MaraBgAnimation;
const Container = styled.div<{
  animationSpeed: number;
  DarkSecondaryColor: string;
  DarkPrimaryColor: string;
  LightPrimaryColor: string;
  LightSecondaryColor: string;
}>`
  --animation-speed: ${({ animationSpeed }) => animationSpeed}s;
  --dark-primary-color: ${({ DarkPrimaryColor }) => DarkPrimaryColor};
  --light-primary-color: ${({ LightPrimaryColor }) => LightPrimaryColor};
  --dark-secondary-color: ${({ DarkSecondaryColor }) => DarkSecondaryColor};
  --light-secondary-color: ${({ LightSecondaryColor }) => LightSecondaryColor};
  width: 100%;
  position: relative;
`;
