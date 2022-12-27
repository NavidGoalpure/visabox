import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  BacklogPoints,
  BacklogSection,
  Occupation,
  Territories,
} from 'Interfaces/Documents/occupation';
import { UnitGroup } from 'Interfaces/Documents/unitGroup';
import React, { ReactNode } from 'react';
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
import { BacklogTable } from './table';
import {
  getRowKeyValueBaseonBacklogPoints_Invited,
  getRowKeyValueBaseonBacklogPoints_Submitted,
} from './utils';

interface Props {
  title: string;
  invitedContent: ReactNode;
  submittedContent: ReactNode;
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
        heads={
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
              {submittedContent}
            </RadixTab.Content>
            <RadixTab.Content value={t(LanguageKeys.Invited)}>
              {invitedContent}
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
    width: 48%;
  }
`;
const Title = styled.h2`
  ${componentTextStyle}
  ${componentBorderColor}
  width: 100%;
  height: max-content;
  text-align: center;
  padding: 1.5rem 0.5rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;
const TabRoot = styled(Tab.Root)`
  width: 100%;
  div {
    &[aria-label='tabs'] {
      border-radius: 15px;
    }
  }
  #contents-container {
    margin: 1rem 0;
  }
`;
const TabItem = styled(Tab.Item)`
  width: 50%;
`;
