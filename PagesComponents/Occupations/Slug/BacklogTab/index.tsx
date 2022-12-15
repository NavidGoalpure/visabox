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
import { componentStatements, LanguageKeys } from './const';
import BacklogColumn from './BacklogColumn';

interface Props {
  backlogSection: BacklogSection | undefined;
}

const BacklogComponent: React.FC<Props> = ({ backlogSection }) => {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <ColumnWrappers>
      <BacklogColumn
        title={t(LanguageKeys.Title189)}
        submittedContent={backlogSection?.submitted_189}
        invitedContent={backlogSection?.invited_189}
      />
      <BacklogColumn
        title={t(LanguageKeys.Title190)}
        submittedContent={backlogSection?.submitted_190}
        invitedContent={backlogSection?.invited_190}
      />
      <BacklogColumn
        title={t(LanguageKeys.Title491)}
        submittedContent={backlogSection?.submitted_491}
        invitedContent={backlogSection?.invited_491}
      />
      <BacklogColumn
        title={t(LanguageKeys.Title491_family)}
        submittedContent={backlogSection?.submitted_491_family}
        invitedContent={backlogSection?.invited_491_family}
      />
    </ColumnWrappers>
  );
};

export default BacklogComponent;

const ColumnWrappers = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: center;
`;
