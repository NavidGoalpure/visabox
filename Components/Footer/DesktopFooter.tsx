import { Logo } from 'Elements/Logo';
import React, { lazy, Suspense, useState } from 'react';
import styled, { css } from 'styled-components';
import theme from 'styled-theming';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';
import { deviceMin } from 'Consts/device';
import Link from 'next/link';
import { useLocale } from 'Hooks/useLocale';
import { copyContent } from 'Utils';
import { layer2A_SubtitleStyle } from 'Styles/Theme/Layers/layer2/style';
import { Languages } from 'Interfaces';
import { layer2A_TextStyle } from 'Styles/Theme/Layers/layer2/style';
import SwitchTheme from 'Components/NavigationMenu/switchTheme';
import { BiWorld } from 'react-icons/bi';
import { getUserCountry, isUserLiveInIran } from 'Utils/country-state-city';
import { LoadingRow } from 'Elements/Loading/LoadingRow';
// Lazy load CountryModal
const CountryModal = lazy(() => import('Components/CountryModal'));

function DesktopFooter() {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const userCountry = getUserCountry();
  const [mustShowCountryModal, setMustShowCountryModal] = useState<boolean>(
    !userCountry
  );
  const gmailToastMessage = t(LanguageKeys.copyEmailToastMessage);

  return (
    <Container>
      <Suspense fallback={<LoadingRow />}>
        {mustShowCountryModal && (
          <CountryModal
            isOpen={mustShowCountryModal}
            setIsOpen={setMustShowCountryModal}
          />
        )}
      </Suspense>
      <StyledLogo />
      <Wrapper>
        <Top>
          <SideContainer locale={locale}>
            <Items href={`/lists/agents`} data-name={t(LanguageKeys.AgentsBox)}>
              {t(LanguageKeys.AgentsBox)}
            </Items>

            <Items
              href={`/lists/exchanges`}
              data-name={t(LanguageKeys.Exchanges)}
            >
              {t(LanguageKeys.Exchanges)}
            </Items>

            <Items href={`/lists/naaties`} data-name={t(LanguageKeys.Naati)}>
              {t(LanguageKeys.Naati)}
            </Items>
          </SideContainer>
          <CenterItemsContainer>
            <SwitchButton></SwitchButton>
            <Items href={`/${locale}`} data-name={t(LanguageKeys.Home)}>
              {t(LanguageKeys.Home)}
            </Items>
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
          </CenterItemsContainer>
          <LeftSideContainer locale={locale}>
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
            {/* ///////////Theme Changer/////////// */}
            <SwitchThemeContainer>
              <SwitchTheme />
            </SwitchThemeContainer>
            {/* ////////////Privacy and Policy////////////// */}
            <Privacy href='/privacy-policy'>Privacy and Policy</Privacy>
          </LeftSideContainer>
        </Top>
        <Bottom>
          <BottomItems
            href={`/lists/agents?country=IR`}
            data-name={t(LanguageKeys.IranianAgents)}
          >
            {t(LanguageKeys.IranianAgents)}
          </BottomItems>
          <BottomItems
            href={`/lists/agents?country=IN`}
            data-name={t(LanguageKeys.IndianAgents)}
          >
            {t(LanguageKeys.IndianAgents)}
          </BottomItems>
          <BottomItems
            href={`/lists/agents?country=CN`}
            data-name={t(LanguageKeys.ChineseAgents)}
          >
            {t(LanguageKeys.ChineseAgents)}
          </BottomItems>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default DesktopFooter;
const Container = styled.footer`
  position: relative;
  width: 100%;
  height: 50rem;
  margin-top: 4rem;
`;
const footerBackground = theme('mode', {
  light: css`
    background: var(--color-gray12);
    :before {
      background-color: var(--color-gray11);
    }
    :after {
      background-color: var(--color-gray11);
    }
  `,
  dark: css`
    background: var(--color-gray2);
    :before {
      background-color: var(--color-gray6);
    }
    :after {
      background-color: var(--color-gray6);
    }
  `,
});
const LogoHover = theme('mode', {
  light: css`
    outline-color: var(--color-primary4);
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary5);
    outline-color: var(--color-primary5);
  `,
});

const Wrapper = styled.div`
  ${footerBackground};
  clip-path: polygon(20% 17.5%, 80% 17.5%, 100% 0, 100% 100%, 0 100%, 0 0);
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  transform: skew(10deg);
  transform: scaleX(1);
  :before {
    content: '';
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 20%;
    z-index: -1;
  }
  :after {
    content: '';
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 80%;
    z-index: -1;
  }
`;

const Top = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Bottom = styled.div`
  ${footerBackground};
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.75rem 0rem;
  gap: 2rem;
  :before {
    content: '';
    width: 100%;
    height: 1px;
    position: absolute;
    top: 0;
    z-index: 2;
  }
`;

const StyledLogo = styled(Logo)`
  width: 6rem;
  height: auto;
  position: absolute;
  top: 8.5rem;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;
const CenterItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 4rem;
`;

///////////////////
const itemHover = theme('mode', {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: var(--color-gray13);
  `,
});
const Items = styled(Link)`
  ${layer2A_SubtitleStyle}
  text-align: center;
  color: var(--color-gray9);
  cursor: pointer;
  position: relative;
  width: 100%;
  max-width: max-content;
  transition: all 400ms ease;
  margin: auto;
  :before {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    height: 5px;
    width: 100%;
    overflow: hidden;
    transition: all 400ms ease;
    border-radius: 10px;
  }
  :hover {
    ${itemHover}

    :before {
      bottom: -10px;
      background-color: var(--color-primary4);
      width: 100%;
      border-radius: 10px;
    }
  }
`;

const BottomItems = styled(Items)`
  margin: 0;
`;
//

const SideContainer = styled.div<{ locale: Languages }>`
  margin-top: ${({ locale }) => (locale === Languages.fa ? '10rem' : '8rem')};
  width: 20%;
  color: var(--color-gray9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media ${deviceMin.laptopXS} {
    right: 3%;
  }
  @media ${deviceMin.laptopM} {
    right: 5%;
  }
  @media ${deviceMin.laptopL} {
    right: 6%;
  }
`;

const LeftSideContainer = styled(SideContainer)`
  margin-top: 10rem !important;
`;

const SwitchButton = styled.div`
  position: absolute;
  bottom: 16px;
`;

const ContactUs = styled.h5`
  ${layer2A_SubtitleStyle}
  color: var(--color-gray9);
`;
const LogosContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

const SwitchThemeContainer = styled.div``;

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
  font-size: 12px;
  position: absolute;
  bottom: 8px;

  :hover {
    text-decoration: underline;
  }
`;

const TelegramLogo = styled(FaTelegramPlane)`
  color: var(--color-gray9);
  cursor: pointer;
  padding-right: 0.2rem;
  width: 2rem;
  height: 2rem;
  transition: all 0.8s ease;
  :hover {
    ${LogoHover}
  }
`;
const GmailLogo = styled(SiGmail)`
  color: var(--color-gray9);
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  transition: all 0.8s ease;
  :hover {
    ${LogoHover}
  }
`;
