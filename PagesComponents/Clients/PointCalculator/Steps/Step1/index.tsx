import styled from 'styled-components';
import * as ToggleGroup from '../../../../../Elements/ToggleGroup';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useContext } from 'react';
import {
  ButtonWrapper,
  Container,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
  Title,
} from '../StyledComponents';
import { Countries } from 'Consts/Client';
import { FormDataContext } from '../../Contexts/FormDataContext/Context';
import { WizardContext } from '../../Contexts/Wizard/Context';
import { componentStatements, LanguageKeys } from './const';
import { SupportedCountry } from 'Interfaces/Database';

const Step1 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient } = useContext(FormDataContext);

  return (
    <Container>
      <Title>{t(LanguageKeys.CountryTitle)}</Title>
      <ToggleGroupRoot
        type='single'
        value={client?.country}
        onValueChange={(value) => {
          client &&
            setClient({
              ...client,
              country: value as SupportedCountry,
            });
        }}
      >
        {
          <>
            {Countries?.map((option, i) => (
              <ToggleGroup.Item
                key={i}
                text={option}
                value={option.en.toLowerCase()}
              ></ToggleGroup.Item>
            ))}
          </>
        }
      </ToggleGroupRoot>
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
          disabled={!client?.country}
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step1;

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
  width: 100%;
`;
