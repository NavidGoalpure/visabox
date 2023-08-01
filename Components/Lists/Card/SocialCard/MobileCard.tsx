import Image from 'next/image';
import { PrimaryButton } from 'Elements/Button/Primary';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { Locations } from 'Interfaces';
import { FaInstagram, FaTelegramPlane, FaYoutube } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { layer1_BG, layer1_TextColor } from 'Styles/Theme/Layers/layer1/theme';
import {
  layer2A_Bg,
  layer2A_HeaderBG,
  layer2B_BG,
  layer2B_TextColor,
} from 'Styles/Theme/Layers/layer2/theme';
import { layer3_SubtitleStyle } from 'Styles/Theme/Layers/layer3/style';
import { layer3_TextColor } from 'Styles/Theme/Layers/layer3/theme';
import { Headline6Style, Headline7Style } from 'Styles/Typo';
import { componentStatements, LanguageKeys } from './const';
import { FiBox } from 'react-icons/fi';
import { deviceMin } from 'Consts/device';
import { SocialMediaTypes, Socials } from 'Interfaces/Database/Lists/socials';
import { HTMLAttributes, useEffect, useState } from 'react';
import { FeaturedPlan_Business } from 'Interfaces/Database/Lists';
import { Status } from 'Interfaces/Database';

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'id'>, Socials { }

function MobileSocialCard({
  desc,
  locations,
  name,
  link,
  socialmediaType,
  logoUrl,
  slug,
  featuredPlan,
  status,
  ...props
}: Props) {
  const { t } = useStaticTranslation(componentStatements);
  const [imgSrc, setImgSrc] = useState(`/Images/placeholder.jpeg`);
  useEffect(() => {
    if (logoUrl) setImgSrc(logoUrl);
  }, [logoUrl]);
  if (status === Status.DEACTIVE) return null;
  const SocialMediaIcon = () => {
    switch (socialmediaType) {
      case SocialMediaTypes.TELEGRAM:
        return (
          <>
            <TelegramIcon />
            {t(LanguageKeys.Telegram)}
          </>
        );
      case SocialMediaTypes.INSTAGRAM:
        return (
          <>
            <InstagramIcon />
            {t(LanguageKeys.Instagram)}
          </>
        );

      case SocialMediaTypes.YOUTUBE:
        return (
          <>
            <YoutubeIcon />
            {t(LanguageKeys.Youtube)}
          </>
        );

      default:
        return null;
    }
  };
  return (
    <Container href={link} target={'_blank'} featuredPlan={featuredPlan}>
      <Wrapper featuredPlan={featuredPlan} {...props}>
        {featuredPlan === FeaturedPlan_Business.VIP && (
          <ImgWrapper>
            <Img
              fill
              src={imgSrc}
              alt='image'
              sizes='96px'
            />
          </ImgWrapper>
        )}
        {featuredPlan === FeaturedPlan_Business.VIP && (
          <VIPBoxContainer aria-hidden={true}>
            <VIPBox aria-hidden={true} />
          </VIPBoxContainer>
        )}
        <NameTag featuredPlan={featuredPlan}>{name} </NameTag>
        <Desc featuredPlan={featuredPlan}>{desc}</Desc>
        <JoinButton>{t(LanguageKeys.Join)}</JoinButton>
        <SocialMediaTag featuredPlan={featuredPlan}>
          {SocialMediaIcon()}
        </SocialMediaTag>
        <LocationTag featuredPlan={featuredPlan}>
          {locations === Locations.fa
            ? t(LanguageKeys.Persian)
            : t(LanguageKeys.English)}
        </LocationTag>
      </Wrapper>
    </Container>
  );
}
export default MobileSocialCard;
const ContainerDropShadow = theme('mode', {
  light: css`
    filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.5));
  `,
  dark: css``,
});
const TagBgTheme = theme('mode', {
  light: css`
    background: white;
    color: var(--color-gray4);
  `,
  dark: css`
    background: var(--color-gray3);
    color: var(--color-gray13);
  `,
});

