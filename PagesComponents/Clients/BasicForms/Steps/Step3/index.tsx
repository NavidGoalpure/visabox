import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "./const";
import { WizardContext } from "../../Contexts/Wizard/Context";
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
} from "../StyledComponents";
import { FormDataContext } from "../../Contexts/FormDataContext/Context";
import { Input } from "Components/Input";

const Step3 = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { client, setClient,score } = useContext(FormDataContext);
  var mydate = client?.age
    ? new Date(client?.age).toISOString().slice(0, 10)
    : "";
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
              popupContent={"red blue purple but not black navid"}
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
              age: e.target.value?.slice(0, 10),
            });
            console.log("navid score ===", score);
        }}
        id={"date-input"}
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
          }}
          icon={<NextIcon />}
          disabled={!client?.age}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step3;
