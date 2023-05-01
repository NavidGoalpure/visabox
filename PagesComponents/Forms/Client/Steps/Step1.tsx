import { Input } from "Components/Input";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { FormDataContext } from "../Contexts/FormDataContext/Context";
import { WizardContext } from "../Contexts/Wizard/Context";
import { useContext} from "react";
import {
  ButtonWrapper,
  Container,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
} from "./StyledComponents";

const Step1 = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { clientData, setClientData } = useContext(FormDataContext);
  return (
    <Container>
      {/* //////////name-input//////////// */}
      <Input
        required
        label={t(LanguageKeys.NameInputLabel)}
        inputName="name"
        placeholder={t(LanguageKeys.NameInputPlaceholder)}
        value={clientData?.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          clientData &&
          setClientData({
            ...clientData,
            name: e.target.value,
          })
          
        }
/>
      {/* //////////last-name-input//////////// */}
      <Input
        required
        label={t(LanguageKeys.LastNameInputLabel)}
        inputName="lname"
        value={clientData?.lastName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          clientData &&
          setClientData({
            ...clientData,
            lastName: e.target.value,
          })
        }
        placeholder={t(LanguageKeys.LastNameInputPlaceholder)}
      />
      {/* //////////phone-number-input//////////// */}
      <Input
        inputMode={"numeric"}
        label={t(LanguageKeys.PhoneInputLabel)}
        value={clientData?.phoneNumber}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          clientData &&
          setClientData({
            ...clientData,
            phoneNumber: e.target.value.replace(/[^\d]/g, ""),
          })
        }
        inputName="phoneNumber"
        isNumberOnly={true}
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
          }}
          disabled={
            (!clientData?.name ||
              !clientData?.lastName ||
              !clientData?.phoneNumber)
          }
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step1;
