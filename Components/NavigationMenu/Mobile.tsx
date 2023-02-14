import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { boxShadow, directionStyles } from "Styles/Theme";
import { useLocale } from "Hooks/useLocale";
import { layer1_BG } from "Styles/Theme/Layers/layer1/theme";
import { layer2A_Key } from "Styles/Theme/Layers/layer2/theme";
import theme from "styled-theming";
import gsap from "gsap";
import SwitchTheme from "./switchTheme";

function SmartHeader() {
  const { locale } = useLocale();
  const hamburger = useRef<SVGSVGElement>(null);
  // const animation = useRef(null);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  useEffect(() => {
    console.log("navid isMenuClicked ===", isMenuClicked);
    const animation = gsap
      .timeline({ paused: true })
      .to(
        `#line1`,
        {
          duration: 0.2,
          y: 9,
        },
      )
      .to(
        `#line2`,
        {
          duration: 0.2,
          y: -3,
        },
      )
      .to(
        `#line1`,
        {
          duration: 0.2,
          rotate: 45,
          transformOrigin: "50% 50%",
        },
      )

      .to(
        `#line2`,
        {
          duration: 0.2,
          rotate: -45,
          transformOrigin: "50% 50%",
        },
      );
    hamburger.current?.addEventListener("click", () => {
      isMenuClicked ? animation.revert() : animation.restart();
    });
    // hamburger.current?.addEventListener("click", () => {

    // });
    // //@ts-ignore
    //  animation.current = gsap.timeline().to(hamburger.current, {
    //    x: 300,
    //  });
    //   return () => {
    //     //@ts-ignore
    //     animation.current.kill();
    //   };
  }, [isMenuClicked]);
  // useEffect(() => {
  //   if (isMenuClick) {
  //     //@ts-ignore
  //     animation.current?.reverse();
  //   } else {
  //     //@ts-ignore
  //     animation.current.play();
  //   }
  // }, [isMenuClick]);
  return (
    <Container>
      <Wrapper>
        <MenuBurger
          onClick={() => setIsMenuClicked((prevState) => !prevState)}
          ref={hamburger}
        >
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
const Container = styled.div`
  ${layer1_BG}
  ${directionStyles}
  ${boxShadow};

  width: 100%;
  padding: 0 1rem;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  max-width: var(--max-width-page);
  margin: 0 auto;
  position: relative;
`;
const MenuBurger = styled.svg`
  ${MenuBurgerTheme};
  position: absolute;
  top: 0;
  height: 100%;
  left: 1rem;
  width: 3rem;
  path {
    border-radius: 100px;
    width: 2.75rem;
    height: 3px;
    border-radius: 100px;
  }
`;
