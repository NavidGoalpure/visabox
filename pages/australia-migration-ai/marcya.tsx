import { GetServerSideProps, NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Australia-migration-ai/Marcya/const';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import styled from 'styled-components';
import Content from 'PagesComponents/Australia-migration-ai/Marcya';
import { getServerSession } from 'next-auth';
import { getClientDetail, getUserCountry } from 'Queries/client';
import { Client } from 'Interfaces/Database/Client';
import { ContentOrError } from 'Components/contentOrError';
import { AxiosError } from 'axios';

interface Props {
  userData: Client | null;
  errorCode?: string;
}
const AIIntroduction: NextPage<Props> = ({ errorCode, userData }) => {
  console.log('***navid2 userData=', userData);

  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <StyledPageLayout>
      {/* // navid seo */}
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com.au/${locale}/landing/AI`}
      />
      <ContentOrError
        isError={!!errorCode}
        content={
          <Content
            isLogin={!!(userData as Client)?.email}
            userCountry={(userData as Client)?.country}
          />
        }
      />
    </StyledPageLayout>
  );
};
export default AIIntroduction;

const StyledPageLayout = styled(PageLayout)`
  max-width: none;
  #PageContainer-content {
    padding: 0;
  }
`;
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    );
    const reqParams = `email == "${session?.user?.email || 'defensive'}"`;
    const resParams = `country,email`;
    const userData = await getClientDetail({
      reqParams,
      resParams,
    });

    return {
      props: {
        //When you supply a session prop in _app.js, useSession won't show a loading state, as it'll already have the session available.
        // In this way, you can provide a more seamless user experience.
        session,
        userData: userData?.client[0] || null,
      },
    };
  } catch (error: any) {
    return {
      props: {
        ErrorCode: '500',
      },
    };
  }
};
