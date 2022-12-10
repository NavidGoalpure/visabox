import styled from "styled-components/macro";

const AnzcoComponent = () => {
  return (
    <Container>
      <TitleWrapper>
        <Title>ANZSCO VERSION 1.3, CAT. NO. 1220.0</Title>
      </TitleWrapper>
      <Table>
        <Tr>
          <Td>Major Group:</Td>
          <Td>1 - Managers</Td>
        </Tr>
      </Table>
    </Container>
  );
};

export default AnzcoComponent;
const Container = styled.div`
  border: 1px solid var(--color-gray9);
  border-radius: 15px;
  background-color: var(--color-gray6);
  // overflow: hidden;
`;
const TitleWrapper = styled.div`
  width: 100%;
  border-radius: 15px 15px 0 0;
  padding: 1rem;
  border-bottom: 1px solid var(--color-gray9);
  background-color: var(--color-gray7);
`;

const Title = styled.h2`
  text-align: center;
  color: var(--color-gray13);
`;
const Table = styled.table`


`
const Tr = styled.tr`
  display: grid;
  
`;
const Td = styled.td``