import { useStaticTranslation } from 'hooks/useStaticTraslation';
import styled from 'styled-components/macro';
import { componentSubtitleStyle, componentTheme } from 'Styles/Theme/Component';
import { LanguageKeys, componentStatements } from './const';
const { t } = useStaticTranslation(componentStatements);

const AnzcoComponent = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>{t(LanguageKeys.AnzscoTabTitle)}</Title>
      </TitleWrapper>
      <Table>
        <Tr>
          <Td>{t(LanguageKeys.MajorGroup)} :</Td>
          <Td>1 - Managers</Td>
        </Tr>
      </Table>
    </Container>
  );
};

export default AnzcoComponent;
const Container = styled.div`
  ${componentTheme}
  padding:0;
  border: 1px solid var(--color-gray9);
  background-color: var(--color-gray6);
`;
const TitleWrapper = styled.div`
  width: 100%;
  border-radius: 15px 15px 0 0;
  padding: 1rem;
  border-bottom: 1px solid var(--color-gray9);
  background-color: var(--color-gray7);
`;

const Title = styled.h2`
  ${componentSubtitleStyle}
  margin:0;
  text-align: center;
  color: var(--color-gray13);
`;
const Table = styled.table``;
const Tr = styled.tr`
  display: grid;
`;
const Td = styled.td``;
