import { Logo } from "Elements/Logo";
import Link from "next/link";
import React from "react";
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
import { layer2A_SubtitleStyle, layer2A_TextStyle } from "Styles/Theme/Layers/layer2/style";
import { Languages } from "Interfaces";

function Desktop() {
  const { locale } = useLocale();
  const { data: session } = useSession();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <Wrapper>
        <MenuItems>
          <NavigationMenu.Item>
            <Link href={`/${locale}`}>
              <Logo />
            </Link>
          </NavigationMenu.Item>

          <DesktopLanguageChanger />

          <DesktopOccupationDropdown />
          <DesktopBoxsesDropdown />
          {locale === Languages.fa &&
          <NavigationMenu.Item>
            <Link href={`/${locale}/blog`}>
              <Item>{t(LanguageKeys.Blogs)}</Item>
            </Link>
          </NavigationMenu.Item>
          }
        </MenuItems>
        <StyledMenuItem as={"div"}>
          {session ? (
            <AvatarComponent />
          ) : (
            <MenuLink href={`/${locale}/auth/signin`}>
              {t(LanguageKeys.Login)}
            </MenuLink>
          )}
        </StyledMenuItem>
      </Wrapper>
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
  padding: 0 1rem;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${dirFlexStyle}
  width: 100%;
  height: 5.5rem;
  max-width: var(--max-width-page);
  margin: 0 auto;
  direction: ltr;
`;
const MenuItems = styled(NavigationMenu.List)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${dirFlexStyle}
  width: auto;
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
