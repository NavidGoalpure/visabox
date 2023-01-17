import React from 'react';
import styled from 'styled-components/macro';
import { IoIosWarning } from 'react-icons/io';
import {
  componentBodyTheme_NoBorder,
  componentTextStyle,
} from 'Styles/Theme/Component';
import { directionStyles } from 'Styles/Theme';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { fireGtagEvent } from 'Utils/Gtags';
import {
  GtagEvents_Action,
  GtagEvents_FeedbackCategory,
} from 'Utils/Gtags/interface';

interface Props {
  gtagEventLabel: string;
}
export const LanguageHint: React.FC<Props> = ({ gtagEventLabel }) => {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <Row>
        <WarningIcon />
        <Desc>{t(LanguageKeys.Desc)}</Desc>
      </Row>
      <Row2>
        <StyledButton
          onClick={() =>
            fireGtagEvent({
              action: GtagEvents_Action.Feedback,
              category: GtagEvents_FeedbackCategory.TranslateIt,
              label: gtagEventLabel,
            })
          }
        >
          {t(LanguageKeys.TranslateIt)}
        </StyledButton>
        <StyledButton
          onClick={() =>
            fireGtagEvent({
              action: GtagEvents_Action.Feedback,
              category: GtagEvents_FeedbackCategory.DoNotTranslate,
              label: gtagEventLabel,
            })
          }
        >
          {t(LanguageKeys.DontTranslateIt)}
        </StyledButton>
      </Row2>
    </Container>
  );
};
const Container = styled.section`
  ${directionStyles}
  ${componentBodyTheme_NoBorder}
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
const WarningIcon = styled(IoIosWarning)`
  fill: var(--color-warning);
  flex-shrink: 0;
  margin-inline-end: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
`;
const Desc = styled.p`
  ${componentTextStyle}
  margin-bottom: 1rem;
`;
const StyledButton = styled.h3`
  color: var(--color-secondary4);
  cursor: pointer;
  border: 1px solid var(--color-secondary4);
  margin-inline-end: 2rem;
  padding: 0.5rem;
  border-radius: 15px;
  transition: all 0.3s linear;
  &:hover {
    background-color: var(--color-secondary4);
    color: var(--color-gray3);
  }
`;
