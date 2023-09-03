import { globalComponentStatements, LanguageKeys } from 'Consts/language';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';

import React from 'react';
import styled from 'styled-components';

import { MdError } from 'react-icons/md';
import {
  layer2A_TitleStyle,
  layer2A_SubtitleStyle,
} from 'Styles/Theme/Layers/layer2/style';

interface Props {
  errorTitle?: string;
  errorSubTitle?: string;
}

export const ComponentError: React.FC<Props> = ({
  errorTitle,
  errorSubTitle,
}) => {
  const { t } = useStaticTranslation(globalComponentStatements);

  return (
    <Container>
      <ErrorIcon />
      <h3>{errorTitle || t(LanguageKeys.WentWrongTitle)}</h3>
      <p>{errorSubTitle || t(LanguageKeys.WentWrongSubtitle)}</p>
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
  text-align: center;

  h3 {
    ${layer2A_TitleStyle}
  }
  p {
    ${layer2A_SubtitleStyle}
  }
`;
