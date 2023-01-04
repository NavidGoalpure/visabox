import { GetStaticProps, NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import Content from 'PagesComponents/Occupations/Slug';
import { useRouter } from 'next/router';
import Head from 'next/head';

import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { Occupation } from 'Interfaces/Documents/occupation';
import { Languages } from 'Interfaces';
import {
  getAllOccupationSlugs,
  getOccupationDetail,
} from 'Queries/occupations/Detail';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Occupations/Slug/const';
import Error from 'next/error';
import { testOccupation } from 'Mock/occupation';
import { OccupationDetailRes } from 'Queries/occupations/Detail/interface';

interface Props {
  occupation?: OccupationDetailRes;
  errorCode?: number;
}
const OccupationPage: NextPage<Props> = ({ occupation, errorCode }) => {
  const { t } = useStaticTranslation(componentStatements);
  if (errorCode) return <Error statusCode={errorCode} />;

  return (
    <PageLayout>
      <Head>
        <title>
          {t(LanguageKeys.SeoTitle, [
            { $title: occupation?.title.en || '' },
            { $code: occupation?.code.toString() || '' },
          ])}
        </title>
        <meta name='description' content={t(LanguageKeys.SeoDesc)} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {occupation ? <Content occupation={occupation} /> : null}
    </PageLayout>
  );
};
export default OccupationPage;

export const getStaticPaths = async ({ locales }: any) => {
  let paths: { params: { slug: string }; locale: Languages }[] = [];
  const allOccupation = await getAllOccupationSlugs();
  if (allOccupation?.length > 0)
    allOccupation?.map((occupation: Occupation) => {
      // return locales.map((locale: Languages) => {
      return [Languages.en].map((locale: Languages) => {
        if (occupation.slug)
          return paths.push({
            params: { slug: `${occupation.slug.current}` },
            locale,
          });
      });
    });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    //navid chage comment lines
    const occupation = await getOccupationDetail(
      params?.slug?.toString() || ''
    );
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
