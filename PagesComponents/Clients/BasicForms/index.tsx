import styled from "styled-components";
import MaraBgAnimation from "Components/MaraBgAnimation";
import SmartSteps from "./Steps/SmartStep";
import { WizardContextProvider } from "./Contexts/Wizard/Context";
import { useSession } from "next-auth/react";
import Router, { useRouter } from "next/router";
import { useLocale } from "Hooks/useLocale";
import { useEffect } from "react";
function Content() {
  const { status } = useSession();
  const router = useRouter();
  const { locale } = useLocale();
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push(`/${locale}/auth/signin`);
    }
  }, [status]);

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
