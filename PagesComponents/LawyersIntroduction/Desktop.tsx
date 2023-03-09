import { deviceMin } from "Consts/device";
import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import theme from "styled-theming";
import gsap from "gsap";
//@ts-ignore
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Headline1Style } from "Styles/Typo";
import { layer1_TextColor } from "Styles/Theme/Layers/layer1/theme";
import {
  Layer1_TitleStyle,
  Layer1_TextStyle,
} from "Styles/Theme/Layers/layer1/style";
import { Headline5Style } from "Styles/Typo";
import DarkHeroImage from "./Images/DarkHeroImage.svg";
import LightHeroImage from "./Images/LightHeroImage.svg";
import { BiMouse } from "react-icons/bi";
import DarkLawyerCard from "./Images/DarkLawyerCard.svg";
import LightLawyerCard from "./Images/LightLawyerCard.svg";
import DarkVipLawyerCard from "./Images/DarkVipLawyerCard.svg";
import LightVipLawyerCard from "./Images/LightVipLawyerCard.svg";
import DarkProfileComponent from "./Images/DarkProfileComponent.svg";
import LightProfileComponent from "./Images/LightProfileComponent.svg";
import DarkAboutComponent from "./Images/DarkAboutComponent.svg";
import LightAboutComponent from "./Images/LightAboutComponent.svg";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Hint_BG } from "Styles/Theme/ Hint/theme";
import { Hint_SubTitleStyle } from "Styles/Theme/ Hint/style";
import { copyContent, getThemeFromLocalStorage } from "Utils";
import { ThemeModes } from "Interfaces";
function Desktop() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".hero", {
      scrollTrigger: {
        trigger: ".hero",
        onLeave: () => setIsActive(true),
        onEnterBack: () => setIsActive(false),
      },
    });
  }, []);
  return (
    <Container className="container">
      <Hero className="hero" $isActive={isActive}>
        <HeroWrapper>
          <MonthlyUsersWrapper>
            <HeroTitle>مخصوص وکلای مهاجرت</HeroTitle>
            <Desc>
              ماراباکس ماهانه بیش از 2 هزار کاربر دارد که در جستجوی مهاجرت به
              استرالیا هستند. این فرصتی برای شماست تا خدمات مهاجرتی خود را به
              مشتاقان آن معرفی کنید.
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
      <Wrapper $isActive={isActive}>
        <RightPlaceTitle>
          {" "}
          در جای&nbsp;
          <span>درست</span>
          &nbsp;باش
        </RightPlaceTitle>
        <SectionDivider />
        <Section>
          <CardContainer>
            <LawyerCard
              width={250}
              height={200}
              src={
                getThemeFromLocalStorage() === ThemeModes.DARK
                  ? DarkLawyerCard
                  : LightLawyerCard
              }
              alt="normal-lawyer-card"
            />
            <VipLawyerCard
              width={291}
              height={304}
              src={
                getThemeFromLocalStorage() === ThemeModes.DARK
                  ? DarkVipLawyerCard
                  : LightVipLawyerCard
              }
              alt="vip-lawyer-card"
            />
            <LawyerCard
              width={250}
              height={200}
              src={
                getThemeFromLocalStorage() === ThemeModes.DARK
                  ? DarkLawyerCard
                  : LightLawyerCard
              }
              alt="normal-lawyer-card"
            />
          </CardContainer>
          <LawyerCard_Title>
            از رقبای خود <span>بهتر</span> دیده شوید
          </LawyerCard_Title>
          <Desc>
            لیست تمامی وکلای مهاجرت ایرانی که دارای پروانه مارا هستند, در
            ماراباکس موجود است. با خرید اکانت <span>ویژه</span> وکلای ماراباکس
            نسبت به رقبای خود از جایگاه بهتر و نحوه نمایش زیباتری برخوردار
            خواهید شد.
          </Desc>
        </Section>
        <SectionDivider />
        <Section>
          <OccupationCardSection_Img
            width={768}
            height={638}
            alt="occupation-lawyer-card"
            src={
              getThemeFromLocalStorage() === ThemeModes.DARK
                ? `/Images/LawyerIntroduction/DarkOccupationList.webp`
                : `/Images/LawyerIntroduction/LightOccupationList.webp`
            }
          />
          <Desc>
            با خرید اکانت ویژه وکلای ماراباکس میتوانید تبلیغات خود را در صفحه
            اختصاصی هر شغل نشان دهید. در این حالت, کاربری که در حال بررسی شرایط
            یک شغل خاص میباشد, در صفحه ی همان شغل با خدمات شما آشنا خواهد شد.{" "}
          </Desc>
        </Section>
        <SectionDivider />
        <Section>
          <ProfileComponentImage
            src={
              getThemeFromLocalStorage() === ThemeModes.DARK
                ? DarkProfileComponent
                : LightProfileComponent
            }
            alt={"profile-component"}
            width={736}
            height={213}
          />
          <AboutComponentImage
            src={
              getThemeFromLocalStorage() === ThemeModes.DARK
                ? DarkAboutComponent
                : LightAboutComponent
            }
            alt={"about-component"}
            width={734}
            height={213}
          />

          <ProfilePageSecton_Title>
            صفحه <span>اختصاصی</span> خود را داشته باشید
          </ProfilePageSecton_Title>
          <Desc>
            وکلای <span>ویژه</span> در صفحه اختصاصی خود میتوانند توضیحات تکمیلی
            به کاربران اراِیه کنند تا آنها را مشتاق به تماس نمایند.
          </Desc>
        </Section>
        <SectionDivider />
        <ContactUsContainer>
          <ContactsDesc>
            اگر مایل هستید که <span>اکانت</span> ویژه وکلای ماراباکس را داشته
            باشید,از راه های زیر با ما در ارتباط باشید.
          </ContactsDesc>
          <ContactsWrapper>
            <GmailContainer onClick={() => copyContent("redneck")}>
              <GmailIcon />
              <GmailLink>maraboxmigration@gmail.com</GmailLink>
            </GmailContainer>
            <TelegramContainer
              href={"https://t.me/maraboxmigration"}
              target={"_blank"}
            >
              <TelegramIcon />
              <TelegramLink>@maraboxmigration</TelegramLink>
            </TelegramContainer>
          </ContactsWrapper>
        </ContactUsContainer>
      </Wrapper>
    </Container>
  );
}
export default Desktop;

