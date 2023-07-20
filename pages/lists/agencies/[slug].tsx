import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  LanguageKeys,
  componentStatements,
} from 'PagesComponents/Lists/Agencies/AgencyPage/const';
import { useLocale } from 'Hooks/useLocale';
import { useRouter } from 'next/router';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import Seo from 'Components/Seo';
import { AGENCYS } from 'Consts/Lists/agency';
import Content from 'PagesComponents/Lists/Agencies/AgencyPage';
import { Agency } from 'Interfaces/Database/Lists/agency';
import { GetStaticProps, NextPage } from 'next/types';
import Error from 'next/error';
import { Languages } from 'Interfaces';

interface Props {
  chosenAgency?: Agency;
  errorCode?: number;
}

const AgencyPage: NextPage<Props> = ({ chosenAgency, errorCode }) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const { dt } = useDynamicTranslation();
  if (errorCode) return <Error statusCode={errorCode} />;

  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle, [
          { $agent: dt(chosenAgency?.name) || '' },
        ])}
        image={chosenAgency?.logoUrl}
        description={dt(chosenAgency?.desc)}
        canonical={`https://www.marabox.com/${locale}/lists/agencies/${
          chosenAgency?.slug ? chosenAgency?.slug : ''
        }`}
      />
      <Content chosenAgency={chosenAgency} />
    </PageLayout>
  );
};
export default AgencyPage;

export const getStaticPaths = async ({ locales }: any) => {
  let paths: { params: { slug: string }; locale: Languages }[] = [];

  AGENCYS.map((agency) => {
    locales.map((locale: Languages) => {
      if (agency?.slug) paths.push({ params: { slug: agency.slug }, locale });
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const chosenAgency = AGENCYS.filter(
    (agency) => agency.slug === params?.slug
  )[0];

  console.log('***navid params=', params);
  console.log('***navid params.slchosenAgency=', params?.slug);
  console.log('***navid chosenAgency.slug=', chosenAgency?.slug);
  if (!chosenAgency)
    return {
      props: {
        errorCode: 404,
      },
    };
  return {
    props: {
      chosenAgency,
    },
  };
};
