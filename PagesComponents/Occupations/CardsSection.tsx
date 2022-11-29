import OccupationCard from 'components/OocccuptionCard';
import { Occupation } from 'interfaces/Documents/Occupation';
import React from 'react';
import styled from 'styled-components';

interface Props {
  occupations: Occupation[];
}
const CardsSection: React.FC<Props> = ({ occupations }) => {
  return (
    <Container>
      {occupations.map((occupation) => (
        <OccupationCard
          key={occupation._id}
          code={occupation?.code}
          title={occupation?.title || '121111'}
          description={occupation?.anzsco_section?.description}
          slug={occupation.slug}
        />
      ))}
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
