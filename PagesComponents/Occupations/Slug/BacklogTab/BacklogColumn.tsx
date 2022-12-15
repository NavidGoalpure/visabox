import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  BacklogPoints,
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
import { deviceMin } from 'Consts/device';

interface Props {
  title: string;
  invitedContent: BacklogPoints | undefined;
  submittedContent: BacklogPoints | undefined;
}

const BacklogColumn: React.FC<Props> = ({
  title,
  invitedContent,
  submittedContent,
}) => {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <Container>
      <Title>{title}</Title>
      <TabRoot
        defaultValue={t(LanguageKeys.Submitted)}
        items={
          <>
            <TabItem
              title={t(LanguageKeys.Submitted)}
              value={t(LanguageKeys.Submitted)}
            />
            <TabItem
              title={t(LanguageKeys.Invited)}
              value={t(LanguageKeys.Invited)}
            />
          </>
        }
        bodies={
          <>
            <RadixTab.Content value={t(LanguageKeys.Submitted)}>
              {t(LanguageKeys.Submitted)}
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
  @media ${deviceMin.tabletS} {
    width: 50%;
  }
`;
const Title = styled.h2`
  ${componentTextStyle}
  ${componentBorderColor}
  width:100%;
  height: 5rem;
  text-align: center;
  padding: 12px 1rem;
  border: 1px solid var(--color-gray13);
  border-radius: 10px;
  margin-bottom: 1rem;
`;
const TabRoot = styled(Tab.Root)`
  width: 100%;
`;
const TabItem = styled(Tab.Item)`
  width: 50%;
`;
