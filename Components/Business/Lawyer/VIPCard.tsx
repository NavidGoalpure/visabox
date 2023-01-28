import Image from "next/image";
import { FaPhoneAlt, FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { ImSphere } from "react-icons/im";
import styled, { css } from "styled-components/macro";
import theme from "styled-theming";
import { layer1_BG } from "Styles/Theme/Layers/layer1/theme";
import {
  layer2B_HeaderStyle,
  layer2B_TextStyle,
  layer2B_TitleStyle,
} from "Styles/Theme/Layers/layer2/style";
import { layer2B_BG } from "Styles/Theme/Layers/layer2/theme";
import { layer3_TextStyle } from "Styles/Theme/Layers/layer3/style";
import { Headline7Style } from "Styles/Typo";
import { AiFillStar } from "react-icons/ai";
import { MultiLanguageText } from "Interfaces";
import { HTMLAttributes, useEffect } from "react";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";
import gsap from "gsap";
//@ts-ignore
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: MultiLanguageText;
  desc: MultiLanguageText | undefined;
  telegram: string | undefined;
  email: string | undefined;
  website: string | undefined;
  phone: string[] | undefined;
  slug: string;
}

function VIPLawyerCard({
  name,
  desc,
  telegram,
  email,
  website,
  phone,
  slug,
  ...props
}: Props) {
  const { dt } = useDynamicTranslation();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      `.${slug}`,
      {
        y: 40,
      },
      {
        scrollTrigger: {
          trigger: `.${slug}`,
          start: "-10 bottom",
          toggleActions: "play none none none",
        },
        y: 0,
        opacity: 1,
        duration: 1,
      }
    );
  });
  return (
    <Container {...props} className={slug}>
      <Wrapper>
        <ImageWrapper>
          <LawyerLogo
            fill
            src={
              "data:image/jpeg;base64,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"
            }
            alt="image"
          />
        </ImageWrapper>
        <Title>{dt(name)}</Title>
        <Desc>{dt(desc)}</Desc>
        <Socials>
          {!!telegram && (
            <TelegramWrapper>
              <TelegramLogo />
              <TelegramTitle>Telegram</TelegramTitle>
            </TelegramWrapper>
          )}
          {!!email && (
            <EmailWrapper>
              <EmailLogo />
              <EmailTitle>Email</EmailTitle>
            </EmailWrapper>
          )}
          {!!phone && (
            <PhoneWrapper>
              <PhoneLogo />
              <PhoneTitle>Phone</PhoneTitle>
            </PhoneWrapper>
          )}
          {!!website && (
            <WebsiteWrapper>
              <WebsiteLogo />
              <WebsiteTitle>Website</WebsiteTitle>
            </WebsiteWrapper>
          )}
        </Socials>
        <LawyerElement>
          Lawyer <Star />
        </LawyerElement>
        <MaraElement>Mara</MaraElement>
      </Wrapper>
    </Container>
  );
}
export default VIPLawyerCard;
export const ContainerBorder = theme("mode", {
  light: css`
    border: 1px solid var(--color-gray9);
  `,
  dark: css`
    border: none;
  `,
});
export const LogoTheme = theme("mode", {
  light: css`
    fill: var(--color-gray11);
  `,
  dark: css`
    fill: var(--color-gray9);
  `,
});
export const LogoTitleTheme = theme("mode", {
  light: css`
    color: var(--color-gray11);
  `,
  dark: css`
    color: var(--color-gray9);
  `,
});
const Container = styled.div`
  padding-left: 3rem;
  padding-top: 5rem;
  opacity: 0;
`;
const Wrapper = styled.div`
  ${layer2B_BG}
  width:23.313rem;
  height: 27.125rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 3.125rem 1.5rem;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const ImageWrapper = styled.div`
  padding: 0.5rem;
  background-color: var(--color-gray6);
  width: 6.625rem;
  height: 6.625rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -65%) rotate(4deg);
  border-radius: 10px;
  border: none;
  :before {
    content: "";
    width: 100%;
    height: 101%;
    z-index: -1;
    clip-path: inset(0 0 0 40%);
    background-color: var(--color-gray2);
    border-radius: 10px;
    position: absolute;
    top: 0;
    right: -1px;
  }
`;
const LawyerLogo = styled(Image)`
  position: relative !important;
  object-fit: contain;
`;
const Title = styled.h3`
  ${layer2B_TitleStyle}
  ${layer2B_HeaderStyle}
width: fit-content;
  margin-bottom: 2rem;
`;
const Desc = styled.p`
  ${layer2B_TextStyle}
  margin-bottom:2.5rem;
`;
const Socials = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`;
const TelegramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;
const TelegramLogo = styled(FaTelegramPlane)`
  ${LogoTheme}
  width:2rem;
  height: 2rem;
  transition: 0.3s all ease;
  ${TelegramWrapper}:hover & {
    fill: var(--color-primary5);
  }
`;
const TelegramTitle = styled.h4`
  ${LogoTitleTheme}
  ${Headline7Style}
  transition: 0.3s all ease;
  ${TelegramWrapper}:hover & {
    color: var(--color-primary5);
  }
`;
const EmailWrapper = styled(TelegramWrapper)``;
const EmailLogo = styled(SiGmail)`
  ${LogoTheme}
  width:2rem;
  height: 2rem;
  transition: 0.3s all ease;
  ${EmailWrapper}:hover & {
    fill: var(--color-primary5);
  }
`;
const EmailTitle = styled(TelegramTitle)``;
const PhoneWrapper = styled(TelegramWrapper)``;
const PhoneLogo = styled(FaPhoneAlt)`
  ${LogoTheme}
  width:2rem;
  height: 2rem;
  transition: 0.3s all ease;
  ${PhoneWrapper}:hover & {
    fill: var(--color-primary5);
  }
`;
const PhoneTitle = styled(TelegramTitle)``;
const WebsiteWrapper = styled(TelegramWrapper)``;
const WebsiteLogo = styled(ImSphere)`
  ${LogoTheme}
  width:2rem;
  height: 2rem;
  transition: 0.3s all ease;
  ${WebsiteWrapper}:hover & {
    fill: var(--color-primary5);
  }
`;
const WebsiteTitle = styled(TelegramTitle)``;
const LawyerElement = styled.h3`
  ${layer2B_TextStyle}
  ${layer2B_BG}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  position: absolute;
  top: 20%;
  left: -18%;
  transform: rotate(-88deg);
  padding: 1rem 1.5rem;
  border-radius: 10px;
`;
const Star = styled(AiFillStar)`
  color: var(--color-secondary4);
`;
const MaraElement = styled.h3`
  ${layer3_TextStyle}
  ${layer1_BG}
  position:absolute;
  bottom: 10%;
  left: -15%;
  transform: rotate(-91deg);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
