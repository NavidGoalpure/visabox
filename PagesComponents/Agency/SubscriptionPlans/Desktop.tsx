import { deviceMin } from 'Consts/device';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import DarkHeroImage from './Images/DarkHeroImage.svg';
import LightHeroImage from './Images/LightHeroImage.svg';
import { BiMouse } from 'react-icons/bi';
import DarkAgentCard from './Images/DarkAgentCard.svg';
import LightAgentCard from './Images/LightAgentCard.svg';
import DarkVipAgentCard from './Images/DarkVipAgentCard.svg';
import LightVipAgentCard from './Images/LightVipAgentCard.svg';
import Image from 'next/image';
import { copyContent } from 'Utils';
import { ThemeModes } from 'Interfaces';
import {
  ContactsDesc,
  ContactsWrapper,
  ContactUsContainer,
  Desc,
  GmailContainer,
  GmailIcon,
  GmailLink,
  HeroTheme,
  Section,
  SectionDivider,
  TelegramContainer,
  TelegramIcon,
  TelegramLink,
  TitleSpanTheme,
  VipAgentCard,
} from './styledComponents';
import { LanguageKeys, componentStatements } from './const';
import Link from 'next/link';
import theme from 'styled-theming';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { tsParticleOption_Desktop } from 'Styles/animation';
import { getGsapTimeLine_Hero } from 'Utils/animations';
import PriceList from './PriceTable';
import { ThemeContext } from 'Contexts/ThemeContext';

function Desktop() {
  const [isActive, setIsActive] = useState(true);
  const { theme } = useContext(ThemeContext);
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
    <Container className='container'>
      <Hero className='hero' $isActive={isActive}>
        <HeroWrapper>
          <MonthlyUsersWrapper>
            <HeroTitle>{t(LanguageKeys.HeroTitle)}</HeroTitle>
            <Desc
              dangerouslySetInnerHTML={{ __html: t(LanguageKeys.HeroDesc) }}
            />
          </MonthlyUsersWrapper>
          <HeroPicture
            id={'hero-image'}
            width={431}
            height={272}
            src={theme === ThemeModes.DARK ? DarkHeroImage : LightHeroImage}
            alt={'hero-image'}
          />
          <MouseSection>
            <Line />
            <MouseIcon />
            <Line />
          </MouseSection>
        </HeroWrapper>
      </Hero>
      <div ref={particlesContainer} style={{ position: 'relative' }}>
        <StyledParticles
          container={particlesContainer}
          id='tsparticles'
          init={particlesInit}
          options={tsParticleOption_Desktop}
        />
        {/* /////////////////////////موسسات مهاجرتی////////////////////////////// */}
        <Wrapper $isActive={isActive}>
          <Section>
            <Title
              dangerouslySetInnerHTML={{
                __html: t(LanguageKeys.BetterSeenInAgentPages_Title),
              }}
            />
            <CardContainer>
              <AgentCard
                width={250}
                height={200}
                src={theme === ThemeModes.DARK ? DarkAgentCard : LightAgentCard}
                alt='normal-agent-card'
              />
              <VipAgentCard
                width={291}
                height={304}
                src={
                  theme === ThemeModes.DARK
                    ? DarkVipAgentCard
                    : LightVipAgentCard
                }
                alt='vip-agent-card'
              />
              <AgentCard
                width={250}
                height={200}
                src={theme === ThemeModes.DARK ? DarkAgentCard : LightAgentCard}
                alt='normal-agent-card'
              />
            </CardContainer>

            <StyledDesc
              dangerouslySetInnerHTML={{
                __html: t(LanguageKeys.BetterSeenInAgentPages_Desc),
              }}
            />

            <StyledDesc style={{ zIndex: '10' }}>
              <Link
                href={'/lists/agents'}
                rel='noopener noreferrer'
                target='_blank'
              >
                <span>{t(LanguageKeys.ViewAgentsPage)}</span>
              </Link>
            </StyledDesc>
          </Section>
          <SectionDivider />
          {/* /////////////////////////صفحه یک شغل////////////////////////////// */}
          <Section>
            <Title
              dangerouslySetInnerHTML={{
                __html: t(LanguageKeys.PromoteInOccupationsPages_Title),
              }}
            />
            <OccupationCardSection_Img
              width={768}
              height={638}
              alt='occupation-agent-card'
              src={
                theme === ThemeModes.DARK
                  ? `/Images/landing/Agents/DarkOccupationList.webp`
                  : `/Images/landing/Agents/LightOccupationList.webp`
              }
            />
            <StyledDesc
              dangerouslySetInnerHTML={{
                __html: t(LanguageKeys.PromoteInOccupationsPages_Desc),
              }}
            />
            <StyledDesc style={{ zIndex: '10' }}>
              <Link
                href={'/occupations/construction-project-manager'}
                rel='noopener noreferrer'
                target='_blank'
              >
                <span>{t(LanguageKeys.ViewOccupationPage)}</span>
              </Link>
            </StyledDesc>
          </Section>
          <SectionDivider />
          {/* /////////////////////////صفحه فرم وال////////////////////////////// */}
          <Section>
            <Title
              dangerouslySetInnerHTML={{
                __html: t(LanguageKeys.AccessToFormsWall_Title),
              }}
            />
            <OccupationCardSection_Img
              width={768}
              height={638}
              alt='Form-Client-Page'
              src={
                theme === ThemeModes.DARK
                  ? `/Images/landing/Agents/FormDark.webp`
                  : `/Images/landing/Agents/FormLight.webp`
              }
            />
            <Desc
              dangerouslySetInnerHTML={{
                __html: t(LanguageKeys.AccessToFormsWall_Desc),
              }}
            />
          </Section>
          <SectionDivider />
          {/* ////////////////Price Table////////////// */}\
          <PriceList />
          {/* ////////////////تماس با ما////////////// */}
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

const OccupationCardSection_Img = styled(Image)`
  z-index: 10;
  width: 100%;
  height: 100%;
  margin-bottom: 1.5rem;
  scale: 70%;
  margin-top: -5rem;
`;
