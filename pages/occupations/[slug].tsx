import { GetStaticProps, NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import Content from 'PagesComponents/Occupations/Slug';
import { useRouter } from 'next/router';
import { useData } from 'PagesComponents/Occupations/Slug/useData';
import Head from 'next/head';
import { sanityClient } from '../../sanity';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Occupations/Slug/const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { Occupation } from 'Interfaces/Documents/occupation';
import path from 'path';
import { Languages } from 'Interfaces';
import {
  getAllOccupationSlugs,
  getOccupationDetail,
} from 'Queries/occupations/detail';
// import { useData } from 'PagesComponents/Occupations/Slug/useData';

interface Props {
  occupation?: Occupation;
  isError?: boolean;
}
const OccupationPage: NextPage<Props> = ({ occupation, isError }) => {
  const { t } = useStaticTranslation(componentStatements);
  console.log('navid occupation=', occupation);

  const { query } = useRouter();
  // const { occupation } = useData(slug?.toString());
  if (isError) return <p>'navid is error...'</p>;
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
      return locales.map((locale: Languages) => {
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
    const occupation = await getOccupationDetail(
      params?.slug?.toString() || ''
    );
    return {
      props: {
        occupation,
      },
    };
  } catch (error) {
    return {
      props: {
        isError: true,
      },
    };
  }
};
