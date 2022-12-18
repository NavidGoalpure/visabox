import React from 'react';
import styled from 'styled-components/macro';
import { componentTextStyle, componentTheme } from 'Styles/Theme/Component';
import NoData from './noData';

interface Props {
  titleKey: string;
  titleValue: string;
  rows: { rowKey: string; rowValue: string }[] | undefined;
}
export const BacklogTable: React.FC<Props> = ({
  titleKey,
  titleValue,
  rows,
}) => {
  if (!rows || rows.length === 0) return <NoData />;

  return (
    <Table>
      <Thead id='header'>
        <Tr>
          <th>{titleKey}</th>
          <th>{titleValue}</th>
        </Tr>
      </Thead>
      <Tbody id='body'>
        {rows.map((row) => (
          <Tr>
            <Td>{row.rowKey}</Td>
            <Td>{row.rowValue}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const Table = styled.table`
  width: 100%;
  ${componentTheme}
`;
const Thead = styled.thead`
  display: block;
  background-color: transparent !important;
  padding: 0.5rem 0 !important;
`;

const Tbody = styled.tbody`
  text-align: center;
  padding: 1rem 0 !important;
  display: block;
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
