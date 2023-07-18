import styled from "styled-components";
import * as ToggleGroup from "../../../../../Elements/ToggleGroup";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { WizardContext } from "../../Contexts/Wizard/Context";
import { useContext } from "react";
import {
  ButtonWrapper,
  CalculatorIcon,
  Container,
  HintContainer,
  HintUl,
  InfoHintIcon,
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
  MaritalSituationType,
} from "Interfaces/Database/Client";
import { maritalSituations, maritalStatuses } from "Consts/Client";
import { componentStatements, LanguageKeys } from "./const";

const Step5 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient } = useContext(FormDataContext);

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
        <HintContainer>
          <InfoHintIcon />
          <HintUl>
            <li>{t(LanguageKeys.situation1)}</li>
          </HintUl>
        </HintContainer>
      )}
      {client?.marital_situation === MaritalSituationType.Two && (
        <HintContainer>
          <InfoHintIcon />
          <HintUl>
            <li>{t(LanguageKeys.situation2_FirstLine)}</li>
            <li>{t(LanguageKeys.situation2_SecondLine)}</li>
            <li>{t(LanguageKeys.situation2_ThirdLine)}</li>
            <li>{t(LanguageKeys.situation2_ForthLine)}</li>
          </HintUl>
        </HintContainer>
      )}
      {client?.marital_situation === MaritalSituationType.Three && (
        <HintContainer>
          <InfoHintIcon />
          <HintUl>
            <li>{t(LanguageKeys.situation3_FirstLine)}</li>
            <li>{t(LanguageKeys.situation3_SecondLine)}</li>
            <li>{t(LanguageKeys.situation3_ThirdLine)}</li>
          </HintUl>
        </HintContainer>
      )}
      {client?.marital_situation === MaritalSituationType.Four && (
        <HintContainer>
          <InfoHintIcon />
          <HintUl>
            <li>{t(LanguageKeys.situation4)}</li>
          </HintUl>
        </HintContainer>
      )}
      {client?.marital_situation === MaritalSituationType.Five && (
        <HintContainer>
          <InfoHintIcon />
          <HintUl>
            <li>{t(LanguageKeys.situation5)}</li>
          </HintUl>
        </HintContainer>
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
