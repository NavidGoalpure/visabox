import { deviceMin } from "Consts/device";
import { useCallback, useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Layer1_TitleStyle } from "Styles/Theme/Layers/layer1/style";
import RobotImage from "./Images/RobotImage.svg";
import LightPhone from "./Images/LightPhone.svg";
import DarkPhone from "./Images/DarkPhone.svg";
import { BiMouse } from "react-icons/bi";
import HeroMovingRobot from "./Images/HeroMovingRobot.svg";
import DarkPattern from "./Images/DarkPattern.svg";
import LightPattern from "./Images/LightPattern.svg";
import Image from "next/image";
import { getThemeFromLocalStorage } from "Utils";
import { ThemeModes } from "Interfaces";
import {
  Desc,
  HeroTheme,
  Section,
  SectionDivider,
  TitleSpanTheme,
  PhoneImage,
} from "./styledComponents";
import { componentStatements, getGsapTimeLine_Hero } from "./const";
import Particles from "react-tsparticles";
import { tsParticleOption_Desktop } from "./const";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { Headline4Style } from "Styles/Typo";
import { PrimaryButton } from "Elements/Button/Primary";
import theme from "styled-theming";

function Desktop() {
  const [isActive, setIsActive] = useState(true);
  useEffect(() => {
    getGsapTimeLine_Hero(setIsActive);
  }, []);
  /////////
  const particlesInit = useCallback(async (engine: Engine) => {
    // console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  const particlesContainer = useRef(null);
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container className="container">
      <Hero className="hero" $isActive={isActive}>
        <HeroWrapper>
          <MonthlyUsersWrapper>
            <HeroTitle>اسم رباتمون</HeroTitle>
            <Desc>
              دستیار مجازی جامع شما برای سوالات و راهنمایی های بی دردسر مهاجرت
              به استرالیا.
            </Desc>
          </MonthlyUsersWrapper>
          <HeroPictureWrapper>
            <HeroPicture
              id={"hero-image"}
              width={450}
              height={450}
              src={HeroMovingRobot}
              alt={"hero-image"}
            />
          </HeroPictureWrapper>
          <MouseSection>
            <Line />
            <MouseIcon />
            <Line />
          </MouseSection>
        </HeroWrapper>
      </Hero>
      <SectionDivider />
      <div ref={particlesContainer} style={{ position: "relative" }}>
        <StyledParticles
          container={particlesContainer}
          id="tsparticles"
          init={particlesInit}
          options={tsParticleOption_Desktop}
        />
        {/* /////////////////////////موسسات مهاجرتی////////////////////////////// */}
        <Wrapper $isActive={isActive}>
          <Section>
            <Title>
              <span>دستیار مجازی</span> خود را داشته باشید
            </Title>

            <StyledDesc>
              شما با استفاده از *اسم رباتمون* میتوانید در هر جا هر گونه سوال
              مربوط به مهاجرت به استرالیا داشته باشید مطرح کنید.
            </StyledDesc>
            <PhoneImage
              width={329}
              height={281}
              src={
                getThemeFromLocalStorage() === ThemeModes.DARK
                  ? DarkPhone
                  : LightPhone
              }
              alt="phone-image"
            />
            <StyledDesc>
              هوش مصنوعی ** مخصوص سایت ماراباکس هست که با هدف کمک به شما در
              مساعل مهاجرتی در دست ساخت است.
            </StyledDesc>
            {/* /////////////////////////شبکه های اجتماعی////////////////////////////// */}
          </Section>
          <SectionDivider />
          <StyledSection>
            <TestRobotContainer>
              <RobotImg
                width={291}
                height={304}
                src={RobotImage}
                alt="phone-image"
              />{" "}
              <TestRobotWrapper>
                <TestRobotTitle>
                  شما میتونید با استفاده از دکمه زیر برای تست زودرس *اسم
                  رباتمون* شرکت کنید. زمانی که تست *اسم رباتمون* شروع بشه به شما
                  از طریق ایمیل اطلاع داده میشه.
                </TestRobotTitle>
                <PrimaryButton>ثبت نام</PrimaryButton>
              </TestRobotWrapper>
            </TestRobotContainer>
          </StyledSection>
        </Wrapper>
      </div>
    </Container>
  );
}
export default Desktop;
const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;
const heroAnimation = keyframes`
to{
  transform:translateY(-5rem);
}
`;
const TestRobotContainerTheme = theme("mode", {
  light: css`
    background: var(--color-gray6);
    background-image: url(${LightPattern});
  `,
  dark: css`
    background: var(--color-gray2);
    background-image: url(${DarkPattern});
  `,
});
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(200vh - 5.5rem);
  //this is important because we need the Wrapper to be under the hero after wrapper has position relative
  padding-top: calc(100vh - 5.5rem);
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
//this will be position absolute because we need it to go outscreen when we scroll
const Hero = styled.section<{ $isActive: boolean }>`
  ${HeroTheme}
  display: flex;
  justify-content: center;
  position: absolute;
  top: 5.5rem;
  left: 0;
  padding: 5.5rem 2rem 6rem 6rem;
  width: 100%;
  height: calc(100vh - 5.5rem);
  z-index: 3;
  box-shadow: 0 0 4px black;
`;
const HeroWrapper = styled.div`
  width: 100%;
  max-width: var(--max-width-page);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MonthlyUsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 40%;
`;
const HeroTitle = styled.h2`
  ${Layer1_TitleStyle};
  margin: 0;
  margin-bottom: 1.5rem;
`;
const HeroPictureWrapper = styled.div`
  background-image: url(${"/Images/landing/AI/HeroDarkPhone.png"});
  width: 40%;
  background-position-y: bottom;
  background-position-x: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroPicture = styled(Image)`
  z-index: 10;
  width: 28rem;
  height: auto;
  object-fit: contain;
  transform: translateY(-4rem);
  animation: ${heroAnimation} 3s infinite linear;
  animation-direction: alternate;
`;
const MouseSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  position: absolute;
  left: 2%;
`;
const Line = styled.span`
  height: 8rem;
  border-left: 1px solid var(--color-gray8);
`;
const MouseIcon = styled(BiMouse)`
  color: var(--color-gray8);
  width: 2rem;
  height: 2rem;
`;
//this will be position fixed untill the hero is onscreen and after that it will turn to relative in order to scroll normally
const Wrapper = styled.div<{ $isActive: boolean }>`
  --wrapper-padding-side: 8rem;
  width: 100%;
  max-width: var(--max-width-page);
  padding: 0 var(--wrapper-padding-side);
  min-height: 200vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  ${({ $isActive }) =>
    $isActive
      ? css`
          position: relative;
        `
      : css`
          position: fixed;
          top: 5.5rem;
          left: 50%;
          transform: translateX(-50%);
        `}
`;

const StyledDesc = styled(Desc)`
  margin-bottom: 6rem;
`;
const Title = styled.h2`
  ${Layer1_TitleStyle};
  margin: 0;
  margin-bottom: 1.5rem;
  span {
    ${TitleSpanTheme}
  }
  text-align: center;
`;
const StyledSection = styled(Section)`
  min-height: unset;
  margin-top: 15rem;
`;

const TestRobotContainer = styled.div`
  ${TestRobotContainerTheme};
  position: relative;
  width: 100vw;
  padding: 6.5rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-repeat: no-repeat;
  background-position: center;
`;
const RobotImg = styled(Image)`
  width: 26rem;
  height: 26rem;
  position: absolute;
  top: 0;
  transform: translateY(-72%);
`;
const TestRobotWrapper = styled.div`
  width: var(--max-width-page);
  padding: 0 var(--wrapper-padding-side);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
const TestRobotTitle = styled.h3`
  ${Headline4Style};
  color: white;
  text-align: center;
`;
