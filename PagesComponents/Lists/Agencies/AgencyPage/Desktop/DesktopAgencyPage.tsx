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
import {
  layer2A_Key,
  layer2A_Value,
} from 'Styles/Theme/Layers/layer2/theme';
import { useEffect, useState } from 'react';
import { useLocale } from 'Hooks/useLocale';
import { Layer1_TitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { Agency } from 'Interfaces/Database/Lists/agency';
import VIPAgentCard from 'Components/Lists/Card/Agent/VIPCard';
import SmartSocial from 'Components/Lists/Card/SocialCard';
import { getAgencyAgents, getAgencySocials } from '../utils';

interface Props {
  ChosenAgency?: Agency;
}
function DesktopAgentsPage({ ChosenAgency }: Props) {
  const { dt } = useDynamicTranslation();
  const { t } = useStaticTranslation(componentStatements);
  const relatedAgents = getAgencyAgents(ChosenAgency);
  const relatedSocials = getAgencySocials(ChosenAgency);
  const { locale } = useLocale();
  const [imgSrc, setImgSrc] = useState('/Images/placeholder.jpeg');

  useEffect(() => {
    if (ChosenAgency?.logoUrl) setImgSrc(ChosenAgency?.logoUrl);
  }, [ChosenAgency]);

  return (
    <Container>
      <FirstContainer>
        <SmallBox>
          <ProfilePictureWrapper>
            <ProfilePicture
              fill
              src={imgSrc}
              alt={
                ChosenAgency?.name
                  ? `${ChosenAgency?.name?.[locale]} image`
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
            <Name>{dt(ChosenAgency?.name)}</Name>
          </Data>
        </SmallBox>
        <AboutContainer>
          <Title>{t(LanguageKeys.About)}</Title>
          <Desc
            dangerouslySetInnerHTML={{
              __html: dt(ChosenAgency?.desc),
            }}
          />
          <DesktopContactComponent
            website={ChosenAgency?.contact?.website}
            email={ChosenAgency?.contact?.email}
            phone={ChosenAgency?.contact?.phone}
            telegram={ChosenAgency?.contact?.telegram}
            instagram={ChosenAgency?.contact?.instagram}
            linkedin={ChosenAgency?.contact?.linkedin}
          />
        </AboutContainer>
      </FirstContainer>
      <Row>
        <RelatedTo>{t(LanguageKeys.RelatedTo)}</RelatedTo>
        <AgentTitle>{dt(ChosenAgency?.name)}</AgentTitle>
      </Row>
      <Row style={{ gap: '4rem', flexWrap: 'nowrap', width: 'auto' }}>
        {relatedAgents?.map((relatedAgent) => (
          <VIPAgentCard
            name={relatedAgent.name}
            slug={relatedAgent.slug}
            desc={relatedAgent.desc}
            key={relatedAgent.slug}
            layerContext='1'
            avatar={relatedAgent.avatar || `/Images/placeholder.jpeg`}
          />
        ))}
        {relatedSocials?.map((relatedSocial, i) => (
          <SmartSocial
            key={i}
            {...relatedSocial}
            style={{ minHeight: '24.5rem', scale: '0.97' }}
          />
        ))}
      </Row>
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

const FirstContainer = styled.div`
   width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  gap: 1rem;
`;
const Container = styled.div`
   width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  flex-direction: row;
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
const RelatedTo = styled.h2`
  ${Layer1_TitleStyle};
  margin-top: 4rem;
`;
const AgentTitle = styled.h2`
  ${Layer1_TitleStyle};
  margin-top: 4rem;
  margin-inline-start: 0.5rem;
  color: var(--color-primary4);
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;