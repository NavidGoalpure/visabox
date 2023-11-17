import { deviceMin } from 'Consts/device';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import theme from 'styled-theming';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import { Headline4Style, Headline5Style, Headline6Style } from 'Styles/Typo';
import { FiBox } from 'react-icons/fi';
import { Layer1_SubtitleStyle } from 'Styles/Theme/Layers/layer1/style';

import {
  layer2A_TextStyle,
  layer2A_TitleStyle,
} from 'Styles/Theme/Layers/layer2/style';

import { componentStatements, LanguageKeys } from '../const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';

import { Naati } from 'Interfaces/Database/Lists/naaties';
import { useLocale } from 'Hooks/useLocale';
import { useState, useEffect } from 'react';
import ShowContacts from 'Components/ShowContacts';

interface Props {
  chosenNaati?: Naati;
}
function DesktopNaatiPage({ chosenNaati }: Props) {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);
  const [imgSrc, setImgSrc] = useState<string>('/Images/placeholder.jpeg');
  const { locale } = useLocale();
  useEffect(() => {
    if (chosenNaati?.avatar) setImgSrc(chosenNaati.avatar);
  }, [chosenNaati?.avatar]);
  return (
    <Container>
      <Header>
        <ProfilePictureWrapper>
          <ProfilePicture
            fill
            src={imgSrc}
            alt={
              chosenNaati?.fullName
                ? `${dt(chosenNaati?.fullName)} image`
                : 'naati image'
            }
            onError={() => {
              setImgSrc(`/Images/placeholder.jpeg`);
            }}
            quality={100}
            sizes='96px'
          />
          <VIPBoxContainer aria-hidden={true}>
            <VIPBox aria-hidden={true} />
          </VIPBoxContainer>
        </ProfilePictureWrapper>
        <RightSide>
          <Title>{dt(chosenNaati?.fullName)}</Title>

          <ShowContacts {...chosenNaati?.contact} />
        </RightSide>
      </Header>
      <AboutContainer>
        <AboutTitle>{t(LanguageKeys.About)}</AboutTitle>
        <Desc
          dangerouslySetInnerHTML={{
            __html: dt(chosenNaati?.desc),
          }}
        />
      </AboutContainer>
    </Container>
  );
}
export default DesktopNaatiPage;

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
