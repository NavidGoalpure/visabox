import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  LanguageKeys,
  componentStatements,
} from 'PagesComponents/Boxes/Agencies/AgencyPage/const';
import { useLocale } from 'Hooks/useLocale';
import { useRouter } from 'next/router';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import Seo from 'Components/Seo';
import { Agencies } from 'Consts/Businesses/agency';
import Content from 'PagesComponents/Boxes/Agencies/AgencyPage';

const VipAgencyPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const { dt } = useDynamicTranslation();
  const chosenAgency = Agencies.filter((agency) => agency.slug === slug);

  return (
    <PageLayout>
      {/* navid change */}
      <Seo
        title={t(LanguageKeys.SeoTitle, [
          { $agent: dt(chosenAgency[0]?.name) || '' },
          { $agent: dt(chosenAgency[0]?.name) || '' },
        ])}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/boxes/agents/${chosenAgency[0]?.slug}`}
      />
      <Content chosenAgency={chosenAgency[0]} />
    </PageLayout>
  );
};
export default VipAgencyPage;