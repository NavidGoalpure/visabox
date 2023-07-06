import styled from 'styled-components';
import * as ToggleGroup from '../../../../../Elements/ToggleGroup';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { useContext } from 'react';
import {
  ButtonWrapper,
  CalculatorIcon,
  Container,
  InformationIcon,
  NextButton,
  NextIcon,
  PrevButton,
  PrevIcon,
  StyledTooltipTag,
  Title,
} from '../StyledComponents';
import { australianWorks } from 'Consts/Client';
import { AustralianWorkExperience } from 'Interfaces/Database/Client';
import { FormDataContext } from '../../Contexts/FormDataContext/Context';
import { WizardContext } from '../../Contexts/Wizard/Context';

const Step9 = () => {
  const { step, handleBackPress, handleNextPress } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const { client, setClient,score } = useContext(FormDataContext);

  return (
    <Container>
      <Title>
        {t(LanguageKeys.AustralianWorkExperienceSectionTitle)}{" "}
        <StyledTooltipTag
          content={
            <>
              <CalculatorIcon />
              <InformationIcon />
            </>
          }
          popupContent={t(LanguageKeys.AstralianPopupContent)}
        />
      </Title>
      <ToggleGroupRoot
        type="single"
        value={client?.australian_work_experience}
        onValueChange={(value) =>{
          client &&
          setClient({
            ...client,
            australian_work_experience: value as AustralianWorkExperience,
          })
          console.log("navid score ===", score);}
        }
      >
        {
          <>
            {australianWorks.map((australianWork, i) => (
              <ToggleGroup.Item
                key={i}
                text={australianWork}
                value={australianWork.en.toLowerCase()}
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
          icon={<NextIcon />}
          onClick={() => {
            handleNextPress();
          }}
          disabled={!client?.australian_work_experience}
        >
          {t(LanguageKeys.NextButtonTitle)}
        </NextButton>
      </ButtonWrapper>
    </Container>
  );
};
export default Step9;
const ToggleGroupRoot = styled(ToggleGroup.Root)`
  gap: 1rem;
`;
