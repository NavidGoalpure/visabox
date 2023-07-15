import styled from "styled-components";
import * as ToggleGroup from "../../../../../Elements/ToggleGroup";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "./const";
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
import { VisaSubclass } from "Interfaces/Database/Client";
import { VisaSubclasses } from "Consts/Client";
import { FormDataContext } from "../../Contexts/FormDataContext/Context";
import { WizardContext } from "../../Contexts/Wizard/Context";

const Step3 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient, score } = useContext(FormDataContext);

  return (
    <Container>
      <Title>
        {t(LanguageKeys.VisaSubclassTitle)}
        <StyledTooltipTag
          content={
            <>
              <CalculatorIcon />
            </>
          }
          popupContent={t(LanguageKeys.VisaSubclassPopupContent)}
        />
      </Title>
      <ToggleGroupRoot
        type="single"
        value={client?.visa_subclass}
        onValueChange={(value) => {
          client &&
            setClient({
              ...client,
              visa_subclass: value as VisaSubclass,
            });
        }}
      >
        {
          <>
            {VisaSubclasses.map((VisaSubclass, i) => (
              <ToggleGroup.Item
                key={i}
                text={VisaSubclass}
                value={VisaSubclass.en.toLowerCase()}
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
          }}
          disabled={!client?.visa_subclass}
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
