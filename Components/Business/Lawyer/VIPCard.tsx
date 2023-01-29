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
import { PrimaryButton } from "Elements/Button/Primary";

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
            src={`/public/Images/businesses/lawyer/${slug}`}
            alt="image"
          />
        </ImageWrapper>
        <Title>{dt(name)}</Title>
        <Desc>
          {/*navid delete this */}
          {dt(desc)} my balls are the best balls around here no one has better
          balls than me mobins balls are so small they are practically acnes but
          my balls are soooo big they are the size of the room
        </Desc>

        <LawyerElement>
          Lawyer <Star />
        </LawyerElement>
        <MaraElement>Mara</MaraElement>
        <ViewMoreButton>View More</ViewMoreButton>
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
  padding: 5rem 0 2rem 3rem;
  opacity: 0;
`;
const Wrapper = styled.div`
  ${layer2B_BG}
  width:20rem;
  height: 27.125rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  padding: 4rem 1.5rem 1rem;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const ImageWrapper = styled.div`
  padding: 0.5rem;
  background: linear-gradient(
    -86deg,
    var(--color-gray2) 0 70%,
    var(--color-gray6) 0% 100%
  );
  width: 6.625rem;
  height: 6.625rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -56%) rotate(4deg);
  border-radius: 10px;
  border: none;
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
const LawyerElement = styled.h3`
  ${layer2B_TextStyle}
  ${layer2B_BG}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-88deg) translate(-40%, -140%);
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
  bottom: 0%;
  left: -15%;
  transform: rotate(-91deg) translate(40%, -20%);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
const ViewMoreButton = styled(PrimaryButton)`
  ${Headline7Style}
  padding:0 4rem;
  width: max-content;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
`;
