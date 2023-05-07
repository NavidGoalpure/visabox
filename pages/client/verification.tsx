import { NextPage } from "next";
import PageLayout from "Components/Layouts/PageContainer";
import styled from "styled-components";
import Content from "PagesComponents/Client/Verification";
import Seo from "Components/Seo";
import { useLocale } from "Hooks/useLocale";

const UserVerification: NextPage = () => {

  const { locale } = useLocale();
  return (
    <StyledPageLayout hasFooter={false} hasMenu={false}>
      <Seo canonical={`https://www.marabox.com/${locale}/client/verification`} />
      <Content />
    </StyledPageLayout>
  );
};
export default UserVerification;
const StyledPageLayout = styled(PageLayout)`
  max-width: none;
  #PageContainer-content {
    padding: 0;
  }
`;
