import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  BacklogSection,
  Occupation,
  Territories,
} from 'Interfaces/Documents/occupation';
import { UnitGroup } from 'Interfaces/Documents/unitGroup';
import React from 'react';
import * as RadixTab from '@radix-ui/react-tabs';
import * as Tab from 'Elements/Tab';
import { getTerritories } from 'Utils/occupations';
import styled from 'styled-components/macro';
import { componentStatements, LanguageKeys } from './const';
import BacklogColumn from './BacklogColumn';
import {
  getRowKeyValueBaseonBacklogPoints_Invited,
  getRowKeyValueBaseonBacklogPoints_Submitted,
} from './utils';
import { BacklogTable } from './table';

interface Props {
  backlogSection: BacklogSection | undefined;
}

const BacklogComponent: React.FC<Props> = ({ backlogSection }) => {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <ColumnWrappers>
      {/* //////////189////////// */}
      <BacklogColumn
        title={t(LanguageKeys.Title189)}
        submittedContent={
          <>
            <BacklogTable
              titleKey='By state'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Submitted(
                backlogSection?.submited_189
              )}
            />
            <BacklogTable
              titleKey='Total'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Submitted(
                backlogSection?.total_submited_189
              )}
            />
          </>
        }
        invitedContent={
          <>
            <BacklogTable
              titleKey='By state'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Invited(
                backlogSection?.invited_189
              )}
            />
            <BacklogTable
              titleKey='Total'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Submitted(
                backlogSection?.total_invited_189
              )}
            />
          </>
        }
      />
      {/* ////////////190//////////// */}
      <BacklogColumn
        title={t(LanguageKeys.Title190)}
        submittedContent={
          <>
            <BacklogTable
              titleKey='By state'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Submitted(
                backlogSection?.submited_190
              )}
            />
            <BacklogTable
              titleKey='Total'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Submitted(
                backlogSection?.total_submited_190
              )}
            />
          </>
        }
        invitedContent={
          <>
            <BacklogTable
              titleKey='By state'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Invited(
                backlogSection?.invited_190
              )}
            />
            <BacklogTable
              titleKey='Total'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Submitted(
                backlogSection?.total_invited_190
              )}
            />
          </>
        }
      />
      {/* //////////491////////// */}
      <BacklogColumn
        title={t(LanguageKeys.Title491)}
        submittedContent={
          <>
            <BacklogTable
              titleKey='By state'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Submitted(
                backlogSection?.submited_491
              )}
            />
            <BacklogTable
              titleKey='Total'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Submitted(
                backlogSection?.total_submited_491
              )}
            />
          </>
        }
        invitedContent={
          <>
            <BacklogTable
              titleKey='By state'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Invited(
                backlogSection?.invited_491
              )}
            />
            <BacklogTable
              titleKey='Total'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Submitted(
                backlogSection?.total_invited_491
              )}
            />
          </>
        }
      />
      {/* //////////491-FAMILY////////// */}
      <BacklogColumn
        title={t(LanguageKeys.Title491_family)}
        submittedContent={
          <>
            <BacklogTable
              titleKey='By state'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Submitted(
                backlogSection?.submited_491_family
              )}
            />
            <BacklogTable
              titleKey='Total'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Submitted(
                backlogSection?.total_submited_491_family
              )}
            />
          </>
        }
        invitedContent={
          <>
            <BacklogTable
              titleKey='By state'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Invited(
                backlogSection?.invited_491_family
              )}
            />
            <BacklogTable
              titleKey='Total'
              titleValue='EOI count'
              rows={getRowKeyValueBaseonBacklogPoints_Submitted(
                backlogSection?.total_invited_491_family
              )}
            />
          </>
        }
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
