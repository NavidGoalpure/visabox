import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import styled from 'styled-components';
import Content from 'PagesComponents/Clients/BasicForms';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Clients/BasicForms/const';
import { FormDataContextProvider } from 'PagesComponents/Clients/BasicForms/Contexts/FormDataContext/Context';

const UserForms: NextPage = ({}) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <StyledPageLayout hasBanner={false} hasFooter={false}>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/clients/basic-form`}
      />
      <FormDataContextProvider>
        <Content />
      </FormDataContextProvider>
    </StyledPageLayout>
  );
};
export default UserForms;
const StyledPageLayout = styled(PageLayout)`
  max-width: none;
  #PageContainer-content {
    padding: 0;
  }
`;
