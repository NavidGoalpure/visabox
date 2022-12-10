import styled from "styled-components/macro";
import {
  componentSubtitleStyle,
  componentTheme,
  componentTitleStyle,
} from "Styles/Theme/Component";

const AnzcoComponent = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>ANZSCO VERSION 1.3, CAT. NO. 1220.0</Title>
      </TitleWrapper>
      <Wrapper>
        <Table>
          <Tr>
            <Td>Major Group:</Td>
            <Td>1 - Managers</Td>
          </Tr>
          <Tr>
            <Td>Sub-Major Group:</Td>
            <Td>12 - Farmers and Farm Managers</Td>
          </Tr>
          <Tr>
            <Td>Minor Group:</Td>
            <Td>121 - Farmers and Farm Managers</Td>
          </Tr>
          <Tr>
            <Td>Unit Group:</Td>
            <Td>1211 - Aquaculture Farmers</Td>
          </Tr>
        </Table>
      </Wrapper>
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

const Wrapper = styled.div`
  padding: 1rem;
`;

const Table = styled.table`
  width: 100%;
  padding: 1.5rem;
  border: 1px solid var(--color-primary7);
  border-radius: 5px;
`;
const Tr = styled.tr`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 70%;
  margin-bottom: 1rem;
  :last-child {
    margin-bottom: 0;
  }
`;
const Td = styled.td`
  ${componentSubtitleStyle}
  margin:0;
`;
