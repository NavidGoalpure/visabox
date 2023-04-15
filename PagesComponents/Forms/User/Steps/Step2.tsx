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
  Container,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
} from "./StyledComponents";
import { FormDataContext } from "../Contexts/FormDataContext/Context";
import { ClientAge } from "../Contexts/FormDataContext/interface";
import { ages } from "./consts";

const Step2 = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { clientData, setClientData } = useContext(FormDataContext);
  const [ageValue, setAgeValue] = useState<ClientAge>(clientData?.age);

  return (
    <Container>
      <Title>{t(LanguageKeys.AgeSectionTitle)}</Title>
      <ToggleGroupRoot
        value={ageValue}
        type="single"
        onValueChange={(value) => setAgeValue(value as ClientAge)}
      >
        {
          <>
            {ages.map((age, i) => (
              <ToggleGroup.Item
                text={age}
                key={i}
                value={age.en.replaceAll(" ", "")}
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
              age: ageValue,
            });
          }}
          icon={<NextIcon />}
          disabled={!ageValue}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step2;

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
const Title = styled.h1`
  ${Layer1_SubtitleStyle};
  margin: 0;
  margin-top: 1rem;
`;
