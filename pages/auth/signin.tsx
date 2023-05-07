import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from 'next';
import { signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';
import PageLayout from 'Components/Layouts/PageContainer';
import { Key } from 'react';
import Seo from 'Components/Seo';
import MaraBgAnimation from 'Components/MaraBgAnimation';
import styled, { css } from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import theme from 'styled-theming';
import { FaDiscord } from 'react-icons/fa';
import {
  Layer1_SubtitleStyle,
  Layer1_TitleStyle,
} from 'Styles/Theme/Layers/layer1/style';

export default function SignIn({
  providers,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <StyledPageLayout>
      <Seo
        title={'Login/Register'}
        canonical={`https://www.marabox.com/auth/signin`}
        isNoIndex={true}
      />
      <MaraBgAnimation>
        <BlurContainer>
          <Title>Login</Title>
          <Subtitle>
            Use your Google or Discord accounts for Signing or Register.
          </Subtitle>
          {providers.map(
            (
              provider: {
                name: string;

                id: any;
              },
              i: Key
            ) => (
              <SocialButton onClick={() => signIn(provider.id)} key={i}>
                {provider.name === 'Google' && <GoogleIcon />}
                {provider.name === 'Discord' && <DiscordIcon />}
                Sign in with {provider.name}
              </SocialButton>
            )
          )}
        </BlurContainer>
      </MaraBgAnimation>
    </StyledPageLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!

  //navid
  // این خط باعث میشه بعد از لاگین به زبان فارسی که دیفالت هست بره
  // باید بفهمیم زبان کاربر چی بوده تا بفرستیمش همونجا
  if (session) {
    return { redirect: { destination: '/client/verification' } };
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
const BlurContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //
  // padding: 32px 24px;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 10rem;
  padding: 3rem 1.5rem;
`;
const Title = styled.h1`
  ${Layer1_TitleStyle}
  margin-bottom:1rem;
`;
/////////
const SubtitleColor = theme('mode', {
  light: css`
    color: var(--color-gray9);
  `,
  dark: css`
    color: var(--color-gray11);
  `,
});
//////////////
const Subtitle = styled.h1`
  ${Layer1_SubtitleStyle}
  ${SubtitleColor}
`;
const SocialButtonTheme = theme('mode', {
  light: css`
    background: var(--color-gray13);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  `,
  dark: css`
    background: #ffffff;
  `,
});
const SocialButton = styled.button`
  ${SocialButtonTheme}
  width: 80%;
  max-width: 21rem;
  height: 3rem;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  cursor: pointer;
  &:hover {
    background-color: var(--color-gray12);
    outline-offset: 3px;
  }
  &:focus {
    background-color: var(--color-gray11);
    outline-offset: 3px;
  }
`;
const GoogleIcon = styled(FcGoogle)`
  width: 2rem;
  height: 2rem;
  margin-inline-end: 1rem;
`;
const DiscordIcon = styled(FaDiscord)`
  fill: #7289d9;
  width: 2rem;
  height: 2rem;
  margin-inline-end: 1rem;
`;
