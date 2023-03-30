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

import { FiBox } from 'react-icons/fi';
import { deviceMin } from 'Consts/device';
import { FcCurrencyExchange } from 'react-icons/fc';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from '../../../../PagesComponents/Lists/Exchanges/const';
import { Exchange } from 'Interfaces/Lists/exchanges';

type Props = Exchange;

function MobileExchangeCard({
  desc,
  location,
  fullName,
  isFeatured,
  logoUrl,
  contact,
}: Props) {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container
      href={contact?.website}
      target={'_blank'}
      isFeatured={isFeatured}
    >
      <Wrapper isFeatured={isFeatured}>
        <ImgWrapper>
          <Img
            loading='lazy'
            src={logoUrl ? logoUrl : `/Images/placeholder.jpeg`}
            alt='image'
            width={92}
            height={92}
          />
        </ImgWrapper>
        {isFeatured && (
          <VIPBoxContainer aria-hidden={true}>
            <VIPBox aria-hidden={true} />
          </VIPBoxContainer>
        )}
        <NameTag isFeatured={isFeatured}>{dt(fullName)} </NameTag>
        <Desc isFeatured={isFeatured}>{dt(desc)}</Desc>

        <SocialMediaTag isFeatured={isFeatured}>
          <FcCurrencyExchange />
          {t(LanguageKeys.exchange)}
        </SocialMediaTag>
        <LocationTag isFeatured={isFeatured}>{dt(location)}</LocationTag>
      </Wrapper>
    </Container>
  );
}
export default MobileExchangeCard;
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

export const LogoBackground = theme('mode', {
  light: css`
    background: linear-gradient(
      -86deg,
      var(--color-gray11) 0 70%,
      var(--color-gray9) 0% 100%
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
export const FeaturedLogoBackground = theme('mode', {
  light: css`
    background: linear-gradient(
      -2deg,
      var(--color-gray9) 0 62%,
      var(--color-gray11) 0% 100%
    );
  `,
  dark: css`
    background: linear-gradient(
      -2deg,
      var(--color-gray2) 0 62%,
      var(--color-gray3) 0% 100%
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
const Container = styled.a<{ isFeatured: boolean }>`
  position: relative;
  width: 100%;
  margin-top: 4.5rem;
  row-gap: 3rem;
  transition: all 0.3s ease;
  @media ${deviceMin.laptopXS} {
    width: 25rem;
    ${({ isFeatured }) => !isFeatured && "width: 30%;"}
  }
  :hover {
    transform: scale(1.05);
  }
`;

const Wrapper = styled.div<{ isFeatured: boolean }>`
  width: 100%;
  min-height: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  gap: 1rem;
  padding: 4rem 0.75rem 3.5rem;
  transition: all 0.4s ease 0s;
  //////////////////////////
  ${({ isFeatured }) =>
    isFeatured
      ? layer2B_BG
      : css`
          ${layer2A_Bg};
          ${ContainerDropShadow}
        `}
  box-shadow:unset;
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

const NameTag = styled.h4<{ isFeatured: boolean }>`
  ${layer3_SubtitleStyle};
  display: flex;
  gap: 0.2rem;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  z-index: 2;
  transition: all 0.3s ease;

  ${({ isFeatured }) =>
    isFeatured
      ? `background-color: var(--color-gray7); color:var(--color-gray13);`
      : layer2A_HeaderBG}
`;
const ImgWrapper = styled.div`
  ${LogoBackground}
  display: flex;
  justify-content: center;
  align-items: center;

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
const Img = styled.img`
  object-fit: cover;
  transition: all 0.3s ease;
  height: 92px;
  width: 92px;
  background: white;
  border-radius: 10px;
  border-radius: 10px;

  ${Container}:hover & {
    height: 96px;
    width: 96px;
  }
`;
const Desc = styled.p<{ isFeatured: boolean }>`
  ${Headline6Style};
  ${({ isFeatured }) => (isFeatured ? layer2B_TextColor : layer1_TextColor)}
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  text-align: start;
  white-space: pre-line;
  // height: 7rem;
  text-align: center;
`;

const LocationTag = styled.h3<{ isFeatured: boolean }>`
  ${Headline7Style};
  padding: 0.5rem 1.5rem;
  border-radius: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(10%, 50%) rotate(-3deg);
  ${({ isFeatured }) =>
    isFeatured
      ? css`
          ${layer1_BG};
          ${TagBgTheme}
        `
      : css`
          ${NotFeaturedLocationTagTheme}
        `}
  @media ${deviceMin.tabletL} {
    bottom: -8px;
    left: 8px;
  }
  transition: all 0.3s ease;
  ${Container}:hover & {
    transform: translate(10%, 50%) rotate(0);
  }
`;
const SocialMediaTag = styled.h4<{ isFeatured: boolean }>`
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
  ${({ isFeatured }) =>
    isFeatured ? layer2B_BG : NotFeaturedSocialMediaTagStyle};

  ///////////////////
  @media ${deviceMin.tabletL} {
    bottom: -10px;
    right: 8px;
  }
  transition: all 0.3s ease;
  ${Container}:hover & {
    transform: translate(-5%, 35%) rotate(0);
  }
`;
