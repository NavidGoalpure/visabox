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
  componentBodyTheme,
  componentHeaderTheme,
  componentTheme,
  componentTitleStyle,
} from 'Styles/Theme/Component';
import { componentStatements, LanguageKeys } from '../const';
import BacklogColumn from './BacklogColumn';

interface Props {
  occupation: Occupation;
}

const BacklogComponent: React.FC<Props> = ({ occupation }) => {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <Container>
      <Header>{t(LanguageKeys.BacklogTabTitle)}</Header>
      <ColumnWrappers>
        <BacklogColumn occupation={occupation} />
      </ColumnWrappers>
    </Container>
  );
};

export default BacklogComponent;

const Container = styled.section`
  ${componentTheme}
  width: auto;
`;
const Header = styled.header`
  width: 100%;
  padding: 1rem;
`;
const ColumnWrappers = styled.article`
  dispaly: flex;
  width: 100%;
`;
