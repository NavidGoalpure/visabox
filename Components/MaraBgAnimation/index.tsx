import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import Circle1 from './Circle1';
import Circle2 from './Circle2';
import Square1 from './Square1';
import Square2 from './Square2';
import Triangle1 from './Triangle1';
import Triangle2 from './Triangle2';
import Triangle3 from './Triangle3';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isBlurContainer?: boolean;
}

const MaraBgAnimation: React.FC<Props> = ({ children, className }) => (
  <Container className={className}>
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
const Container = styled.div`
  width: 100%;
`;
