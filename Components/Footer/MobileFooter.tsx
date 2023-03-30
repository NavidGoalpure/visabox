import { Logo } from 'Elements/Logo';
import React from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { Headline5Style } from 'Styles/Typo';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';
import { componentStatements, LanguageKeys } from './const';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { useLocale } from 'Hooks/useLocale';
import { copyContent } from 'Utils';
import { Languages } from 'Interfaces';

function MobileFooter() {
  const { t } = useStaticTranslation(componentStatements);
  const { locale } = useLocale();

  return (
    <Container>
      <StyledLogo />
      <ItemsContainer>
        <ItemsTitle>{t(LanguageKeys.Occupations)}</ItemsTitle>
        <Items
          href={`/${locale}/occupations`}
          data-name={t(LanguageKeys.SkilledOccupationList)}
        >
          {t(LanguageKeys.SkilledOccupationList)}
        </Items>
        <Items
          href={`/${locale}/occupations/assssing-authorities`}
          data-name={t(LanguageKeys.AssessingAuthority)}
        >
          {t(LanguageKeys.AssessingAuthority)}
        </Items>
      </ItemsContainer>
      <ItemsContainer>
        <ItemsTitle>{t(LanguageKeys.Occupations)}</ItemsTitle>
        <Items
          href={`/${locale}/lists/agents`}
          data-name={t(LanguageKeys.AgentsBox)}
        >
          {t(LanguageKeys.AgentsBox)}
        </Items>
        <Items
          href={`/${locale}/lists/agencies`}
          data-name={t(LanguageKeys.AgenciesBox)}
        >
          {t(LanguageKeys.AgenciesBox)}
        </Items>
        <Items
          href={`/${locale}/lists/secial-pages`}
          data-name={t(LanguageKeys.SocialNetWorksBox)}
        >
          {t(LanguageKeys.SocialNetWorksBox)}
        </Items>
        {/* {locale === Languages.fa && (
          <Items
            href={`/${locale}/landing/agents`}
            data-name={t(LanguageKeys.BecomeSponser)}
          >
            {t(LanguageKeys.BecomeSponser)}
          </Items>
        )} */}
      </ItemsContainer>
      <ContactUsContainer>
        <ContactUs>{t(LanguageKeys.ContactUs)}</ContactUs>
        <LogosContainer>
          <a target={'_blank'} href='https://www.t.me/maraboxmigration'>
            <TelegramLogo />
          </a>
          <a onClick={() => copyContent('mailto:maraboxmigration@gmail.com')}>
            <GmailLogo />
          </a>
        </LogosContainer>
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
  clip-path: polygon(50% 10%, 100% 0, 100% 100%, 0 100%, 0 0);
  padding-top: 19rem;
  height: 64rem;
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
    height: 13rem;
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
  top: 18%;
  left: 50%;
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
const ContactUs = styled.h2`
  ${Headline5Style};
  ${TextColor};
  font-weight: bold;
`;
const LogosContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
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
