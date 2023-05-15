import { deviceMin } from "Consts/device";
import styled from "styled-components";
import { Layer1_TitleStyle } from "Styles/Theme/Layers/layer1/style";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "./const";
import CardDesign from "./CardDesign";
import { PrimaryButton } from "Elements/Button/Primary";

function Content() {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <PageTitle>{t(LanguageKeys.PageTitle)}</PageTitle>
      <CardDesign />
      <PrimaryButton style={{ margin: "0 auto" }}>Load More</PrimaryButton>
    </Container>
  );
}
export default Content;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
const PageTitle = styled.h1`
  ${Layer1_TitleStyle}
  @media ${deviceMin.tabletS} {
    width: 100%;
    text-align: start;
  }
`;
