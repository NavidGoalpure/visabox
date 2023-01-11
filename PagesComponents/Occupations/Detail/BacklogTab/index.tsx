import { BacklogSection } from 'Interfaces/Documents/occupation';
import styled from 'styled-components/macro';
import Subclass189 from './BacklogColumn/subclass189';
import Subclass190 from './BacklogColumn/subclass190';
import Subclass491 from './BacklogColumn/subclass491';
import Subclass491Family from './BacklogColumn/subclass491-family';

interface Props {
  backlogSection: BacklogSection | undefined;
}

const BacklogComponent: React.FC<Props> = ({ backlogSection }) => {
  return (
    <ColumnWrappers>
      <Subclass189 backlogSection={backlogSection} />
      <Subclass190 backlogSection={backlogSection} />
      <Subclass491 backlogSection={backlogSection} />
      <Subclass491Family backlogSection={backlogSection} />
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
