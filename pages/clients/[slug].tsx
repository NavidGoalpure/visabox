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
import { dehydrate, DehydratedState, QueryClient, useQuery } from "react-query";
import { ClientQueryKeys } from "Utils/query/keys";
import { profileResParams } from "PagesComponents/Clients/FormPage/const";
const queryClient = new QueryClient();
interface Props {
  dehydratedClient: DehydratedState;
  errorCode?: number;
  queryName: string;
  queryReqParams: string;
  queryResParams: string;
}
const VipAgentPage: NextPage<Props> = ({
  dehydratedClient,
  errorCode,
  queryName,
  queryReqParams,
  queryResParams,
}) => {
  const { locale } = useLocale();
  const router = useRouter();
  const { version } = router.query;
  queryClient.setQueryData(queryName, dehydratedClient);
  const { data } = useQuery(queryName, () => {
    return getClientDetail({
      reqParams: queryReqParams,
      resParams: queryResParams,
    });
  });
  const client = data?.client?.[0] || ({} as Client);
  if (errorCode) return <Error statusCode={errorCode} />;
  if (version === PAGE_PARAMS_VERSION_PRINTABLE_VALUE)
    return <PrintablePage client={client || ({} as Client)} />;
  const fullname = `${client?.name || ""} ${client?.lastname || ""}`;
  // نوید
  // بعدا از لاگین کردن وکیل ها این آدرس باید عوض بشه چون انگار شماره وکیله نه کلاینت
  return (
    <PageLayout>
      {" "}
      <Seo
        title={fullname + " | Mara Box"}
        canonical={`https://www.marabox.com/${locale}/clients/${client?._id}`}
        isNoIndex={true}
      />{" "}
      <Content />{" "}
    </PageLayout>
  );
};
export default VipAgentPage;
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.slug;
  const reqParams = `_id == "${id}"`;
  console.log(
    "navid queryClient ===",
    ClientQueryKeys.detail({ reqParams, resParams: profileResParams })
  );
  try {
    await queryClient.prefetchQuery(
      ClientQueryKeys.detail({ reqParams, resParams: profileResParams }),
      () => {
        return getClientDetail({
          reqParams,
          resParams: profileResParams,
          useCDN: false,
        });
      }
    );
    return {
      props: {
        dehydratedClient: dehydrate(queryClient),
        queryName: ClientQueryKeys.detail({
          reqParams,
          resParams: profileResParams,
        }),
        queryReqParams: reqParams,
        queryResParams: profileResParams,
      },
    };
  } catch {
    return { props: { errorCode: 500 } };
  }
  //
  // try {
  //   return { props: { client: client?.client[0] } };
  // } catch (error) {
  //   return { props: { errorCode: 500 } };
  // }
};
