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
import {
  componentBorderColor,
  componentTextStyle,
  componentTitleStyle,
} from 'Styles/Theme/Component';
import { componentStatements, LanguageKeys } from '../const';

interface Props {
  title: string;
}

const BacklogColumn: React.FC<Props> = ({ title }) => {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};

export default BacklogColumn;
const Container = styled.div`
  width: 100%;
`;
const Title = styled.h2`
  ${componentTextStyle}
  ${componentBorderColor}
  width:100%;
  text-align: center;
  padding: 12px 1rem;
  border: 1px solid var(--color-gray13);
  border-radius: 10px;
`;
