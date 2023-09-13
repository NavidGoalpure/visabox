import { deviceMin } from 'Consts/device';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { MdPersonSearch } from 'react-icons/md';
import DarkHeroImage from './Images/DarkHeroImage.svg';
import LightHeroImage from './Images/LightHeroImage.svg';
import { BiMouse } from 'react-icons/bi';
import DarkAgentCard from './Images/DarkAgentCard.svg';
import LightAgentCard from './Images/LightAgentCard.svg';
import DarkVipAgentCard from './Images/DarkVipAgentCard.svg';
import LightVipAgentCard from './Images/LightVipAgentCard.svg';
import DarkProfileComponent from './Images/DarkProfileComponent.svg';
import LightProfileComponent from './Images/LightProfileComponent.svg';
import DarkAboutComponent from './Images/DarkAboutComponent.svg';
import LightAboutComponent from './Images/LightAboutComponent.svg';
import Image from 'next/image';
import { copyContent, getThemeFromLocalStorage } from 'Utils';
import { ThemeModes } from 'Interfaces';
import SocialMediaBranch from './Images/SocialMediaBranch.svg';
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
    <Container className='container'>
      <Hero className='hero' $isActive={isActive}>
        <HeroWrapper>
          <MonthlyUsersWrapper>
            <HeroTitle>افزایش مشتریان</HeroTitle>
            <Desc>
              ماراباکس ماهانه بیش از 2 هزار کاربر دارد که در جستجوی مهاجرت به
              استرالیا هستند و این مسئله، ماراباکس را تبدیل به یک پلتفرم مناسب
              برای پیدا کردن<span> کلاینت های جدید</span> نموده است.
            </Desc>
          </MonthlyUsersWrapper>
          <HeroPicture
            id={'hero-image'}
            width={431}
            height={272}
            src={
              getThemeFromLocalStorage() === ThemeModes.DARK
                ? DarkHeroImage
                : LightHeroImage
            }
            alt={'hero-image'}
          />
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
        {/* /////////////////////////موسسات مهاجرتی////////////////////////////// */}
        <Wrapper $isActive={isActive}>
          <Section>
            <Title>
              بهتر دیده شدن در صفحه <span>وکلای مهاجرت</span>
            </Title>
            <CardContainer>
              <AgentCard
                width={250}
                height={200}
                src={
                  getThemeFromLocalStorage() === ThemeModes.DARK
                    ? DarkAgentCard
                    : LightAgentCard
                }
                alt='normal-agent-card'
              />
              <VipAgentCard
                width={291}
                height={304}
                src={
                  getThemeFromLocalStorage() === ThemeModes.DARK
                    ? DarkVipAgentCard
                    : LightVipAgentCard
                }
                alt='vip-agent-card'
              />
              <AgentCard
                width={250}
                height={200}
                src={
                  getThemeFromLocalStorage() === ThemeModes.DARK
                    ? DarkAgentCard
                    : LightAgentCard
                }
                alt='normal-agent-card'
              />
            </CardContainer>

            <StyledDesc>
              لیست تمامی وکلای مهاجرت ایرانی که دارای پروانه مارا هستند, در
              ماراباکس موجود است. با خرید اکانت <span>ویژه</span> وکلای ماراباکس
              نسبت به رقبای خود از جایگاه بهتر و نحوه نمایش زیباتری برخوردار
              خواهید شد.
            </StyledDesc>
            <StyledDesc style={{ zIndex: '10' }}>
              <Link
                href={'/lists/agencies'}
                rel='noopener noreferrer'
                target='_blank'
              >
                <span>مشاهده صفحه موسسات مهاجرتی</span>
              </Link>
            </StyledDesc>
            {/* /////////////////////////شبکه های اجتماعی////////////////////////////// */}
          </Section>
          <SectionDivider />
          <Section>
            <Title>
              بهتر دیده شدن در صفحه <span>شبکه های اجتماعی</span>
            </Title>
            <SocialMediaBranchContainer>
              <SocialMediaBranchImage
                width={450}
                height={400}
                src={SocialMediaBranch}
                alt='vip-agent-card'
              />
            </SocialMediaBranchContainer>

            <StyledDesc>
              با خرید اکانت <span>ویژه</span> وکلای ماراباکس شبکه های اجتماعی
              شما نسبت به رقبای خود از جایگاه و نحوه نمایش زیباتری برخودار
              خواهند شد.
            </StyledDesc>
            <StyledDesc style={{ zIndex: '10' }}>
              <Link
                href={'/lists/social-pages'}
                rel='noopener noreferrer'
                target='_blank'
              >
                <span>مشاهده صفحه شبکه‌های اجتماعی</span>
              </Link>
            </StyledDesc>
          </Section>
          <SectionDivider />
          {/* /////////////////////////وکلا////////////////////////////// */}
          <Section>
            <Title>
              بهتر دیده شدن در صفحه <span>وکلای مهاجرت</span>
            </Title>

            <SearchPersonIcon width={291} height={304} />
            <StyledDesc>
              لیست تمامی وکلای مهاجرت ایرانی که دارای پروانه مارا هستند, در
              ماراباکس موجود است. با خرید اکانت <span>ویژه</span> وکلای ماراباکس
              نسبت به رقبای خود از جایگاه بهتر و نحوه نمایش زیباتری برخوردار
              خواهید شد.
            </StyledDesc>
            <StyledDesc>
              <span>
                مشاهده صفحه وکلا
                <Link href={'/list/agents'} />
              </span>
            </StyledDesc>
          </Section>
          <SectionDivider />
          {/* /////////////////////////صفحه یک شغل////////////////////////////// */}
          <Section>
            <Title>
              دیده شدن در صفحه <span>مشاغل</span>
            </Title>
            <OccupationCardSection_Img
              width={768}
              height={638}
              alt='occupation-agent-card'
              src={
                getThemeFromLocalStorage() === ThemeModes.DARK
                  ? `/Images/landing/Agents/DarkOccupationList.webp`
                  : `/Images/landing/Agents/LightOccupationList.webp`
              }
            />
            <Desc>
              با خرید اکانت <span>ویژه</span> وکلای ماراباکس می‌توانید تبلیغات
              خود را در صفحه اختصاصی هر شغل نشان دهید. در این حالت, کاربری که در
              حال بررسی شرایط یک شغل خاص می‌باشد, در صفحه ی همان شغل با خدمات
              شما آشنا خواهد شد.{' '}
            </Desc>
          </Section>
          <SectionDivider />
          {/* /////////////////////////صفحه اختصاصی////////////////////////////// */}
          <Section>
            <Title>
              <span>صفحه اختصاصی</span> خود را داشته باشید
            </Title>
            <ProfileComponentImage
              src={
                getThemeFromLocalStorage() === ThemeModes.DARK
                  ? DarkProfileComponent
                  : LightProfileComponent
              }
              alt={'profile-component'}
              width={736}
              height={213}
            />
            <AboutComponentImage
              src={
                getThemeFromLocalStorage() === ThemeModes.DARK
                  ? DarkAboutComponent
                  : LightAboutComponent
              }
              alt={'about-component'}
              width={734}
              height={213}
            />

            <Desc>
              وکلای <span>ویژه</span> در صفحه اختصاصی خود میتوانند توضیحات
              تکمیلی به کاربران اراِیه کنند تا آنها را مشتاق به تماس نمایند.
            </Desc>
          </Section>
          <SectionDivider />
          {/* ////////////////تماس با ما////////////// */}
          <ContactUsContainer>
            <ContactsDesc>
              اگر مایل هستید که <span>اکانت</span> ویژه وکلای ماراباکس را داشته
              باشید,از راه های زیر با ما در ارتباط باشید.
            </ContactsDesc>
            <ContactsWrapper>
              <GmailContainer
                onClick={() =>
                  copyContent({
                    text: 'maraboxmigration@gmail.com',
                    toastMessage: phoneToastMessage,
                  })
                }
              >
                <GmailIcon />
                <GmailLink>maraboxmigration@gmail.com</GmailLink>
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

const LogoTheme = theme('mode', {
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
