import { signIn } from 'next-auth/react';

import { Key, useEffect, useState } from 'react';
import MaraBgAnimation from 'Components/MaraBgAnimation';
import styled, { css } from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import theme from 'styled-theming';
import { FaDiscord, FaUser } from 'react-icons/fa';
import { RiBuilding2Fill } from 'react-icons/ri';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { CookieKeys } from 'Interfaces';
import { useLocale } from 'Hooks/useLocale';
import Cookies from 'js-cookie';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import {
  componentStatements,
  LanguageKeys,
} from 'PagesComponents/Auth/Signin/const';
import { Provider } from 'next-auth/providers';
import { UserRole } from 'Interfaces/Database';
import { layer2A_SubtitleStyle, layer2A_TextStyle, layer2A_style } from 'Styles/Theme/Layers/layer2/style';
import { boxShadow } from 'Styles/Theme';
import { useRouter } from 'next/router';
import { layer2A_Bg, layer2A_TextColor } from 'Styles/Theme/Layers/layer2/theme';

interface Props {
  authProviders: Provider[];
}
export default function SignInContent({ authProviders }: Props) {
  const router = useRouter();

  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const [userRole, setUserRol] = useState<UserRole | null>(null);
  useEffect(() => {
    const userRole_QueryParam = router?.query?.['user_role'];
    if (userRole_QueryParam === UserRole.Agency.toLowerCase())
      setUserRol(UserRole.Agency);

    if (userRole_QueryParam === UserRole.Client.toLowerCase())
      setUserRol(UserRole.Client);
  }, [router]);

  return (
    <MaraBgAnimation>
      <BlurContainer>
        <Title>{t(LanguageKeys.Title)}</Title>
        <RoleBoxContainer>
          <RoleBox
            isActive={userRole === UserRole.Client}
            onClick={() => setUserRol(UserRole.Client)}
          >
            <RoleUserIcon isActive={userRole === UserRole.Client} />
            {t(LanguageKeys.ClientTitle)}
          </RoleBox>
          <RoleBox
            isActive={userRole === UserRole.Agency}
            onClick={() => setUserRol(UserRole.Agency)}
          >
            <RoleInstitueIcon isActive={userRole === UserRole.Agency} />
            {t(LanguageKeys.AgentTitle)}
          </RoleBox>
        </RoleBoxContainer>
        {userRole &&
          authProviders.map(
            (
              provider: {
                name: string;

                id: any;
              },
              i: Key
            ) => (
              <SocialButton
                onClick={() => {
                  //چون با عوض شدن یوآرال لوکیل رو از دست میدیم، موقتا لوکیل رو توی کوکی ذخیره میکنیم
                  // تا در صفحه وریفیکیشن و در قسمت سرورسایدش بتونیم دوباره کاربر رو به لوکیل خودش برگردونیم
                  Cookies.set(CookieKeys.TemporaryLocale, locale, {
                    expires: 1,
                  });
                  Cookies.set(CookieKeys.UserRoleChosenInLoginPage, userRole, {
                    expires: 1,
                  });

                  signIn(provider.id);
                }}
                key={i}
              >
                {provider.name === 'Google' && <GoogleIcon />}
                {provider.name === 'Discord' && <DiscordIcon />}
                Sign in with {provider.name}
              </SocialButton>
            )
          )}
      </BlurContainer>
    </MaraBgAnimation>
  );
}

/////////////styles/////////

export const ContainerSelectColor = theme('mode', {
  light: css`
  background: var(--color-gray12);
  `,
  dark: css`
  background: var(--color-gray7);
  `,
});


const BlurContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 10rem;
`;
const Title = styled.h1`
  ${Layer1_TitleStyle}
  margin-bottom:1rem;
`;
const RoleBoxContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  margin-bottom: 4rem;
`;
const RoleBox = styled.div<{ isActive: boolean }>`
${layer2A_Bg};
${layer2A_TextColor}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${({ isActive }) => (isActive ?
    css`
    ${layer2A_SubtitleStyle};
    ${ContainerSelectColor};
    width: 16.5rem;
    height: 10.5rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    `
    :

    css`
    ${layer2A_TextStyle};
    width: 13.25rem;
    height: 9rem;
    `)}
  border-radius: 15px;
  padding: 1rem;
  gap: 1rem;
  transition: all 400ms ease;
`;

const RoleUserIcon = styled(FaUser) <{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive ? 'width: 3rem; height: 3rem;' : 'width: 2rem; height: 2rem;'}

  flex-shrink: 0;
  background: var(--color-primary4);
  color: white;
  padding: 8px;
  border-radius: 50%;

  transition: all 400ms ease;
`;
const RoleInstitueIcon = styled(RiBuilding2Fill) <{ isActive: boolean }>`
  ${({ isActive }) =>
    isActive ? 'width: 3rem; height: 3rem;' : 'width: 2rem; height: 2rem;'}
  
  transition: all 400ms ease;
  flex-shrink: 0;
  background: var(--color-primary4);
  color: white;
  padding: 8px;
  border-radius: 50%;
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
