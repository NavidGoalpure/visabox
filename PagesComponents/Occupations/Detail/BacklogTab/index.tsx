import { BacklogSection } from 'Interfaces/Documents/occupation';
import styled from 'styled-components/macro';
import Subclass189 from './BacklogColumn/subclass189';
import Subclass190 from './BacklogColumn/subclass190';
import Subclass491 from './BacklogColumn/subclass491';
import Subclass491Family from './BacklogColumn/subclass491-family';

interface Props {
  backlogSection: BacklogSection;
}

const BacklogComponent: React.FC<Props> = ({ backlogSection }) => {
  return (
    <ColumnWrappers>
      {/* //////////189////////// */}
      {backlogSection?.submited_189 ||
      backlogSection?.invited_189 ||
      backlogSection?.total_submited_189 ||
      backlogSection?.total_invited_189 ? (
        <Subclass189 backlogSection={backlogSection} />
      ) : null}
      {/* ////////////190//////////// */}
      {backlogSection?.submited_190 ||
      backlogSection?.invited_190 ||
      backlogSection?.submited_by_state_190 ||
      backlogSection?.invited_by_state_190 ? (
        <Subclass190 backlogSection={backlogSection} />
      ) : null}

      {/* ////////////491//////////// */}
      {backlogSection?.submited_491 ||
      backlogSection?.invited_491 ||
      backlogSection?.submited_by_state_491 ||
      backlogSection?.invited_by_state_491 ? (
        <Subclass491 backlogSection={backlogSection} />
      ) : null}

      {/* ////////////491-family//////////// */}
      {backlogSection?.submited_491_family ||
      backlogSection?.invited_491_family ||
      backlogSection?.total_submited_491_family ||
      backlogSection?.total_invited_491_family ? (
        <Subclass491Family backlogSection={backlogSection} />
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
