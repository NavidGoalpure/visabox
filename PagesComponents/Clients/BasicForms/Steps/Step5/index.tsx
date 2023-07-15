import styled from "styled-components";
import * as ToggleGroup from "../../../../../Elements/ToggleGroup";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { WizardContext } from "../../Contexts/Wizard/Context";
import { useContext } from "react";
import {
  ButtonWrapper,
  CalculatorIcon,
  Container,
  HintLi,
  HintUl,
  InformationIcon,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
  StyledTooltipTag,
  Title,
} from "../StyledComponents";
import { FormDataContext } from "../../Contexts/FormDataContext/Context";
import {
  ClientMarital,
  MaritalSituationType,
} from "Interfaces/Database/Client";
import { maritalSituations, maritalStatuses } from "Consts/Client";
import HintComponent from "Components/HintComponent";
import { componentStatements, LanguageKeys } from "./const";

const Step5 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient, score } = useContext(FormDataContext);

  return (
    <Container>
      <Title>
        {t(LanguageKeys.maritalSituationTitle)}{" "}
        <StyledTooltipTag
          content={
            <>
              <CalculatorIcon /> <InformationIcon />
            </>
          }
          popupContent={t(LanguageKeys.maritalSituationPopupContent)}
        />
      </Title>
      <ToggleGroupRoot
        type="single"
        value={client?.marital_situation}
        onValueChange={(value) => {
          client &&
            setClient({
              ...client,
              marital_situation: value as MaritalSituationType,
            });
        }}
      >
        {
          <>
            {maritalSituations.map((maritalSituation, i) => (
              <ToggleGroup.Item
                key={i}
                text={maritalSituation}
                value={maritalSituation.en.toLowerCase()}
              ></ToggleGroup.Item>
            ))}
          </>
        }
      </ToggleGroupRoot>
      {client?.marital_situation === MaritalSituationType.One && (
        <HintComponent>
          <HintUl>
            <HintLi>{t(LanguageKeys.situation1_FirstLine)}</HintLi>
            <HintLi>{t(LanguageKeys.situation1_SecondLine)}</HintLi>
            <HintLi>{t(LanguageKeys.situation1_ThirdLine)}</HintLi>
            <HintLi>{t(LanguageKeys.situation1_ForthLine)}</HintLi>
          </HintUl>
        </HintComponent>
      )}
      {client?.marital_situation === MaritalSituationType.Two && (
        <HintComponent>
          <HintUl>
            <HintLi>{t(LanguageKeys.situation2)}</HintLi>
          </HintUl>
        </HintComponent>
      )}
      {client?.marital_situation === MaritalSituationType.Three && (
        <HintComponent>
          <HintUl>
            <HintLi>{t(LanguageKeys.situation3_FirstLine)}</HintLi>
            <HintLi>{t(LanguageKeys.situation3_SecondLine)}</HintLi>
            <HintLi>{t(LanguageKeys.situation3_ThirdLine)}</HintLi>
          </HintUl>
        </HintComponent>
      )}
      {client?.marital_situation === MaritalSituationType.Four && (
        <HintComponent>
          <HintUl>
            <HintLi>{t(LanguageKeys.situation4)}</HintLi>
          </HintUl>
        </HintComponent>
      )}
      {client?.marital_situation === MaritalSituationType.Five && (
        <HintComponent>
          <HintUl>
            <HintLi>{t(LanguageKeys.situation5)}</HintLi>
          </HintUl>
        </HintComponent>
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
          disabled={!client?.marital_situation || !client?.marital}
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
