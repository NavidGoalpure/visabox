import { MultiLanguageText } from 'Interfaces/Database';
import styled from 'styled-components';
import { Layer1_SubtitleStyle } from 'Styles/Theme/Layers/layer1/style';
import * as ToggleGroup from '../../../../Elements/ToggleGroup';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from '../const';
import { WizardContext } from '../Contexts/Wizard/Context';
import { useContext, useEffect, useState } from 'react';
import {
  ButtonWrapper,
  Container,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
} from './StyledComponents';
import { FormDataContext } from '../Contexts/FormDataContext/Context';
import { Input } from 'Components/Input';

const Step2 = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { client, setClient } = useContext(FormDataContext);
  var mydate = client?.age
    ? new Date(client?.age).toISOString().slice(0, 10)
    : '';
  return (
    <Container>
      <Input
        label={t(LanguageKeys.AgeSectionTitle)}
        type={'date'}
        inputName='age'
        value={mydate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          client &&
            setClient({
              ...client,
              age: e.target.value,
            });
        }}
        id={'date-input'}
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
          icon={<NextIcon />}
          disabled={!client?.age}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step2;

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
const Title = styled.h1`
  ${Layer1_SubtitleStyle};
  margin: 0;
  margin-top: 1rem;
`;
