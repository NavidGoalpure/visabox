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
    const particlesInit = useCallback(async (engine: Engine) => {
      // console.log(engine);

      // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
    }, []);
    const particlesContainer = useRef(null);
  /////////
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
        </HeroWrapper>
      </Hero>
      <SectionDivider />

        <Section>
          <Title>
            <span>دستیار مجازی</span> خود را داشته باشید
          </Title>

          <StyledDesc>
            شما با استفاده از *اسم رباتمون* میتوانید در هر جا هر گونه سوال مربوط
            به مهاجرت به استرالیا داشته باشید مطرح کنید.
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
            هوش مصنوعی ** مخصوص سایت ماراباکس هست که با هدف کمک به شما در مساعل
            مهاجرتی در دست ساخت است.
          </StyledDesc>
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
                شما میتونید با استفاده از دکمه زیر برای تست زودرس *اسم رباتمون*
                شرکت کنید. زمانی که تست *اسم رباتمون* شروع بشه به شما از طریق
                ایمیل اطلاع داده میشه.
              </TestRobotTitle>
              <PrimaryButton>ثبت نام</PrimaryButton>
            </TestRobotWrapper>
          </TestRobotContainer>
        </StyledSection>
    </Container>
  );
}
export default Desktop;

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
  position: relative;
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
const Hero = styled.section<{ $isActive: boolean }>`
${HeroTheme};
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  min-height: calc(100vh - 4rem);
`;
const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MonthlyUsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const HeroTitle = styled.h2`
  ${Layer1_TitleStyle};
  margin: 0;
  margin-bottom: 1.5rem;
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