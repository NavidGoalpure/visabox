import type { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import HomeContent from 'PagesComponents/Home';
import styled from 'styled-components';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from 'PagesComponents/Home/const';
import Seo from 'Components/Seo';
import { useLocale } from 'Hooks/useLocale';

// این پیج هیچوقت دیده نمیشه، در نکست-کانفیگ تنظیم شده که به صفحه دیگه ای ریدایرکت بشه
const Home: NextPage = () => {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  return (
    <StyledPageLayout hasBanner={true}>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`/${locale}`}
      />

      <HomeContent />
    </StyledPageLayout>
  );
};
export default Home;

///////////////
const StyledPageLayout = styled(PageLayout)`
  #PageContainer-content {
    padding: 0;
    max-width: unset;
  }
`;
