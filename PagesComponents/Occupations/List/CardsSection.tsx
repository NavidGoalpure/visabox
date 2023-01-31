import OccupationCard from "Components/Cards/Type1/OocccuptionCard";
import { Occupation } from "Interfaces/Documents/occupation";
import { UnitGroup } from "Interfaces/Documents/unitGroup";
import React from "react";
import { InfiniteData } from "react-query";
import styled from "styled-components";

interface Props {
  occupations: InfiniteData<Occupation[]> | undefined;
}

const CardsSection: React.FC<Props> = ({ occupations }) => {
  return (
    <Container>
      {occupations?.pages?.map((occupationPage) =>
        occupationPage?.map((occupation: Occupation) => {
          return (
            <OccupationCard
              key={occupation._id}
              code={occupation?.code}
              title={occupation?.title}
              description={occupation?.anzsco_section?.description}
              slug={occupation.slug}
              tasks={
                (occupation.anzsco_section?.unit_group as UnitGroup)?.tasks
              }
            />
          );
        })
      )}
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
