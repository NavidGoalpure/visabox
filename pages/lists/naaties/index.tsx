import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Content from 'PagesComponents/Lists/Naaties';
import Seo from 'Components/Seo';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Lists/Naaties/NaatiPage/const';

const SocialPages: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/lists/naaties`}
      />
      <Content />
    </PageLayout>
  );
};
export default SocialPages;
