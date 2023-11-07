import styled from 'styled-components';
import MaraBgAnimation from 'Components/MaraBgAnimation';
import SmartSteps from './Steps/SmartStep';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useLocale } from 'Hooks/useLocale';
import { useEffect } from 'react';
import { Loading } from 'Elements/Loading';
import { WizardContextProvider } from 'Components/Wizard/Context';
function Content() {
  const { status } = useSession();
  const router = useRouter();
  const { locale } = useLocale();
  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`/${locale}/auth/signin`);
    }
  }, [status]);

  return (
    <Container>
      <WizardContextProvider firstStep={1}>
        <StyledMaraBgAnimation animationSpeed={60}>
          {status === 'loading' || status === 'unauthenticated' ? (
            <Loading />
          ) : (
            <SmartSteps />
          )}
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
