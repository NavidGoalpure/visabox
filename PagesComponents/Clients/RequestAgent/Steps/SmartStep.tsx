import { useContext } from 'react';
import styled from 'styled-components';
import Introduction from './Introduction';
import Country from './Country';
import PersonalInfo from './PersonalInfo';
import BirthDate from './BirthDate';
import MarriageStatus from './MarriageStatus';
import Education from './Education';
import CurrentJob from './CurrentJob';
import OverseasWorkExperience from './OverseasWorkExperience';
import AustralianWorkExperience from './AustralianWorkExperience';
import English from './English';
import ProfessionalYearInAustralia from './ProfessionalYearInAustralia';
import FinalScore from './FinalScore';

import Slider from 'Components/SliderComponent';

import { deviceMin } from 'Consts/device';
import { WizardContext } from 'Components/Wizard/Context';
import Wizard from 'Components/Wizard';

const SmartSteps: React.FC = () => {
  const { step } = useContext(WizardContext);
  const steps = [
    <Introduction />,
    <Country />,
    <PersonalInfo />,
    <BirthDate />,
    <MarriageStatus />,
    <Education />,
    <CurrentJob />,
    <OverseasWorkExperience />,
    <AustralianWorkExperience />,
    <English />,
    <ProfessionalYearInAustralia />,
    <FinalScore />,
  ];

  return (
    <Container>
      {step !== 0 && step !== 11 && (
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
