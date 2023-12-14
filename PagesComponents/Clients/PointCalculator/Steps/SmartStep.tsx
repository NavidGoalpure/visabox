import { useContext } from "react";
import styled from "styled-components";
import BirthDate from "./BirthDate";
import MarriageStatus from "./MarriageStatus";
import Education from "./Education";
import OverseasWorkExperience from "./OverseasWorkExperience";
import AustralianWorkExperience from "./AustralianWorkExperience";
import English from "./English";
import ProfessionalYearInAustralia from "./ProfessionalYearInAustralia";
import FinalScore from "./FinalScore";
import { WizardContext } from "../../../../Components/Wizard/Context";
import Slider from "Components/SliderComponent";
import Wizard from "../../../../Components/Wizard";
import { deviceMin } from "Consts/device";
import Introduction from "./Introduction";

const SmartSteps: React.FC = () => {
  const { step } = useContext(WizardContext);
  const steps = [
    <Introduction />,
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
      {step !== 0 && step !== steps.length - 1 && (
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
