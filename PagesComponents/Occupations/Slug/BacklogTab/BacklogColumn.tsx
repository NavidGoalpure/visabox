import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  BacklogSection,
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
import { componentStatements, LanguageKeys } from './const';

interface Props {
  title: string;
  backlogSection: BacklogSection;
}

const BacklogColumn: React.FC<Props> = ({ title, backlogSection }) => {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <Container>
      <Title>{title}</Title>
      <TabRoot
        defaultValue={t(LanguageKeys.Submited)}
        items={
          <>
            <TabItem
              title={t(LanguageKeys.Submited)}
              value={t(LanguageKeys.Submited)}
            />
            <TabItem
              title={t(LanguageKeys.Invited)}
              value={t(LanguageKeys.Invited)}
            />
          </>
        }
        bodies={
          <>
            <RadixTab.Content value={t(LanguageKeys.Submited)}>
              {t(LanguageKeys.Submited)}
            </RadixTab.Content>
            <RadixTab.Content value={t(LanguageKeys.Invited)}>
              {t(LanguageKeys.Invited)}
            </RadixTab.Content>
          </>
        }
      />
    </Container>
  );
};

export default BacklogColumn;
const Container = styled.div`
  width: 100%;
  margin-bottom: 1rem;
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
const TabRoot = styled(Tab.Root)`
  width: 100%;
`;
const TabItem = styled(Tab.Item)`
  width: 50%;
`;
