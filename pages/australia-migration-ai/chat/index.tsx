import { GetServerSideProps, NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Lists/SocialPage/const';
import { useLocale } from 'Hooks/useLocale';
import Content from 'PagesComponents/Australia-migration-ai/Chat';
import Seo from 'Components/Seo';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { getCredit } from 'Queries/client';
import { Client } from 'Interfaces/Database/Client';
import { ContentOrError } from 'Components/contentOrError';

interface Props {
  aiAgentId: string;
  userData: Client | null;
  errorCode?: string;
}
const MarcyaPages: NextPage<Props> = ({ aiAgentId, userData, errorCode }) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);

  return (
    <PageLayout>
      {/* navid correct seo */}
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com.au/${locale}/australia-migration-ai/chat`}
      />
      <ContentOrError
        isError={!!errorCode}
        content={
          <Content
            aiAgentId={aiAgentId}
            userData={userData || ({} as Client)}
          />
        }
      />
    </PageLayout>
  );
};

export default MarcyaPages;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  try {
    const userData = await getCredit(session?.user?.email || undefined);
    return {
      props: {
        //When you supply a session prop in _app.js, useSession won't show a loading state, as it'll already have the session available.
        // In this way, you can provide a more seamless user experience.
        session,
        aiAgentId: process?.env?.MIGRATION_AGENT_ID || 'defensive',
        userData: userData || {},
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
