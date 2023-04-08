import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const HeadingH1: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <H1>{children}</H1>;
};
const H1 = styled.h1`
  color: red;
`;
