import { deviceMin } from "Consts/device";
import { BsFillPersonFill } from "react-icons/bs";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { Layer1_TitleStyle } from "Styles/Theme/Layers/layer1/style";
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
import DarkVipAgentCard from "./Images/DarkVipAgentCard.svg";
import LightVipAgentCard from "./Images/LightVipAgentCard.svg";
import { ThemeModes } from "Interfaces";
import SocialMediaBranch from "./Images/SocialMediaBranch.svg";
import MobileDarkAgentProfile from "./Images/MobileDarkAgentProfile.svg";
import MobileLightAgentProfile from "./Images/MobileLightAgentProfile.svg";
import Image from "next/image";
import useTheme from "Hooks/useTheme";
import { copyContent } from "Utils";

function MobileAgentsPage() {
  const { theme } = useTheme();
  return (
    <Container>
      <Hero>
        <RightPlaceTitle>
          {" "}
          در جای&nbsp;
          <span>درست</span>
          &nbsp;باش
        </RightPlaceTitle>
      </Hero>
      <StyledSectionDivider />
      <StyledSection>
        <PersonLogo />
        <Title>مخصوص وکلای مهاجرت</Title>

        <Desc>
          ماراباکس ماهانه بیش از 2 هزار کاربر دارد که در جستجوی مهاجرت به
          استرالیا هستند. این فرصتی برای شماست تا خدمات مهاجرتی خود را به
          مشتاقان آن معرفی کنید.
        </Desc>
      </StyledSection>
      <StyledSectionDivider />
      <StyledSection>
        <Title>
          از رقبای خود <span>بهتر</span> دیده شوید
        </Title>
        <StyledVipAgentCard
          width={291}
          height={304}
          src={theme === ThemeModes.DARK ? DarkVipAgentCard : LightVipAgentCard}
          alt="vip-agent-card"
        />
        <StyledDesc>
          لیست تمامی وکلای مهاجرت ایرانی که دارای پروانه مارا هستند, در ماراباکس
          موجود است. با خرید اکانت <span>ویژه</span> وکلای ماراباکس نسبت به
          رقبای خود از جایگاه بهتر و نحوه نمایش زیباتری برخوردار خواهید شد.
        </StyledDesc>
        <SocialBranchImage
          width={291}
          height={304}
          src={SocialMediaBranch}
          alt="social-media-branch-image"
        />
        <Desc>
          با خرید اکانت <span>ویژه</span> وکلای ماراباکس شبکه های اجتماعی شما
          نسبت به رقبای خود از جایگاه و نحوه نمایش زیباتری برخودار خواهند شد.
        </Desc>
      </StyledSection>
      <StyledSectionDivider />
      <StyledSection>
        <Title>
          دیده شدن در صفحه <span>مشاغل</span>
        </Title>
        <OccupationListImage
          width={291}
          height={304}
          src={
            theme === ThemeModes.DARK
              ? "/Images/landing/Agents/MobileDarkOccupationList.webp"
              : "/Images/landing/Agents/MobileLightOccupationList.webp"
          }
          alt="occupation-image"
        />
        <Desc>
          با خرید اکانت <span>ویژه</span> وکلای ماراباکس میتوانید تبلیغات خود را
          در صفحه اختصاصی هر شغل نشان دهید. در این حالت, کاربری که در حال بررسی
          شرایط یک شغل خاص میباشد, در صفحه ی همان شغل با خدمات شما آشنا خواهد
          شد.{" "}
        </Desc>
      </StyledSection>
      <StyledSectionDivider />
      <StyledSection>
        <Title>
          صفحه <span>اختصاصی</span> خود را داشته باشید
        </Title>
        <AgentProfileImage
          width={291}
          height={304}
          src={
            theme === ThemeModes.DARK
              ? MobileDarkAgentProfile
              : MobileLightAgentProfile
          }
          alt="agent-profile"
        />
        <Desc>
          وکلای <span>ویژه</span> در صفحه اختصاصی خود میتوانند توضیحات تکمیلی به
          کاربران اراِیه کنند تا آنها را مشتاق به تماس نمایند.
        </Desc>
      </StyledSection>
      <StyledSectionDivider />
      <StyledSection>
        <StyledContactUsContainer>
          <StyledContactsDesc>
            اگر مایل هستید که <span>اکانت</span> ویژه وکلای ماراباکس را داشته
            باشید,از راه های زیر با ما در ارتباط باشید.
          </StyledContactsDesc>
          <StyledContactsWrapper>
            <StyledGmailContainer onClick={() => copyContent("redneck")}>
              <GmailIcon />
              <GmailLink>maraboxmigration@gmail.com</GmailLink>
            </StyledGmailContainer>
            <StyledTelegramContainer
              href={"https://t.me/maraboxmigration"}
              target={"_blank"}
            >
              <TelegramIcon />
              <TelegramLink>@maraboxmigration</TelegramLink>
            </StyledTelegramContainer>
          </StyledContactsWrapper>
        </StyledContactUsContainer>
      </StyledSection>
    </Container>
  );
}
export default MobileAgentsPage;
const LogoTheme = theme("mode", {
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
  ${HeroTheme};
  padding: 1rem 0;
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
`;
const PersonLogo = styled(BsFillPersonFill)`
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
const StyledVipAgentCard = styled(VipAgentCard)`
  margin-bottom: 3rem;
`;
const StyledDesc = styled(Desc)`
  margin-bottom: 6rem;
`;
const SocialBranchImage = styled(Image)`
  width: 100%;
  height: 100%;
  margin-bottom: 1.5rem;
`;
const OccupationListImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: auto;
  max-height: 31.5rem;
  margin-bottom: 4rem;
`;
const AgentProfileImage = styled(Image)`
  margin-bottom: 4rem;
  width: 100%;
  height: auto;
  max-height: 27rem;
  object-fit: contain;
`;
const StyledContactUsContainer = styled(ContactUsContainer)`
  padding: 2rem 0.5rem !important;
  width: 100%;
`;
const StyledContactsDesc = styled(ContactsDesc)``;
const StyledContactsWrapper = styled(ContactsWrapper)`
  flex-direction: column;
  gap: 1.5rem;
`;
const StyledGmailContainer = styled(GmailContainer)`
  flex-direction: column;
`;
const StyledTelegramContainer = styled(TelegramContainer)`
  flex-direction: column;
`;
