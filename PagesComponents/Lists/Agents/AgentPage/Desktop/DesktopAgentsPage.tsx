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
import { Agent } from 'Interfaces/Database/Lists/agents';
import {
  layer2A_Key,
  layer2A_Value,
} from 'Styles/Theme/Layers/layer2/theme';
import { useEffect, useState } from 'react';
import { useLocale } from 'Hooks/useLocale';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';

interface Props {
  ChosenAgent?: Agent;
}
function DesktopAgentsPage({ ChosenAgent }: Props) {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();
  const [imgSrc, setImgSrc] = useState('/Images/placeholder.jpeg');

  useEffect(() => {
    if (ChosenAgent?.avatar) setImgSrc(ChosenAgent?.avatar);
  }, [ChosenAgent]);

  return (
    <Container>
      <SmallBox>
        <ProfilePictureWrapper>
          <ProfilePicture
            fill
            src={imgSrc}
            alt={
              ChosenAgent?.name
                ? `${ChosenAgent?.name?.[locale]} image`
                : 'agent image'
            }
            onError={() => {
              setImgSrc(`/Images/placeholder.jpeg`);
            }}
          />
          <VIPBoxContainer aria-hidden={true}>
            <VIPBox aria-hidden={true} />
          </VIPBoxContainer>
        </ProfilePictureWrapper>
        <Data>
          <Name>{dt(ChosenAgent?.name)}</Name>
          <MaraNumberContainer>
            <MaraNumberTitle>
              {t(LanguageKeys.MaraNumber)}: &nbsp;
            </MaraNumberTitle>
            <MaraNumber>{ChosenAgent?.maraNumber}</MaraNumber>
          </MaraNumberContainer>
        </Data>
      </SmallBox>
      <AboutContainer>
        <Title>{t(LanguageKeys.About)}</Title>
        <Desc
          dangerouslySetInnerHTML={{
            __html: dt(ChosenAgent?.desc),
          }}
        />

        <DesktopContactComponent
          website={ChosenAgent?.contact?.website}
          email={ChosenAgent?.contact?.email}
          phone={ChosenAgent?.contact?.phone}
          telegram={ChosenAgent?.contact?.telegram}
          instagram={ChosenAgent?.contact?.instagram}
          linkedin={ChosenAgent?.contact?.linkedin}
        />
      </AboutContainer>
    </Container>

  );
}
export default DesktopAgentsPage;

const TitleColor = theme('mode', {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});

const Container = styled.div`
   width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 4rem 0;
  gap: 1rem;
`;
const SmallBox = styled.header`
  ${layer2A_BodyStyle}
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 21rem;
  border-radius: 15px;
  padding: 1.5rem;
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

const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  margin-bottom: 2rem;
  ${layer2A_Value}
`;
const MaraNumberTitle = styled.h3`
  ${layer2A_Key}
  margin:0;
  width: auto;
`;
const MaraNumber = styled.h3`
  ${layer2A_Value}
`;
const AboutContainer = styled.div`
  padding: 0 1rem;
`;
const Title = styled.h3`
  ${Layer1_TitleStyle}
  margin-bottom:1.5rem;
`;
const Desc = styled.p`
  ${layer2A_TextStyle}
  margin-bottom:1.5rem;
`;
