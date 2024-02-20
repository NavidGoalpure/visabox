import { Logo } from 'Elements/Logo';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Headline5Style } from 'Styles/Typo';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';

import { copyContent } from 'Utils';

import { layer2A_TextStyle } from 'Styles/Theme/Layers/layer2/style';

import { getUserCountry, isUserLiveInIran } from 'Utils/country-state-city';
import { BiWorld } from 'react-icons/bi';
import CountryModal from 'Components/CountryModal';

function MobileFooter() {
  const { t } = useStaticTranslation(componentStatements);
  const gmailToastMessage = t(LanguageKeys.copyEmailToastMessage);
  const userCountry = getUserCountry();
  const [mustShowCountryModal, setMustShowCountryModal] = useState<boolean>(
    !userCountry
  );
  return (
    <Container>
      <CountryModal
        isOpen={mustShowCountryModal}
        setIsOpen={setMustShowCountryModal}
      />
      <StyledLogo />
      <ItemsContainer>
        <ItemsTitle>{t(LanguageKeys.SkilledWorkerVisa)}</ItemsTitle>
        <Items
          href={`/occupations`}
          data-name={t(LanguageKeys.SkilledOccupationList)}
        >
          {t(LanguageKeys.SkilledOccupationList)}
        </Items>
        <Items
          href={`/occupations/assessing-authorities`}
          data-name={t(LanguageKeys.AssessingAuthority)}
        >
          {t(LanguageKeys.AssessingAuthority)}
        </Items>
        {isUserLiveInIran() && (
          <Items
            href={`/occupations/university-section-search`}
            data-name={t(LanguageKeys.UniversitySection)}
          >
            {t(LanguageKeys.UniversitySection)}
          </Items>
        )}
      </ItemsContainer>
      <ItemsContainer>
        <ItemsTitle>{t(LanguageKeys.Lists)}</ItemsTitle>
        <Items href={`/lists/agents`} data-name={t(LanguageKeys.AgentsBox)}>
          {t(LanguageKeys.AgentsBox)}
        </Items>

        <Items href={`/lists/exchanges`} data-name={t(LanguageKeys.Exchanges)}>
          {t(LanguageKeys.Exchanges)}
        </Items>

        <Items href={`/lists/naaties`} data-name={t(LanguageKeys.Naati)}>
          {t(LanguageKeys.Naati)}
        </Items>
        {/* {locale === Languages.fa && (
          <Items
            href={`/landing/agents`}
            data-name={t(LanguageKeys.BecomeSponser)}
          >
            {t(LanguageKeys.BecomeSponser)}
          </Items>
        )} */}
      </ItemsContainer>
      <ItemsContainer>
        <Items
          href={`/lists/agents?country=ir`}
          data-name={t(LanguageKeys.IranianAgents)}
        >
          {t(LanguageKeys.IranianAgents)}
        </Items>
        <Items
          href={`/lists/agents?country=in`}
          data-name={t(LanguageKeys.IndianAgents)}
        >
          {t(LanguageKeys.IndianAgents)}
        </Items>
        <Items
          href={`/lists/agents?country=cn`}
          data-name={t(LanguageKeys.ChineseAgents)}
        >
          {t(LanguageKeys.ChineseAgents)}
        </Items>
      </ItemsContainer>
      <ContactUsContainer>
        <ContactUs>{t(LanguageKeys.ContactUs)}</ContactUs>
        <LogosContainer>
          <a
            target={'_blank'}
            href='https://www.t.me/maraboxmigration'
            aria-label='Telegram logo'
          >
            <TelegramLogo />
          </a>
          <GmailLogo
            onClick={() =>
              copyContent({
                text: 'hello@marabox.com.au',
                toastMessage: gmailToastMessage,
              })
            }
          />
        </LogosContainer>
        {/* //////Country Changer//////////////// */}
        <Items
          href={'#footer'}
          onClick={() => {
            setMustShowCountryModal(true);
          }}
        >
          <CountryChangerContainer>
            <WorldIcon />
            <div>{userCountry}</div>
          </CountryChangerContainer>
        </Items>
        <Privacy href='/privacy-policy'>Privacy and Policy</Privacy>
      </ContactUsContainer>
    </Container>
  );
}

export default MobileFooter;
const footerBackground = theme('mode', {
  light: css`
    background: var(--color-gray12);
    :before {
      background-color: var(--color-gray11);
    }
  `,
  dark: css`
    background: var(--color-gray2);
    :before {
      background-color: var(--color-gray9);
    }
  `,
});
const TextColor = theme('mode', {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: var(--color-gray11);
  `,
});

const Container = styled.footer`
  ${footerBackground};
  clip-path: polygon(50% 5%, 100% 0, 100% 100%, 0 100%, 0 0);
  padding-top: 17rem;
  height: auto;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  :before {
    content: '';
    width: 1px;
    height: 11rem;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
  }
`;
const StyledLogo = styled(Logo)`
  width: 6rem;
  height: auto;
  position: absolute;
  top: 10%;
  left: 49.6%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
  border-bottom: 1px solid var(--color-gray9);
  padding-bottom: 2rem;
`;
const ItemsTitle = styled.h2`
  ${Headline5Style};
  ${TextColor};
  cursor: pointer;
  font-weight: bold;
`;

const Items = styled(Link)`
  ${Headline5Style}
  color: var(--color-gray9);
  cursor: pointer;
`;
const ContactUsContainer = styled.div`
  width: fit-content;
  color: var(--color-gray9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const ContactUs = styled.h6`
  ${Headline5Style};
  ${TextColor};
  font-weight: bold;
`;
const LogosContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const CountryChangerContainer = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: 600;
`;
const WorldIcon = styled(BiWorld)`
  width: 2rem;
  height: 2rem;
`;
const Privacy = styled.a`
  ${layer2A_TextStyle}
  color: var(--color-gray9);
  // font-size: 12px;
  position: absolute;
  bottom: 16px;
  position: relative;
  :hover {
    text-decoration: underline;
  }
`;

const TelegramLogo = styled(FaTelegramPlane)`
  color: var(--color-gray9);
  outline-offset: 3px;
  width: 2rem;
  height: 2rem;
`;
const GmailLogo = styled(SiGmail)`
  color: var(--color-gray9);
  width: 2rem;
  height: 2rem;
  transition: all 0.8s ease;
`;
