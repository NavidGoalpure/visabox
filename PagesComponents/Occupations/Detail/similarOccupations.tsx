import OccupationCard from 'Components/Cards/Type1/OocccuptionCard';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { Occupation } from 'Interfaces/Documents/occupation';
import { UnitGroup } from 'Interfaces/Documents/unitGroup';
import React from 'react';
import styled from 'styled-components/macro';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { componentStatements, LanguageKeys } from './const';

interface Props {
  similarOccupations: Occupation[];
  currentCode: number;
}
const similarOccupations: React.FC<Props> = ({
  similarOccupations,
  currentCode,
}) => {
  const { t } = useStaticTranslation(componentStatements);
  const smartList = similarOccupations.filter(
    (occupation) => occupation?.code !== currentCode
  );
  if (smartList.length === 0) return null;
  return (
    <Container>
      <Title>{t(LanguageKeys.SimilarOccupations)}</Title>
      <CardsContainer>
        {smartList.map((occupation) => (
          <OccupationCard
            key={occupation._id}
            code={occupation?.code}
            title={occupation?.title}
            description={occupation?.anzsco_section?.description}
            slug={occupation.slug}
            tasks={(occupation.anzsco_section?.unit_group as UnitGroup)?.tasks}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default similarOccupations;
const Container = styled.section`
  width: 100%;
`;
const Title = styled.h2`
  ${Layer1_TitleStyle}
  width: 100%;
  text-align: center;
`;
const CardsContainer = styled.section`
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
