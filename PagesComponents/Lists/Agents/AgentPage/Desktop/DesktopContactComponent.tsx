import React from 'react';
import styled, { css } from 'styled-components';
import { layer2A_SubtitleStyle } from 'Styles/Theme/Layers/layer2/style';

import { ImSphere } from 'react-icons/im';
import { FaPhone, FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { deviceMin } from 'Consts/device';
import { layer2A_TextColor } from 'Styles/Theme/Layers/layer2/theme';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { copyContent } from 'Utils';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from '../const';
import { IoLocationSharp } from 'react-icons/io5';
import { EnLanguage } from 'Interfaces/Database';
import { useDynamicTranslation } from 'Hooks/useDynamicTraslation';
import theme from 'styled-theming';
interface Props {
  website?: string;
  email?: string;
  phone?: string[];
  telegram?: string;
  instagram?: string;
  linkedin?: string;
  address?: EnLanguage;
}
const DesktopContactComponent = ({
  website,
  email,
  telegram,
  instagram,
  linkedin,
}: Props) => {
  const { t } = useStaticTranslation(componentStatements);
const gmailToastMessage = t(LanguageKeys.copyEmailToastMessage);
const {dt} = useDynamicTranslation()

  return (
    <Container>
      {website && (
        <InternetContainer href={website} target={"_blank"}>
          <InternetIcon />
          <InternetTitle>
            {website.replaceAll("https://", "").replaceAll("http://", "")}
          </InternetTitle>
        </InternetContainer>
      )}
      {email && (
        <GmailContainer
          onClick={() =>
            copyContent({
              text: email || "",
              toastMessage: gmailToastMessage,
            })
          }
        >
          <GmailIcon />
          <GmailTitle>{email}</GmailTitle>
        </GmailContainer>
      )}
      {telegram && (
        <TelegramContainer href={telegram} target={"_blank"}>
          <TelegramIcon />
          <TelegramTitle>{telegram}</TelegramTitle>
        </TelegramContainer>
      )}
      {instagram && (
        <InstagramContainer href={instagram} target={"_blank"}>
          <InstagramIcon />
          <InstagramTitle>
            {instagram.replaceAll("https://www.instagram.com/", "@")}
          </InstagramTitle>
        </InstagramContainer>
      )}
      {linkedin && (
        <LinkedinContainer href={linkedin} target={"_blank"}>
          <LinkedinIcon />
          <LinkedinTitle>
            {linkedin.replaceAll("https://au.linkedin.com/in/", "")}
          </LinkedinTitle>
        </LinkedinContainer>
      )}
    </Container>
  );
};

export { DesktopContactComponent };

const TitleAndIconColor = theme("mode", {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});


const Icon = css`
  ${TitleAndIconColor}
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
  justify-content: flex-start;
  gap: 1rem;
  margin-bottom: 3rem;
  cursor: pointer;
`;
const Container = styled.div`
  width: 100%;
`;
const InternetContainer = styled.a`
  ${SocialsContainerCss}
`;
const InternetIcon = styled(ImSphere)`
  ${Icon}
`;
const InternetTitle = styled.h3`
  ${layer2A_TextColor}
  ${layer2A_SubtitleStyle}
  word-break: break-all;
  direction: ltr;
`;
const GmailContainer = styled.div`
  ${SocialsContainerCss}
  cursor: auto;
`;
const GmailIcon = styled(SiGmail)`
${Icon}
`;
const GmailTitle = styled(InternetTitle)`
  direction: ltr;
`;
const TelegramContainer = styled.a`
  ${SocialsContainerCss}
`;
const TelegramIcon = styled(FaTelegramPlane)`
  ${Icon}
`;
const TelegramTitle = styled(InternetTitle)`
  direction: ltr;
`;
const InstagramContainer = styled.a`
  ${SocialsContainerCss}
`;
const InstagramIcon = styled(AiOutlineInstagram)`
  ${Icon}
`;
const InstagramTitle = styled(InternetTitle)`
  direction: ltr;
`;
const LinkedinContainer = styled.a`
  ${SocialsContainerCss}
`;
const LinkedinIcon = styled(AiFillLinkedin)`
  ${Icon}
`;
const LinkedinTitle = styled(InternetTitle)`
  direction: ltr;
`;
