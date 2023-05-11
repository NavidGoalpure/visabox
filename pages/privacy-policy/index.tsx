import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import styled from 'styled-components';
import Content from 'PagesComponents/Privacy-Policy';

const TermsAndConditions: NextPage = () => {
  return (
    <StyledPageLayout>
      <Content />
    </StyledPageLayout>
  );
};
export default TermsAndConditions;
const StyledPageLayout = styled(PageLayout)`
  max-width: none;
  #PageContainer-content {
    padding: 0;
  }
`;
