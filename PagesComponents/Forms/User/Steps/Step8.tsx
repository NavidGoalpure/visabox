import styled from "styled-components";
import { Layer1_SubtitleStyle } from "Styles/Theme/Layers/layer1/style";
import * as ToggleGroup from "../../../../Elements/ToggleGroup";
import { MultiLanguageText } from "Interfaces";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { WizardContext } from "../Contexts/Wizard/Context";
import { useContext, useEffect, useState } from "react";
import {
  ButtonWrapper,
  Container,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
} from "./StyledComponents";
import { EnglishSkillLevel } from "../Contexts/FormDataContext/interface";
import { FormDataContext } from "../Contexts/FormDataContext/Context";
import { englishLevels } from "./consts";
const Step8 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { clientData, setClientData } = useContext(FormDataContext);
  const [englishSkillLevelValue, setEnglishSkillLevelValue] =
    useState<EnglishSkillLevel>(clientData?.englishSkillLevel);

  return (
    <Container>
      <Title>{t(LanguageKeys.EnglishSkillLevelSectionTitle)}</Title>
      <ToggleGroupRoot
        type="single"
        value={englishSkillLevelValue}
        onValueChange={(value) =>
          setEnglishSkillLevelValue(value as EnglishSkillLevel)
        }
      >
        {
          <>
            {englishLevels.map((englishLevel, i) => (
              <ToggleGroup.Item
                key={i}
                text={englishLevel}
                value={englishLevel.en.replaceAll(" ", "")}
              ></ToggleGroup.Item>
            ))}
          </>
        }
      </ToggleGroupRoot>
      <ButtonWrapper>
        <PrevButton step={step} onClick={() => step > 0 && handleBackPress()}>
          <PrevIcon />
          {t(LanguageKeys.PrevButtonTitle)}
        </PrevButton>
        <NextButton
          step={step}
          onClick={() => {
            setClientData({
              ...clientData,
              englishSkillLevel: englishSkillLevelValue,
            });
          }}
          disabled={!englishSkillLevelValue}
          icon={<NextIcon />}
        >
          {t(LanguageKeys.ConfirmButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step8;
const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
const Title = styled.h1`
  ${Layer1_SubtitleStyle};
  margin: 0;
  margin-top: 1rem;
`;
