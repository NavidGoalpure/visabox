import { NextPage } from 'next';
import PageLayout from 'components/Layouts/PageContainer';
import Content from 'PagesComponents/Occupations/Slug';
import { useRouter } from 'next/router';
import { useData } from 'PagesComponents/Occupations/Slug/useData';
// import { useData } from 'PagesComponents/Occupations/Slug/useData';

// interface Props {
//   occupation: Occupation;
// }
const OccupationPage: NextPage = () =>
  // { occupation }
  {
    // const { t } = useStaticTranslation(componentStatements);
    const { query, push } = useRouter();
    const { slug } = query;
    const { occupation } = useData(slug?.toString());

    // if (occupation === null) push('/404');

    return (
      <PageLayout>
        {/* <Head> */}
        {/* <title>{t(LanguageKeys.PageTitle)}</title> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
        {/* </Head> */}
        {/* <Content occupation={occupation} /> */}
        {occupation ? <Content occupation={occupation} /> : null}
      </PageLayout>
    );
  };
export default OccupationPage;
// export const getStaticPaths = async () => {
//   const query = `*[_type=='occupation']{
//  _id,
//   slug{
//     current
//   },
//   title
// }`;
//   const occupations = await sanityClient.fetch(query);
//   const paths = occupations.map((occupation: Occupation) => ({
//     params: {
//       slug:
//         occupation?.slug?.current || occupation.title.en.replaceAll(' ', '_'),
//       //navid
//       locale: 'en',
//     },
//   }));

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const query = `
//     *[_type=='occupation' && slug.current == $slug]
// [0]
// {
// _id,
// code,
//   title,
//   anzsco_section {...,
//     unit_group  ->{
//   skill_level
// }
//    },
// assessing_authority,
// visa_option_section
// }
//   `;
//   const occupation = await sanityClient.fetch(query, {
//     slug: params?.slug,
//   });

//   if (!occupation) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       occupation,
//     },
//     revalidate: 60,
//   };
// };
