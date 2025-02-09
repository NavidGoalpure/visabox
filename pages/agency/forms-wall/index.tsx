import { NextPage, GetServerSideProps, NextPageContext } from "next";
import PageLayout from "Components/Layouts/PageContainer";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { useLocale } from "Hooks/useLocale";
import Seo from "Components/Seo";
import Content from "PagesComponents/Agency/FormsWall";
import { withCSR } from "Hoc/withCSR";
import { AgencyQueryKeys, ClientQueryKeys } from "Utils/query/keys";
import { getlistOfBasicForm } from "Queries/agency/ListOfForms";
import {
  componentStatements,
  LanguageKeys,
} from "PagesComponents/Agency/FormsWall/const";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { listOfBasicForm_ResParams } from "Consts/agents";
import { signOut, useSession } from "next-auth/react";
import { getAgencyDetail } from "Queries/agency";
import { getLocalStorage } from "Utils";
import { Status, UserRole } from "Interfaces/Database";
import { LocalStorageKeys } from "Interfaces";
import ErrorToast from "Elements/Toast/Error";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Loading } from "Elements/Loading/Loading";
import { ContentOrError } from "Components/contentOrError";
import { isAgencyLogedIn, Logout } from "Utils/user";
import { useRouter } from "next/router";
import NotFound from "pages/404";
import { Layer1_SubtitleStyle } from "Styles/Theme/Layers/layer1/style";

const FormsWall: NextPage = () => {
  const { locale } = useLocale();
  const [isShow, setIsShow] = useState<boolean | null>(null);
  const { t } = useStaticTranslation(componentStatements);
  const { data: session } = useSession();

  const reqParams = `email == "${session?.user?.email || "defensive"}"`;
  const resParams = `
      email,
      status
      `;

  const { isLoading, isError } = useQuery(
    AgencyQueryKeys.detail({
      reqParams,
      resParams,
    }),
    () => {
      return getAgencyDetail({
        reqParams,
        resParams,
      });
    },
    {
      onSuccess: (data) => {
        // اگه تو بروز کاربر ایمیلی وجود داشت اما توی دیتابیس کاربری نبود،  لاگ اوت کن
        // این حالت وقتی پیش میاد که یوزر از دیتابیس پاک شده باشه اما هنوز تو کوکی مرورگر مقدار داشته باشه
        if (
          data?.agency?.[0]?.email &&
          data?.agency?.[0]?.email !== session?.user?.email
        ) {
          ErrorToast("We have trouble with your account. Please login again");
          Logout(`/${locale}/auth/signin`);
        }
        // اگه اکانت ایجنسی دی اکتیو بود چیزی نشون نده
        if (data?.agency?.[0]?.status === Status.ACTIVE) {
          setIsShow(true);
        } else {
          setIsShow(false);
        }
      },
    }
  );
  //
  useEffect(() => {
    if (getLocalStorage(LocalStorageKeys.User_Role) !== UserRole.Agency) {
      window.location.replace(
        `/${locale}/auth/signin?user_role=${UserRole.Agency.toLowerCase()}`
      );
    }
  }, []);

  //
  if (isAgencyLogedIn())
    return (
      <PageLayout>
        <Seo
          title={t(LanguageKeys.SeoTitle)}
          description={t(LanguageKeys.SeoDesc)}
          canonical={`https://www.marabox.com.au/${locale}/agency/forms-wall`}
          isNoIndex={true}
        />
        {(isShow === null || isLoading) && <StyledLoading />}
        {isShow === false && (
          <NeedConfirmDesc>{t(LanguageKeys.NeedConfirm)}</NeedConfirmDesc>
        )}
        {isShow === true && (
          <ContentOrError isError={isError} content={<Content />} />
        )}
      </PageLayout>
    );
  else {
    return (
      <>
        <NotFound />{" "}
      </>
    );
  }
};
export default FormsWall;
export const getServerSideProps: GetServerSideProps = withCSR(
  async (ctx: NextPageContext) => {
    //
    const queryClient = new QueryClient();
    let statusCode = null;
    const resParams = listOfBasicForm_ResParams;
    try {
      await queryClient.fetchQuery(
        ClientQueryKeys.listOfBasicForm({ resParams }),
        () =>
          getlistOfBasicForm({
            lastFormDate: new Date().toISOString(),
            resParams,
          })
      );
    } catch (error: any) {
      if (ctx.res) ctx.res.statusCode = error?.response?.status;
      statusCode = ctx?.res?.statusCode || null;
    }
    return {
      props: {
        statusCode: statusCode,
        dehydratedState: dehydrate(queryClient),
      },
    };
  }
);

const StyledLoading = styled(Loading)`
  width: 10rem;
  height: 10rem;
  margin: auto;
`;
const NeedConfirmDesc = styled.p`
  ${Layer1_SubtitleStyle};
  margin-bottom: 4rem;
`;
