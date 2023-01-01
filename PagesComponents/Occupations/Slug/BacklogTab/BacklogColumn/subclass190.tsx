import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import React, { ReactNode } from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import { componentStatements, LanguageKeys } from './const';
import { Container, TabItem, TabRoot, Title } from './StyledComponents';
import { BacklogTable } from './table';
import { BacklogSection } from 'Interfaces/Documents/occupation';
import {
  getRowKeyValueBaseonBacklogPoints,
  getRowKeyValueBaseOn_ByState,
} from './utils';

interface Props {
  backlogSection: BacklogSection;
}

const Subclass190: React.FC<Props> = ({ backlogSection }) => {
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
                titleKey='Points'
                titleValue='EOI count'
                rows={getRowKeyValueBaseonBacklogPoints(
                  backlogSection?.submited_190
                )}
              />
              <BacklogTable
                titleKey='By State'
                titleValue='EOI count'
                rows={getRowKeyValueBaseOn_ByState(
                  backlogSection.submited_by_state_190
                )}
              />
            </RadixTab.Content>
            <RadixTab.Content value={t(LanguageKeys.Invited)}>
              <BacklogTable
                titleKey='Points'
                titleValue='EOI count'
                rows={getRowKeyValueBaseonBacklogPoints(
                  backlogSection?.invited_190
                )}
              />
              <BacklogTable
                titleKey='By State'
                titleValue='EOI count'
                rows={getRowKeyValueBaseOn_ByState(
                  backlogSection.invited_by_state_190
                )}
              />
            </RadixTab.Content>
          </>
        }
      />
    </Container>
  );
};

export default Subclass190;
