import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import styled from 'styled-components';
import Content from 'PagesComponents/Payment/Cancel';
import Seo from 'Components/Seo';

const CancelPayment: NextPage = () => {
  return (
    <StyledPageLayout>
      <Seo isNoIndex={true} />
      <Content />
    </StyledPageLayout>
  );
};
export default CancelPayment;
const StyledPageLayout = styled(PageLayout)`
  max-width: none;
  #PageContainer-content {
    padding: 0;
  }
`;
