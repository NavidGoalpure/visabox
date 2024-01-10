import { GetServerSideProps, NextPage } from 'next';
import PageLayout from 'Components/Layouts/PageContainer';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import Seo from 'Components/Seo';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Australia-migration-ai/IntroduceMarcya/const';
import { authOptions } from 'pages/api/auth/[...nextauth]';
import styled from 'styled-components';
import Content from 'PagesComponents/Australia-migration-ai/IntroduceMarcya';
import { getServerSession } from 'next-auth';

const AIIntroduction: NextPage = () => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <StyledPageLayout>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com.au/${locale}//australia-migration-ai/introduce-marcia`}
      />
      <Content />
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
