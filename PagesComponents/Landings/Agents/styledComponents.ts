import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Layer1_TextStyle } from 'Styles/Theme/Layers/layer1/style';
import { layer1_TextColor } from 'Styles/Theme/Layers/layer1/theme';
import { Headline1Style, Headline5Style } from 'Styles/Typo';
import Image from 'next/image';
import { Hint_BG } from 'Styles/Theme/Hint/theme';
import { Hint_SubTitleStyle } from 'Styles/Theme/Hint/style';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { device, deviceMin } from 'Consts/device';
const HeroTheme = theme('mode', {
  light: css`
    background: linear-gradient(
      180deg,
      var(--color-gray12) 23.96%,
      #ffffff 100%
    );
  `,
  dark: css`
    background: linear-gradient(
      180deg,
      var(--color-gray2) 23.96%,
      var(--color-gray3) 100%
    );
  `,
});
const DescSpanTheme = theme('mode', {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary6);
  `,
});

const TitleSpanTheme = theme('mode', {
  light: css`
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary5);
  `,
});

const RightPlaceTitle = styled.h2`
  ${Headline1Style};
  ${layer1_TextColor};
  width: 100%;
  text-align: center;
  margin-bottom: 7rem;
  span {
    padding: 0 1rem;
    display: inline-block;
    margin-top: 1rem;
    transform: rotate(-10deg);
    background: var(--color-primary5);
    border-radius: 20px;
    color: white;
  }
`;
const VipAgentCard = styled(Image)`
  width: 100%;
  height: 100%;
  scale: 90%;
`;
const Desc = styled.p`
  ${Layer1_TextStyle};
  text-align: center;
  margin: 0;

  span {
    ${DescSpanTheme}
  }

  @media ${deviceMin.tabletL} {
    font-size: 32px;
    line-height: 46px;
  }
`;
const SectionDivider = styled.hr`
  width: 50%;
  height: 4px;
  margin: 0 auto;
  background: var(--color-gray9);
  margin-bottom: 5.5rem;
`;
const Section = styled.section`
  width: 100%;
  margin-bottom: 5rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContactUsContainer = styled.div`
  ${Hint_BG}
  padding: 2rem 5rem;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;
const ContactsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ContactsDesc = styled(Desc)`
  ${Hint_SubTitleStyle};
`;
const TelegramContainer = styled.a`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  direction: ltr;
  cursor: pointer;
`;
const GmailContainer = styled.button`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  direction: ltr;
  cursor: pointer;
`;
const GmailIcon = styled(SiGmail)`
  color: var(--color-secondary4);
  width: 1.5rem;
  height: auto;
`;
const GmailLink = styled.h3`
  ${Headline5Style};
  text-align: center;
  word-break: break-all;
  color: var(--color-secondary4);
  direction: ltr;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;
const TelegramIcon = styled(FaTelegramPlane)`
  color: var(--color-secondary4);
  width: 1.5rem;
  height: auto;
`;
const TelegramLink = styled(GmailLink)``;

export {
  RightPlaceTitle,
  SectionDivider,
  Desc,
  Section,
  VipAgentCard,
  ContactUsContainer,
  ContactsWrapper,
  ContactsDesc,
  GmailIcon,
  GmailLink,
  TelegramContainer,
  GmailContainer,
  TelegramIcon,
  TelegramLink,
  HeroTheme,
  TitleSpanTheme,
};
