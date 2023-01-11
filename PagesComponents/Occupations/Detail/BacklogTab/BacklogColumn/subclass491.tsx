import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import React, { ReactNode } from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import { componentStatements, LanguageKeys } from './const';
import { Container, TabItem, TabRoot, Title } from './StyledComponents';
import { BacklogSection } from 'Interfaces/Documents/occupation';
import {
  getRowKeyValueBaseonBacklogPoints,
  getRowKeyValueBaseOn_ByState,
} from './utils';
import { BacklogTable } from './table';

interface Props {
  backlogSection: BacklogSection | undefined;
}
const Subclass491: React.FC<Props> = ({ backlogSection }) => {
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
                  backlogSection?.submited_491
                )}
              />
              <BacklogTable
                titleKey='By State'
                titleValue='EOI count'
                rows={getRowKeyValueBaseOn_ByState(
                  backlogSection?.submited_by_state_491
                )}
              />
            </RadixTab.Content>
            <RadixTab.Content value={t(LanguageKeys.Invited)}>
              <BacklogTable
                titleKey='Points'
                titleValue='EOI count'
                rows={getRowKeyValueBaseonBacklogPoints(
                  backlogSection?.invited_491
                )}
              />
              <BacklogTable
                titleKey='By State'
                titleValue='EOI count'
                rows={getRowKeyValueBaseOn_ByState(
                  backlogSection?.invited_by_state_491
                )}
              />
            </RadixTab.Content>
          </>
        }
      />
    </Container>
  );
};

export default Subclass491;
