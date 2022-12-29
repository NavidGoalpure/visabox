import OccupationCard from 'Components/OocccuptionCard';
import { Occupation } from 'Interfaces/Documents/occupation';
import { UnitGroup } from 'Interfaces/Documents/unitGroup';
import React from 'react';
import styled from 'styled-components';
import { PageTitleStyle } from 'Styles/Theme/Page';

interface Props {
  similarOccupations: Occupation[];
  currentCode: number;
}
const similarOccupations: React.FC<Props> = ({
  similarOccupations,
  currentCode,
}) => {
  const smartList = similarOccupations.filter(
    (occupation) => occupation?.code !== currentCode
  );
  if (smartList.length === 0) return null;
  return (
    <CardsContainer>
      {smartList.map((occupation) => (
        <OccupationCard
          key={occupation._id}
          code={occupation?.code}
          title={occupation?.title}
          description={
            (occupation.anzsco_section?.unit_group as UnitGroup)?.description
          }
          slug={occupation.slug}
          tasks={(occupation.anzsco_section?.unit_group as UnitGroup)?.tasks}
        />
      ))}
    </CardsContainer>
  );
};

export default similarOccupations;

const CardsContainer = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  //
  padding: 0px;
  gap: 2rem;
  margin-bottom: 2rem;
`;
