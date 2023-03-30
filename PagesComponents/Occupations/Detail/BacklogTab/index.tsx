import { deviceMin } from 'Consts/device';
import { BacklogSection } from 'Interfaces/Occupation/occupation';
import styled from 'styled-components';
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
import * as RadixTab from '@radix-ui/react-tabs';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import * as Tab from 'Elements/Tab';

interface Props {
  backlogSection: BacklogSection | undefined;
  code: number;
}

const BacklogComponent: React.FC<Props> = ({ backlogSection, code }) => {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
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
            <TabItem
              title={t(LanguageKeys.Lodged)}
              value={t(LanguageKeys.Lodged)}
            />
          </>
        }
        bodies={
          <>
            <RadixTab.Content value={t(LanguageKeys.Submitted)}>
              <Row>
                {has189Visa(code) && (
                  <Subclass189
                    backlogPoints={backlogSection?.submited_189}
                    total={backlogSection?.total_submited_189}
                  />
                )}
                {has190Visa(code) && (
                  <Subclass190
                    backlogPoints={backlogSection?.submited_190}
                    byStateTable={backlogSection?.submited_by_state_190}
                  />
                )}
                {has491StateVisa(code) && (
                  <Subclass491
                    backlogPoints={backlogSection?.submited_491}
                    byStateTable={backlogSection?.submited_by_state_491}
                  />
                )}
                {has491FamilyVisa(code) && (
                  <Subclass491Family
                    backlogPoints={backlogSection?.submited_491_family}
                    total={backlogSection?.total_submited_491_family}
                  />
                )}
              </Row>
            </RadixTab.Content>
            <RadixTab.Content value={t(LanguageKeys.Invited)}>
              <Row>
                {has189Visa(code) && (
                  <Subclass189
                    backlogPoints={backlogSection?.invited_189}
                    total={backlogSection?.total_invited_189}
                  />
                )}
                {has190Visa(code) && (
                  <Subclass190
                    backlogPoints={backlogSection?.invited_190}
                    byStateTable={backlogSection?.invited_by_state_190}
                  />
                )}
                {has491StateVisa(code) && (
                  <Subclass491
                    backlogPoints={backlogSection?.invited_491}
                    byStateTable={backlogSection?.invited_by_state_491}
                  />
                )}
                {has491FamilyVisa(code) && (
                  <Subclass491Family
                    backlogPoints={backlogSection?.invited_491_family}
                    total={backlogSection?.total_invited_491_family}
                  />
                )}
              </Row>
            </RadixTab.Content>
            <RadixTab.Content value={t(LanguageKeys.Lodged)}>
              <Row>
                {has189Visa(code) && (
                  <Subclass189
                    backlogPoints={backlogSection?.lodged_189}
                    total={backlogSection?.total_lodged_189}
                  />
                )}
                {has190Visa(code) && (
                  <Subclass190
                    backlogPoints={backlogSection?.lodged_190}
                    byStateTable={backlogSection?.lodged_by_state_190}
                  />
                )}
                {has491StateVisa(code) && (
                  <Subclass491
                    backlogPoints={backlogSection?.lodged_491}
                    byStateTable={backlogSection?.lodged_by_state_491}
                  />
                )}
                {has491FamilyVisa(code) && (
                  <Subclass491Family
                    backlogPoints={backlogSection?.lodged_491_family}
                    total={backlogSection?.total_lodged_491_family}
                  />
                )}
              </Row>
            </RadixTab.Content>
          </>
        }
      />
    </Container>
  );
};

export default BacklogComponent;
const Container = styled.article`
  width: 100%;
`;
const ColumnWrappers = styled.section`
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
  @media ${deviceMin.tabletS} {
    padding: 0 1rem;
  }
`;
const TabRoot = styled(Tab.Root)`
  width: auto;
  div {
    &[aria-label='tabs'] {
      border-radius: 0px;
    }
  }
  #contents-container {
    margin: 0.5rem 0 1rem 0;
  }
`;
const TabItem = styled(Tab.Item)`
  width: 50%;
`;
const Row = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 0.5rem;
  align-items: column;
  flex-direction: column;
  align-items: center;
  @media ${deviceMin.tabletL} {
    flex-direction: row;
    align-items: start;
    justify-content: center;
  }
`;
