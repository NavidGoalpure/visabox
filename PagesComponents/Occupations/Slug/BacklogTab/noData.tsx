import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import React from 'react';
import styled from 'styled-components/macro';
import { componentStatements, LanguageKeys } from './const';

const NoData = () => {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <Container>
      <p>{t(LanguageKeys.NoData)}</p>;
    </Container>
  );
};

export default NoData;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
