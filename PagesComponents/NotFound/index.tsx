import AnimationComponent from "components/AnimationComponent";
import styled from "styled-components/macro";
import {
  PageSubtitleStyle,
  pageTextColor,
  PageTitleStyle,
} from "Styles/Theme/Page";
import { Headline5Style, Headline6Style } from "Styles/Typo";

const Content: React.FC = () => {
  return (
    <Container>
        <AnimationComponent />
      <PageTitle>404</PageTitle>
      <PageSubtitle>Oops...</PageSubtitle>
      <PageDesc>You werent supposed to be here</PageDesc>
      <PageText>{`You can go to the Homepage if you feel you're lost`}</PageText>
    </Container>
  );
};
export default Content;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 9.5rem 0;
  position:relative;
`;
const PageTitle = styled.h1`
  ${PageTitleStyle}
  font-weight:bold;
`;
const PageSubtitle = styled.h2`
  ${PageSubtitleStyle}
`;
const PageDesc = styled.h3`
  ${pageTextColor}
  ${Headline5Style}
`;
const PageText = styled.p`
${pageTextColor}
${Headline6Style}
`
