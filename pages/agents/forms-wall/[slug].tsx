import PageLayout from 'Components/Layouts/PageContainer';
import { GetServerSideProps } from 'next';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import { NextPage } from 'next/types';
import Error from 'next/error';
import Content from 'PagesComponents/Agents/FormsWall/FormPage';
import { Client } from 'Interfaces/Database/Client';
import { getClientDetail } from 'Queries/client';

interface Props {
  client: Client;
  errorCode?: number;
}
const VipAgentPage: NextPage<Props> = ({ client, errorCode }) => {
  const { locale } = useLocale();
  if (errorCode) return <Error statusCode={errorCode} />;
  const fullname = `${client?.name || ''} ${client?.lastname || ''}`;
  return (
    <PageLayout>
      <Seo
        title={fullname + ' | Mara Box'}
        canonical={`https://www.marabox.com/${locale}/agents/${client?._id}`}
        isNoIndex={true}
      />
      <Content client={client} />
    </PageLayout>
  );
};
export default VipAgentPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.slug;
  const reqParams = `_id == "${id}"`;
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
      avatar,
      email
      `;

  try {
    const client = await getClientDetail({ reqParams, resParams });

    return {
      props: {
        client: client?.client[0],
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