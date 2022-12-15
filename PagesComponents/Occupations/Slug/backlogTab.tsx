import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  Occupation,
  Territories,
  TerritoryObj,
} from 'Interfaces/Documents/occupation';
import { UnitGroup } from 'Interfaces/Documents/unitGroup';
import React from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import * as Tab from 'Elements/Tab';
import { getTerritories } from 'Utils/occupations';
import styled from 'styled-components/macro';
import { componentTitleStyle } from 'Styles/Theme/Component';
import { componentStatements, LanguageKeys } from './const';

interface Props {
  occupation: Occupation;
}

const BacklogComponent: React.FC<Props> = ({ occupation }) => {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <Container>
      <Title>{t(LanguageKeys.BacklogTabTitle)}</Title>
      <ColumnWrappers></ColumnWrappers>
    </Container>
  );
};

export default BacklogComponent;
const Container = styled.div`
  width: auto;
`;
const Title = styled.h2`
  ${componentTitleStyle}
`;
const ColumnWrappers = styled.div`
  dispaly: flex;
  width: 100%;
`;
