import styled from "styled-components";
import * as ToggleGroup from "../../../../../Elements/ToggleGroup";
import { Input } from "Components/Input";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "./const";
import { WizardContext } from "../../Contexts/Wizard/Context";
import { useContext } from "react";
import {
  ButtonWrapper,
  CalculatorIcon,
  Container,
  InformationIcon,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
  StyledTooltipTag,
  Title,
} from "../StyledComponents";
import { FormDataContext } from "../../Contexts/FormDataContext/Context";
import { YesOrNo } from "Consts/Client";

const Step10 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient, score } = useContext(FormDataContext);

  return (
    <Container>
      <StyledTitle>
        {t(LanguageKeys.ProfessionalYearInAustralia)}{" "}
        <StyledTooltipTag
          content={
            <>
              <CalculatorIcon /> <InformationIcon />
            </>
          }
          popupContent={t(LanguageKeys.ProfessionalYearInAustraliaPopupContent)}
        />
      </StyledTitle>
      <ToggleGroupRoot
        type="single"
        value={
          client?.professional_year_in_australia !== null
            ? client?.professional_year_in_australia === true
              ? "yes"
              : "no"
            : undefined
        }
        onValueChange={(value: string) => {
          client &&
            setClient({
              ...client,
              professional_year_in_australia: value === "yes" ? true : false,
            });
        }}
      >
        {
          <>
            {YesOrNo.map((option, i) => (
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
          }}
          disabled={
            client?.professional_year_in_australia === null
          }
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step10;

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
const StyledTitle = styled(Title)`
  margin: 0;
`;
const StyledInput = styled(Input)`
  margin-top: 1rem;
`;
