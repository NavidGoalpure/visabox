import { Logo } from "Elements/Logo";
import Link from "next/link";
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { boxShadow, directionStyles } from "Styles/Theme";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import theme from "styled-theming";
import { useLocale } from "Hooks/useLocale";
import { layer1_BG } from "Styles/Theme/Layers/layer1/theme";
import { layer3_TextStyle } from "Styles/Theme/Layers/layer3/style";
import { componentStatements, LanguageKeys } from "../const";
import DesktopLanguageChanger from "./LanguageChanger";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import DesktopBoxsesDropdown from "./dropdownBoxes";
import DesktopOccupationDropdown from "./dropdownOccupation";
import { useSession } from "next-auth/react";
import AvatarComponent from "../AvatarComponent";
import { layer2A_TextStyle } from "Styles/Theme/Layers/layer2/style";
import { Languages, LocalStorageKeys } from "Interfaces";
import { useRouter } from "next/router";
import { getLocalStorage, setLocalStorage } from "Utils";
import { isAgencyLogedIn } from "Utils/user";
import { Client } from "Interfaces/Database/Client";
import { SupportedCountry } from "Interfaces/Database";

function Desktop({ clientCountry }: { clientCountry: string }) {
    const [isMenuClicked, setIsMenuClicked] = useState<boolean | null>(null);
  const { locale } = useLocale();
  const { data: session } = useSession();
  const { t } = useStaticTranslation(componentStatements);
  const router = useRouter();
  return (
    <Container>
      <Wrapper>
        <Top>
          <MenuBurger
            id={`hamburg`}
            onClick={() => setIsMenuClicked(!isMenuClicked)}
          >
            <span aria-hidden id={"line1"} />
            <span aria-hidden id={"line2"} />
          </MenuBurger>
          <Link href={`/${locale}`}>
            <Logo />
          </Link>
          <StyledMenuItem as={"div"}>
            {session ? (
              <AvatarComponent />
            ) : (
              <MenuLink
                onClick={() =>
                  setLocalStorage({
                    key: LocalStorageKeys.Url_Before_Login,
                    value: window.location.href,
                  })
                }
                href={`/${locale}/auth/signin`}
              >
                {t(LanguageKeys.Login)}
              </MenuLink>
            )}
          </StyledMenuItem>
        </Top>
      </Wrapper>
      <Bottom>
        <MenuItems>
          <DesktopLanguageChanger />

          <DesktopOccupationDropdown clientCountry={clientCountry} />
          <DesktopBoxsesDropdown clientCountry={clientCountry} />
          {(clientCountry === SupportedCountry.Iran ||
            getLocalStorage(LocalStorageKeys.Country) ===
              SupportedCountry.Iran) && (
            <NavigationMenu.Item>
              <Link href={`/fa/blog`}>
                <Item>{t(LanguageKeys.Blogs)}</Item>
              </Link>
            </NavigationMenu.Item>
          )}
          {isAgencyLogedIn() && (
            <NavigationMenu.Item>
              <Link href={`/${locale}/agency/forms-wall`}>
                <Item>{t(LanguageKeys.FormsWall)}</Item>
              </Link>
            </NavigationMenu.Item>
          )}
        </MenuItems>
      </Bottom>
    </Container>
  );
}

export { Desktop };

const Container = styled(NavigationMenu.Root)`
  ${layer1_BG}
  ${directionStyles}
  ${boxShadow};
  z-index: 10;
  width: 100%;
  // padding: 0 1rem;
`;
const dirFlexStyle = theme("languageDirection", {
  ltr: css`
    flex-direction: row;
  `,
  rtl: css`
    flex-direction: row-reverse;
  `,
});
const itemHover = theme("mode", {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  ${dirFlexStyle}
  height: 5.5rem;
  max-width: var(--max-width-page);
  margin: 0 auto;
  direction: ltr;
`;
const Top = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
align-items: center;
`;
const Bottom = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: var(--color-gray4);
padding: 1.5rem 0;
`;
const MenuItems = styled(NavigationMenu.List)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${dirFlexStyle}
  gap: 2rem;
`;
const MenuLink = styled(Link)`
  ${layer3_TextStyle};
  position: relative;
  :before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: 5px;
    width: 100%;
    overflow: hidden;
    transition: all 400ms ease;
    border-radius: 10px;
    pointer-events: none;
  }
  :hover {
    :before {
      bottom: -10px;
      background-color: var(--color-primary4);
      width: 100%;
      border-radius: 10px;
    }
  }
`;
const MenuBurger = styled.div`
  position: relative;
  height: 4rem;
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
const StyledMenuItem = styled(NavigationMenu.Item)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Item = styled.h4`
  ${layer2A_TextStyle}
  text-align: center;
  cursor: pointer;
  position: relative;
  width: 100%;
  max-width: max-content;
  transition: all 400ms ease;
  margin: auto;
  :before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: 5px;
    width: 100%;
    overflow: hidden;
    transition: all 400ms ease;
    border-radius: 10px;
  }
  :hover {
    ${itemHover}

    :before {
      bottom: -10px;
      background-color: var(--color-primary4);
      width: 100%;
      border-radius: 10px;
    }
  }
`;
