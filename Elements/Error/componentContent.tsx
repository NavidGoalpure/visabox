import { globalComponentStatements, LanguageKeys } from 'Consts/language';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';

import React, { ReactElement } from 'react';
import styled from 'styled-components/macro';
import {
  componentSubtitleStyle,
  componentTitleStyle,
} from 'Styles/Theme/Component';
import { MdError } from 'react-icons/md';

export const ComponentError: React.FC = () => {
  const { t } = useStaticTranslation(globalComponentStatements);
  return (
    <Container>
      <ErrorIcon />
      <h3>{t(LanguageKeys.WentWrongTitle)}</h3>
      <p>{t(LanguageKeys.WentWrongSubtitle)}</p>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    ${componentTitleStyle}
  }
  p {
    ${componentSubtitleStyle}
  }
`;
