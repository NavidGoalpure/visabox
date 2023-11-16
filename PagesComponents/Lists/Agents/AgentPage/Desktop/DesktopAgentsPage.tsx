import { deviceMin } from 'Consts/device';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import theme from 'styled-theming';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { FiBox } from 'react-icons/fi';
import {
  layer2A_BodyStyle,
  layer2A_SubtitleStyle,
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
import Link from 'next/link';
import agency from 'Sanity/schemas/documents/agency/agency';


interface Props extends HTMLAttributes<HTMLDivElement> {
  name: string | undefined;
  phone: string | undefined;
  slug: string;
  layerContext: '1' | '2';
  avatar: string | undefined;
  ChosenAgent?: MaraAgent;
}
  
function DesktopAgentsPage({ 
  ChosenAgent,
  name,
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

  console.log(ChosenAgent?.agencies, 'navid')

  

  return (
    <Container {...props}>
      <AgentContentContainer>
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
          // phone={ChosenAgent?.phone}
          website={ChosenAgent?.website}
          email={ChosenAgent?.email}
          // address={ChosenAgent?.contact?.address}
/>
       <Link
       style={{ 
        display: 'flex',
        justifyContent: 'center'
        }}
        target='blank'
      href={`https://portal.mara.gov.au/search-the-register-of-migration-agents/register-of-migration-agent-details/?ContactID=${ChosenAgent?._id}`}
      >
      <MaraPageButton >
         {t(LanguageKeys.MaraPageButton)}
        <LinkIcon />
      </MaraPageButton>
        </Link>
      </AboutContainer>
        </AgentContentContainer>
          <Title>
          Agency’s
          </Title>
        <AgencyContentContainer>
      
          {ChosenAgent?.agencies?.map((agency)=> {return (
            <AgencyCard {...props}>
  <AgencyName>{dt(agency.title)}</AgencyName>
  <AgencyCountryContainer>
  <AgencyCountryData>{agency.country}</AgencyCountryData>
  <AgencyCountryData>,</AgencyCountryData>
  <AgencyCountryData>{agency.state}</AgencyCountryData>
  </AgencyCountryContainer>
  <AgencyLocationData>{agency.contact?.full_address}</AgencyLocationData>
</AgencyCard>
    )})}
        </AgencyContentContainer>
        <BackgroundPattern />
    </Container>
  );
}
export default DesktopAgentsPage;

const HeaderBackground = theme("mode", {
  light: css`
    background-image: url("/Images/Patterns/LightPattern.svg");
    opacity: 100%;
  `,
  dark: css`
    background-image: url("/Images/Patterns/DarkPattern.svg");
    opacity: 50%;
  `,
});

const MaraNumberColor = theme('mode', {
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
    background-color: var(--color-gray6);
  `,
});


const ProfileCircle = theme('mode', {
  light: css`
    background-color: rgba(177, 177, 177, 0.15);
    `,
    dark: css`
    background-color: rgba(61, 61, 61, 0.15);
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

const TitleColor = theme("mode", {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});

const BackgroundPattern = styled.span`
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
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  gap: 1rem;
  position:relative;
`;

const AgentContentContainer = styled.div`
  ${layer2A_BodyStyle}
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 50px;
  padding: 4rem;
  gap: 2rem;
  margin-bottom: 4rem;
  align-items: center;
  z-index: 1;
  `;

const SmallBox = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  gap: 1rem;
  align-items: center;
  `;
  const ProfilePictureWrapper = styled.div`
  flex-shrink: 0;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  :before {
    content: "";
    background-color: var(--color-gray3);  
    position: absolute;
    inset: 0;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    transform:scale(1.25);
    opacity: 0.15;
  }
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
${ProfileCircle}
width: 8rem;
height: 4px;
transform: rotate(-90deg);
`

const Data = styled.div`
  ${TitleColor}
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  //   justify-content: center;
  //   align-items: center;
  `;
  const Name = styled.h2`
  ${TitleColor}
  ${MaraNumberColor}
  ${layer2A_TitleStyle}
  z-index:1;
  margin-bottom: 1.5rem;
  `;
  const MaraNumberContainer = styled.div`
  ${TitleColor}
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
`;

const LinkIcon = styled(GoLinkExternal)`
`

const MaraNumberTitle = styled.h3`
  ${layer2A_Key}
  ${TitleColor}
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

const AgencyContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 50px;
  padding: 4rem;
  gap: 2rem;
  align-items: center;
  z-index: 1;
  `;
  
  const AgencyCard = styled.div`
  ${layer2A_BodyStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  padding: 2rem;
  gap: 2rem;
  align-items: center;
  z-index: 1;
  `;

  const AgencyName = styled.h3`
  ${layer2A_TitleStyle}
  `;

  const AgencyCountryContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  `

  const AgencyCountryData = styled.div`
  ${layer2A_SubtitleStyle}
  `

  const AgencyLocationData = styled.div`
  ${layer2A_TextStyle}
  `