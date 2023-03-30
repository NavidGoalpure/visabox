import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import React from 'react';
import { componentStatements, LanguageKeys } from './const';
import { Container, Title } from './StyledComponents';
import { BacklogTable } from './table';
import { getRowKeyValueBaseonBacklogPoints } from './utils';
import { BacklogPoints } from 'Interfaces/Occupation/occupation';

interface Props {
  backlogPoints: BacklogPoints | undefined;
  total: string | undefined;
}

const Subclass189: React.FC<Props> = ({ backlogPoints, total }) => {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <Container>
      <Title>
        {t(LanguageKeys.Title189TitleSection1)}
        <span>189</span>
        <br />
        <br />
        {t(LanguageKeys.Title189TitleSection2)}
      </Title>
      <BacklogTable
        titleKey='Points'
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

export default Subclass189;
