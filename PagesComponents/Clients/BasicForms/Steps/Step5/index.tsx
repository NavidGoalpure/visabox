import styled, { css } from "styled-components";
import * as ToggleGroup from "../../../../../Elements/ToggleGroup";
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
import {
  ClientMarital,
  MaritalSituationType,
} from "Interfaces/Database/Client";
import { maritalSituations, maritalStatuses } from "Consts/Client";
import { FiInfo } from "react-icons/fi";
import theme from "styled-theming";
import { Hint_TextStyle } from "Styles/Theme/Hint/style";

const Step5 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient, score } = useContext(FormDataContext);

  return (
    <Container>
      <Title>
        {t(LanguageKeys.maritalStatusSectionTitle)}{" "}
        <StyledTooltipTag
          content={
            <>
              <CalculatorIcon />
            </>
          }
          popupContent={t(LanguageKeys.maritalStatusPopupContent)}
        />
      </Title>
      <ToggleGroupRoot
        type="single"
        value={client?.marital}
        onValueChange={(value) => {
          client &&
            setClient({
              ...client,
              marital: value as ClientMarital,
            });
          console.log("navid score ===", score);
        }}
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
        onValueChange={(value) =>{
          client &&
          setClient({
            ...client,
            marital_situation: value as MaritalSituationType,
          })
        console.log("navid score ===", score);
        }
        }
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
        <HintSection>
          <HintInfoIcon />
          <HintUl>
            <HintLi>{t(LanguageKeys.situation1_FirstLine)}</HintLi>
            <HintLi>{t(LanguageKeys.situation1_SecondLine)}</HintLi>
            <HintLi>{t(LanguageKeys.situation1_ThirdLine)}</HintLi>
            <HintLi>{t(LanguageKeys.situation1_ForthLine)}</HintLi>
          </HintUl>
        </HintSection>
      )}
      {client?.marital_situation === MaritalSituationType.Two && (
        <HintSection>
          <HintInfoIcon />
          <HintUl>
            <HintLi>{t(LanguageKeys.situation2_FirstLine)}</HintLi>
            <HintLi>{t(LanguageKeys.situation2_SecondLine)}</HintLi>
          </HintUl>
        </HintSection>
      )}
      {client?.marital_situation === MaritalSituationType.Three && (
        <HintSection>
          <HintInfoIcon />
          <HintUl>
            <HintLi>{t(LanguageKeys.situation3_FirstLine)}</HintLi>
            <HintLi>{t(LanguageKeys.situation3_SecondLine)}</HintLi>
            <HintLi>{t(LanguageKeys.situation3_ThirdLine)}</HintLi>
          </HintUl>
        </HintSection>
      )}
      {client?.marital_situation === MaritalSituationType.Four && (
        <HintSection>
          <HintInfoIcon />
          <HintUl>
            <HintLi>{t(LanguageKeys.situation4)}</HintLi>
          </HintUl>
        </HintSection>
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
            console.log(
              "navid marital_situation ===",
              client?.marital_situation
            );
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
const HintIconTheme = theme("mode", {
  light: css`
    color: var(--color-secondary2);
  `,
  dark: css`
    color: var(--color-secondary4);
  `,
});
const HintLiTheme = theme("mode", {
  light: css`
    color: var(--color-secondary2);
  `,
  dark: css`
    color: var(--color-secondary3);
  `,
});
const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
  width: 100%;
`;

const HintSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
`;
const HintInfoIcon = styled(FiInfo)`
  ${HintIconTheme};
  width: 2.4rem;
  height: auto;
  flex-shrink: 0;
  margin-top: 0.5rem;
`;
const HintUl = styled.ul`
  list-style: disc;
`;
const HintLi = styled.li`
  ${Hint_TextStyle};
  ${HintLiTheme};
`;