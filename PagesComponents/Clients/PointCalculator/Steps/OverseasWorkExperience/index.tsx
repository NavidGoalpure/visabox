import styled from 'styled-components';
import * as ToggleGroup from '../../../../../Elements/ToggleGroup';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { useContext } from 'react';
import {
  ButtonWrapper,
  NextButton,
  NextIcon,
  Container,
  PrevButton,
  PrevIcon,
  Title,
  CalculatorIcon,
  StyledTooltipTag,
  InformationIcon,
} from '../StyledComponents';
import { works } from 'Consts/Client';
import { WorkExperience } from 'Interfaces/Database/Client';
import { FormDataContext } from '../../Contexts/FormDataContext/Context';
import { WizardContext } from '../../../../../Components/Wizard/Context';

const OverseasWorkExperienceStep = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { client, setClient, score } = useContext(FormDataContext);

  return (
    <Container>
      <Title>
        {t(LanguageKeys.WorkExperienceSectionTitle)}{' '}
        <StyledTooltipTag
          content={
            <>
              <CalculatorIcon />
              <InformationIcon />
            </>
          }
          popupContent={t(LanguageKeys.OverseasPopupContent)}
        />
      </Title>
      <ToggleGroupRoot
        type='single'
        value={client?.work_experience}
        onValueChange={(value) => {
          client &&
            setClient({
              ...client,
              work_experience: value as WorkExperience,
            });
        }}
      >
        {
          <>
            {works.map((work, i) => (
              <ToggleGroup.Item
                key={i}
                text={work}
                value={work.en.toLowerCase()}
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
          disabled={!client?.work_experience}
          icon={<NextIcon />}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default OverseasWorkExperienceStep;

const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
