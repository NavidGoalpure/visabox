import { NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import styled from 'styled-components';
import Content from 'PagesComponents/Clients/BasicForms';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Clients/BasicForms/const';
import { FormDataContextProvider } from 'PagesComponents/Clients/BasicForms/Contexts/FormDataContext/Context';
import { useSession } from 'next-auth/react';
import { getClientDetail } from 'Queries/client';
import { useQuery } from 'react-query';
import { ClientQueryKeys } from 'Utils/query/keys';
import { Loading } from 'Elements/Loading';
import { ContentOrError } from 'Components/contentOrError';

const UserForms: NextPage = ({}) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const { data: session } = useSession();
  const reqParams = `email == "${session?.user?.email || 'defensive'}"`;
  const resParams = `
      _id,
      email,
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
        <Loading style={{ width: 'auto' }} />
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