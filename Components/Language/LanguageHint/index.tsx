import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { directionStyles, warningTheme } from 'Styles/Theme';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { fireGtagEvent } from 'Utils/Gtags';
import {
  GtagEvents_Action,
  GtagEvents_FeedbackCategory,
} from 'Utils/Gtags/interface';
import { SecondaryButton } from 'Elements/Button/Secondary';
import { setLocalStorage } from 'Utils';
import { LocalStorageKeys } from 'Interfaces';
import { deviceMin } from 'Consts/device';
import { layer2A_TextStyle } from 'Styles/Theme/Layers/layer2/style';

interface Props {
  gtagEventLabel: string;
}
export const LanguageHint: React.FC<Props> = ({ gtagEventLabel }) => {
  const { t } = useStaticTranslation(componentStatements);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  //
  useEffect(() => {
    fireGtagEvent({
      action: GtagEvents_Action.Feedback,
      category: GtagEvents_FeedbackCategory.Shown,
      label: gtagEventLabel,
    });
  }, []);
  //
  if (isSelected) return null;
  return (
    <Container>
      <Desc>{t(LanguageKeys.Desc).split('/n')?.[0]}</Desc>
      <Desc>{t(LanguageKeys.Desc).split('/n')?.[1]}</Desc>
      <Row>
        <StyledButton
          onClick={() => {
            fireGtagEvent({
              action: GtagEvents_Action.Feedback,
              category: GtagEvents_FeedbackCategory.TranslateIt,
              label: gtagEventLabel,
            });
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
          onClick={() => {
            fireGtagEvent({
              action: GtagEvents_Action.Feedback,
              category: GtagEvents_FeedbackCategory.DoNotTranslate,
              label: gtagEventLabel,
            });
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
