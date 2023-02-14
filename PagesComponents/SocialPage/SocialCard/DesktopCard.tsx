import Image from "next/image";
import { PrimaryButton } from "Elements/Button/Primary";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { Locations } from "Interfaces";
import { FaTelegramPlane } from "react-icons/fa";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { layer1_BG, layer1_TextColor } from "Styles/Theme/Layers/layer1/theme";
import {
  layer2A_Bg,
  layer2B_BG,
  layer2B_TextColor,
} from "Styles/Theme/Layers/layer2/theme";
import {
  layer3_SubtitleStyle,
  layer3_TitleStyle,
} from "Styles/Theme/Layers/layer3/style";
import { layer3_TextColor } from "Styles/Theme/Layers/layer3/theme";
import { Headline6Style, Headline7Style } from "Styles/Typo";
import { componentStatements, LanguageKeys } from "../const";
import { SocialMediaTypes, TelegramGroup } from "../interfaces";
import { FiBox } from "react-icons/fi";

type Props = TelegramGroup;
function DesktopSocialCard({
  desc,
  locations,
  name,
  link,
  socialmediaType,
  slug,
  isFeatured,
}: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const SocialMediaIcon = () => {
    switch (socialmediaType) {
      case SocialMediaTypes.TELEGRAM:
        return (
          <>
            <TelegramIcon />
            Telegram
          </>
        );
      case SocialMediaTypes.INSTAGRAM:
        return <>Instagram</>;

      default:
        return null;
    }
  };
  return (
    <Container href={link} target={"_blank"}>
      <NameTag>
        {isFeatured && <Box />}
        {name}{" "}
      </NameTag>
      <ImgWrapper>
        <Img fill src={`/Images/socialPage/${slug}.jpg`} alt="image" />
      </ImgWrapper>
      {isFeatured ? (
        <>
          <SocialMediaTag isFeatured={isFeatured}>
            {SocialMediaIcon()}
          </SocialMediaTag>
          <Wrapper isFeatured={isFeatured}>
            <Desc isFeatured={isFeatured}>{desc}</Desc>
            <BottomWrapper>
              <LocationTag isFeatured={isFeatured}>
                {locations === Locations.fa ? "Persian" : "English"}
              </LocationTag>
              <JoinButton>{t(LanguageKeys.Join)}</JoinButton>
            </BottomWrapper>
          </Wrapper>
        </>
      ) : (
        <DropshadowDiv>
          <SocialMediaTag isFeatured={isFeatured}>
            {SocialMediaIcon()}
          </SocialMediaTag>
          <Wrapper isFeatured={isFeatured}>
            <Desc isFeatured={isFeatured}>{desc}</Desc>
            <BottomWrapper>
              <LocationTag isFeatured={isFeatured}>
                {locations === Locations.fa ? "Persian" : "English"}
              </LocationTag>
              <JoinButton>{t(LanguageKeys.Join)}</JoinButton>
            </BottomWrapper>
          </Wrapper>
        </DropshadowDiv>
      )}
    </Container>
  );
}
export default DesktopSocialCard;
const ContainerDropShadow = theme("mode", {
  light: css`
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5));
  `,
  dark: css``,
});
const TagBgTheme = theme("mode", {
  light: css`
    background: var(--color-gray12);
    color: var(--color-gray4);
  `,
  dark: css`
    background: var(--color-gray3);
    color: var(--color-gray13);
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
      var(--color-gray3) 0 70%,
      var(--color-gray6) 0% 100%
    );
  `,
});
export const FeaturedLogoBackground = theme("mode", {
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
      var(--color-gray3) 0% 100%
    );
  `,
});
const NotFeaturedSocialMediaTagStyle = css`
  ${layer2A_Bg};
  ${layer3_TextColor};
  box-shadow: unset;
`;
const Container = styled.a`
  width: 85%;
  position: relative;
  margin-top: 2.5rem;
`;
const NameTag = styled.h4`
  ${layer1_BG};
  ${layer3_SubtitleStyle};
  position: absolute;
  top: 0;
  left: 12.5%;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  z-index: 2;
  transform: translateY(-60%) rotate(-3deg);
  transition: all 0.3s ease;
  ${Container}:hover & {
    transform: rotate(0deg) translateY(-70%);
  }
`;
const Box = styled(FiBox)`
  color: var(--color-secondary4);
  transition: all 0.3s ease;
  ${Container}:hover & {
    transform: rotate(-60deg);
  }
`;
const SocialMediaTag = styled.h4<{ isFeatured: boolean }>`
  ${Headline6Style}
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-gray13);
  gap: 0.5rem;
  position: absolute;
  top: 0;
  right: 15%;
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  z-index: 2;
  transform: translateY(-55%) rotate(3deg);
  transition: all 0.3s ease;
  ////////////////////
  ${({ isFeatured }) =>
    isFeatured ? layer2B_BG : NotFeaturedSocialMediaTagStyle};

  ///////////////////
  ${Container}:hover & {
    transform: rotate(0deg) translateY(-70%);
  }
`;
const ImgWrapper = styled.div`
  ${LogoBackground}
  padding: 0.5rem;
  width: 6.625rem;
  height: 6.625rem;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-50%, -52%) rotate(4deg);
  border-radius: 10px;
  border: none;
  transition: all 0.3s ease;
  z-index: 2;
  ${Container}:hover & {
    transform: rotate(0deg) translate(-70%, -52%);
  }
`;

const Img = styled(Image)`
  position: relative !important;
  object-fit: cover;
  transition: all 0.3s ease;
  ${Container}:hover & {
    transform: scale(1.05);
  }
`;
const TelegramIcon = styled(FaTelegramPlane)`
  background: linear-gradient(180deg, #2aabee 0%, #229ed9 100%);
  color: white;
  height: auto;
  width: 1.5rem;
  padding: 0.25rem;
  border-radius: 50%;
`;
const DropshadowDiv = styled.div`
  ${ContainerDropShadow}
`;
const Wrapper = styled.div<{ isFeatured: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  clip-path: polygon(0 0, 95% 0, 100% 75%, 100% 100%, 0 100%);
  padding: 3.25rem 12.5% 1.5rem;
  transition: all 0.4s ease 0s;
  ${({ isFeatured }) =>
    isFeatured
      ? layer2B_BG
      : css`
          ${layer2A_Bg};
          box-shadow: unset;
        `}

  ${Container}:hover & {
    transform: scale(1.05);
  }
`;

const Desc = styled.p<{ isFeatured: boolean }>`
  ${Headline6Style};
  text-align: start;
  ${({ isFeatured }) => (isFeatured ? layer2B_TextColor : layer1_TextColor)}
`;
const BottomWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LocationTag = styled.h3<{ isFeatured: boolean }>`
  ${TagBgTheme};
  ${Headline7Style};
  padding: 0.5rem 1.5rem;
  border-radius: 100px;
  ${({ isFeatured }) =>
    isFeatured
      ? `
  background: var(--color-gray7);
  color: var(--color-gray13);
  `
      : TagBgTheme}
`;
const JoinButton = styled(PrimaryButton)`
  ${Headline7Style}
  padding:0 4rem;
  width: max-content;
  transition: all 0.4s ease 0s;
`;
