import { NextPage } from "next";
import PageLayout from "Components/Layouts/PageContainer";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { useLocale } from "Hooks/useLocale";
import Seo from "Components/Seo";
import styled from "styled-components";
import Content from "PagesComponents/Clients/PointCalculator";
import {
  componentStatements,
  LanguageKeys,
} from "PagesComponents/Clients/PointCalculator/const";
import { FormDataContextProvider } from "PagesComponents/Clients/PointCalculator/Contexts/FormDataContext/Context";
import { useSession } from "next-auth/react";
import { getClientDetail } from "Queries/client";
import { useQuery } from "react-query";
import { ClientQueryKeys } from "Utils/query/keys";
import { Loading } from "Elements/Loading";
import { ContentOrError } from "Components/contentOrError";
import ErrorToast from "Elements/Toast/Error";
import { signOut } from "next-auth/react";
import { deviceMin } from "Consts/device";
import { Point_Calculator_Fragment } from "Consts/GroqFragments";
import { LocalStorageKeys } from "Interfaces";
import { UserRole } from "Interfaces/Database";
import { getLocalStorage } from "Utils";
import NotFound from "pages/404";

const UserForms: NextPage = ({}) => {
  const { locale } = useLocale();

  const { t } = useStaticTranslation(componentStatements);
  const { data: session } = useSession();
  const reqParams = `email == "${session?.user?.email || "defensive"}"`;
  const resParams = `
  ${Point_Calculator_Fragment}
      _id,
      country,
      email,
      name,
      lastname,
      phone,
      field_of_study,
      current_job,
      is_sharable,
      uni_section,
      completed_forms
      `;

  const { data, isLoading, isError } = useQuery(
    ClientQueryKeys.detail({
      reqParams,
      resParams,
    }),
    () => {
      return getClientDetail({
        reqParams,
        resParams,
      });
    },
    {
      enabled: !!session?.user?.email,
      onSuccess: (data) => {
        // اگه تو بروز کاربر ایمیلی وجود داشت اما توی دیتابیس کاربری نبود،  لاگ اوت کن
        // این حالت وقتی پیش میاد که یوزر از دیتابیس پاک شده باشه اما هنوز تو کوکی مرورگر مقدار داشته باشه
        if (!data?.client?.[0]?._id || !data?.client?.[0]?.email) {
          ErrorToast("We have troble with your accunt. Please login again");
          signOut();
        }
      },
    }
  );

  //
  if (getLocalStorage(LocalStorageKeys.User_Role) === UserRole.Agency)
    return (
      <StyledPageLayout hasBanner={false} hasFooter={false}>
        <Seo
          title={t(LanguageKeys.SeoTitle)}
          description={t(LanguageKeys.SeoDesc)}
          canonical={`https://www.marabox.com/${locale}/clients/point-calculator`}
        />
        {isLoading ? (
          <Loading style={{ width: "auto" }} />
        ) : (
          <FormDataContextProvider prevData={data?.client?.[0]}>
            <ContentOrError isError={isError} content={<Content />} />
          </FormDataContextProvider>
        )}
      </StyledPageLayout>
    );
    return <NotFound />
};
export default UserForms;
const StyledPageLayout = styled(PageLayout)`
  max-width: none;
`;
