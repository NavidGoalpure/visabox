import { deviceMin } from "Consts/device";
import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import theme from "styled-theming";
import gsap from "gsap";
//@ts-ignore
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Headline1Style } from "Styles/Typo";
import { layer1_TextColor } from "Styles/Theme/Layers/layer1/theme";
import HeroImage from "./Images/HeroImage.svg";
import {
  Layer1_TitleStyle,
  Layer1_TextStyle,
} from "Styles/Theme/Layers/layer1/style";
import { BiMouse } from "react-icons/bi";
import DarkLawyerCard from "./Images/DarkLawyerCard.svg";
import DarkVipLawyerCard from "./Images/DarkVipLawyerCard.svg";
import DarkProfileComponent from "./Images/DarkProfileComponent.svg";
import DarkAboutComponent from "./Images/DarkAboutComponent.svg";
import Image from "next/image";
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
            src={HeroImage}
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
              src={DarkLawyerCard}
              alt="normal-lawyer-card"
            />
            <VipLawyerCard
              width={291}
              height={304}
              src={DarkVipLawyerCard}
              alt="vip-lawyer-card"
            />
            <LawyerCard
              src={DarkLawyerCard}
              width={250}
              height={200}
              alt="normal-lawyer-card"
            />
          </CardContainer>
          <LawyerCard_Title>
            از رقبای خود <span>بهتر</span> دیده شوید
          </LawyerCard_Title>
          <Desc>
            لیست تمامی وکلای مهاجرت ایرانی که دارای پروانه مارا هستند, در
            ماراباکس موجود است. با خرید اکانت ویژه وکلای ماراباکس نسبت به رقبای
            خود از جایگاه بهتر و نحوه نمایش زیباتری برخوردار خواهید شد.
          </Desc>
        </Section>
        <SectionDivider />
        <Section>
          <OccupationCardSection_Img
            width={768}
            height={638}
            alt="occupation-lawyer-card"
            src={"/Images/LawyerIntroduction/DarkOccupationList.webp"}
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
            src={DarkProfileComponent}
            alt={"profile-component"}
            width={736}
            height={213}
          />
          <AboutComponentImage
            src={DarkAboutComponent}
            alt={"about-component"}
            width={734}
            height={213}
          />

          <ProfilePageSecton_Title>
            صفحه <span>اختصاصی</span> خود را داشته باشید
          </ProfilePageSecton_Title>
          <Desc>
            وکلای ویژه در صفحه اختصاصی خود میتوانند توضیحات تکمیلی به کاربران
            اراِیه کنند تا آنها را مشتاق به تماس نمایند.
          </Desc>
        </Section>
        <SectionDivider />
        <ContactUsContainer></ContactUsContainer>
      </Wrapper>
    </Container>
  );
}
export default Desktop;
const LogoPlaceholderTheme = theme("mode", {
  light: css`
    color: var(--color-gray11);
  `,
  dark: css`
    color: var(--color-gray13);
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
  background: yellow;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 5.5rem;
  left: 0;
  padding: 5.5rem 2rem 6rem 2rem;
  width: 100%;
  height: calc(100vh - 5.5rem);
  z-index: 3;
  background: linear-gradient(
    180deg,
    var(--color-gray2) 23.96%,
    var(--color-gray3) 100%
  );
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
    color: var(--color-primary5);
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

`