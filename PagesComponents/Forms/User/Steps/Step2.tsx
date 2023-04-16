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
import { ages } from "./consts";
import { Input } from "Components/Input";

const Step2 = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { clientData, setClientData } = useContext(FormDataContext);
  const [ageInputValue, setAgeInputValue] = useState<string>(
    clientData?.age || ""
  );

  return (
    <Container>
      {/* <Title>{t(LanguageKeys.AgeSectionTitle)}</Title>
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
      </ToggleGroupRoot> */}
      <Input
        label={t(LanguageKeys.AgeSectionTitle)}
        type={"date"}
        inputName="age"
        value={ageInputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setAgeInputValue(e.target.value);
          console.log("navid age ===", ageInputValue);
        }}
        id={"phone-input"}
        placeholder={t(LanguageKeys.PhoneInputPlaceholder)}
      />
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
              age: ageInputValue,
            });
          }}
          icon={<NextIcon />}
          disabled={!ageInputValue}
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
