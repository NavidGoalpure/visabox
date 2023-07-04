import { NextPage } from "next";
import PageLayout from "Components/Layouts/PageContainer";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { useLocale } from "Hooks/useLocale";
import Seo from "Components/Seo";
import styled from "styled-components";
import Content from "PagesComponents/Clients/BasicForms";
import {
  componentStatements,
  LanguageKeys,
} from "PagesComponents/Clients/BasicForms/const";
import { FormDataContextProvider } from "PagesComponents/Clients/BasicForms/Contexts/FormDataContext/Context";
import { useSession } from "next-auth/react";
import { getClientDetail } from "Queries/client";
import { useQuery } from "react-query";
import { ClientQueryKeys } from "Utils/query/keys";
import { Loading } from "Elements/Loading";
import { ContentOrError } from "Components/contentOrError";
import ErrorToast from "Elements/Toast/Error";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const UserForms: NextPage = ({}) => {
  const { locale } = useLocale();
  const router = useRouter();

  const { t } = useStaticTranslation(componentStatements);
  const { data: session } = useSession();
  const reqParams = `email == "${session?.user?.email || "defensive"}"`;
  const resParams = `
      _id,
      email,
      name,
      lastname,
      visa_subclass,
      age,
      phone,
      marital,
      marital_situation,
      field_of_study,
      degree,
      australian_educational_qualification,
      designated_regional_area_study,
      specialist_educational_qualification,
      professional_year_in_australia,
      accredited_community_language,
      current_job,
      work_experience,
      australian_work_experience,
      ielts_score,
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

  return (
    <StyledPageLayout hasBanner={false} hasFooter={false}>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com/${locale}/clients/basic-form`}
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
};
export default UserForms;
const StyledPageLayout = styled(PageLayout)`
  max-width: none;
  #PageContainer-content {
    padding: 0;
  }
`;
