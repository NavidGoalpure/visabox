import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import {
  componentTextStyle,
  componentWarningTheme,
} from 'Styles/Theme/Component';
import { directionStyles } from 'Styles/Theme';
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
      <Row2>
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
      </Row2>
    </Container>
  );
};
const Container = styled.section`
  ${directionStyles}
  ${componentWarningTheme}
  border-radius: 15px;
  width: 100%;
  padding: 1rem;
  margin-bottom: 4rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Row2 = styled(Row)`
  justify-content: center;
`;

const Desc = styled.p`
  ${componentTextStyle}
  margin-bottom: 1rem;
  white-space: pre-line;
`;
const StyledButton = styled(SecondaryButton)`
  margin-inline-end: 2rem;
`;