// const LogoBackground = theme('mode', {
//   light: css`
//     background: linear-gradient(
//       -2deg,
//       var(--color-gray9) 0 62%,
//       var(--color-gray11) 0% 100%
//     );
//   `,
//   dark: css`
//     background: linear-gradient(
//       -2deg,
//       var(--color-gray3) 0 62%,
//       var(--color-gray1) 0% 100%
//     );
//   `,
// });
const FeaturedLogoBackground = theme('mode', {
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
const BoxTheme = theme('mode', {
  light: css`
    color: var(--color-secondary2);
  `,
  dark: css`
    color: var(--color-secondary4);
  `,
});
const NotFeaturedLocationTagTheme = theme('mode', {
  light: css`
    background: var(--color-gray12);
    color: var(--color-gray4);
  `,
  dark: css`
    background: var(--color-gray3);
    color: var(--color-gray13);
  `,
});
const NotFeaturedSocialMediaTagStyle = css`
  ${layer2A_Bg};
  ${layer3_TextColor};
  box-shadow: unset;
`;
const Container = styled.a<{ featuredPlan: FeaturedPlan_Business }>`
  margin-top: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;
  transition: all 0.3s ease;
  // width: 100%;
  @media ${deviceMin.laptopXS} {
    ${({ featuredPlan }) =>
    featuredPlan === FeaturedPlan_Business.SIMPLE && 'width: 30%;'}
  }
  :hover {
    transform: scale(1.05);
  }
`;

const Wrapper = styled.div<{ featuredPlan: FeaturedPlan_Business }>`
  width: 100%;
  max-width: 25rem;
  height: 21rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  gap: 1.5rem;
  padding: 2rem 0.75rem 3.5rem;
  position: relative;
  transition: all 0.4s ease 0s;
  //////////////////////////
  ${({ featuredPlan }) =>
    featuredPlan === FeaturedPlan_Business.VIP
      ? css`
          ${layer2B_BG};
          min-height: 27rem;
          justify-content: space-between;
          padding: 5rem 0.75rem 3.5rem;
        `
      : css`
          ${layer2A_Bg};
          ${ContainerDropShadow}
        `}
  box-shadow:unset;
`;
const ImgWrapper = styled.div`
  ${FeaturedLogoBackground}
  position:relative;
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
  z-index: 2;
  transition: all 0.3s ease;
  ${Container}:hover & {
    transform: translate(-50%, -52%) rotate(0);
  }
`;
const VIPBoxContainer = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-gray5);
  border-radius: 0 0 50% 50%;
  position: absolute;
  top: 0;
  right: 5%;
`;
const VIPBox = styled(FiBox)`
  ${BoxTheme}
  width: 62%;
  height: auto;
`;

const NameTag = styled.h4<{ featuredPlan: FeaturedPlan_Business }>`
  ${layer3_SubtitleStyle};
  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  z-index: 2;
  transition: all 0.3s ease;

  ${({ featuredPlan }) =>
    featuredPlan === FeaturedPlan_Business.VIP
      ? `background-color: var(--color-gray7); color:var(--color-gray13);`
      : layer2A_HeaderBG}
`;
const Img = styled(Image)`
  position: relative !important;
  object-fit: cover;
  transition: all 0.3s ease;
`;
const Desc = styled.p<{ featuredPlan: FeaturedPlan_Business }>`
  ${Headline6Style};
  text-align: start;
  ${({ featuredPlan }) =>
    featuredPlan === FeaturedPlan_Business.VIP
      ? layer2B_TextColor
      : layer1_TextColor}
  white-space: pre-line;
  overflow: hidden;
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-align: start;
`;
const JoinButton = styled(PrimaryButton)`
  padding: 0 4rem;
  width: max-content;
  transition: all 0.4s ease 0s;
`;
const LocationTag = styled.h3<{ featuredPlan: FeaturedPlan_Business }>`
  ${Headline7Style};
  padding: 0.5rem 1.5rem;
  border-radius: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(10%, 50%) rotate(-3deg);
  transition: all 0.3s ease;
  ${({ featuredPlan }) =>
    featuredPlan === FeaturedPlan_Business.VIP
      ? css`
          ${layer1_BG};
          ${TagBgTheme};
          @media ${deviceMin.tabletL} {
            bottom: 0;
            left: 0;
            transform: translate(-60%, -110%) rotate(-90deg);
          }
        `
      : css`
          ${NotFeaturedLocationTagTheme};
          @media ${deviceMin.tabletL} {
            bottom: -8px;
            left: 8px;
          }
        `}
`;
const SocialMediaTag = styled.h4<{ featuredPlan: FeaturedPlan_Business }>`
  ${Headline6Style};
  ${layer3_TextColor}
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-gray13);
  gap: 0.5rem;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  z-index: 2;
  transform: translate(-5%, 35%) rotate(3deg);
  transition: all 0.3s ease;
  ////////////////////
  ${({ featuredPlan }) =>
    featuredPlan === FeaturedPlan_Business.VIP
      ? css`
          ${layer2B_BG};
          @media ${deviceMin.tabletL} {
            bottom: unset;
            right: unset;
            left: 0;
            top: 0;
            transform: translate(-55%, 130%) rotate(-85deg);
          }
        `
      : css`
          ${NotFeaturedSocialMediaTagStyle};
          @media ${deviceMin.tabletL} {
            bottom: -10px;
            right: 8px;
          }
        `};

  ///////////////////
`;
const TelegramIcon = styled(FaTelegramPlane)`
  background: linear-gradient(180deg, #2aabee 0%, #229ed9 100%);
  color: white;
  height: auto;
  width: 1.5rem;
  padding: 0.25rem;
  border-radius: 50%;
`;
const InstagramIcon = styled(FaInstagram)`
  // background: linear-gradient(180deg, #2aabee 0%, #229ed9 100%);
  color: white;
  height: auto;
  width: 1.5rem;
  padding: 0.25rem;
  border-radius: 50%;
`;
const YoutubeIcon = styled(FaYoutube)`
  background-color: #c7524a;
  color: white;
  height: auto;
  width: 1.5rem;
  padding: 0.25rem;
  border-radius: 50%;
`;
