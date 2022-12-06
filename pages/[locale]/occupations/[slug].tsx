import { componentStatements } from 'PagesComponents/Occupations/const';
import { useStaticTranslation } from 'hooks/useStaticTraslation';
import { NextPage } from 'next';
import { Occupation } from 'interfaces/Documents/Occupation';
import PageLayout from 'components/Layouts/PageContainer';
import Content from 'PagesComponents/Occupations/Slug';

interface Props {
  occupation: Occupation;
}
const OccupationPage: NextPage<Props> = ({ occupation }) => {
  const { t } = useStaticTranslation(componentStatements);
  const NavidObject: Occupation = {
    _id: 'e5d5393d-85ca-4b5f-b099-15f394a66760',
    anzsco_section: {
      _type: 'anzsco_obj',
      alternative_title: {
        en: ['Marine Farmer'],
      },
      description: {
        en: 'Plans, organises, controls, coordinates and performs farming operations to breed and raise fish and other aquatic stock.',
      },
      nec_occupation: {
        en: ['qwe', 'asd', 'zzxc'],
      },
      priority_list: [
        {
          _key: '08e813a79592',
          _type: 'priority_list_obj',
          act: 'NS',
          future_demend: 'Modarate',
          national: 'NS',
          nsw: 'NS',
          nt: 'S',
          qld: 'S',
          sa: 'NS',
          tas: 'NS',
          vic: 'NS',
          wa: 'NS',
          //@ts-ignore
          year: '2022-01-01',
        },
      ],
      specialisations: {
        en: [
          'Seafood Farmer',
          'Fish Farmer',
          'Hatchery Manager (Fish)',
          'Mussel Farmer',
          'Oyster Farmer',
        ],
      },
      unit_group: {
        //@ts-ignore
        skill_level: '1',
      },
    },
    assessing_authority: 'VETASSESS',
    code: 121111,
    title: {
      en: 'Aquaculture Farmer',
    },
    visa_option_section: [
      {
        _key: 'a58d2f568883',
        _type: 'visa_option_obj',
        types: {
          _ref: '1bf883de-eb6c-4d40-aa50-f2ec1100baab',
          //@ts-ignore
          _type: 'reference',
        },
      },
    ],
  };
  return (
    <PageLayout>
      {/* <Head> */}
      {/* <title>{t(LanguageKeys.PageTitle)}</title> */}
      {/* <link rel="icon" href="/favicon.ico" /> */}
      {/* </Head> */}
      {/* <Content occupation={occupation} /> */}
      <Content occupation={NavidObject} />
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
