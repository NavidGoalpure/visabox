import { useLocale } from "Hooks/useLocale";
import { Languages } from "Interfaces";
import styled from "styled-components";

function Content() {
  const {locale} = useLocale()
  return (
    <Container>
      {locale === Languages.fa ? (
        <GoogleForm
          src="https://docs.google.com/forms/d/e/1FAIpQLScqCjbxv1CJBxEsmwCkTUce1lVAR-S5t-fELLJOFDXNC2qRWA/viewform?embedded=true"
          width="500"
          height="920"
          frameBorder="1"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </GoogleForm>
      ) : (
        <GoogleForm
          src="https://docs.google.com/forms/d/e/1FAIpQLSeQz7fxXOGTmts1Wt8JwpAE9H26ylJubGKBKq5WtZ6ECVzSPA/viewform?embedded=true"
          width="500"
          height="920"
          frameBorder="1"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </GoogleForm>
      )}
    </Container>
  );
}
export default Content;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
`;
const GoogleForm = styled.iframe`
  background: var(--color-gray12);
  border-radius: 15px;
  min-height: 920px;
`;
