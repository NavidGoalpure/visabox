import { globalComponentStatements, LanguageKeys } from 'Consts/language';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';

import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import { componentTitleStyle } from 'Styles/Theme/Component';
import { MdError } from 'react-icons/md';


export const ComponentError: React.FC = () => {
  const { t } = useStaticTranslation(globalComponentStatements);
    return (
      <Container>
        <ErrorIcon />
        <p>{t(LanguageKeys.SomethingWentWrong)}</p>
      </Container>
    );
};
const ErrorIcon = styled(MdError)`
  color: var(--color-fail1);
  width: 3rem;
  height: 3rem;
  margin-inline-end: 1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    ${componentTitleStyle}
  }
`;
