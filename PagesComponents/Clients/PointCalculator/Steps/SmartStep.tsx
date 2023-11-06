import { useContext } from 'react';
import styled from 'styled-components';
import Step0 from './SharableSteps/Introduction';
import Step1 from './AgentSteps/Country';
import Step2 from './AgentSteps/PersonalInfo';
import Step3 from './SharableSteps/BirthDate';
import Step4 from './SharableSteps/MarriageStatus';
import Step5 from './SharableSteps/Education';
import Step6 from './AgentSteps/CurrentJob';
import Step7 from './SharableSteps/OverseasWorkExperience';
import Step8 from './SharableSteps/AustralianWorkExperience';
import Step9 from './SharableSteps/English';
import Step10 from './SharableSteps/ProfessionalYearInAustralia';
import Step11 from './SharableSteps/IsSharable';
import Step12 from './SharableSteps/FinalScore';
import { WizardContext } from '../Contexts/Wizard/Context';
import Slider from 'Components/SliderComponent';
import Wizard from '../Contexts/Wizard';
import { deviceMin } from 'Consts/device';

const SmartSteps: React.FC = () => {
  const { step } = useContext(WizardContext);
  const steps = [
    <Step0 />,
    <Step1 />,
    <Step2 />,
    <Step3 />,
    <Step4 />,
    <Step5 />,
    <Step6 />,
    <Step7 />,
    <Step8 />,
    <Step9 />,
    <Step10 />,
    <Step11 />,
    <Step12 />,
  ];

  return (
    <Container>
      {step !== 0 && step !== 12 && (
        <Slider currentStep={step} end={steps.length - 1} />
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
