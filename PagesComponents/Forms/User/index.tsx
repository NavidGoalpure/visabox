import styled from "styled-components";
import MaraBgAnimation from "Components/MaraBgAnimation";
import SmartSteps from "./Steps/SmartStep";
import { WizardContextProvider } from "./Contexts/Wizard/Context";
import { useSession } from "next-auth/react";
function Content() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>its loading</div>;
  }
  if (session) {
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
  return <div>you are not signed in</div>;
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
