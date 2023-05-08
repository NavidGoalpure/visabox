import { Input } from "Components/Input";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { WizardContext } from "../Contexts/Wizard/Context";
import { useContext } from "react";
import Image from "next/image";
import { NextButton, NextIcon } from "./StyledComponents";
import styled, { css } from "styled-components";
import useTheme from "Hooks/useTheme";
import DarkKangorooLogo from "./Images/DarkKangorooLogo.svg";
import LightKangorooLogo from "./Images/LightKangorooLogo.svg";
import { Headline3Style } from "Styles/Typo";
import { ThemeModes } from "Interfaces";
import theme from "styled-theming";
import { layer2A_SubtitleStyle } from "Styles/Theme/Layers/layer2/style";

const Step0 = () => {
  const { theme } = useTheme();
  const { t } = useStaticTranslation(componentStatements);
  const { step, handleNextPress } = useContext(WizardContext);
  return (
    <Container>
      <LogoContainer>
        <Logo
          width={90}
          height={90}
          src={theme === ThemeModes.DARK ? DarkKangorooLogo : LightKangorooLogo}
          alt={"site-logo"}
        />
      </LogoContainer>
      <Title>{t(LanguageKeys.Step0Title)}</Title>
      <Desc>{t(LanguageKeys.Step0Desc)}</Desc>
      <StartButton
        step={step}
        onClick={() => {
          handleNextPress();
        }}
        icon={<NextIcon />}
      >
        {t(LanguageKeys.Step0Button)}
      </StartButton>
    </Container>
  );
};
export default Step0;
const BackgroundTheme = theme("mode", {
  light: css`
    background: linear-gradient(140.49deg, #f5f8fc 53.63%, #dde2eb 99.96%);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  `,
  dark: css`
    background: linear-gradient(
      140.49deg,
      var(--color-gray6) 53.63%,
      var(--color-gray7) 99.96%
    );
  `,
});
const Container = styled.div`
  ${BackgroundTheme};
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  padding: 1.5rem 2.5rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;
const LogoContainer = styled.div``;
const Logo = styled(Image)``;
const Title = styled.h1`
  ${Headline3Style};
  color: var(--color-primary5);
`;
const Desc = styled.p`
  ${layer2A_SubtitleStyle};
  white-space: pre-line;
`;
const StartButton = styled(NextButton)`
  margin: 0 auto;
`;
