import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { boxShadow, directionStyles } from "Styles/Theme";
import { layer1_BG } from "Styles/Theme/Layers/layer1/theme";
import theme from "styled-theming";
import gsap from "gsap";
import SwitchTheme from "./switchTheme";
import Link from "next/link";
import { useLocale } from "Hooks/useLocale";
import { layer3_TitleStyle } from "Styles/Theme/Layers/layer3/style";
import LanguageChanger from "./LanguageChanger";

function SmartHeader() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean | null>(null);
  const { locale } = useLocale();

  const hamburgerAnimationRef = useRef<gsap.core.Timeline>();
  const popupAnimationRef = useRef<gsap.core.Timeline>();
  useEffect(() => {
    hamburgerAnimationRef.current = gsap
      .timeline({ paused: true })
      .add("start")
      .to(
        "#hamburg",
        {
          duration: 0.2,
          y: 10,
        },
        "start"
      )
      .to(
        `#line1`,
        {
          duration: 0.2,
          y: 6,
        },
        "start"
      )
      .to(
        `#line2`,
        {
          duration: 0.2,
          y: -6,
        },
        "start"
      )
      .to(
        `#line1`,
        {
          duration: 0.1,
          rotate: 45,
          transformOrigin: "50% 50%",
        },
        "+=0.1"
      )

      .to(
        `#line2`,
        {
          duration: 0.1,
          rotate: -45,
          transformOrigin: "50% 50%",
        },
        "-=0.1"
      );
    popupAnimationRef.current = gsap
      .timeline({ paused: true })
      .to("#popup", { x: "100vw", duration: 0.3 }, "-=0.1");
  }, []);
  useEffect(() => {
    if (isMenuClicked) {
      popupAnimationRef.current?.restart();
      hamburgerAnimationRef.current?.restart();
    }
    if (isMenuClicked === false) {
      popupAnimationRef.current?.reverse();
      hamburgerAnimationRef.current?.reverse();
    }
  });
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <Container>
      <Wrapper>
        <MenuPopupContainer id={"popup"}>
          <Nav>
            <MenuLink href={`/${locale}`}>Home</MenuLink>
            <Hr />
            <MenuLink href={`/${locale}/occupations`}>
              Skilled Occupation List
            </MenuLink>
            <Hr />
            <MenuLink href={`/${locale}/businesses/lawyers`}>
              Lawyers List
            </MenuLink>
            <Hr />
          </Nav>
          <LanguageChanger />
          <Hr />
          <SwitchTheme />
        </MenuPopupContainer>
        <MenuBurger
          id={`hamburg`}
          onClick={() => setIsMenuClicked(!isMenuClicked)}
        >
          <span aria-hidden id={"line1"} />
          <span aria-hidden id={"line2"} />
        </MenuBurger>
      </Wrapper>
    </Container>
  );
}
export default SmartHeader;
//there was a theme in the layers like this one but it was for color not background so i couldn't use it
const MenuBurgerTheme = theme("mode", {
  light: css`
    background: var(--color-gray8);
  `,
  dark: css`
    background: var(--color-gray10);
  `,
});
const PopupBagroundTheme = theme("mode", {
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
  width: 100%;
  padding: 0 1rem;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
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
  padding: 6.5rem 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  position: fixed;
  top: 0;
  left: -100vw;
  z-index: 3;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
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
