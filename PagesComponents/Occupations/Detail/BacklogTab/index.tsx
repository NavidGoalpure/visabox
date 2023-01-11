import { BacklogSection } from 'Interfaces/Documents/occupation';
import styled from 'styled-components/macro';
import {
  has189Visa,
  has190Visa,
  has491FamilyVisa,
  has491StateVisa,
} from '../utils';
import Subclass189 from './BacklogColumn/subclass189';
import Subclass190 from './BacklogColumn/subclass190';
import Subclass491 from './BacklogColumn/subclass491';
import Subclass491Family from './BacklogColumn/subclass491-family';

interface Props {
  backlogSection: BacklogSection | undefined;
  code: number;
}

const BacklogComponent: React.FC<Props> = ({ backlogSection, code }) => {
  return (
    <ColumnWrappers>
      {has189Visa(code) && <Subclass189 backlogSection={backlogSection} />}
      {has190Visa(code) && <Subclass190 backlogSection={backlogSection} />}
      {has491StateVisa(code) && <Subclass491 backlogSection={backlogSection} />}
      {has491FamilyVisa(code) && (
        <Subclass491Family backlogSection={backlogSection} />
      )}
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
