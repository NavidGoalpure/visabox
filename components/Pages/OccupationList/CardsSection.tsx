import OccupationCard from '@components/OocccuptionCard';
import React from 'react';
import styled from 'styled-components';

function CardsSection() {
  return (
    <Container>
      <OccupationCard />
    </Container>
  );
}

export default CardsSection;

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 2rem;
  width: 100%;
`;
