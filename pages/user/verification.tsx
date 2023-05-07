import { NextPage } from "next";
import PageLayout from "Components/Layouts/PageContainer";
import styled from "styled-components";
import Content from "PagesComponents/User/Verification";

const UserVerification: NextPage = () => {
  return (
    <StyledPageLayout hasFooter={false} hasMenu={false}>
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
