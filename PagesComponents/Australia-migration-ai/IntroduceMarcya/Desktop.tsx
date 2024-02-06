import { deviceMin } from 'Consts/device';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import RobotImage from './Images/RobotImage.svg';
import LightPhone from './Images/LightPhone.svg';
import DarkPhone from './Images/DarkPhone.svg';
import { BiMouse } from 'react-icons/bi';
import HeroMovingRobot from './Images/HeroMovingRobot.svg';
import DarkPattern from './Images/DarkPattern.svg';
import LightPattern from './Images/LightPattern.svg';
import Image from 'next/image';
import { copyContent, getThemeFromLocalStorage } from 'Utils';
import { ThemeModes } from 'Interfaces';
import {
  Desc,
  HeroTheme,
  Section,
  SectionDivider,
  TitleSpanTheme,
  PhoneImage,
} from './styledComponents';
import { LanguageKeys, componentStatements } from './const';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { Headline5Style } from 'Styles/Typo';
import theme from 'styled-theming';
import { tsParticleOption_Desktop } from 'Styles/animation';
import PriceList from './PriceTable/ForClients';
import { Hint_BG } from 'Styles/Theme/Hint/theme';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { Hint_SubTitleStyle } from 'Styles/Theme/Hint/style';

function Desktop() {
  const [isActive, setIsActive] = useState(true);

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
    <>
      <Container className='container'>
        <Hero className='hero' $isActive={isActive}>
          <HeroWrapper>
            <MonthlyUsersWrapper>
              <HeroTitle>{t(LanguageKeys.BotName)} </HeroTitle>
              <Desc>{t(LanguageKeys.BotDesc)}</Desc>
            </MonthlyUsersWrapper>
            <HeroPictureWrapper>
              <HeroPicture
                id={'hero-image'}
                width={450}
                height={450}
                src={HeroMovingRobot}
                alt={'hero-image'}
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
        <div ref={particlesContainer} style={{ position: 'relative' }}>
          <StyledParticles
            container={particlesContainer}
            id='tsparticles'
            init={particlesInit}
            options={tsParticleOption_Desktop}
          />
          <Wrapper $isActive={isActive}>
            <Section>
              <PhoneImage
                width={329}
                height={281}
                src={
                  getThemeFromLocalStorage() === ThemeModes.DARK
                    ? DarkPhone
                    : LightPhone
                }
                alt='phone-image'
              />
              <Title>{t(LanguageKeys.Section2Title)}</Title>
              <StyledDesc
                dangerouslySetInnerHTML={{
                  __html: t(LanguageKeys.Section2Subitle),
                }}
              />
            </Section>
            <SectionDivider />
            <StyledSection>
              <TestRobotContainer>
                <RobotImg
                  width={291}
                  height={304}
                  src={RobotImage}
                  alt='phone-image'
                />{' '}
                <TestRobotWrapper>
                  <Title>{t(LanguageKeys.Section3Title)}</Title>
                  {/* //////////Price List///// */}
                  <PriceList />
                  {/* // */}
                </TestRobotWrapper>
              </TestRobotContainer>
            </StyledSection>
          </Wrapper>
        </div>
      </Container>
      <Wrapper $isActive={true} style={{ minHeight: 'unset' }}>
        <ContactUsContainer>
          <ContactsDesc
            dangerouslySetInnerHTML={{
              __html: t(LanguageKeys.ContactUs),
            }}
          />
          <ContactsWrapper>
            <GmailContainer
              onClick={() =>
                copyContent({
                  text: 'marketing@marabox.com.au',
                  toastMessage: phoneToastMessage,
                })
              }
            >
              <GmailIcon />
              <GmailLink>marketing@marabox.com.au</GmailLink>
            </GmailContainer>
            <TelegramContainer
              href={'https://t.me/maraboxmigration'}
              target={'_blank'}
            >
              <TelegramIcon />
              <TelegramLink>@maraboxmigration</TelegramLink>
            </TelegramContainer>
          </ContactsWrapper>
        </ContactUsContainer>
      </Wrapper>
    </>
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
const TestRobotContainerTheme = theme('mode', {
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
  background-image: url(${() =>
    getThemeFromLocalStorage() === ThemeModes.DARK
      ? '/Images/landing/AI/HeroDarkPhone.png'
      : '/Images/landing/AI/HeroLightPhone.png'});
  width: 50%;
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
  text-align: center;
  span {
    ${TitleSpanTheme}
  }
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

const ContactUsContainer = styled.div`
  ${Hint_BG}
  padding: 2rem 5rem;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
`;
const ContactsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  direction: ltr;
`;
const ContactsDesc = styled(Desc)`
  ${Hint_SubTitleStyle};
`;
const TelegramContainer = styled.a`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  direction: ltr;
  cursor: pointer;
`;
const GmailContainer = styled.button`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  direction: ltr;
  cursor: pointer;
`;
const GmailIcon = styled(SiGmail)`
  color: var(--color-secondary4);
  width: 1.5rem;
  height: auto;
`;
const GmailLink = styled.h3`
  ${Headline5Style};
  text-align: center;
  word-break: break-all;
  color: var(--color-secondary4);
  direction: ltr;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;
const TelegramIcon = styled(FaTelegramPlane)`
  color: var(--color-secondary4);
  width: 1.5rem;
  height: auto;
`;
const TelegramLink = styled(GmailLink)``;
