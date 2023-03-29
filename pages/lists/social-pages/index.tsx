import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Lists/SocialPage/const';
import { useLocale } from 'Hooks/useLocale';
import Content from 'PagesComponents/Lists/SocialPage';
import Seo from 'Components/Seo';

const SocialPages: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/lists/social-pages`}
      />
      <Content />
    </PageLayout>
  );
};
export default SocialPages;
