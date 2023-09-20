import PageLayout from "Components/Layouts/PageContainer";
import { GetServerSideProps } from "next";
import { useLocale } from "Hooks/useLocale";
import Seo from "Components/Seo";
import { NextPage } from "next/types";
import Error from "next/error";
import Content from "PagesComponents/Clients/FormPage";
import { Client } from "Interfaces/Database/Client";
import { getClientDetail } from "Queries/client";
import { Point_Calculator_Fragment } from "Consts/GroqFragments";
import { PAGE_PARAMS_VERSION_PRINTABLE_VALUE } from "Consts/agents";
import { useRouter } from "next/router";
import PrintablePage from "PagesComponents/Clients/FormPage/PrintablePage";

interface Props {
  client: Client;
  errorCode?: number;
}
const VipAgentPage: NextPage<Props> = ({ client, errorCode }) => {
  const { locale } = useLocale();
  const router = useRouter();
  const { version } = router.query;
  if (errorCode) return <Error statusCode={errorCode} />;
  if (version === PAGE_PARAMS_VERSION_PRINTABLE_VALUE)
    return <PrintablePage client={client} />;

  const fullname = `${client?.name || ""} ${client?.lastname || ""}`;
  // نوید
  // بعدا از لاگین کردن وکیل ها این آدرس باید عوض بشه چون انگار شماره وکیله نه کلاینت
  return (
    <PageLayout>
      <Seo
        title={fullname + " | Mara Box"}
        canonical={`https://www.marabox.com/${locale}/clients/${client?._id}`}
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
  ${Point_Calculator_Fragment}
      _id,
      _createdAt,
      country,
      name,
      lastname,
      phone,
      field_of_study,
      current_job,
      is_sharable,
      uni_section,
      avatar,
      email,
      completed_forms
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
