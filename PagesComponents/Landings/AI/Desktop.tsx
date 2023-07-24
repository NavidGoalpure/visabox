import { deviceMin } from "Consts/device";
import { useCallback, useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { Layer1_TitleStyle } from "Styles/Theme/Layers/layer1/style";
import { MdPersonSearch } from "react-icons/md";

import DarkHeroImage from "./Images/DarkHeroImage.svg";
import LightHeroImage from "./Images/LightHeroImage.svg";
import { BiMouse } from "react-icons/bi";
import DarkPhone from "./Images/DarkPhone.svg";
import LightPhone from "./Images/LightPhone.svg";
import DarkProfileComponent from "./Images/DarkProfileComponent.svg";
import LightProfileComponent from "./Images/LightProfileComponent.svg";
import DarkAboutComponent from "./Images/DarkAboutComponent.svg";
import LightAboutComponent from "./Images/LightAboutComponent.svg";
import Image from "next/image";
import { copyContent, getThemeFromLocalStorage } from "Utils";
import { ThemeModes } from "Interfaces";
import SocialMediaBranch from "./Images/SocialMediaBranch.svg";
import {
  ContactsDesc,
  ContactsWrapper,
  ContactUsContainer,
  Desc,
  GmailContainer,
  GmailIcon,
  GmailLink,
  HeroTheme,
  RightPlaceTitle,
  Section,
  SectionDivider,
  TelegramContainer,
  TelegramIcon,
  TelegramLink,
  TitleSpanTheme,
  VipAgentCard,
} from "./styledComponents";
import {
  LanguageKeys,
  componentStatements,
  getGsapTimeLine_Hero,
} from "./const";
import Link from "next/link";
import theme from "styled-theming";
import Particles from "react-tsparticles";
import { tsParticleOption_Desktop } from "./const";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { useStaticTranslation } from "Hooks/useStaticTraslation";

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
  const phoneToastMessage = t(LanguageKeys.copyGmailToastMessage);
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
          <HeroPicture
            id={"hero-image"}
            width={431}
            height={272}
            src={
              getThemeFromLocalStorage() === ThemeModes.DARK
                ? DarkHeroImage
                : LightHeroImage
            }
            alt={"hero-image"}
          />
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
            <VipAgentCard
              width={291}
              height={304}
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
  transform:translate(4rem, -4.625rem);
}
`;
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
  padding: 5.5rem 2rem 6rem 2rem;
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

const HeroPicture = styled(Image)`
  z-index: 10;
  width: 40%;
  height: auto;
  object-fit: contain;
  transform: translate(4rem, -3.125rem);
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
  width: 100%;
  max-width: var(--max-width-page);

  padding: 0 8rem;
  min-height: 200vh;
  overflow: auto;
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

const CardContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 4.5rem;
`;
const StyledDesc = styled(Desc)`
  margin-bottom: 6rem;
`;
const AgentCard = styled(Image)`
  z-index: 10;
  width: 100%;
  height: 80%;
  scale: 90%;
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

const LogoTheme = theme("mode", {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
const SearchPersonIcon = styled(MdPersonSearch)`
  ${LogoTheme};
  width: 8rem;
  height: auto;
  margin-bottom: 1.5rem;
`;
const SocialMediaBranchContainer = styled.div``;
const SocialMediaBranchImage = styled(Image)`
  z-index: 10;
`;
const OccupationCardSection_Img = styled(Image)`
  z-index: 10;
  width: 100%;
  height: 100%;
  margin-bottom: 1.5rem;
  scale: 70%;
  margin-top: -5rem;
`;
const ProfileComponentImage = styled(Image)`
  z-index: 10;
  margin-bottom: 1.5rem;
`;
const AboutComponentImage = styled(Image)`
  z-index: 10;
  margin-bottom: 1.5rem;
`;
const ProfilePageSecton_Title = styled(Title)``;
