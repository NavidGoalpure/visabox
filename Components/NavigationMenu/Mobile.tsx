import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { boxShadow, directionStyles } from "Styles/Theme";
import { layer1_BG } from "Styles/Theme/Layers/layer1/theme";
import theme from "styled-theming";
import gsap from "gsap";
import SwitchTheme from "./switchTheme";
import Link from "next/link";
import { useLocale } from "Hooks/useLocale";

function SmartHeader() {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean | null>(null);
  const {locale} = useLocale()

  const hamburgerAnimationRef = useRef<gsap.core.Timeline>();
  const popupAnimationRef = useRef<gsap.core.Timeline>();
  useEffect(() => {
    hamburgerAnimationRef.current = gsap
      .timeline({ paused: true })
      .add("start")
      .to(
        `#line1`,
        {
          duration: 0.2,
          y: 9,
        },
        "start"
      )
      .to(
        `#line2`,
        {
          duration: 0.2,
          y: -3,
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
  return (
    <Container>
      <Wrapper>
        <MenuPopupContainer id={"popup"}>
          <Nav>
            <HomeLink href={`/${locale}`}>Home</HomeLink>
            <hr />
            <OccupationLink href={`/${locale}/occupations`}>
              Skilled Occupation List
            </OccupationLink>
            <hr />
          </Nav>
        </MenuPopupContainer>
        <MenuBurger onClick={() => setIsMenuClicked(!isMenuClicked)}>
          <path aria-hidden d={"M0 15 h32 v4 h-32 "} id={"line1"} />
          <path aria-hidden d={"M0 27 h32 v4 h-32 "} id={"line2"} />
        </MenuBurger>
        {/* <SwitchTheme /> */}
      </Wrapper>
    </Container>
  );
}
export default SmartHeader;

const MenuBurgerTheme = theme("mode", {
  light: css`
    fill: var(--color-gray8);
  `,
  dark: css`
    fill: var(--color-gray10);
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
  ${PopupBagroundTheme}
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  top: 0;
  left: -100vw;
  z-index: 3;
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap:1rem;
`;
const HomeLink = styled(Link)``;
const OccupationLink = styled(Link)``;
const MenuBurger = styled.svg`
  ${MenuBurgerTheme};
  position: absolute;
  top: 0;
  height: 100%;
  left: 1rem;
  width: 3rem;
  z-index: 4;
`;
