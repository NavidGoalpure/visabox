import { deviceMin } from 'Consts/device';
import { IoPersonAdd } from 'react-icons/io5';
import { MdPersonSearch, MdOutlineScreenSearchDesktop } from 'react-icons/md';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
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
} from './styledComponents';
import { ThemeModes } from 'Interfaces';
import Image from 'next/image';
import useTheme from 'Hooks/useTheme';
import { copyContent } from 'Utils';
import { useCallback, useRef } from 'react';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { LanguageKeys, componentStatements } from './const';
import Link from 'next/link';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { tsParticleOption_Mobile } from 'Styles/animation';
import PriceList from './PriceTable';

function MobileAgentsPage() {
  const { theme } = useTheme();
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
  const gmailToastMessage = t(LanguageKeys.copyGmailToastMessage);
  return (
    <Container>
      <div ref={particlesContainer} style={{ position: 'relative' }}>
        <StyledParticles
          container={particlesContainer}
          id='tsparticles'
          init={particlesInit}
          options={tsParticleOption_Mobile}
        />
        <Hero>
          <RightPlaceTitle>
            {' '}
            در جای&nbsp;
            <span>درست</span>
            &nbsp;باش
          </RightPlaceTitle>
        </Hero>
        <StyledSectionDivider />
        {/* /////////////////////////موسسات مهاجرتی////////////////////////////// */}

        <StyledSection>
          <Title>{t(LanguageKeys.HeroTitle)}</Title>
          <PersonLogo />

          <Desc
            dangerouslySetInnerHTML={{ __html: t(LanguageKeys.HeroDesc) }}
          />
        </StyledSection>
        <StyledSectionDivider />
        <StyledSection>
          <Title
            dangerouslySetInnerHTML={{
              __html: t(LanguageKeys.BetterSeenInAgentPages_Title),
            }}
          />

          <SearchLaptopIcon width={291} height={304} />
          <StyledDesc
            dangerouslySetInnerHTML={{
              __html: t(LanguageKeys.BetterSeenInAgentPages_Desc),
            }}
          />
          <StyledDesc style={{ zIndex: '10' }}>
            <Link
              href={'/lists/agencies'}
              rel='noopener noreferrer'
              target='_blank'
            >
              <span>{t(LanguageKeys.ViewAgentsPage)}</span>
            </Link>
          </StyledDesc>
        </StyledSection>
        <StyledSectionDivider />
        {/* /////////////////////////صفحه یک شغل////////////////////////////// */}

        <StyledSection>
          <Title
            dangerouslySetInnerHTML={{
              __html: t(LanguageKeys.BetterSeenInOccupationsPages_Title),
            }}
          />
          <OccupationListImage
            width={291}
            height={304}
            src={
              theme === ThemeModes.DARK
                ? '/Images/landing/Agents/MobileDarkOccupationList.webp'
                : '/Images/landing/Agents/MobileLightOccupationList.webp'
            }
            alt='occupation-image'
          />
          <Desc
            dangerouslySetInnerHTML={{
              __html: t(LanguageKeys.BetterSeenInOccupationsPages_Desc),
            }}
          />
        </StyledSection>
        <StyledSectionDivider />
        {/* /////////////////////////صفحه فرم وال////////////////////////////// */}
        <Section>
          <Title
            dangerouslySetInnerHTML={{
              __html: t(LanguageKeys.AccessToFormsWall_Title),
            }}
          />
          <OccupationListImage
            width={291}
            height={304}
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
        {/* ////////////////Price Table////////////// */}
        <PriceList />
        {/* //////////////تماس با ما///////////////// */}
        <StyledContactUsContainer>
          <StyledContactsDesc
            dangerouslySetInnerHTML={{
              __html: t(LanguageKeys.ContactUs),
            }}
          />
          <StyledContactsWrapper>
            <StyledGmailContainer
              onClick={() =>
                copyContent({
                  text: 'marketing@marabox.com.au',
                  toastMessage: gmailToastMessage,
                })
              }
            >
              <GmailIcon />
              <GmailLink>marketing@marabox.com.au</GmailLink>
            </StyledGmailContainer>
            <StyledTelegramContainer
              href={'https://t.me/maraboxmigration'}
              target={'_blank'}
            >
              <TelegramIcon />
              <TelegramLink>@maraboxmigration</TelegramLink>
            </StyledTelegramContainer>
          </StyledContactsWrapper>
        </StyledContactUsContainer>
      </div>
    </Container>
  );
}
export default MobileAgentsPage;

const StyledParticles = styled(Particles)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
`;
const LogoTheme = theme('mode', {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 1rem;
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
const Hero = styled.section`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  ${HeroTheme};
  padding: 1rem 0;
  min-height: calc(100vh - 4rem);
`;
const StyledSectionDivider = styled(SectionDivider)`
  margin-bottom: 4rem;
  width: 80%;
`;
const StyledSection = styled(Section)`
  margin-bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  min-height: 100vh;
`;
const PersonLogo = styled(IoPersonAdd)`
  ${LogoTheme};
  width: 8rem;
  height: auto;
  margin-bottom: 1.5rem;
`;

const SearchLaptopIcon = styled(MdOutlineScreenSearchDesktop)`
  ${LogoTheme};
  width: 8rem;
  height: auto;
  margin-bottom: 1.5rem;
`;
const Title = styled.h2`
  ${Layer1_TitleStyle};
  text-align: center;
  margin: 0;
  margin-bottom: 1.5rem;
  span {
    ${TitleSpanTheme}
  }
`;

const StyledDesc = styled(Desc)`
  margin-bottom: 6rem;
`;
const OccupationListImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: auto;
  max-height: 31.5rem;
  margin-bottom: 4rem;
  z-index: 10;
`;

const StyledContactUsContainer = styled(ContactUsContainer)`
  padding: 2rem 0.5rem !important;
  width: auto;
  margin: auto 1rem;
  margin-top: -4rem;
`;
const StyledContactsDesc = styled(ContactsDesc)``;
const StyledContactsWrapper = styled(ContactsWrapper)`
  flex-direction: column;
  gap: 1.5rem;
  z-index: 1000;
`;
const StyledGmailContainer = styled(GmailContainer)`
  flex-direction: column;
`;
const StyledTelegramContainer = styled(TelegramContainer)`
  flex-direction: column;
`;
