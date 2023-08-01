import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "./const";
import { WizardContext } from "../../Contexts/Wizard/Context";
import { useContext } from "react";
import {
  ButtonWrapper,
  CalculatorIcon,
  Container,
  HintContainer,
  HintUl,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
  StyledTooltipTag,
} from "../StyledComponents";
import { FormDataContext } from "../../Contexts/FormDataContext/Context";
import { Input } from "Components/Input";
import { calculateAge } from "Utils/clients";
import { useRouter } from "next/router";
import { useLocale } from "Hooks/useLocale";

const Step3 = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { client, setClient, score } = useContext(FormDataContext);
  const router = useRouter();
  const { locale } = useLocale();
  var mydate = client?.birthday
    ? new Date(client?.birthday).toISOString().slice(0, 10)
    : client?.age
    ? new Date(client?.age).toISOString().slice(0, 10)
    : "";
  // 2023-01-01 is defensive
  const birthday = new Date(client?.birthday || client?.age || "2023-01-01");
  const clientAge = calculateAge(new Date(birthday));
  return (
    <Container>
      <Input
        label={
          <>
            {t(LanguageKeys.AgeSectionTitle)}
            &nbsp;
            <StyledTooltipTag
              content={
                <>
                  <CalculatorIcon />
                </>
              }
              popupContent={t(LanguageKeys.AgePopupContent)}
            />
          </>
        }
        type={"date"}
        inputName="age"
        value={mydate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          client &&
            setClient({
              ...client,
              birthday: e.target.value?.slice(0, 10),
            });
        }}
        id={"date-input"}
      />
      {clientAge > 44 && (
        <HintContainer>
          <HintUl>
            <li>{t(LanguageKeys.HintText)}</li>
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
            clientAge > 44 ? router.push(`/${locale}/`) : handleNextPress();
          }}
          icon={<NextIcon />}
          disabled={!client?.age && !client?.birthday}
        >
          {clientAge > 44
            ? t(LanguageKeys.BackToHomepage)
            : t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step3;
