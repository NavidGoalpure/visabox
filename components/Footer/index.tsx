import { Logo } from 'elements/Logo';
import { device } from 'consts/device';
import React from 'react';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';

function Footer() {
  return (
    <Container>
      <StyledLogo />
    </Container>
  );
}

export default Footer;
export const footerBackground = theme('mode', {
  light: css`
    background: var(--color-gray12);
  `,
  dark: css`
    background: var(--color-gray2);
  `,
});
const Container = styled.section`
  ${footerBackground};
  clip-path: polygon(50% 20%, 100% 0, 100% 100%, 0 100%, 0 0);
  width: 100%;
  height: 35rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  :before {
    content: '';
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 2;
    transform: translateX(-50%);
    //farzam in to dorost kon
    background-color: #8b9199;
  }
  @media ${device.mobileL} {
    height: 32rem;
  }
`;
const StyledLogo = styled(Logo)`
  width: 14rem;
  height: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-30%);
  z-index: 3;
  @media ${device.mobileL} {
    width: 6.25rem;
  }
`;
