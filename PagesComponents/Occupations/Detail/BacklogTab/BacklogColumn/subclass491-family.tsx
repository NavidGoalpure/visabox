import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import React, { ReactNode } from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import { componentStatements, LanguageKeys } from './const';
import { Container, TabItem, TabRoot, Title } from './StyledComponents';
import { BacklogSection } from 'Interfaces/Documents/occupation';
import { BacklogTable } from './table';
import { getRowKeyValueBaseonBacklogPoints } from './utils';

interface Props {
  backlogSection: BacklogSection | undefined;
}

const Subclass491Family: React.FC<Props> = ({ backlogSection }) => {
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
                  backlogSection?.submited_491_family
                )}
              />
              <BacklogTable
                titleKey=' '
                titleValue='EOI count'
                rows={[
                  {
                    rowKey: 'Total ',
                    rowValue: backlogSection?.total_submited_491_family,
                  },
                ]}
              />
            </RadixTab.Content>
            <RadixTab.Content value={t(LanguageKeys.Invited)}>
              <BacklogTable
                titleKey='By state'
                titleValue='EOI count'
                rows={getRowKeyValueBaseonBacklogPoints(
                  backlogSection?.invited_491_family
                )}
              />
              {backlogSection?.total_invited_491_family ? (
                <BacklogTable
                  titleKey=' '
                  titleValue='EOI count'
                  rows={[
                    {
                      rowKey: 'Total ',
                      rowValue: backlogSection?.total_invited_491_family,
                    },
                  ]}
                />
              ) : null}
            </RadixTab.Content>
          </>
        }
      />
    </Container>
  );
};

export default Subclass491Family;
