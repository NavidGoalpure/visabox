import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { setLocalStorage } from 'Utils';
import { LocalStorageKeys } from 'Interfaces';
import theme from 'styled-theming';
import { Headline4Style, Headline6Style } from 'Styles/Typo';
import { PrimaryButton } from 'Elements/Button/Primary';

export const LanguageHint: React.FC = () => {
  const { t } = useStaticTranslation(componentStatements);
  const [isSelected, setIsSelected] = useState<boolean>(false);
  //
  //
  if (isSelected) return null;
  return (
    <Container id="feedback-area_shown">
      <Title>توجه</Title>
      <Desc>
        این صفحه حاوی عباراتی است که دارای بار معنای دقیق در زبان انگلیسی هستند
        و ممکن است در اثر ترجمه،‌ کاربر را دچار اشتباه کنند. به همین دلیل این
        عبارات ترجمه نشده اند و با ادبیات دقیق اداره مهاجرت استرالیا -به زبان
        انگلیسی-عینا نشان داده می‌شوند. به هرحال با استفاده از دکمه های زیر،
        می‌توانید نظر خود را در این باره به ما بگویید تا در ورژن های بعدی لحاظ
        شود.
      </Desc>
      <ButtonContainer>
        <StyledButton
          id="feedback-button_transleteit"
          onClick={() => {
            setLocalStorage({
              key: LocalStorageKeys.HasBeenAnswered,
              value: "OccupationDetailPage",
            });
            setIsSelected(true);
          }}
        >
          همه بخش ها به انگیلیسی ترجمه شود
        </StyledButton>
        <StyledButton
          id="feedback-button_dont-translete"
          onClick={() => {
            setLocalStorage({
              key: LocalStorageKeys.HasBeenAnswered,
              value: "OccupationDetailPage",
            });
            setIsSelected(true);
          }}
        >
          همه بخش ها به فارسی ترجمه شود
        </StyledButton>
      </ButtonContainer>
    </Container>
  );
};
export const ContainerTheme = theme("mode", {
  light: css`
    background: var(--color-gray6);
  `,
  dark: css`
    background: var(--color-gray2);
  `,
});
const Container = styled.div`
  ${ContainerTheme};
  padding: 2rem 2rem 2.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Title = styled.h3`
  ${Headline4Style};
  color: white;
`;
const Desc = styled.p`
  ${Headline6Style};
  text-align: start;
  color: white;
  margin-bottom: 0.5rem;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const StyledButton = styled(PrimaryButton)`
  background: var(--color-secondary4);
  color: var(--color-gray2);
  &:hover {
    background: var(--color-secondary2);
    color: white;
    transition: all 0.4s ease 0s;
  }
`;
