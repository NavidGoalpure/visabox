import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Landings/AI/const';
import styled from 'styled-components';
import Content from 'PagesComponents/Landings/AI';

const AIIntroduction: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <StyledPageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/landing/AI`}
      />
      <Content />
    </StyledPageLayout>
  );
};
export default AIIntroduction;
const StyledPageLayout = styled(PageLayout)`
  max-width: none;
  #PageContainer-content {
    padding: 0;
  }
`;
