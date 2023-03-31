import React from 'react';
import styled from 'styled-components';

import NoData from 'Components/NoData';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { layer3_TableStyle } from 'Styles/Theme/Layers/layer3/style';

interface Props {
  titleKey: string;
  titleValue: string;
  rows: { rowKey: string; rowValue: string | undefined }[] | undefined;
}
export const BacklogTable: React.FC<Props> = ({
  titleKey,
  titleValue,
  rows,
}) => {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Table>
      <thead id='header'>
        <tr>
          <th>{titleKey}</th>
          <th>{titleValue}</th>
        </tr>
      </thead>
      <tbody id='body'>
        {rows?.[0]?.rowValue ? (
          rows.map((row, i) => {
            if (row.rowValue)
              return (
                <tr key={i}>
                  <td>{row.rowKey}</td>
                  <td>{row.rowValue}</td>
                </tr>
              );
          })
        ) : (
          <NoData
            hasIcon={false}
            messageComponent={t(LanguageKeys.NoDataMessage)}
            themeLayer='2A'
          />
        )}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  ${layer3_TableStyle}
  direction: ltr;
`;
