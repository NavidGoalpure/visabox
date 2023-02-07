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
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import {
  componentStatements,
  LanguageKeys,
} from "PagesComponents/Businesses/Lawyers/const";
import Link from "next/link";

interface Props extends HTMLAttributes<HTMLDivElement> {
  name: MultiLanguageText;
  desc: MultiLanguageText | undefined;
  slug: string;
}

function VIPLawyerCard({ name, desc, slug }: Props) {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);
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
    <Container href={`/businesses/lawyers/${slug}`} className={slug}>
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
          {dt(desc)}
        </Desc>
        <ViewMoreButton hasAnimation={false}>
          {t(LanguageKeys.ViewMore)}
        </ViewMoreButton>
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
const Container = styled(Link)`
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
  transition: all 0.3s ease;
  @media ${deviceMin.mobileL} {
    width: 23rem;
  }
  @media ${deviceMin.tabletS} {
    padding: 4rem 1.5rem 1rem;
    height: 23rem;
    width: 23rem;
  }
  :hover {
    transform: scale(1.05);
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
  transition: all 0.3s ease;
  ${Wrapper}:hover & {
    transform: rotate(0deg) translate(-50%, -56%);
  }
`;
const LawyerLogo = styled(Image)`
  position: relative !important;
  object-fit: cover;
  transition: all 0.3s ease;
  ${Wrapper}:hover & {
    transform: scale(1.05);
  }
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
  padding: 0.8rem 1rem;
  border-radius: 10px;
  transform: rotate(-3deg) translate(-20%, 50%);
  transition: all 0.3s ease;
  @media ${deviceMin.tabletS} {
    right: unset;
    bottom: unset;
    left: 0;
    top: 0;
    transform: rotate(-87deg) translate(-50%, -100%);
  }
  ${Wrapper}:hover & {
    @media ${deviceMin.tabletS} {
      transform: rotate(-90deg) translate(-50%, -100%);
    }
  }
`;
const Star = styled(AiFillStar)`
  color: var(--color-secondary4);
  transition: all 0.3s ease;
  ${Wrapper}:hover & {
    transform: rotate(-45deg);
  }
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
  transition: all 0.3s ease;
  @media ${deviceMin.tabletS} {
    left: -15%;
    transform: rotate(-92deg) translate(50%, -10%);
  }
  ${Wrapper}:hover & {
    @media ${deviceMin.tabletS} {
      transform: rotate(-90deg) translate(50%, -10%);
    }
  }
`;
