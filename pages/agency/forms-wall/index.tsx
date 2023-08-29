import { NextPage, GetServerSideProps, NextPageContext } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import Content from 'PagesComponents/Agents/FormsWall';
import { withCSR } from 'Hoc/withCSR';
import { AgencyQueryKeys, ClientQueryKeys } from 'Utils/query/keys';
import { getlistOfBasicForm } from 'Queries/agency/ListOfForms';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Agents/FormsWall/const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { listOfBasicForm_ResParams } from 'Consts/agents';
import { signOut, useSession } from 'next-auth/react';
import { getAgencyDetail } from 'Queries/agency';
import { getLocalStorage } from 'Utils';
import { Status, UserRole } from 'Interfaces/Database';
import { LocalStorageKeys } from 'Interfaces';
import ErrorToast from 'Elements/Toast/Error';
import { useState } from 'react';
import styled from 'styled-components';
import { Loading } from 'Elements/Loading';
import { ContentOrError } from 'Components/contentOrError';
import { isAgancyLogedIn } from 'Utils/user';

const FormsWall: NextPage = () => {
  const { locale } = useLocale();
  const [isShow, setIsShow] = useState<boolean | null>(null);

  const { t } = useStaticTranslation(componentStatements);
  const { data: session } = useSession();
  const reqParams = `email == "${session?.user?.email || 'defensive'}"`;
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
      enabled: isAgancyLogedIn(session),
      onSuccess: (data) => {
        // اگه تو بروز کاربر ایمیلی وجود داشت اما توی دیتابیس کاربری نبود،  لاگ اوت کن
        // این حالت وقتی پیش میاد که یوزر از دیتابیس پاک شده باشه اما هنوز تو کوکی مرورگر مقدار داشته باشه

        if (!data?.agency?.[0]?.email) {
          ErrorToast('We have troble with your accunt. Please login again');
          signOut();
        }
        // اگه اکانت ایجنسی دی اکتیو بود چیزی نشون نده
        if (data?.agency?.[0]?.status === Status.DEACTIVE) {
          setIsShow(true);
        } else {
          setIsShow(false);
        }
      },
    }
  );

  //
  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/agency/forms-wall`}
        isNoIndex={true}
      />
      {(isShow === null || isLoading) && <StyledLoading />}
      {isShow === false && <p>{t(LanguageKeys.NeedConfirm)}</p>}
      {isShow === true && (
        <ContentOrError isError={isError} content={<Content />} />
      )}
    </PageLayout>
  );
};
export default FormsWall;
const StyledLoading = styled(Loading)`
  width: 10rem;
  height: 10rem;
  margin: auto;
`;
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
