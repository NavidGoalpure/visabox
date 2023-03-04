import { deviceMin } from "Consts/device";
import { useEffect } from "react";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import gsap from "gsap";
//@ts-ignore
import ScrollTrigger from "gsap/dist/ScrollTrigger";

function Desktop() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".hero",
      {
        top: 0,
      },
      {
        scrollTrigger: {
          trigger: ".hero",
          toggleActions: "play none none none",
          start: "top top",
          end: "bottom top",
          // pin: true,
          scrub: true,
          markers:true,
        },
        delay: 2,
        top: -100,
      }
    );
  });
  return (
    <Container>
      <Hero className="hero">black is back</Hero>
      <MonthlyUsersSection></MonthlyUsersSection>
    </Container>
  );
}
export default Desktop;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
const Hero = styled.section`
  background: red;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
const MonthlyUsersSection = styled.section`
  width: 100%;
  height: 100vh;
  background: blue;
`;
