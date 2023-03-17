import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Businesses/SocialPage/const';
import { useLocale } from 'Hooks/useLocale';
import Content from 'PagesComponents/Businesses/SocialPage';
import Seo from 'Components/Seo';

const SocialPages: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/boxes/social-pages`}
      />
      <Content />
    </PageLayout>
  );
};
export default SocialPages;