const TitleSpanTheme = theme("mode", {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});
const DescSpanTheme = theme("mode", {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary6);
  `,
});
const HeroTheme = theme("mode", {
  light: css`
    background: linear-gradient(180deg, #dde2eb 23.96%, #ffffff 100%);
  `,
  dark: css`
    background: linear-gradient(
      180deg,
      var(--color-gray2) 23.96%,
      var(--color-gray3) 100%
    );
  `,
});
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
  padding-top: calc(100vh - 5.5rem);
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
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
  align-items: center;
  justify-content: center;
  width: 40%;
`;
const HeroTitle = styled.h2`
  ${Layer1_TitleStyle};
  margin: 0;
  margin-bottom: 1.5rem;
`;
const Desc = styled.p`
  ${Layer1_TextStyle};
  text-align: center;
  margin: 0;
  span {
    ${DescSpanTheme}
  }
`;
const HeroPicture = styled(Image)`
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

const RightPlaceTitle = styled.h2`
  ${Headline1Style};
  ${layer1_TextColor};
  width: 100%;
  text-align: center;
  margin-bottom: 7rem;
  span {
    padding: 0 1rem;
    display: inline-block;
    margin-top: 1rem;
    transform: rotate(-10deg);
    background: var(--color-primary5);
    border-radius: 20px;
    color: white;
  }
`;

const SectionDivider = styled.hr`
  width: 50%;
  height: 4px;
  margin: 0 auto;
  background: var(--color-gray9);
  margin-bottom: 5.5rem;
`;
const Section = styled.section`
  width: 100%;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4.5rem;
`;
const VipLawyerCard = styled(Image)`
  width: 100%;
  height: 100%;
`;
const LawyerCard = styled(Image)`
  width: 100%;
  height: 80%;
`;
const LawyerCard_Title = styled.h2`
  ${Layer1_TitleStyle};
  margin: 0;
  margin-bottom: 1.5rem;
  span {
    ${TitleSpanTheme}
  }
  text-align: center;
`;
const OccupationCardSection_Img = styled(Image)`
  width: 100%;
  height: 100%;
  margin-bottom: 1.5rem;
`;
const ProfileComponentImage = styled(Image)`
  margin-bottom: 1.5rem;
`;
const AboutComponentImage = styled(Image)`
  margin-bottom: 1.5rem;
`;
const ProfilePageSecton_Title = styled(LawyerCard_Title)``;
const ContactUsContainer = styled.div`
  ${Hint_BG}
  padding: 2rem 5rem;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;
const ContactsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ContactsDesc = styled(Desc)`
  ${Hint_SubTitleStyle};
`;
const TelegramContainer = styled.a`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  direction: ltr;
  cursor: pointer;
`;
const GmailContainer = styled.button`
  display: flex;
  gap: 1rem;
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
  color: var(--color-secondary4);
  direction: ltr;
  margin: 0;
`;
const TelegramIcon = styled(FaTelegramPlane)`
  color: var(--color-secondary4);
  width: 1.5rem;
  height: auto;
`;
const TelegramLink = styled(GmailLink)``;
