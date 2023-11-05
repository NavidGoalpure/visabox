import { deviceMin } from 'Consts/device';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import theme from 'styled-theming';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { FiBox } from 'react-icons/fi';
import {
  layer2A_BodyStyle,
  layer2A_TextStyle,
  layer2A_TitleStyle,
} from 'Styles/Theme/Layers/layer2/style';

import { componentStatements, LanguageKeys } from '../const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { DesktopContactComponent } from './DesktopContactComponent';
import { layer2A_Key, layer2A_Value } from 'Styles/Theme/Layers/layer2/theme';
import { HTMLAttributes, useEffect, useState } from 'react';
import { useLocale } from 'Hooks/useLocale';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { MaraAgency, MaraAgent } from 'Interfaces/Database/Lists/agents';
import { Headline7Style } from 'Styles/Typo';
import { GoLinkExternal } from 'react-icons/go';


interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string | undefined;
  agencies: MaraAgency[] | undefined;
  phone: string | undefined;
  slug: string;
  layerContext: '1' | '2';
  avatar: string | undefined;
  ChosenAgent?: MaraAgent;
}
  
function DesktopAgentsPage({ 
  ChosenAgent,
  name,
  agencies,
  slug,
  avatar,
  layerContext,
  ...props
 }: Props) {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const [imgSrc, setImgSrc] = useState('/Images/placeholder.jpeg');

  useEffect(() => {
    if (ChosenAgent?.avatar) setImgSrc(ChosenAgent?.avatar);
  }, [ChosenAgent]);

  return (
    <Container {...props}>
    <BackgroundPattern>
    </BackgroundPattern>
    {/* <BackgroundColor>
    </BackgroundColor> */}
      <SmallBox>
        <ProfilePictureWrapper>
          <ProfilePicture
            fill
            src={imgSrc}
            alt={
              ChosenAgent?.name
                ? `${dt(ChosenAgent?.name)} image`
                : 'agent image'
            }
            onError={() => {
              setImgSrc(`/Images/placeholder.jpeg`);
            }}
          />
          {/* <VIPBoxContainer aria-hidden={true}>
            <VIPBox aria-hidden={true} />
          </VIPBoxContainer> */}
        </ProfilePictureWrapper>
        <Data>
          <Name>{dt(ChosenAgent?.name)}</Name>
          <MaraNumberContainer>
            <MaraNumberTitle>
              {t(LanguageKeys.MaraNumber)}: &nbsp;
            </MaraNumberTitle>
            <MaraNumber>{ChosenAgent?.mara_number}</MaraNumber>
          </MaraNumberContainer>
        </Data>
      </SmallBox>
      <Hr />
      <AboutContainer>
        {/* <Title>{t(LanguageKeys.About)}</Title>
        <Desc>{ChosenAgent?.desc}</Desc> */}

        <DesktopContactComponent
          phone={ChosenAgent?.phone}
          website={ChosenAgent?.website}
          email={ChosenAgent?.email}
          address={ChosenAgent?.contact?.address}
/>
      <MaraPageButton 
      // navid inja bayad link konim to safhe mara khodeshoon
      >
         {t(LanguageKeys.MaraPageButton)}
        <LinkIcon />
      </MaraPageButton>
      </AboutContainer>
    </Container>
  );
}
export default DesktopAgentsPage;

const HeaderBackground = theme("mode", {
  light: css`
    background-image: url("/Images/Patterns/AlternativeLightPattern.svg");
    filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.5));
  `,
  dark: css`
    background-image: url("/Images/Patterns/AlternativeDarkPattern.svg");
  `,
});

export const ContainerBackground = theme('mode', {
  light: css`
  background: linear-gradient(
    var(--color-gray9) 0 50%,
    var(--color-gray11) 0% 100%
    );
    `,
    dark: css`
    background: linear-gradient(180deg, var(--color-gray2) 58.85%,  var(--color-gray3) 100%);
  `,
});

const TitleColor = theme('mode', {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});

const LineColor = theme('mode', {
  light: css`
    background-color: var(--color-gray9);
  `,
  dark: css`
    background-color: var(--color-gray3);
  `,
});

const MaraPageButtonTheme = theme("mode", {
  light: css`
    color: var(--color-gray8);
  `,
  dark: css`
    color: var(--color-gray10);
  `,
});


const BackgroundPattern = styled.div`
  ${HeaderBackground}
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;

// const BackgroundColor = styled.div`
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   right: 0;
// `;

const Container = styled.div`
  ${ContainerBackground}
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  gap: 1rem;
`;
const SmallBox = styled.header`
  ${layer2A_BodyStyle}
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 21rem;
  border-radius: 15px;
  padding: 1.5rem;
  gap: 2rem;
  margin-bottom: 4rem;
  align-items: center;
`;
const ProfilePictureWrapper = styled.div`
  flex-shrink: 0;
  width: 14.125rem;
  height: 14.125rem;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(61, 61, 61, 0.15);
  border-radius: 50%;
`;
const ProfilePicture = styled(Image)`
  width: 10.5rem !important;
  height: 10.5rem !important;
  object-fit: cover;
  position: relative !important;
  border-radius: 50%;
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
  color: var(--color-secondary4);
  width: 70%;
  height: auto;
`;

const Hr = styled.div`
${LineColor}
width: 8rem;
height: 4px;
transform: rotate(-90deg);
`

const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  //   justify-content: center;
  //   align-items: center;
`;
const Name = styled.h2`
  ${TitleColor}
  ${layer2A_TitleStyle}
  z-index:1;
  margin-bottom: 1.5rem;
`;
const MaraNumberContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  ${layer2A_Value}
`;

const MaraPageButton = styled.button`
  ${Headline7Style};
  ${MaraPageButtonTheme}
  outline: none;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: auto;
  backdrop-filter: blur(10px);
`;

const LinkIcon = styled(GoLinkExternal)`
`

const MaraNumberTitle = styled.h3`
  ${layer2A_Key}
  margin:0;
  width: auto;
`;
const MaraNumber = styled.h3`
  ${layer2A_Value}
  color: var(--color-primary5)
`;
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  ${Layer1_TitleStyle}
  margin-bottom:1.5rem;
`;
const Desc = styled.p`
  ${layer2A_TextStyle}
  margin-bottom:1.5rem;
`;
