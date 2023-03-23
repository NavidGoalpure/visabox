import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Key, Value } from '../StyledComponents';
import { componentStatements, LanguageKeys } from './const';

interface Props {
  address: string;
  email: string;
}
const PopupContent: React.FC<Props> = ({ address, email }) => {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <>
      <Column>
        <StyledKey>{t(LanguageKeys.Email)}</StyledKey>
        <Value>{email}</Value>
      </Column>
      <Column>
        <StyledKey>{t(LanguageKeys.Address)}</StyledKey>
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
