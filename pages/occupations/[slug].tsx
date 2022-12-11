import { GetStaticProps, NextPage } from 'next';
import PageLayout from 'components/Layouts/PageContainer';
import Content from 'PagesComponents/Occupations/Slug';
import { useRouter } from 'next/router';
import { useData } from 'PagesComponents/Occupations/Slug/useData';
import Head from 'next/head';
import { sanityClient } from '../../sanity';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Occupations/const';
import { useStaticTranslation } from 'hooks/useStaticTraslation';
import { Occupation } from 'interfaces/Documents/occupation';
import path from 'path';
import { Languages } from 'interfaces';
// import { useData } from 'PagesComponents/Occupations/Slug/useData';

// interface Props {
//   occupation: Occupation;
// }
const OccupationPage: NextPage = () =>
  // { occupation }
  {
    const { t } = useStaticTranslation(componentStatements);
    const { query, push } = useRouter();
    const { slug } = query;
    const { occupation } = useData(slug?.toString());

    // if (occupation === null) push('/404');

    return (
      <PageLayout>
        <Head>
          <title>{t(LanguageKeys.PageTitle)}</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {occupation ? <Content occupation={occupation} /> : null}
      </PageLayout>
    );
  };
export default OccupationPage;
export const getStaticPaths = async ({ locales }: any) => {
  const query = `*[_type=='occupation']{
 _id,
  slug{
    current
  },
  title
}`;
  const occupations = await sanityClient.fetch(query);
  let paths: { params: { slug: string }; locale: Languages }[] = [];
  occupations.map((occupation: Occupation) => {
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
  const query = `
    *[_type=='occupation' && slug.current == $slug]
[0]
{
_id,
code,
  title,
  anzsco_section {...,
    unit_group  ->{
  skill_level
}
   },
assessing_authority,
visa_option_section
}
  `;
  const occupation = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!occupation) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      occupation,
    },
  };
};
