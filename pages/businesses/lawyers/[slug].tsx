import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  LanguageKeys,
  componentStatements,
} from 'PagesComponents/Businesses/Lawyers/LawyerPage/const';
import { useLocale } from 'Hooks/useLocale';
import { useRouter } from 'next/router';
import Content from 'PagesComponents/Businesses/Lawyers/LawyerPage';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import Seo from 'Components/Seo';
import { Lawyers } from 'Consts/Businesses/Lawyers';

const OccupationPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const { dt } = useDynamicTranslation();
  const chosenLawyer = Lawyers.filter((lawyer) => lawyer.slug === slug);

  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle, [
          { $lawyer: dt(chosenLawyer[0]?.name) || '' },
          { $lawyer: dt(chosenLawyer[0]?.name) || '' },
        ])}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/businesses/lawyers/${chosenLawyer[0]?.slug}`}
      />
      <Content chosenLawyer={chosenLawyer[0]} />
    </PageLayout>
  );
};
export default OccupationPage;
