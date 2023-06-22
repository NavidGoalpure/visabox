import React, { useState } from "react";
import styled from "styled-components";
import useTheme from "Hooks/useTheme";
import * as MaraSelect from "Elements/Select";
import { Languages, ThemeModes } from "Interfaces";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useSession } from "next-auth/react";
import SwitchTheme from "../../switchTheme";
import { Headline5Style } from "Styles/Typo";
import { Loading } from "Elements/Loading";
import PopOver from "Elements/PopOver";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "./const";
import { directionStyles } from "Styles/Theme";
function DesktopProfileOptions() {
  const { data: session } = useSession();
  const smartTextObj: Record<Languages, string> = {
    en: "English",
    fa: "فارسی",
  };
  const { t } = useStaticTranslation(componentStatements);
  const { theme, setTheme } = useTheme();
  return (
    <StyledNavigationMenuItem>
      <PopOver
        trigger={
          <Avatar
            src={session?.user?.image || "/Images/placeholder.jpeg"}
            alt={"user-profile"}
          />
        }
        content={
          <PopOverContentContainer>
            <PopOverItemContainer
              onClick={() => {
                theme === ThemeModes.DARK
                  ? setTheme(ThemeModes.LIGHT)
                  : setTheme(ThemeModes.DARK);
              }}
            >
              <MaraItemTitle>{t(LanguageKeys.IsBasicFormShowable)}</MaraItemTitle>
              
            </PopOverItemContainer>
            <PopOverItemContainer
              onClick={() => {
                theme === ThemeModes.DARK
                  ? setTheme(ThemeModes.LIGHT)
                  : setTheme(ThemeModes.DARK);
              }}
            >
              <MaraItemTitle>{t(LanguageKeys.ChangeTheme)}</MaraItemTitle>
              <SwitchTheme />
            </PopOverItemContainer>
          </PopOverContentContainer>
        }
      />
    </StyledNavigationMenuItem>
  );
}

export default DesktopProfileOptions;
const StyledNavigationMenuItem = styled(NavigationMenu.Item)`
  list-style-type: none;
`;
///////////////
const Avatar = styled.img`
  border-radius: 50%;
  width: 3rem;
  outline: 2px solid var(--color-gray7);
  cursor: pointer;
`;
const PopOverContentContainer = styled.div``;
const PopOverItemContainer = styled.div`
${directionStyles}
  width: max-content;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
`;
const MaraItemTitle = styled.h4`
  ${Headline5Style};
  color: var(--color-gray4);
`;
