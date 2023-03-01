import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { directionStyles, warningTheme } from 'Styles/Theme';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { SecondaryButton } from 'Elements/Button/Secondary';
import { setLocalStorage } from 'Utils';
import { LocalStorageKeys } from 'Interfaces';
import { deviceMin } from 'Consts/device';
import { layer2A_TextStyle } from 'Styles/Theme/Layers/layer2/style';

export const LanguageHint: React.FC = () => {
  const { t } = useStaticTranslation(componentStatements);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  //
  //
  if (isSelected) return null;
  return (
    <Container id='feedback-area_shown'>
      <Desc>{t(LanguageKeys.Desc).split('/n')?.[0]}</Desc>
      <Desc>{t(LanguageKeys.Desc).split('/n')?.[1]}</Desc>
      <Row>
        <StyledButton
          id='feedback-button_transleteit'
          onClick={() => {
            setLocalStorage({
              key: LocalStorageKeys.HasBeenAnswered,
              value: 'OccupationDetailPage',
            });
            setIsSelected(true);
          }}
        >
          {t(LanguageKeys.TranslateIt)}
        </StyledButton>
        <StyledButton
          id='feedback-button_dont-translete'
          onClick={() => {
            setLocalStorage({
              key: LocalStorageKeys.HasBeenAnswered,
              value: 'OccupationDetailPage',
            });
            setIsSelected(true);
          }}
        >
          {t(LanguageKeys.DontTranslateIt)}
        </StyledButton>
      </Row>
    </Container>
  );
};
const Container = styled.section`
  ${directionStyles}
  ${warningTheme}
  border-radius: 15px;
  width: 100%;
  padding: 1rem 0.5rem;
  margin-bottom: 4rem;
  @media ${deviceMin.tabletS} {
    padding: 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Desc = styled.p`
  ${layer2A_TextStyle}
  margin-bottom: 1rem;
  white-space: pre-line;
`;
const StyledButton = styled(SecondaryButton)`
  @media ${deviceMin.tabletS} {
    margin-inline-end: 2rem;
  }
`;
