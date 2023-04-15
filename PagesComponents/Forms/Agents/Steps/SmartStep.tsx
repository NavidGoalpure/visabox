import { useContext } from "react";
import styled from "styled-components";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";
import Step8 from "./Step8";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import { WizardContext } from "../Contexts/Wizard/Context";
import Slider from "Components/SliderComponent";
import Wizard from "../Contexts/Wizard";
import { deviceMin } from "Consts/device";
import { FormDataContextProvider } from "../Contexts/FormDataContext/Context";

const SmartSteps: React.FC = () => {
  const { step } = useContext(WizardContext);
  const { t } = useStaticTranslation(componentStatements);
  const maxStep = 8;
  const steps = [
    <Step1 />,
    <Step2 />,
    <Step3 />,
    <Step4 />,
    <Step5 />,
    <Step6 />,
    <Step7 />,
    <Step8 />,
  ];
  return (
    <Container>
      <Slider currentStep={step + 1} end={maxStep} />
      <FormDataContextProvider>
        <StepsWrapper>{steps[step]}</StepsWrapper>
      </FormDataContextProvider>
    </Container>
  );
};

export default SmartSteps;
const Container = styled.section`
  width: 100%;
  max-width: 33rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const StepsWrapper = styled(Wizard)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
