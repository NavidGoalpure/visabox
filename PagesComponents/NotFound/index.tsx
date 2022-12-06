import styled from "styled-components/macro";
import { PageSubtitleStyle, PageTitleStyle } from "Styles/Theme/Page";

const Content: React.FC = () => {
  return (
    <>
      <PageTitle>404</PageTitle>
      <PageSubtitle>Oops...</PageSubtitle>
    </>
  );
};
export default Content;
const PageTitle = styled.h1`
  ${PageTitleStyle}
`;
const PageSubtitle = styled.h2`
${PageSubtitleStyle}
`