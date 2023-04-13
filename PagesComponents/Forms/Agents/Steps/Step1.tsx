import { Input } from "Components/Input";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { FormDataContext } from "../Contexts/FormDataContext/Context";
import { WizardContext } from "../Contexts/Wizard/Context";
import { useContext, useEffect, useRef, useState } from "react";
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
  const [nameInputValue, setNameInputValue] = useState<string>(
    clientData?.name || ""
  );
  const [lastNameInputValue, setLastNameInputValue] = useState<string>(
    clientData?.lastName || ""
  );
  const [phoneNumberInputValue, setPhoneNumberInputValue] = useState<string>(
    clientData?.phoneNumber ||""
  );

  return (
    <Container>
      {/* //////////name-input//////////// */}
      <Input
        required
        label={t(LanguageKeys.NameInputLabel)}
        inputName="name"
        placeholder={t(LanguageKeys.NameInputPlaceholder)}
        value={nameInputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNameInputValue(e.target.value)
        }
      />
      {/* //////////last-name-input//////////// */}
      <Input
        required
        label={t(LanguageKeys.LastNameInputLabel)}
        inputName="lname"
        value={lastNameInputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLastNameInputValue(e.target.value)
        }
        placeholder={t(LanguageKeys.LastNameInputPlaceholder)}
      />
      {/* //////////phone-number-input//////////// */}
      <Input
        inputMode={"numeric"}
        label={t(LanguageKeys.PhoneInputLabel)}
        value={phoneNumberInputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPhoneNumberInputValue(e.target.value.replace(/[^\d]/g, ""))
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
            setClientData({
              ...clientData,
              name: nameInputValue,
              lastName: lastNameInputValue,
              phoneNumber: phoneNumberInputValue,
            });
          }}
          disabled={
            !nameInputValue || !lastNameInputValue || !phoneNumberInputValue
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
