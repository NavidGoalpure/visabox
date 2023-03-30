import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import React from 'react';
import { componentStatements, LanguageKeys } from './const';
import { Container, Title } from './StyledComponents';
import { BacklogPoints, ByStateTable } from 'Interfaces/Occupation/occupation';
import {
  getRowKeyValueBaseonBacklogPoints,
  getRowKeyValueBaseOn_ByState,
} from './utils';
import { BacklogTable } from './table';

interface Props {
  backlogPoints: BacklogPoints | undefined;
  byStateTable: ByStateTable[] | undefined;
}
const Subclass491: React.FC<Props> = ({ backlogPoints, byStateTable }) => {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <Title>
        {t(LanguageKeys.Title491TitleSection1)}
        <span>491</span>
        <br />
        <br />
        {t(LanguageKeys.Title491TitleSection2)}
      </Title>
      <BacklogTable
        titleKey='Points'
        titleValue='EOI count'
        rows={getRowKeyValueBaseonBacklogPoints(backlogPoints)}
      />
      <BacklogTable
        titleKey='By State'
        titleValue='EOI count'
        rows={getRowKeyValueBaseOn_ByState(byStateTable)}
      />
    </Container>
  );
};

export default Subclass491;
