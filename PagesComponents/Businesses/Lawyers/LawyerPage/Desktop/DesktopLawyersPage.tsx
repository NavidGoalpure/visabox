import { deviceMin } from 'Consts/device';
import styled, { css } from 'styled-components';
import { Lawyers } from '../../const';
import Image from 'next/image';
import { layer1_BG } from 'Styles/Theme/Layers/layer1/theme';
import theme from 'styled-theming';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { Headline4Style, Headline5Style, Headline6Style } from 'Styles/Typo';
import { SidebarPage } from 'PagesComponents/Businesses/Lawyers/LawyerPage/Mobile/SideBar';
import { AiFillStar } from 'react-icons/ai';
import { Lawyer } from '../../interfaces';
import { AboutComponent } from 'PagesComponents/Businesses/Lawyers/LawyerPage/Mobile/AboutComponent';
import { Layer1_SubtitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { layer2A_TextColor } from 'Styles/Theme/Layers/layer2/theme';
import { FaPhone } from 'react-icons/fa';
import { ImSphere } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';
import {
  layer2A_TextStyle,
  layer2A_TitleStyle,
} from 'Styles/Theme/Layers/layer2/style';

import { componentStatements, LanguageKeys } from '../const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { DesktopContactComponent } from './DesktopContactComponent';
interface Props {
  ChosenLawyer?: Lawyer;
}
function DesktopLawyersPage({ ChosenLawyer }: Props) {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <Header>
        <ProfilePictureWrapper>
          <ProfilePicture
            fill
            src={`/Images/businesses/lawyer/${ChosenLawyer?.slug}.jpeg`}
            alt={'lawyer image'}
          />
          <VIPStarContainer aria-hidden={true}>
            <VIPStar aria-hidden={true} />
          </VIPStarContainer>
        </ProfilePictureWrapper>
        <RightSide>
          <Title>{dt(ChosenLawyer?.name)}</Title>
          <MaraNumberContainer>
            <MaraNumberTitle>
              {t(LanguageKeys.MaraNumber)}: &nbsp;
            </MaraNumberTitle>
            <MaraNumber>{ChosenLawyer?.maraNumber}</MaraNumber>
          </MaraNumberContainer>
          <DesktopContactComponent
            website={ChosenLawyer?.website}
            email={ChosenLawyer?.contact?.email}
            phone={ChosenLawyer?.contact?.phone}
            telegram={ChosenLawyer?.contact?.telegram}
            instagram={ChosenLawyer?.contact?.instagram}
            linkedin={ChosenLawyer?.contact?.linkedin}
          />
        </RightSide>
      </Header>
      <AboutContainer>
        <AboutTitle>{t(LanguageKeys.About)}</AboutTitle>
        <Desc
          dangerouslySetInnerHTML={{
            __html: dt(ChosenLawyer?.desc),
          }}
        />
      </AboutContainer>
    </Container>
  );
}
export default DesktopLawyersPage;

const TitleColor = theme('mode', {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});
const HeaderBackground = theme('mode', {
  light: css`
    background-color: var(--color-gray13);
  `,
  dark: css`
    background-color: var(--color-gray6);
  `,
});
const DescBackground = theme('mode', {
  light: css`
    background: var(--color-gray13);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  `,
  dark: css`
    background: var(--color-gray6);
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
const Header = styled.header`
  ${HeaderBackground}
  display: flex;
  width: 55rem;
  border-radius: 15px;
  padding: 1.5rem;
  justify-content: flex-start;
  gap: 2rem;
  margin-bottom: 4rem;
`;
const ProfilePictureWrapper = styled.div`
  flex-shrink: 0;
  width: 16rem;
  height: 16rem;
  z-index: 1;
  position: relative;
`;
const ProfilePicture = styled(Image)`
  object-fit: cover;
  position: relative !important;
  border-radius: 15px;
`;
const VIPStarContainer = styled.div`
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
const VIPStar = styled(AiFillStar)`
  color: var(--color-secondary4);
  width: 70%;
  height: auto;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
`;
const Title = styled.h2`
  ${TitleColor}
  ${Headline4Style}
  z-index:1;
  font-weight: 900;
  margin-bottom: 1.5rem;
`;
const MaraNumberContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;
const MaraNumberTitle = styled.h3`
  ${Layer1_SubtitleStyle}
  margin:0;
`;
const MaraNumber = styled.h3`
  ${Headline5Style};
  color: var(--color-primary5);
`;
const AboutContainer = styled.div`
  ${DescBackground}
  border-radius: 15px;
  width: 55rem;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
const AboutTitle = styled.h3`
  ${layer2A_TitleStyle}
`;
const Desc = styled.p`
  ${layer2A_TextStyle}
`;
