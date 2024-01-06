import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import styled from 'styled-components';
import Content from 'PagesComponents/Payment/Success';
import Seo from 'Components/Seo';

const SuccessPayment: NextPage = () => {
  return (
    <StyledPageLayout>
      <Seo isNoIndex={true} />
      <Content />
    </StyledPageLayout>
  );
};
export default SuccessPayment;
const StyledPageLayout = styled(PageLayout)`
  max-width: none;
  #PageContainer-content {
    padding: 0;
  }
`;
