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
import {
  layer2A_Bg,
  layer2A_HeaderBG,
  layer2A_TextColor,
  layer2B_BG,
} from "Styles/Theme/Layers/layer2/theme";
import {
  layer3_TextStyle,
  layer3_TitleStyle,
} from "Styles/Theme/Layers/layer3/style";
import { Headline6Style, Headline7Style } from "Styles/Typo";
import { AiFillStar } from "react-icons/ai";
import { HTMLAttributes, useEffect } from "react";
import gsap from "gsap";
//@ts-ignore
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { MultiLanguageText } from "Interfaces";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: MultiLanguageText;
  email: string | undefined;
  website: string | undefined;
  phone: string[] | undefined;
  slug: string;
}
function LawyerCard({ name, email, website, phone, slug, ...props }: Props) {
  const { dt } = useDynamicTranslation();
  const copyContent = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("navid Content copied to clipboard");
    } catch (err) {
      console.error("navid Failed to copy: ", err);
    }
  };
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
    <Container className={slug} {...props}>
      <Wrapper>
        <Title>{dt(name)}</Title>
        <Socials>
          <EmailWrapper>
            <EmailTitle>Email:</EmailTitle>
            <EmailUrl onClick={() => copyContent(email||"")}>{email}</EmailUrl>
          </EmailWrapper>
          <PhoneWrapper>
            <PhoneTitle>Phone:</PhoneTitle>
            <PhoneUrl onClick={() => copyContent(phone?.[0]||"")}>
              {phone?.[0]}
            </PhoneUrl>
          </PhoneWrapper>
          <WebsiteWrapper>
            <WebsiteTitle>Website:</WebsiteTitle>
            <EmailUrl>{website}</EmailUrl>
          </WebsiteWrapper>
        </Socials>
        <LawyerElement>Lawyer</LawyerElement>
        <MaraElement>Mara</MaraElement>
      </Wrapper>
    </Container>
  );
}
export default LawyerCard;
export const ContainerBorder = theme("mode", {
  light: css`
    border: 1px solid var(--color-gray9);
  `,
  dark: css`
    border: none;
  `,
});
export const LinksTheme = theme("mode", {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-primary6);
  `,
});

export const MaraTheme = theme("mode", {
  light: css`
    background: var(--color-gray12);
  `,
  dark: css`
    background: var(--color-gray3);
  `,
});
const Container = styled.div`
  padding-left: 2rem;
  padding-top: 5rem;
`;
const Wrapper = styled.div`
  ${layer2A_Bg}
  width:22rem;
  height: 27.125rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 3.125rem 1.5rem;
  border-radius: 15px;
`;

const Title = styled.h3`
  ${layer3_TitleStyle};
  ${layer2A_HeaderBG};
  position: absolute;
  top: -1.5rem;
  white-space: nowrap;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  width: fit-content;
  margin-bottom: 2rem;
`;
const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 1.5rem;
`;

const EmailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const EmailTitle = styled.h4`
  ${LinksTheme}
  ${Headline7Style}
  transition: 0.3s all ease;
`;
const EmailUrl = styled.h4`
  ${layer2A_TextColor};
  ${Headline6Style};
`;
const PhoneWrapper = styled(EmailWrapper)``;
const PhoneTitle = styled(EmailTitle)``;
const PhoneUrl = styled(EmailUrl)``;
const WebsiteWrapper = styled(EmailWrapper)``;
const WebsiteUrl = styled.a``;
const WebsiteTitle = styled(EmailTitle)``;
const LawyerElement = styled.h3`
  ${layer3_TextStyle}
  ${layer2A_Bg}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: rotate(3deg) translate(-50%, 70%);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  box-shadow: unset;
`;
const MaraElement = styled.h3`
  ${layer3_TextStyle}
  ${MaraTheme}
  position:absolute;
  bottom: 0;
  left: 0;
  transform: rotate(-3deg) translate(50%, 70%);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
