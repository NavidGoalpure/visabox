import { useContext } from 'react';
import styled from 'styled-components';
import BirthDate from './CalculatorsSteps/BirthDate';
import MarriageStatus from './CalculatorsSteps/MarriageStatus';
import Education from './CalculatorsSteps/Education';
import OverseasWorkExperience from './CalculatorsSteps/OverseasWorkExperience';
import AustralianWorkExperience from './CalculatorsSteps/AustralianWorkExperience';
import English from './CalculatorsSteps/English';
import ProfessionalYearInAustralia from './CalculatorsSteps/ProfessionalYearInAustralia';
import FinalScore from './CalculatorsSteps/FinalScore';
import { WizardContext } from '../../../../Components/Wizard/Context';
import Slider from 'Components/SliderComponent';
import Wizard from '../../../../Components/Wizard';
import { deviceMin } from 'Consts/device';

const SmartSteps: React.FC = () => {
  const { step } = useContext(WizardContext);
  const steps = [
    <BirthDate />,
    <MarriageStatus />,
    <Education />,
    <OverseasWorkExperience />,
    <AustralianWorkExperience />,
    <English />,
    <ProfessionalYearInAustralia />,
    <FinalScore />,
  ];

  return (
    <Container>
      {step !== steps.length && (
        <Slider currentStep={step + 1} end={steps.length - 1} />
      )}
      <StepsWrapper>{steps[step]}</StepsWrapper>
    </Container>
  );
};

export default SmartSteps;
const Container = styled.section`
  width: 100%;
  max-width: 33rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StepsWrapper = styled(Wizard)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  height: max-content;
  padding-bottom: 5rem;
  @media ${deviceMin.tabletL} {
    // you have to change the calc setting if you want to add or remove any element above this one
    min-height: calc(100vh - 10.5rem);
    height: max-content;
  }
`;
