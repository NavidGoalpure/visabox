import { Input } from "Components/Input";
import { MultiLanguageText } from "Interfaces";
import styled from "styled-components";
import { Layer1_SubtitleStyle } from "Styles/Theme/Layers/layer1/style";
import * as ToggleGroup from "../../../../Elements/ToggleGroup";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { WizardContext } from "../Contexts/Wizard/Context";
import { useContext, useEffect, useState } from "react";
import {
  ButtonWrapper,
  NextButton,
  NextIcon,
  Container,
  PrevButton,
  PrevIcon,
} from "./StyledComponents";
import { works } from "./consts";
import { FormDataContext } from "../Contexts/FormDataContext/Context";
import { WorkExperience } from "Interfaces/Client";

const Step6 = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { clientData, setClientData } = useContext(FormDataContext);
  const [workExperienceValue, setworkExperienceValue] =
    useState<WorkExperience>(clientData?.workExperience);

  return (
    <Container>
      <Title>{t(LanguageKeys.WorkExperienceSectionTitle)}</Title>
      <ToggleGroupRoot
        type="single"
        value={workExperienceValue}
        onValueChange={(value) =>
          setworkExperienceValue(value as WorkExperience)
        }
      >
        {
          <>
            {works.map((work,i) => (
              <ToggleGroup.Item
                key={i}
                text={work}
                value={work.en.replaceAll(" ", "")}
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
            handleNextPress();
            setClientData({
              ...clientData,
              workExperience: workExperienceValue,
            });
          }}
          disabled={!workExperienceValue}
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step6;

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
const Title = styled.h1`
  ${Layer1_SubtitleStyle};
  margin: 0;
  margin-top: 1rem;
`;
