import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  LanguageKeys,
  componentStatements,
} from 'PagesComponents/Lists/Naaties/NaatiPage/const';
import { useLocale } from 'Hooks/useLocale';
import { useRouter } from 'next/router';
import Content from 'PagesComponents/Lists/Naaties/NaatiPage';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import Seo from 'Components/Seo';
import { NAATIES } from 'Consts/Lists/naati';

const VipAgentPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const { dt } = useDynamicTranslation();
  const chosenNatties = NAATIES.filter((naati) => naati.slug === slug);

  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle, [
          { $naati: dt(chosenNatties[0]?.fullName) || '' },
          { $naati: dt(chosenNatties[0]?.fullName) || '' },
        ])}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/lists/naaties/${chosenNatties[0]?.slug}`}
      />
      <Content chosenNaaties={chosenNatties[0]} />
    </PageLayout>
  );
};
export default VipAgentPage;
