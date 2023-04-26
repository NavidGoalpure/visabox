import styled from "styled-components";
import MaraBgAnimation from "Components/MaraBgAnimation";
import SmartSteps from "./Steps/SmartStep";
import { WizardContextProvider } from "./Contexts/Wizard/Context";
function Content() {
  return (
    <Container>
        <WizardContextProvider>
      <StyledMaraBgAnimation animationSpeed={60}>
          <SmartSteps />
      </StyledMaraBgAnimation>
        </WizardContextProvider>
    </Container>
  );
}
export default Content;
const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 1rem;
  align-items: center;
  margin: 0rem 0 3rem;
  position: relative;
  
`;
const StyledMaraBgAnimation = styled(MaraBgAnimation)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;