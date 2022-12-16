import React from 'react';
import styled from 'styled-components/macro';
import { componentTextStyle } from 'Styles/Theme/Component';

export const BacklogTable = () => {
  return (
    <Table>
      <Tr>
        <Td>foo :</Td>
        <Td>bar</Td>
      </Tr>
      <Tr>
        <Td>sdf</Td>
        <Td>gd</Td>
      </Tr>
      <Tr>
        <Td>lk;</Td>
        <Td>pop</Td>
      </Tr>
      <Tr>
        <Td>34</Td>
        <Td>;l </Td>
      </Tr>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  ${componentTextStyle}
`;
const Tr = styled.tr`
  width: 100%;
  font-weight: 500;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-bottom: 1rem;
  :last-child {
    margin-bottom: 0;
  }
`;
const Td = styled.td`
  margin: 0;
  font-weight: 500;
`;
