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
import SocialMediaBranch from './Images/SocialMediaBranch.svg';
import MobileDarkAgentProfile from './Images/MobileDarkAgentProfile.svg';
import MobileLightAgentProfile from './Images/MobileLightAgentProfile.svg';
import Image from 'next/image';
import useTheme from 'Hooks/useTheme';
import { copyContent } from 'Utils';
import { useCallback, useRef, useState } from 'react';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { LanguageKeys, componentStatements } from './const';
import Link from 'next/link';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { tsParticleOption_Mobile } from 'Styles/animation';

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
          <Title>افزایش مشتریان</Title>
          <PersonLogo />

          <Desc>
            ماراباکس ماهانه بیش از 2 هزار کاربر دارد که در جستجوی مهاجرت به
            استرالیا هستند و این مسئله، ماراباکس را تبدیل به یک پلتفرم مناسب
            برای پیدا کردن<span> کلاینت های جدید</span> نموده است.
          </Desc>
        </StyledSection>
        <StyledSectionDivider />
        <StyledSection>
          <Title>دیده شدن در صفحه</Title>
          <Title>
            <span>موسسات مهاجرتی</span>
          </Title>

          <SearchLaptopIcon width={291} height={304} />
          <StyledDesc>
            لیست تمامی موسسات مهاجرتی ایرانی که دارای وکیل مارا هستند, در
            ماراباکس موجود است. با خرید اکانت <span>ویژه</span> نسبت به رقبای
            خود از جایگاه بهتر و نحوه نمایش زیباتری برخوردار خواهید شد.
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
        </StyledSection>
        <StyledSectionDivider />
        {/* /////////////////////////شبکه های اجتماعی////////////////////////////// */}

        <StyledSection>
          <Title>دیده شدن در صفحه</Title>
          <Title>
            <span>شبکه های اجتماعی</span>
          </Title>
          <SocialBranchImage
            width={291}
            height={304}
            src={SocialMediaBranch}
            alt='social-media-branch-image'
          />
          <StyledDesc>
            با خرید اکانت <span>ویژه</span> وکلای ماراباکس شبکه های اجتماعی شما
            نسبت به رقبای خود از جایگاه و نحوه نمایش زیباتری برخودار خواهند شد.
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
        </StyledSection>
        <StyledSectionDivider />
        {/* /////////////////////////وکلا////////////////////////////// */}
        <StyledSection>
          <Title>دیده شدن در صفحه</Title>
          <Title>
            <span>وکلای مهاجرت</span>
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
        </StyledSection>
        <StyledSectionDivider />
        {/* /////////////////////////صفحه یک شغل////////////////////////////// */}

        <StyledSection>
          <Title>
            دیده شدن در صفحه <span>مشاغل</span>
          </Title>
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
          <Desc>
            با خرید اکانت <span>ویژه</span> وکلای ماراباکس می‌توانید تبلیغات خود
            را در صفحه اختصاصی هر شغل نشان دهید. در این حالت, کاربری که در حال
            بررسی شرایط یک شغل خاص می‌باشد, در صفحه ی همان شغل با خدمات شما آشنا
            خواهد شد.{' '}
          </Desc>
        </StyledSection>
        <StyledSectionDivider />
        {/* /////////////////////////صفحه اختصاصی////////////////////////////// */}

        <StyledSection>
          <Title>و در نهایت</Title>
          <Title>
            <span>صفحه اختصاصی</span>
          </Title>
          <AgentProfileImage
            width={291}
            height={304}
            src={
              theme === ThemeModes.DARK
                ? MobileDarkAgentProfile
                : MobileLightAgentProfile
            }
            alt='agent-profile'
          />
          <Desc>
            وکلای <span>ویژه</span> در صفحه اختصاصی خود میتوانند توضیحات تکمیلی
            به کاربران اراِیه کنند شانس بیشتری برای تماس کاربران پیدا کنند.
          </Desc>
        </StyledSection>
        <StyledSectionDivider />
        {/* //////////////تماس با ما///////////////// */}
        <StyledSection>
          <StyledContactUsContainer>
            <StyledContactsDesc>
              اگر مایل هستید که <span>اکانت</span> ویژه وکلای ماراباکس را داشته
              باشید,از راه های زیر با ما در ارتباط باشید.
            </StyledContactsDesc>
            <StyledContactsWrapper>
              <StyledGmailContainer
                onClick={() =>
                  copyContent({
                    text: 'maraboxmigration@gmail.com',
                    toastMessage: gmailToastMessage,
                  })
                }
              >
                <GmailIcon />
                <GmailLink>maraboxmigration@gmail.com</GmailLink>
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
        </StyledSection>
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
const SearchPersonIcon = styled(MdPersonSearch)`
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
const SocialBranchImage = styled(Image)`
  width: 100%;
  height: 100%;
  margin-bottom: 1.5rem;
  z-index: 10;
`;
const OccupationListImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: auto;
  max-height: 31.5rem;
  margin-bottom: 4rem;
  z-index: 10;
`;
const AgentProfileImage = styled(Image)`
  margin-bottom: 4rem;
  width: 100%;
  height: auto;
  max-height: 27rem;
  object-fit: contain;
  z-index: 10;
`;
const StyledContactUsContainer = styled(ContactUsContainer)`
  padding: 2rem 0.5rem !important;
  width: 100%;
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
