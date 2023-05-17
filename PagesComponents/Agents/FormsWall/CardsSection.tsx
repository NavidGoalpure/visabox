import React from 'react';
import { ClientData } from 'Interfaces/Database/Client';
import { InfiniteData } from 'react-query';
import styled from 'styled-components';
import BasicFormCard from './BasicFormCard';
import { ClientData_Sanity } from 'Queries/client/interface';
import { proxySanityClientResponseToCamelCase } from 'Utils/query/clients';

interface Props {
  forms: InfiniteData<ClientData_Sanity[]> | undefined;
}

const CardsSection: React.FC<Props> = ({ forms }) => {
  return (
    <Container>
      {forms?.pages?.map((formPage) =>
        formPage?.map((form: ClientData_Sanity) => {
          const clientData = proxySanityClientResponseToCamelCase(form);
          return <BasicFormCard formData={clientData} />;
        })
      )}
    </Container>
  );
};

export default CardsSection;

const Container = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`;
