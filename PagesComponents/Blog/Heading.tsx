import { Layer1_TextStyle, Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { Headline4Style } from 'Styles/Typo';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

export const HeadingH1: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <H1>{children}</H1>;
};
const H1 = styled.h1`
${Layer1_TitleStyle}
text-align: center !important;
`;
const P = styled.p`
${Layer1_TextStyle}
`;

