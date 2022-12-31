import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import React, { ReactNode } from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import { componentStatements, LanguageKeys } from './const';
import { Container, TabItem, TabRoot, Title } from './StyledComponents';
import { BacklogTable } from './table';
import { getRowKeyValueBaseonBacklogPoints } from './utils';
import { BacklogSection } from 'Interfaces/Documents/occupation';

interface Props {
  backlogSection: BacklogSection;
}

const Subclass189: React.FC<Props> = ({ backlogSection }) => {
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
              <BacklogTable
                titleKey='By state'
                titleValue='EOI count'
                rows={getRowKeyValueBaseonBacklogPoints(
                  backlogSection?.submited_189
                )}
              />
              <BacklogTable
                titleKey='Total'
                titleValue='EOI count'
                rows={getRowKeyValueBaseonBacklogPoints(
                  backlogSection.total_submited_189
                )}
              />
            </RadixTab.Content>
            <RadixTab.Content value={t(LanguageKeys.Invited)}>
              <BacklogTable
                titleKey='By state'
                titleValue='EOI count'
                rows={getRowKeyValueBaseonBacklogPoints(
                  backlogSection?.invited_189
                )}
              />
              <BacklogTable
                titleKey='Total'
                titleValue='EOI count'
                rows={getRowKeyValueBaseonBacklogPoints(
                  backlogSection.total_invited_189
                )}
              />
            </RadixTab.Content>
          </>
        }
      />
    </Container>
  );
};

export default Subclass189;
