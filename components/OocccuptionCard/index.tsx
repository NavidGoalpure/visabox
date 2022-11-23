import ComponentContainer from '@components/Layouts/ComponentContainer';
import { ComponentTitleStyle } from '@components/Layouts/StyledComponents';
import React from 'react';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { componentTextColor } from 'styles/Theme';
import { Headline6Style } from 'styles/Typo';

function OccupationCard() {
  return (
    <Container>
      <Code>121111</Code>
      <Title>Aquaculture Farmer</Title>
      <Description>
        Plans, organises, controls, coordinates and performs farming operations
        to breed and raise fish and other aquatic stock.
      </Description>
    </Container>
  );
}

export default OccupationCard;
const Container = styled(ComponentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  padding-bottom: 3.75rem;
  border-radius: 15px;
  padding-top: 1.5rem;
`;
export const codeColor = theme('mode', {
  light: css`
    background: var(--color-gray7);
    color: var(--color-background6-dark);
    border: 2px solid var(--color-primary5);
  `,
  dark: css`
    color: var(--color-primary5);
    border: 2px solid var(--color-primary4);
  `,
});
const Code = styled.h3`
  ${Headline6Style}
  ${codeColor}
  margin-bottom:1rem;
  padding: 0.5rem;
  align-items: center;
  border-radius: 55px;
`;
const Title = styled.h2`
  ${ComponentTitleStyle}
`;

const Description = styled.p`
  ${componentTextColor}
  text-align: center;
`;
