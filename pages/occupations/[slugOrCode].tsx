import { GetStaticProps, NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import Content from 'PagesComponents/Occupations/Detail';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { Occupation } from 'Interfaces/Documents/occupation';
import { Languages } from 'Interfaces';
import {
  getAllOccupationCodes,
  getAllOccupationSlugs,
  getOccupationDetail,
} from 'Queries/occupations/Detail';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Occupations/Detail/const';
import Error from 'next/error';
import { OccupationDetailRes } from 'Queries/occupations/Detail/interface';
import { getSmartparam } from 'PagesComponents/Occupations/Detail/utils';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';

interface Props {
  occupation?: OccupationDetailRes;
  errorCode?: number;
}
const OccupationPage: NextPage<Props> = ({ occupation, errorCode }) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  if (errorCode) return <Error statusCode={errorCode} />;
  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle, [
          { $title: occupation?.title.en || '' },
          { $code: occupation?.code.toString() || '' },
        ])}
        description={
          occupation?.anzsco_section?.description?.en || t(LanguageKeys.SeoDesc)
        }
        canonical={`https://www.marabox.com/${locale}/occupations/${occupation?.slug?.current}`}
        //navid temporari
        isNoIndex={locale === Languages.fa}
      />
      {occupation ? <Content occupation={occupation} /> : null}
    </PageLayout>
  );
};
export default OccupationPage;

export const getStaticPaths = async ({ locales }: any) => {
  let paths: { params: { slugOrCode: string }; locale: Languages }[] = [];
  /////get Allpage base on their slug/////////
  const allOccupation_Slug = await getAllOccupationSlugs();
  if (allOccupation_Slug?.length > 0)
    allOccupation_Slug?.map((occupation: Occupation) => {
      return locales.map((locale: Languages) => {
        if (occupation.slug)
          return paths.push({
            params: { slugOrCode: `${occupation.slug.current}` },
            locale,
          });
      });
    });
  /////get Allpage base on their code/////////

  const allOccupation_Code = await getAllOccupationCodes();
  if (allOccupation_Code?.length > 0)
    allOccupation_Code?.map((occupation: Occupation) => {
      return locales.map((locale: Languages) => {
        if (occupation.code)
          return paths.push({
            params: { slugOrCode: `${occupation.code}` },
            locale,
          });
      });
    });
  return {
    paths,
    // fallback: false,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const occupation = await getOccupationDetail(getSmartparam(params));
    // const occupation = testOccupation;

    return {
      props: {
        occupation,
      },
    };
  } catch (error) {
    return {
      props: {
        errorCode: 500,
      },
    };
  }
};
