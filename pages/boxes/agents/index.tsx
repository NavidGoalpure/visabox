import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Content from 'PagesComponents/Businesses/Agents';
import Seo from 'Components/Seo';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Businesses/Agents/const';

const BusinessesPage: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/boxes/agents`}
      />
      <Content />
    </PageLayout>
  );
};
export default BusinessesPage;
