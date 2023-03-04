import { Logo } from "Elements/Logo";
import React from "react";
import styled, { css } from "styled-components";
import theme from "styled-theming";
import { Headline5Style } from "Styles/Typo";
import { FaTelegramPlane } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useStaticTranslation } from "Hooks/useStaticTraslation";
import { componentStatements, LanguageKeys } from "./const";
import { deviceMin } from "Consts/device";
import Link from "next/link";
import { useLocale } from "Hooks/useLocale";
import { copyContent } from "Utils";

function DesktopFooter() {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);

  return (
    <Container>
      <StyledLogo />
      <ItemsContainer>
        <Items href={`/${locale}/occupations`} data-name={t(LanguageKeys.Home)}>
          {t(LanguageKeys.Home)}
        </Items>
        <Items
          href={`/${locale}/occupations`}
          data-name={t(LanguageKeys.SkilledOccupationList)}
        >
          {t(LanguageKeys.SkilledOccupationList)}
        </Items>
      </ItemsContainer>
      <ContactUsContainer>
        <ContactUs>{t(LanguageKeys.ContactUs)}</ContactUs>
        <LogosContainer>
          <a target={"_blank"} href="https://www.t.me/maraboxmigration">
            <TelegramLogo />
          </a>
          <a onClick={() => copyContent("mailto:maraboxmigration@gmail.com")}>
            <GmailLogo />
          </a>
        </LogosContainer>
      </ContactUsContainer>
    </Container>
  );
}

export default DesktopFooter;
export const footerBackground = theme("mode", {
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
export const LogoHover = theme("mode", {
  light: css`
    outline-color: var(--color-primary4);
    color: var(--color-primary4);
  `,
  dark: css`
    color: var(--color-primary5);
    outline-color: var(--color-primary5);
  `,
});

const Container = styled.footer`
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
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 20%;
    z-index: 2;
  }
  :after {
    content: "";
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 80%;
    z-index: 2;
  }
`;
const StyledLogo = styled(Logo)`
  width: 8rem;
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

//
export const hoverBackground = theme("mode", {
  light: css`
    var(--color-gray12);
  `,
  dark: css`
     var(--color-gray2);
  `,
});
///////////////////
const hoverItemColor = theme("mode", {
  light: css`
    var(--color-gray6);
  `,
  dark: css`
     var(--color-gray12);
  `,
});
const Items = styled(Link)`
  ${Headline5Style}
  color: var(--color-gray9);
  cursor: pointer;
  position: relative;
  width: max-content;
  transition: all 400ms ease;
  :before {
    content: "";
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
    :before {
      bottom: -10px;
      background-color: var(--color-primary4);
      width: 100%;
      border-radius: 10px;
    }
  }
`;
//

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
const ContactUs = styled.h2`
  ${Headline5Style};
`;
const LogosContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
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
