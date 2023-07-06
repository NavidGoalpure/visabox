import styled from "styled-components";
import * as ToggleGroup from "../../../../../Elements/ToggleGroup";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { useContext } from "react";
import {
  ButtonWrapper,
  CalculatorIcon,
  Container,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
  StyledTooltipTag,
  Title,
} from "../StyledComponents";
import { ClientCountry, VisaSubclass } from "Interfaces/Database/Client";
import { Countries, VisaSubclasses } from "Consts/Client";
import { FormDataContext } from "../../Contexts/FormDataContext/Context";
import { WizardContext } from "../../Contexts/Wizard/Context";
import { componentStatements, LanguageKeys } from "./const";

const Step3 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient, score } = useContext(FormDataContext);

  return (
    <Container>
      <Title>{t(LanguageKeys.VisaSubclassTitle)}</Title>
      <ToggleGroupRoot
        type="single"
        value={client?.country}
        onValueChange={(value) => {
          client &&
            setClient({
              ...client,
              country: value as ClientCountry,
            });
          console.log("navid client ===", client);
        }}
      >
        {
          <>
            {Countries.map((option, i) => (
              <ToggleGroup.Item
                key={i}
                text={option}
                value={option.en.toLowerCase()}
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
            console.log("navid score ===", score);
          }}
          disabled={!client?.country}
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step3;

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
  width: 100%;
`;
