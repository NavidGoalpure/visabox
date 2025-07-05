import { GetServerSideProps, NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Australia-migration-ai/Chat/const';
import { useLocale } from 'Hooks/useLocale';
import Content from 'PagesComponents/Australia-migration-ai/Chat';
import Seo from 'Components/Seo';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { ContentOrError } from 'Components/contentOrError';
import { AiChatContextProvider } from 'PagesComponents/Australia-migration-ai/Chat/hooks/useAiCredit';

interface Props {
  errorCode?: string;
}
const AIChatPages: NextPage<Props> = ({ errorCode }) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);

  return (
    <PageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com.au/${locale}/australia-migration-ai/chat`}
      />
      <ContentOrError
        isError={!!errorCode}
        content={
          <AiChatContextProvider>
            <Content />
          </AiChatContextProvider>
        }
      />
    </PageLayout>
  );
};

export default AIChatPages;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getServerSession(context.req, context.res, authOptions);
  try {
    return {
      props: {
        //When you supply a session prop in _app.js, useSession won't show a loading state, as it'll already have the session available.
        // In this way, you can provide a more seamless user experience.
        session,
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
