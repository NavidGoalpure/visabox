import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import React from 'react';
import { componentStatements, LanguageKeys } from './const';
import { Container, Title } from './StyledComponents';
import { BacklogTable } from './table';
import {
  BacklogPoints,
  BacklogSection,
  ByStateTable,
} from 'Interfaces/Documents/occupation';
import {
  getRowKeyValueBaseonBacklogPoints,
  getRowKeyValueBaseOn_ByState,
} from './utils';

interface Props {
  backlogPoints: BacklogPoints | undefined;
  byStateTable: ByStateTable[] | undefined;
}

const Subclass190: React.FC<Props> = ({ backlogPoints, byStateTable }) => {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <Title>
        {t(LanguageKeys.Title190TitleSection1)}
        <span>190</span>
        <br />
        <br />
        {t(LanguageKeys.Title190TitleSection2)}
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

export default Subclass190;
