import styled from "styled-components";
import * as ToggleGroup from "../../../../../Elements/ToggleGroup";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
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
import { ClientMarital } from "Interfaces/Database/Client";
import { maritalStatuses, YesOrNo } from "Consts/Client";
import { componentStatements, LanguageKeys } from "./const";

const Step5 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient } = useContext(FormDataContext);

  return (
    <Container>
      <Title>{t(LanguageKeys.maritalStatusTitle)}</Title>
      <ToggleGroupRoot
        type="single"
        value={client?.marital}
        onValueChange={(value) =>
          client &&
          setClient({
            ...client,
            marital: value as ClientMarital,
          })
        }
      >
        {
          <>
            {maritalStatuses.map((maritalStatus, i) => (
              <ToggleGroup.Item
                key={i}
                text={maritalStatus}
                value={maritalStatus.en.toLowerCase()}
              ></ToggleGroup.Item>
            ))}
          </>
        }
      </ToggleGroupRoot>
      {client?.marital === ClientMarital.Married && (
        <>
          <StyledTitle>
            {t(LanguageKeys.DoesPartnerHaveAssessmentTitle)}{" "}
            <StyledTooltipTag
              content={
                <>
                  <CalculatorIcon /> <InformationIcon />
                </>
              }
              popupContent={t(LanguageKeys.DoesPartnerHaveAssessmentPopup)}
            />
          </StyledTitle>
          <ToggleGroupRoot
            type="single"
            value={
              client?.does_partner_have_assessment !== null
                ? client?.does_partner_have_assessment === true
                  ? "yes"
                  : "no"
                : undefined
            }
            onValueChange={(value: string) => {
              client &&
                setClient({
                  ...client,
                  does_partner_have_assessment: value === "yes" ? true : false,
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
        </>
      )}
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
            !client?.marital ||
            client?.does_partner_have_assessment === null ||
            client?.is_partner_competent_english_speaker === null
          }
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step5;
const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
  width: 100%;
`;
const StyledTitle = styled(Title)`
  margin: 0;
`;
