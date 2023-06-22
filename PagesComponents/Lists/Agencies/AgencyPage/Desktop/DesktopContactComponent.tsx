import React from 'react';
import styled, { css } from 'styled-components';
import { Headline6Style } from 'Styles/Typo';
import { ImSphere } from 'react-icons/im';
import { FaPhone, FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { deviceMin } from 'Consts/device';
import { layer2A_TextColor } from 'Styles/Theme/Layers/layer2/theme';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { copyContent } from 'Utils';
import { LanguageKeys, componentStatements } from '../const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
interface Props {
  website?: string;
  email?: string;
  phone?: string[];
  telegram?: string;
  instagram?: string;
  linkedin?: string;
}
const DesktopContactComponent = ({
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
      {website && (
        <InternetContainer href={website} target={'_blank'}>
          <InternetIcon />
          <InternetTitle>
            {website.replaceAll('https://', '').replaceAll('http://', '')}
          </InternetTitle>
        </InternetContainer>
      )}
      {phone && (
        <PhoneContainer
          onClick={() =>
            copyContent({
              text: email || '',
              toastMessage: t(LanguageKeys.copyPhoneToastMessage),
            })
          }
        >
          <PhoneIcon />
          <PhoneTitle>
            {phone?.map((phoneNumber) => (
              <div>{phoneNumber}</div>
            ))}
          </PhoneTitle>
        </PhoneContainer>
      )}
      {email && (
        <GmailContainer
          onClick={() =>
            copyContent({
              text: email || '',
              toastMessage: t(LanguageKeys.copyEmailToastMessage),
            })
          }
        >
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

export { DesktopContactComponent };

const Icon = css`
  ${layer2A_TextColor}
  width: 3rem;
  height: 3rem;
  @media ${deviceMin.tabletS} {
    width: 2rem;
    height: 2rem;
  }
`;
const SocialsContainerCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const Container = styled.div`
  display: grid;
  justify-items: start;
  row-gap: 2rem;
  column-gap: 2rem;
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
  cursor: pointer;
`;
const PhoneContainer = styled.div`
  ${SocialsContainerCss}
`;
const PhoneIcon = styled(FaPhone)`
  ${Icon}
`;
const PhoneTitle = styled(InternetTitle)`
  display: flex;
  flex-direction: column;
`;
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
