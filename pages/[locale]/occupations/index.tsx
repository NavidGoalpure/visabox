import type { NextPage } from 'next';
import Head from 'next/head';
import {
  PageKeys,
  componentStatements,
} from '../../../components/PagesComponents/Occupations/Const';
import { useTranslation } from 'hooks/useTraslation';
import Content from 'components/PagesComponents/Occupations';
import PageLayout from 'components/Layouts/PageContainer';
import { sanityClient } from '../../../sanity';
import { Occupation } from 'pages/interfaces/Documents/Occupation';

interface Props {
  occupations: Occupation[];
}
const OccupationList: NextPage<Props> = ({ occupations }) => {
  const { t } = useTranslation(componentStatements);

  return (
    <PageLayout>
      <Head>
        <title>{t(PageKeys.PageTitle)}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Content occupations={occupations} />
    </PageLayout>
  );
};

export const getServerSideProps = async () => {
  const query = `*[_type=='occupation' ]{
  _id,
  slug,
  code,
  title,
  anzsco_section,
}`;

  const occupations = await sanityClient.fetch(query);
  return {
    props: {
      occupations,
    },
  };
};

export default OccupationList;
