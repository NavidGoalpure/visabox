import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import React from 'react';
import { componentStatements, LanguageKeys } from './const';
import { Container, Title } from './StyledComponents';
import {
  BacklogPoints,
  BacklogSection,
} from 'Interfaces/Database/Occupation/occupation';
import { BacklogTable } from './table';
import { getRowKeyValueBaseonBacklogPoints } from './utils';

interface Props {
  backlogPoints: BacklogPoints | undefined;
  total: string | undefined;
}

const Subclass491Family: React.FC<Props> = ({ backlogPoints, total }) => {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <Title>
        {t(LanguageKeys.Title491FamilyTitleSection1)}
        <span>491</span>
        <br />
        <br />
        {t(LanguageKeys.Title491FamilyTitleSection2)}
      </Title>
      <BacklogTable
        titleKey='By state'
        titleValue='EOI count'
        rows={getRowKeyValueBaseonBacklogPoints(backlogPoints)}
      />
      <BacklogTable
        titleKey=' '
        titleValue='EOI count'
        rows={[
          {
            rowKey: 'Total ',
            rowValue: total,
          },
        ]}
      />
    </Container>
  );
};

export default Subclass491Family;
