import Image from "next/image";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { layer1_BG } from "Styles/Theme/Layers/layer1/theme";
import {
  layer2B_HeaderStyle,
  layer2B_SubtitleStyle,
  layer2B_TitleStyle,
} from "Styles/Theme/Layers/layer2/style";
import { layer2B_BG } from "Styles/Theme/Layers/layer2/theme";
import {
  layer3_SubtitleStyle,
  layer3_TextStyle,
} from "Styles/Theme/Layers/layer3/style";
import { Headline7Style } from "Styles/Typo";
import { AiFillStar } from "react-icons/ai";
import { MultiLanguageText } from "Interfaces";
import { HTMLAttributes, useEffect } from "react";
import { useDynamicTranslation } from "Hooks/useDynamicTraslation";
import gsap from "gsap";
//@ts-ignore
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { PrimaryButton } from "Elements/Button/Primary";
import { deviceMin } from "Consts/device";

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
            src={`/Images/businesses/lawyer/${slug}.jpeg`}
            alt="image"
          />
        </ImageWrapper>
        <Title>{dt(name)}</Title>
        <Desc>
          {/*navid delete this */}
          {dt(desc)}Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud
        </Desc>
        <ViewMoreButton>View More</ViewMoreButton>
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
export const LogoBackground = theme("mode", {
  light: css`
    background: linear-gradient(
      -86deg,
      var(--color-gray9) 0 70%,
      var(--color-gray11) 0% 100%
    );
  `,
  dark: css`
    background: linear-gradient(
      -86deg,
      var(--color-gray2) 0 70%,
      var(--color-gray6) 0% 100%
    );
  `,
});
const Container = styled.div`
  padding: 5rem 0 2rem 0rem;
  opacity: 0;
  width: 100%;
  @media ${deviceMin.mobileL} {
    width: auto;
  }
  @media ${deviceMin.tabletS} {
    padding: 5rem 0 2rem 3rem;
  }
`;
const Wrapper = styled.div`
  ${layer2B_BG}
  width:100%;
  height: 27rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 1.5rem 2.25rem;
  border-radius: 15px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media ${deviceMin.mobileL} {
    width: 23rem;
  }
  @media ${deviceMin.tabletS} {
    padding: 4rem 1.5rem 1rem;
    height: 23rem;
    width: 23rem;
  }
`;
const ImageWrapper = styled.div`
  ${LogoBackground}
  padding: 0.5rem;
  width: 6.625rem;
  height: 6.625rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -52%) rotate(4deg);
  border-radius: 10px;
  border: none;
`;
const LawyerLogo = styled(Image)`
  position: relative !important;
  object-fit: cover;
`;
const Title = styled.h3`
  ${layer2B_TitleStyle}
  ${layer2B_HeaderStyle}
width: fit-content;
  margin-bottom: 0.75rem;
`;
const Desc = styled.p`
  ${layer2B_SubtitleStyle}
  margin-bottom:0.75rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  @media ${deviceMin.tabletS} {
    margin-bottom: 2.5rem;
  }
`;
const ViewMoreButton = styled(PrimaryButton)`
  ${Headline7Style}
  padding:0 4rem;
  width: max-content;

  @media ${deviceMin.tabletS} {
    position: absolute;
    bottom: 0;
    transform: translateY(50%);
  }
`;
const LawyerElement = styled.h3`
  ${layer2B_SubtitleStyle}
  ${layer2B_BG}
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  transform: rotate(-3deg) translate(-20%, 50%);
  @media ${deviceMin.tabletS} {
    right: unset;
    bottom: unset;
    left: 0;
    top: 0;
    transform: rotate(-88deg) translate(-50%, -140%);
  }
`;
const Star = styled(AiFillStar)`
  color: var(--color-secondary4);
`;
const MaraElement = styled.h3`
  ${layer3_SubtitleStyle}
  ${layer1_BG}
  position:absolute;
  bottom: 0%;
  left: 0;
  transform: rotate(3deg) translate(20%, 50%);
  padding: 1rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  @media ${deviceMin.tabletS} {
    left: -15%;
    transform: rotate(-91deg) translate(50%, -20%);
  }
`;
