import { Logo } from "elements/Logo";
import { device } from "consts/device";
import React from "react";
import styled, { css } from "styled-components/macro";
import theme from "styled-theming";
import { Headline5Style } from "Styles/Typo";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

function DesktopFooter() {
  return (
    <Container>
      <StyledLogo />
      <ItemsContainer>
        <Items>Home</Items>
        <Items>Skilled Occupation List</Items>
      </ItemsContainer>
      <ContactUsContainer>
        <ContactUs>Contact us</ContactUs>
        <LogosContainer>
          <TelegramLogo />
          <WhatsappLogo />
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
const Items = styled.h2`
  ${Headline5Style}
  color: var(--color-gray9);
  cursor: pointer;
  position: relative;
  width: max-content;
  :before {
    content: "";
    pointer-events: none;
    border: 4px solid var(--color-primary2);
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -4px;
    left: 0;
    border-radius: 1000px;
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0% 100%);
    transition: all 0.3s ease;
    transform: scaleX(0);
  }
  :hover {
    :before {
      transform: scaleX(1);
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
