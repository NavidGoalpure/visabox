import styled from 'styled-components';
import { Layer1_SubtitleStyle } from 'Styles/Theme/Layers/layer1/style';
import * as ToggleGroup from '../../../../Elements/ToggleGroup';
import { Input } from 'Components/Input';
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
import { educations } from './consts';
import { ClientDegree } from 'Interfaces/Client';

const Step4 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { clientData, setClientData } = useContext(FormDataContext);

  return (
    <Container>
      <StyledInput
        required
        label={t(LanguageKeys.FieldOfStudyInputLabel)}
        inputName="field-of-study"
        placeholder={t(LanguageKeys.FieldOfStudyInputPlaceholder)}
        value={clientData?.fieldOfStudy}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          clientData &&
          setClientData({
            ...clientData,
            fieldOfStudy: e.target.value,
          })
        }
      />
      <Title>{t(LanguageKeys.DegreeOfEducationSectionTitle)}</Title>
      <ToggleGroupRoot
        type="single"
        value={clientData?.degree}
        onValueChange={(value: ClientDegree) =>
          clientData &&
          setClientData({
            ...clientData,
            degree: value,
          })
        }
      >
        {
          <>
            {educations.map((education, i) => (
              <ToggleGroup.Item
                key={i}
                text={education}
                value={education.en.toLowerCase()}
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
          disabled={!clientData?.fieldOfStudy || !clientData?.degree}
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step4;

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
const Title = styled.h1`
  ${Layer1_SubtitleStyle};
  margin: 0;
`;
const StyledInput = styled(Input)`
  margin-top: 1rem;
`;
