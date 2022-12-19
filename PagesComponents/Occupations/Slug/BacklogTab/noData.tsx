import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import React from 'react';
import { HiXMark } from 'react-icons/hi2';
import styled from 'styled-components/macro';
import { directionStyles } from 'Styles/Theme';
import { componentBorderColor, componentTheme } from 'Styles/Theme/Component';
import { componentStatements, LanguageKeys } from './const';

const NoData = () => {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <Container>
      <XLogo />
      <p>{t(LanguageKeys.NoData)}</p>
    </Container>
  );
};

export default NoData;

const Container = styled.div`
  // ${directionStyles}
  // ${componentBorderColor}
  ${componentTheme}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  color: var(--color-fail2);
  text-align: center;
`;
const XLogo = styled(HiXMark)`
    background: var(--color-fail1);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    color: var(--color-fail3);
    padding:0.4rem;
    margin-inline-end: 0.5rem;
}
`;
