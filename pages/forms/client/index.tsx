import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import { componentStatements } from 'PagesComponents/Landings/Agents/const';
import styled from 'styled-components';
import Content from 'PagesComponents/Forms/Client';
import { LanguageKeys } from 'PagesComponents/Forms/Client/const';
import { FormDataContextProvider } from 'PagesComponents/Forms/Client/Contexts/FormDataContext/Context';


const UserForms: NextPage = ({}) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <StyledPageLayout hasFooter={false}>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/landing/agents`}
        isNoIndex={true}
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
