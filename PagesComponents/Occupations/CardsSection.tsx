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
          title={occupation?.title}
          description={occupation?.anzsco_section?.description}
          slug={occupation.slug}
          popupContent={
            <div>
              <h3>Tasks</h3>
              <ul>
                <li>
                  Planning and coordinating the operation of hatcheries to
                  produce fish fry, seed oysters, crayfish, marron and prawns
                  taking into account environmental and market factors
                </li>
                <li>
                  Monitoring the environment to maintain optimal growing
                  conditions
                </li>
                <li>Identifying and controlling environmental toxins and</li>
              </ul>
            </div>
          }
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
