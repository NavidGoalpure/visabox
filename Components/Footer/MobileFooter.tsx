import { Logo } from 'Elements/Logo';
import React from 'react';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';
import { Headline5Style } from 'Styles/Typo';
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Link from 'next/link';

function MobileFooter() {
  return (
    <Container>
      <StyledLogo />
      <ItemsContainer>
        <HeadItem>Pages</HeadItem>
        <Items href={'/en/occupations'}>Home</Items>
        <Items href={'/en/occupations'}>Skilled Occupation List</Items>
      </ItemsContainer>
      <ContactUsContainer>
        <ContactUs>Contact us</ContactUs>
        <LogosContainer>
          <TelegramLogo />
          <GmailLogo />
        </LogosContainer>
      </ContactUsContainer>
    </Container>
  );
}

export default MobileFooter;
export const footerBackground = theme('mode', {
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
export const TextColor = theme('mode', {
  light: css`
    color: var(--color-gray6);
  `,
  dark: css`
    color: var(--color-gray11);
  `,
});

const Container = styled.section`
  ${footerBackground};
  clip-path: polygon(50% 15%, 100% 0, 100% 100%, 0 100%, 0 0);
  padding-top: 18rem;
  height: 40rem;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  :before {
    content: '';
    width: 1px;
    height: 40%;
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
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
`;
const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`;
const HeadItem = styled.h2`
  ${Headline5Style};
  ${TextColor};
  cursor: pointer;
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
