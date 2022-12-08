import { Logo } from 'elements/Logo';
import React from 'react';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { Headline5Style } from 'Styles/Typo';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { useStaticTranslation } from 'hooks/useStaticTraslation';
import { componentStatements, LanguageKeys } from './const';

function DesktopFooter() {
  const { t } = useStaticTranslation(componentStatements);

  return (
    <Container>
      <StyledLogo />
      <ItemsContainer>
        <Items data-name={t(LanguageKeys.Home)}>{t(LanguageKeys.Home)}</Items>
        <Items data-name={t(LanguageKeys.SkilledOccupationList)}>
          {t(LanguageKeys.SkilledOccupationList)}
        </Items>
      </ItemsContainer>
      <ContactUsContainer>
        <ContactUs>{t(LanguageKeys.ContactUs)}</ContactUs>
        <LogosContainer>
          <TelegramLogo />
          <WhatsappLogo />
        </LogosContainer>
      </ContactUsContainer>
    </Container>
  );
}

export default DesktopFooter;
export const footerBackground = theme('mode', {
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
export const LogoHover = theme('mode', {
  light: css`
    outline-color: var(--color-gray7);
    color: var(--color-gray7);
  `,
  dark: css`
    color: var(--color-gray10);
    outline-color: var(--color-gray10);
  `,
});

const Container = styled.section`
  ${footerBackground};
  clip-path: polygon(20% 17.5%, 80% 17.5%, 100% 0, 100% 100%, 0 100%, 0 0);
  width: 100%;
  height: 35rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: skew(10deg);
  transform: scaleX(1);
  :before {
    content: '';
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 20%;
    z-index: 2;
  }
  :after {
    content: '';
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 80%;
    z-index: 2;
  }
`;
const StyledLogo = styled(Logo)`
  width: 10rem;
  height: auto;
  position: absolute;
  top: 60%;
  left: 20%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 10%;
`;
export const hoverBackground = theme('mode', {
  light: css`
    var(--color-gray12);
  `,
  dark: css`
     var(--color-gray2);
  `,
});
const Items = styled.h2`
  ${Headline5Style}
  color: var(--color-gray9);
  cursor: pointer;
  position: relative;
  width: max-content;
  :before {
    content: attr(data-name);
    position: absolute;
    top: 0;
    left: -20px;
    background:${hoverBackground}
    height: 21px;
    overflow: hidden;
    transition: all 300ms ease;
    padding-left: 20px;
    width: max-content;
  }
  :after {
    content: '';
    height: 2px;
    width: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--color-primary4);
    transition: all 300ms ease;
  }
  :hover {
    transform: skew(10deg);
    :before {
      top: -5px;
      color: var(--color-primary4);
    }
    :after {
      width: 110%;
      outline: 2px solid ${hoverBackground}
    }
  }
`;
const ContactUsContainer = styled.div`
  width: fit-content;
  position: absolute;
  top: 60%;
  right: 5%;
  transform: translateY(-50%);
  color: var(--color-gray9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const ContactUs = styled.h2`
  ${Headline5Style};
`;
const LogosContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
const TelegramLogo = styled(FaTelegramPlane)`
  outline: 3px solid var(--color-gray9);
  color: var(--color-gray9);
  border-radius: 50%;
  padding-right: 0.2rem;
  outline-offset: 3px;
  width: 2rem;
  height: 2rem;
  transition: all 0.3s ease;
  :hover {
    ${LogoHover}
  }
`;
const WhatsappLogo = styled(FaWhatsapp)`
  color: var(--color-gray9);
  width: 3rem;
  height: 3rem;
  transition: all 0.3s ease;
  :hover {
    ${LogoHover}
  }
`;
