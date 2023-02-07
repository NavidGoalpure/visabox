import React from 'react';
import styled, { css } from 'styled-components';
import {
  layer2A_TextStyle,
  layer2A_TitleStyle,
} from 'Styles/Theme/Layers/layer2/style';
import theme from 'styled-theming';
import { Headline5Style, Headline6Style } from 'Styles/Typo';
import { Layer1_SubtitleStyle } from 'Styles/Theme/Layers/layer1/style';
import { ImSphere } from 'react-icons/im';
import { FaPhone, FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { deviceMin } from 'Consts/device';
import { layer2A_TextColor } from 'Styles/Theme/Layers/layer2/theme';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { copyContent } from 'Utils';
import { componentStatements, LanguageKeys } from '../const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
interface Props {
  maraNumber?: string;
  website?: string;
  email?: string;
  phone?: string[];
  telegram?: string;
  instagram?: string;
  linkedin?: string;
}
const MobileContactComponent = ({
  maraNumber,
  website,
  email,
  phone,
  telegram,
  instagram,
  linkedin,
}: Props) => {
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <MaraNumberContainer>
        <MaraNumberTitle>{t(LanguageKeys.MaraNumber)}: &nbsp;</MaraNumberTitle>
        <MaraNumber>{maraNumber}</MaraNumber>
      </MaraNumberContainer>

      <SocialContainer>
        <SocialTitle>{t(LanguageKeys.Socials)}</SocialTitle>
      </SocialContainer>
      {website && (
        <InternetContainer href={website} target={'_blank'}>
          <InternetIcon />
          <InternetTitle>{website}</InternetTitle>
        </InternetContainer>
      )}
      {phone && (
        <PhoneContainer onClick={() => copyContent(phone?.[0] || '')}>
          <PhoneIcon />
          <PhoneTitle>
            {phone?.map((phoneNumber) => (
              <div>{phoneNumber}</div>
            ))}
          </PhoneTitle>
        </PhoneContainer>
      )}
      {email && (
        <GmailContainer onClick={() => copyContent(phone?.[0] || '')}>
          <GmailIcon />
          <GmailTitle>{email}</GmailTitle>
        </GmailContainer>
      )}
      {telegram && (
        <TelegramContainer href={telegram} target={'_blank'}>
          <TelegramIcon />
          <TelegramTitle>{telegram}</TelegramTitle>
        </TelegramContainer>
      )}
      {instagram && (
        <InstagramContainer href={instagram} target={'_blank'}>
          <InstagramIcon />
          <InstagramTitle>
            {instagram.replaceAll('https://www.instagram.com/', '@')}
          </InstagramTitle>
        </InstagramContainer>
      )}
      {linkedin && (
        <LinkedinContainer href={linkedin} target={'_blank'}>
          <LinkedinIcon />
          <LinkedinTitle>
            {linkedin.replaceAll('https://au.linkedin.com/in/', '')}
          </LinkedinTitle>
        </LinkedinContainer>
      )}
    </Container>
  );
};

export { MobileContactComponent };

const DescBackground = theme('mode', {
  light: css`
    background: var(--color-gray13);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  `,
  dark: css`
    background: var(--color-gray6);
  `,
});

const Icon = css`
  ${layer2A_TextColor}
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  @media ${deviceMin.tabletS} {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
const SocialsContainerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
`;
const Container = styled.div`
  ${DescBackground}
  border-radius: 15px;
  width: 100%;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
const MaraNumberContainer = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;
const MaraNumberTitle = styled.h3`
  ${Layer1_SubtitleStyle}
  margin:0;
`;
const MaraNumber = styled.h3`
  ${Headline5Style};
  color: var(--color-primary5);
`;
const SocialContainer = styled.div``;
const SocialTitle = styled.h3`
  ${layer2A_TitleStyle}
  margin-bottom:4rem;
`;
const InternetContainer = styled.a`
  ${SocialsContainerCss}
`;
const InternetIcon = styled(ImSphere)`
  ${Icon}
`;
const InternetTitle = styled.h3`
  ${layer2A_TextColor}
  ${Headline6Style}
      word-break: break-all;
`;
const PhoneContainer = styled.div`
  ${SocialsContainerCss}
`;
const PhoneIcon = styled(FaPhone)`
  ${Icon}
`;
const PhoneTitle = styled(InternetTitle)``;
const GmailContainer = styled.div`
  ${SocialsContainerCss}
`;
const GmailIcon = styled(SiGmail)`
  ${Icon}
`;
const GmailTitle = styled(InternetTitle)``;
const TelegramContainer = styled.a`
  ${SocialsContainerCss}
`;
const TelegramIcon = styled(FaTelegramPlane)`
  ${Icon}
`;
const TelegramTitle = styled(InternetTitle)``;
const InstagramContainer = styled.a`
  ${SocialsContainerCss}
`;
const InstagramIcon = styled(AiOutlineInstagram)`
  ${Icon}
`;
const InstagramTitle = styled(InternetTitle)``;
const LinkedinContainer = styled.a`
  ${SocialsContainerCss}
`;
const LinkedinIcon = styled(AiFillLinkedin)`
  ${Icon}
`;
const LinkedinTitle = styled(InternetTitle)``;
