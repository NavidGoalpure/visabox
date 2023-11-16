import { deviceMin } from 'Consts/device';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { layer1_BG } from 'Styles/Theme/Layers/layer1/theme';
import theme from 'styled-theming';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { Headline4Style, Headline7Style } from 'Styles/Typo';
import { FiBox } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useLocale } from 'Hooks/useLocale';
import { SidebarPage } from './SideBar';
import { MaraAgent } from 'Interfaces/Database/Lists/agents';
import { layer2A_BodyStyle, layer2A_SubtitleStyle, layer2A_TextStyle, layer2A_TitleStyle } from 'Styles/Theme/Layers/layer2/style';
import { layer2A_Key, layer2A_Value } from 'Styles/Theme/Layers/layer2/theme';
import { componentStatements, LanguageKeys } from '../const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { DesktopContactComponent } from '../Desktop/DesktopContactComponent';
import Link from 'next/link';
import { GoLinkExternal } from 'react-icons/go';

interface Props {
  ChosenAgent?: MaraAgent;
}
function MobileAgentsPage({ 
  ChosenAgent,
  ...props
 }: Props) {
  const { dt } = useDynamicTranslation();
  const { locale } = useLocale();
  const [imgSrc, setImgSrc] = useState('');

  const { t } = useStaticTranslation(componentStatements);

  useEffect(() => {
    setImgSrc(`/Images/lists/agent/${ChosenAgent?.slug}.jpeg`);
  }, [ChosenAgent]);

  return (
    <Container>
      <BoxBackground aria-hidden={true}>
      <BackgroundVIPBox />
      </BoxBackground>
      <ProfilePictureWrapper>
        <ProfilePicture
          fill
          src={imgSrc}
          alt={
            ChosenAgent?.name ? `${dt(ChosenAgent?.name)} image` : 'agent image'
          }
          onError={() => {
            setImgSrc(`/Images/placeholder.jpeg`);
          }}
        />
      </ProfilePictureWrapper>
      <Title>{dt(ChosenAgent?.name)}</Title>
          <MaraNumberContainer>
            <MaraNumberTitle>
              {t(LanguageKeys.MaraNumber)}: &nbsp;
            </MaraNumberTitle>
            <MaraNumber>{ChosenAgent?.mara_number}</MaraNumber>
          </MaraNumberContainer>
          <StyledDesktopContactComponent
          website={ChosenAgent?.website}
          email={ChosenAgent?.email}
/>
      <Link
       style={{ 
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
        }}
        target='blank'
        href={`https://portal.mara.gov.au/search-the-register-of-migration-agents/register-of-migration-agent-details/?ContactID=${ChosenAgent?._id}`}
      >
      <MaraPageButton >
         {t(LanguageKeys.MaraPageButton)}
        <LinkIcon />
      </MaraPageButton>
        </Link>

        <AgencyTitle>
          Agency’s
          </AgencyTitle>
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
    </Container>
  );
}
export default MobileAgentsPage;
const BoxBackgroundColor = theme('mode', {
  light: css`
    background-color: var(--color-gray13);
  `,
  dark: css`
    background-color: var(--color-gray4);
  `,
});

const BoxColor = theme('mode', {
  light: css`
    color: white;
  `,
  dark: css`
    color: var(--color-gray3);
  `,
});

const TitleColor = theme('mode', {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});

const MaraNumberTitleColor = theme("mode", {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: var(--color-gray13);
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

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 4rem 0;
  @media ${deviceMin.tabletS} {
    justify-content: space-between;
  }
`;
const BoxBackground = styled.div`
  ${BoxBackgroundColor}
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 85%, 0 100%);
  position: absolute;
  top: -1.5rem;
  z-index: 0;
  width: 100vw;
  height: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const BackgroundVIPBox = styled(FiBox)`
  ${BoxColor}
  width: 28rem;
  height: auto;
`;

const ProfilePictureWrapper = styled.div`
  width: 14rem;
  height: 14rem;
  z-index: 1;
  margin-bottom: 4rem;
  position: relative;
`;
const ProfilePicture = styled(Image)`
  box-shadow: var(--box-shadow-layer2);
  object-fit: cover;
  position: relative !important;
  border-radius: 50%;
`;

const Title = styled.h2`
  ${TitleColor}
  ${Headline4Style}
  z-index:1;
  font-weight: 600;
  margin-bottom: 3rem;
`;

const MaraNumberContainer = styled.div`
${TitleColor}
display: flex;
justify-content: center;
margin-bottom: 2rem;
${layer2A_Value}
`;

const MaraNumberTitle = styled.h3`
  ${layer2A_Key}
  ${MaraNumberTitleColor}
  margin:0;
  width: auto;
`;

const MaraNumber = styled.h3`
  ${layer2A_Value}
  color: var(--color-primary5)
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
  margin-bottom: 4rem;
`;

const LinkIcon = styled(GoLinkExternal)`
`

const StyledDesktopContactComponent = styled(DesktopContactComponent)`
  ${layer2A_Value}
  color: var(--color-primary5)
`;

const AgencyTitle = styled(Title)`
margin-top: 4rem;
  `;

const AgencyContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 50px;
  padding: 0rem 0.5rem;
  gap: 2rem;
  align-items: center;
  z-index: 1;
  `;

  const AgencyCard = styled.div`
  ${layer2A_BodyStyle}
  text-align: center;
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
