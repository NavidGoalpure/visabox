import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { boxShadow, directionStyles } from "Styles/Theme";
import { layer1_BG } from "Styles/Theme/Layers/layer1/theme";
import theme from "styled-theming";

import SwitchTheme from "../switchTheme";
import Link from "next/link";
import { useLocale } from "Hooks/useLocale";
import {
  layer3_SubtitleStyle,
  layer3_TitleStyle,
} from "Styles/Theme/Layers/layer3/style";
import MobileLanguageChanger from "./LanguageChanger";
import { ScrollBox } from "Elements/ScrollBox";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "../const";
import OccupationDropdown from "./dropdownOccupation";
import MobileBoxesDropdown from "./dropdownLists";
import { useSession } from "next-auth/react";
import AvatarComponent from "../AvatarComponent";
import { Languages, LocalStorageKeys } from "Interfaces";
import { setLocalStorage } from "Utils";
import { isAgencyLogedIn } from "Utils/user";
import MobileFormsDropdown from "./dropdownForms";

function SmartHeader() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const { locale } = useLocale();

  const { t } = useStaticTranslation(componentStatements);
  const { data: session } = useSession();

  //
  useEffect(() => {
    if (isMenuClicked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Reset on component unmount
    };
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
            href={`/${locale}/auth/signin`}>
            {t(LanguageKeys.Login)}
          </Signin>
        )}

        {isMenuClicked && (
          <MenuPopupContainer id={"popup"}>
            <ScrollBox id={"scrollbox"} height={"18rem"}>
              <MenuPopupWrapper>
                <Nav>
                  <MenuLink href={`/${locale}`}>
                    {t(LanguageKeys.Home)}
                  </MenuLink>
                  <Hr />
                </Nav>
                <MobileBoxesDropdown />
                <Hr />
                <OccupationDropdown />

                {!isAgencyLogedIn() && (
                  <>
                    <Hr />
                    <MobileFormsDropdown />
                  </>
                )}
                {locale !== Languages.zh && (
                  <>
                    <Hr />
                    <MenuLink href={`/${locale}/blog`}>
                      {t(LanguageKeys.Blogs)}
                    </MenuLink>
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
        )}
        <MenuBurger
          isMenuClicked={isMenuClicked}
          id={`hamburg`}
          onClick={() => setIsMenuClicked(!isMenuClicked)}>
          <span aria-hidden id={"line1"} />
          <span aria-hidden id={"line2"} />
        </MenuBurger>
      </Wrapper>
    </Container>
  );
}
export default SmartHeader;

const PopupBagroundTheme = theme("mode", {
  light: css`
    background: var(--color-gray13);
  `,
  dark: css`
    background: var(--color-gray2);
  `,
});
const popupFromLeft = keyframes`
  0% {
    left:-100%;
  }
  100% {
    left:0;
  }
`;
const Container = styled.div`
  ${layer1_BG}
  ${directionStyles}
  ${boxShadow};
  z-index: 100;
  width: 100%;
  padding: 0.5rem 1rem;
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
  animation: ${popupFromLeft} 0.3s ease;
  width: 100vw;
  height: 100vh;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  padding-top: 6.5rem;
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

const MenuBurger = styled.div<{ isMenuClicked: boolean }>`
  position: absolute;
  top: 0;
  height: 100%;
  left: 1rem;
  width: 3rem;
  z-index: 1000;
  span {
    position: absolute;
    top: 40%;
    left: 0;
    background: var(--color-gray10);
    border-radius: 100px;
    width: 2.5rem;
    height: 4px;
    transform-origin: center top;
    transition: all 0.3s 0.3s ease, rotate 0.3s ease;
  }
  span:nth-child(2) {
    top: 65%;
  }
  ${({ isMenuClicked }) =>
    isMenuClicked &&
    css`
      span {
        top: 50%;
        transform: translateY(-50%);
        rotate: 45deg;
        transition: all 0.3s ease, rotate 0.3s 0.3s ease;
      }
      span:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
        rotate: -45deg;
      }
    `}
`;
