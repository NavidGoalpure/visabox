import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { boxShadow, directionStyles } from 'Styles/Theme';
import { layer1_BG } from 'Styles/Theme/Layers/layer1/theme';
import theme from 'styled-theming';

import SwitchTheme from '../switchTheme';
import Link from 'next/link';
import { useLocale } from 'Hooks/useLocale';
import {
  layer3_SubtitleStyle,
  layer3_TitleStyle,
} from 'Styles/Theme/Layers/layer3/style';
import MobileLanguageChanger from './LanguageChanger';
import { ScrollBox } from 'Elements/ScrollBox';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, getGsapTimeLine, LanguageKeys } from '../const';
import OccupationDropdown from './dropdownOccupation';
import MobileBoxesDropdown from './dropdownLists';
import { useSession } from 'next-auth/react';
import AvatarComponent from '../AvatarComponent';
import { LocalStorageKeys } from 'Interfaces';
import { getLocalStorage, setLocalStorage } from 'Utils';
import { isAgencyLogedIn } from 'Utils/user';
import { SupportedCountry } from 'Interfaces/Database';
import MobileFormsDropdown from './dropdownForms';

function SmartHeader({ clientCountry }: { clientCountry: string }) {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean | null>(null);
  const { locale } = useLocale();

  const { t } = useStaticTranslation(componentStatements);
  const { data: session } = useSession();
  const hamburgerAnimationRef = useRef<gsap.core.Timeline>();
  const popupAnimationRef = useRef<gsap.core.Timeline>();
  useEffect(
    () => getGsapTimeLine({ hamburgerAnimationRef, popupAnimationRef }),
    []
  );
  useEffect(() => {
    document.body.style.overflow = 'unset';
    if (isMenuClicked) {
      popupAnimationRef.current?.restart();
      hamburgerAnimationRef.current?.restart();
      document.body.style.overflow = 'hidden';
    }
    if (isMenuClicked === false) {
      popupAnimationRef.current?.reverse();
      hamburgerAnimationRef.current?.reverse();
      document.body.style.overflow = 'unset';
    }
  }, [isMenuClicked]);

  return (
    <Container>
      <Wrapper>
        {session ? (
          <AvatarComponent />
        ) : (
          <Signin
            onClick={() =>
              setLocalStorage({
                key: LocalStorageKeys.Url_Before_Login,
                value: window.location.href,
              })
            }
            href={`/${locale}/auth/signin`}
          >
            {t(LanguageKeys.Login)}
          </Signin>
        )}

        <MenuPopupContainer id={'popup'}>
          <ScrollBox id={'scrollbox'} height={'18rem'}>
            <MenuPopupWrapper>
              <Nav>
                <MenuLink href={`/${locale}`}>{t(LanguageKeys.Home)}</MenuLink>
                <Hr />
              </Nav>
              <MobileBoxesDropdown clientCountry={clientCountry} />
              <Hr />
              <OccupationDropdown clientCountry={clientCountry} />
              <Hr />
              {!isAgencyLogedIn() && <MobileFormsDropdown />}
              {(clientCountry === SupportedCountry.Iran ||
                getLocalStorage(LocalStorageKeys.Country) ===
                  SupportedCountry.Iran) && (
                <>
                  <Hr />
                  <MenuLink href={`/fa/blog`}>{t(LanguageKeys.Blogs)}</MenuLink>
                </>
              )}
              {isAgencyLogedIn() && (
                <>
                  <Hr />
                  <MenuLink href={`/${locale}/agency/forms-wall`}>
                    {t(LanguageKeys.FormsWall)}
                  </MenuLink>
                </>
              )}
              <Hr />
              <RowContainer>
                <MobileLanguageChanger />
                <SwitchTheme />
              </RowContainer>
            </MenuPopupWrapper>
          </ScrollBox>
        </MenuPopupContainer>
        <MenuBurger
          id={`hamburg`}
          onClick={() => setIsMenuClicked(!isMenuClicked)}
        >
          <span aria-hidden id={'line1'} />
          <span aria-hidden id={'line2'} />
        </MenuBurger>
      </Wrapper>
    </Container>
  );
}
export default SmartHeader;

const PopupBagroundTheme = theme('mode', {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray2);
  `,
});
const Container = styled.div`
  ${layer1_BG}
  ${directionStyles}
  ${boxShadow};
  z-index: 10;
  width: 100%;
  padding: 0 1rem;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 100%;
  height: 3rem;
  max-width: var(--max-width-page);
  margin: 0 auto;
`;
const MenuPopupContainer = styled.div`
  ${PopupBagroundTheme};
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: -100vw;
  padding-top: 6.5rem;
  z-index: 3;
  #scrollbox {
    height: 100%;
  }
`;
const MenuPopupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  margin-right: 1rem;
  padding: 0 3rem;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
`;
const Hr = styled.hr`
  width: 100%;
  height: 1px;
  background: var(--color-gray10);
`;
const MenuLink = styled(Link)`
  ${layer3_TitleStyle};
  text-align: start;
  width: 100%;
`;

const RowContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Signin = styled(MenuLink)`
  ${layer3_SubtitleStyle};
  text-align: start;
  width: fit-content;
  direction: rtl;
`;

const MenuBurger = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  left: 1rem;
  width: 3rem;
  z-index: 4;
  span {
    position: absolute;
    top: 40%;
    left: 0;
    background: var(--color-gray10);
    border-radius: 100px;
    width: 2.5rem;
    height: 4px;
  }
  span:nth-child(2) {
    top: 65%;
  }
`;
