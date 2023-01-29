import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Key, Value } from '../StyledComponents';

interface Props {
  address: string;
  email: string;
}
const PopupContent: React.FC<Props> = ({ address, email }) => {
  return (
    <>
      <Column>
        <StyledKey>Email:</StyledKey>
        <Value>{email}</Value>
      </Column>
      <Column>
        <StyledKey>Address:</StyledKey>
        <Value>{address}</Value>
      </Column>
    </>
  );
};

export default PopupContent;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
////////////
export const keyColor = theme('mode', {
  light: css`
    color: var(--color-gray2);
  `,
  dark: css`
    color: var(--color-gray5);
  `,
});
const StyledKey = styled(Key)`
  ${keyColor}
`;
