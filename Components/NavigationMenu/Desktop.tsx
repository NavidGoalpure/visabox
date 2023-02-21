import { Logo } from "Elements/Logo";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { boxShadow, directionStyles } from "Styles/Theme";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import SwitchTheme from "./switchTheme";
import { useLocale } from "Hooks/useLocale";
import { layer1_BG } from "Styles/Theme/Layers/layer1/theme";
import { layer3_TextStyle } from "Styles/Theme/Layers/layer3/style";
import MartSelect from "Elements/Select";
import { Languages } from "Interfaces";
import BritishFlag from "./Images/BritishFlag.svg";
import IranFlag from "./Images/IranFlag.svg";
import Image from "next/image";

function Desktop() {
  const { locale } = useLocale();
  const smartTextObj: Record<Languages, string> = {
    en: "English",
    fa: "فارسی",
  };
  return (
    <Container>
      <Wrapper>
        <NavigationMenu.Item>
          <Link href={`/${locale}/occupations`}>
            <Logo />
          </Link>
        </NavigationMenu.Item>
        <MenuItems>
          <NavigationMenu.Item>
            <MenuLink href={`/${locale}/occupations`}>
              Skilled Occupation List
            </MenuLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <MenuLink href={`/${locale}/businesses/lawyers`}>
              Lawyers List
            </MenuLink>{" "}
          </NavigationMenu.Item>
          <MartSelect
            triggerText={smartTextObj[locale]}
            options={[
              {
                value: smartTextObj.en,
                icon: (
                  <FlagWrapper>
                    <Flag fill src={BritishFlag} alt={"england flag"} />
                  </FlagWrapper>
                ),
              },
              {
                value: smartTextObj.fa,
                icon: (
                  <FlagWrapper>
                    <Flag fill src={IranFlag} alt={"iran flag"} />
                  </FlagWrapper>
                ),
              },
            ]}
          />
          <SwitchTheme />
        </MenuItems>
      </Wrapper>
    </Container>
  );
}

export { Desktop };

const Container = styled(NavigationMenu.Root)`
  ${layer1_BG}
  ${directionStyles}
  ${boxShadow};

  width: 100%;
  padding: 0 1rem;
`;
const Wrapper = styled(NavigationMenu.List)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.5rem;
  max-width: var(--max-width-page);
  margin: 0 auto;
`;
const MenuItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  gap: 1rem;
`;
const MenuLink = styled(Link)`
  ${layer3_TextStyle};
`;
const FlagWrapper = styled.div`
  width: 2.25rem;
  height: 2.25rem;
`;
const Flag = styled(Image)`
  position: relative !important;
`;
