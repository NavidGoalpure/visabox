import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';
import PageLayout from 'Components/Layouts/PageContainer';
import Seo from 'Components/Seo';
import styled from 'styled-components';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Auth/Signin/const';
import SignInContent from 'PagesComponents/Auth/Signin';

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <StyledPageLayout hasBanner={false}>
      <Seo
        title={t(LanguageKeys.SeoTitle)}
        description={t(LanguageKeys.SeoDesc)}
        canonical={`https://www.marabox.com.au/auth/signin`}
        isNoIndex={true}
      />
      <SignInContent authProviders={providers} />
    </StyledPageLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!

  if (session) {
    return {
      redirect: { destination: `/auth/verification` },
    };
  }

  const providers = authOptions.providers;
  return {
    props: { providers: JSON.parse(JSON.stringify(providers)) ?? [] },
  };
}
/////////////styles/////////
const StyledPageLayout = styled(PageLayout)`
  #PageContainer-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
