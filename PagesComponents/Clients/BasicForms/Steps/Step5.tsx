import styled from 'styled-components';
import { Input } from 'Components/Input';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from '../const';
import { WizardContext } from '../Contexts/Wizard/Context';
import { useContext } from 'react';
import {
  ButtonWrapper,
  NextButton,
  NextIcon,
  Container,
  PrevButton,
  PrevIcon,
} from './StyledComponents';
import { FormDataContext } from '../Contexts/FormDataContext/Context';

const Step5 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient } = useContext(FormDataContext);

  return (
    <Container>
      <StyledInput
        required
        label={t(LanguageKeys.CurrentJobInputLabel)}
        inputName='current-job'
        placeholder={t(LanguageKeys.CurrentJobInputPlaceholder)}
        value={client?.current_job}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          client &&
          setClient({
            ...client,
            current_job: e.target.value,
          })
        }
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
          disabled={!client?.current_job}
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step5;

const StyledInput = styled(Input)`
  margin-top: 1rem;
`;