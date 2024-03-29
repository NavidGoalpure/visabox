import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Lists/Exchanges/const';
import { useLocale } from 'Hooks/useLocale';
import Content from 'PagesComponents/Lists/Exchanges';
import Seo from 'Components/Seo';

const SocialPages: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com.au/${locale}/lists/exchanges`}
      />
      <Content />
    </PageLayout>
  );
};
export default SocialPages;
