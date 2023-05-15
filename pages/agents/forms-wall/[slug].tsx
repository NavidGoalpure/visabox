import PageLayout from 'Components/Layouts/PageContainer';
import { GetServerSideProps } from 'next';

import { useLocale } from 'Hooks/useLocale';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import Seo from 'Components/Seo';
import { NextPage } from 'next/types';
import Error from 'next/error';
import Content from 'PagesComponents/Agents/FormsWall/FormPage';
import { Agent } from 'Interfaces/Database/Lists/agents';
import { ClientData } from 'Interfaces/Database/Client';
import { getClientDetail } from 'Queries/client';
import { proxySanityClientResponseToCamelCase } from 'Utils/query/clients';

interface Props {
  client: ClientData;
  errorCode?: number;
}
const VipAgentPage: NextPage<Props> = ({ client, errorCode }) => {
  const { locale } = useLocale();
  if (errorCode) return <Error statusCode={errorCode} />;

  return (
    <PageLayout>
      <Seo
        canonical={`https://www.marabox.com/${locale}/agents/${client?._id}`}
      />
      <Content clientData={client} />
    </PageLayout>
  );
};
export default VipAgentPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.slug;
  // const reqParams = `_id == ${id}`;
  const reqParams = `email == "farzamfara1385@gmail.com"`;
  const resParams = ` 
      _id,
      _createdAt,
      name,
      lastname,
      age,
      phone,
      marital,
      field_of_study,
      degree,
      current_job,
      work_experience,
      australian_work_experience,
      ielts_score,
      is_sharable,
      uni_section,
      avatar
      `;

  try {
    const client = await getClientDetail({ reqParams, resParams });
    console.log(
      '***navid client=',
      proxySanityClientResponseToCamelCase(client?.clientData[0])
    );
    return {
      props: {
        client: proxySanityClientResponseToCamelCase(client?.clientData[0]),
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
