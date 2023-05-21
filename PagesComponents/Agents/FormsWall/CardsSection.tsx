import { Client } from 'Interfaces/Database/Client';
import React from 'react';
import { InfiniteData } from 'react-query';
import styled from 'styled-components';
import BasicFormCard from './BasicFormCard';

interface Props {
  forms: InfiniteData<Client[]> | undefined;
}

const CardsSection: React.FC<Props> = ({ forms }) => {
  return (
    <Container>
      {forms?.pages?.map((formPage) =>
        formPage?.map((form: Client) => {
          return <BasicFormCard formData={form} />;
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
