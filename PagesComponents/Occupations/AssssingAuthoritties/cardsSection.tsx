import AssessingAuthorityCard from 'Components/Cards/Type1/AssessingAuthorityCard';
import React from 'react';
import styled from 'styled-components';
import { componentTextStyle } from 'Styles/Theme/Component';
import { assssingAuthorities } from './const';
import { AssssingAuthority } from './interfaces';

const CardsSection: React.FC = () => {
  return (
    <Container>
      {assssingAuthorities?.map((assssingAuthority: AssssingAuthority) => {
        return (
          <AssessingAuthorityCard
            key={assssingAuthority.abv}
            abv={assssingAuthority.abv}
            title={assssingAuthority.title}
            address={assssingAuthority.address}
            email={assssingAuthority.email}
            website={assssingAuthority.website}
          />
        );
      })}
    </Container>
  );
};

export default CardsSection;

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`;
const Description = styled.p`
  ${componentTextStyle}
  text-align: center;
  margin: 0;
  overflow: hidden;
  text-align: start;
  white-space: pre-line;
`;
