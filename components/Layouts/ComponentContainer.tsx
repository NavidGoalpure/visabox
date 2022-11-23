import React, { HTMLAttributes } from 'react';
import styled from 'styled-components/macro';
import { componentBackground, componentTextColor } from 'styles/Theme';

const ComponentContainer: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

export default ComponentContainer;

const Container = styled.div`
  ${componentBackground}
  padding: 0 2rem;
  p {
    text-align: start;
  }
`;
