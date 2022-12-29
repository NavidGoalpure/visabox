import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { BacklogPoints, BacklogSection } from 'Interfaces/Documents/occupation';
import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';
import { componentStatements, LanguageKeys } from './const';
import BacklogColumn from './BacklogColumn';
import {
  getRowKeyValueBaseonBacklogPoints_Invited,
  getRowKeyValueBaseonBacklogPoints_Submitted,
} from './utils';
import { BacklogTable } from './table';
import NoData from 'Components/NoData';

interface Props {
  backlogSection: BacklogSection | undefined;
}

const BacklogComponent: React.FC<Props> = ({ backlogSection }) => {
  const { t } = useStaticTranslation(componentStatements);
  

  function getSmartComponent_Submited(
    arg0: BacklogPoints | undefined,
    arg1: BacklogPoints | undefined
  ): ReactNode {
    if (!arg0 && !arg1) return <NoData />;
    return (
      <>
        {arg0 ? (
          <BacklogTable
            titleKey='By state'
            titleValue='EOI count'
            rows={getRowKeyValueBaseonBacklogPoints_Submitted(arg0)}
          />
        ) : null}
        {arg1 ? (
          <BacklogTable
            titleKey='Total'
            titleValue='EOI count'
            rows={getRowKeyValueBaseonBacklogPoints_Submitted(arg1)}
          />
        ) : null}
      </>
    );
  }
  function getSmartComponent_Invited(
    arg0: BacklogPoints | undefined,
    arg1: BacklogPoints | undefined
  ): ReactNode {
    if (!arg0 && !arg1) return <NoData />;
    return (
      <>
        {arg0 ? (
          <BacklogTable
            titleKey='By state'
            titleValue='EOI count'
            rows={getRowKeyValueBaseonBacklogPoints_Invited(arg0)}
          />
        ) : null}
        {arg1 ? (
          <BacklogTable
            titleKey='Total'
            titleValue='EOI count'
            rows={getRowKeyValueBaseonBacklogPoints_Invited(arg1)}
          />
        ) : null}
      </>
    );
  }

  return (
    <ColumnWrappers>
      {/* //////////189////////// */}
      {backlogSection?.submited_189 || backlogSection?.total_submited_189 ? (
        <BacklogColumn
          title={t(LanguageKeys.Title189)}
          submittedContent={getSmartComponent_Submited(
            backlogSection?.submited_189,
            backlogSection?.total_submited_189
          )}
          invitedContent={getSmartComponent_Invited(
            backlogSection?.invited_189,
            backlogSection?.total_invited_189
          )}
        />
      ) : null}
      {/* ////////////190//////////// */}
      {backlogSection?.submited_190 || backlogSection?.total_submited_190 ? (
        <BacklogColumn
          title={t(LanguageKeys.Title190)}
          submittedContent={getSmartComponent_Submited(
            backlogSection?.submited_190,
            backlogSection?.total_submited_190
          )}
          invitedContent={getSmartComponent_Invited(
            backlogSection?.invited_190,
            backlogSection?.total_invited_190
          )}
        />
      ) : null}
      {/* //////////491////////// */}
      {backlogSection?.submited_491 ||
      backlogSection?.total_submited_491_family ? (
        <BacklogColumn
          title={t(LanguageKeys.Title491)}
          submittedContent={getSmartComponent_Submited(
            backlogSection?.submited_491,
            backlogSection?.total_submited_491
          )}
          invitedContent={getSmartComponent_Invited(
            backlogSection?.invited_491,
            backlogSection?.total_invited_491
          )}
        />
      ) : null}
      {/* //////////491-FAMILY////////// */}
      {backlogSection?.submited_491_family ||
      backlogSection?.total_submited_491_family ? (
        <BacklogColumn
          title={t(LanguageKeys.Title491_family)}
          submittedContent={getSmartComponent_Submited(
            backlogSection?.submited_491_family,
            backlogSection?.total_submited_491_family
          )}
          invitedContent={getSmartComponent_Invited(
            backlogSection?.invited_491_family,
            backlogSection?.total_invited_491_family
          )}
        />
      ) : null}
    </ColumnWrappers>
  );
};

export default BacklogComponent;

const ColumnWrappers = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  & > :first-child {
    margin-inline-start: auto;
  }
  & > :last-child {
    margin-inline-end: auto;
  }
`;
