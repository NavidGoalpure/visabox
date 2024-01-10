import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import styled from 'styled-components';
import Content from 'PagesComponents/Privacy-Policy';
import Seo from 'Components/Seo';

const TermsAndConditions: NextPage = () => {
  return (
    <StyledPageLayout>
      <Seo isNoIndex={true} />
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
