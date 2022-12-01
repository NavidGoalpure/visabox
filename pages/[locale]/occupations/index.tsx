import type { NextPage } from 'next';
import Head from 'next/head';
import {
  PageKeys,
  componentStatements,
} from '../../../PagesComponents/Occupations/Const';
import { useTranslation } from 'hooks/useTraslation';
import Content from 'PagesComponents/Occupations';
import PageLayout from 'components/Layouts/PageContainer';
import { sanityClient } from '../../../sanity';
import { Occupation } from 'interfaces/Documents/Occupation';

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
  const occupationCount = `count(*[_type=='occupation' ])`;
  const OCCUPATION_PER_PAGE = 3;
  const query = `*[_type=='occupation' ]| order(_id) [0...${OCCUPATION_PER_PAGE}] {
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
