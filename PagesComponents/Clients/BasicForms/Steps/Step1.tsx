import { Input } from 'Components/Input';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from '../const';
import { FormDataContext } from '../Contexts/FormDataContext/Context';
import { WizardContext } from '../Contexts/Wizard/Context';
import { useContext } from 'react';
import {
  ButtonWrapper,
  Container,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
} from './StyledComponents';

const Step1 = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { Client, setClient } = useContext(FormDataContext);
  console.log('navid Client=', Client);

  return (
    <Container>
      {/* //////////name-input//////////// */}
      <Input
        required
        label={t(LanguageKeys.NameInputLabel)}
        inputName='name'
        placeholder={t(LanguageKeys.NameInputPlaceholder)}
        value={Client?.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          Client &&
            setClient({
              ...Client,
              name: e.target.value,
            });
        }}
      />
      {/* //////////last-name-input//////////// */}
      <Input
        required
        label={t(LanguageKeys.LastNameInputLabel)}
        inputName='lname'
        value={Client?.lastname}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          Client &&
          setClient({
            ...Client,
            lastname: e.target.value,
          })
        }
        placeholder={t(LanguageKeys.LastNameInputPlaceholder)}
      />
      {/* //////////phone-number-input//////////// */}
      <Input
        label={t(LanguageKeys.PhoneInputLabel)}
        value={Client?.phone}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          Client &&
          setClient({
            ...Client,
            phone: e.target.value,
          })
        }
        inputName='phoneNumber'
        id={'phone-input'}
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
          disabled={!Client?.name || !Client?.lastname || !Client?.phone}
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step1;
