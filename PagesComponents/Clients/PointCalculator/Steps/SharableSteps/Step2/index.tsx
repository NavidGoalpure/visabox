import { Input } from 'Components/Input';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { useContext } from 'react';
import {
  ButtonWrapper,
  Container,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
} from '../../StyledComponents';
import { FormDataContext } from '../../../Contexts/FormDataContext/Context';
import { WizardContext } from '../../../Contexts/Wizard/Context';

const Step2 = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { client, setClient } = useContext(FormDataContext);

  return (
    <Container>
      {/* //////////name-input//////////// */}
      <Input
        required
        label={t(LanguageKeys.NameInputLabel)}
        inputName='name'
        placeholder={t(LanguageKeys.NameInputPlaceholder)}
        value={client?.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          client &&
            setClient({
              ...client,
              name: e.target.value,
            });
        }}
      />
      {/* //////////last-name-input//////////// */}
      <Input
        required
        label={t(LanguageKeys.LastNameInputLabel)}
        inputName='lname'
        value={client?.lastname}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          client &&
          setClient({
            ...client,
            lastname: e.target.value,
          })
        }
        placeholder={t(LanguageKeys.LastNameInputPlaceholder)}
      />
      {/* //////////phone-number-input//////////// */}
      <Input
        label={t(LanguageKeys.PhoneInputLabel)}
        value={client?.phone}
        isNumberOnly={true}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          client &&
            setClient({
              ...client,
              // replace will make it so the client?.phone only gets numbers as value
              phone: e.target.value.replace(/[^\d]/g, ''),
            });
        }}
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
          disabled={!client?.name || !client?.lastname || !client?.phone}
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step2;
