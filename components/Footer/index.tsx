import React from 'react';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';

function Footer() {
  return <Container />;
}

export default Footer;
export const footerBackground = theme('mode', {
  light: css`
    background: var(--color-gray6); ;
  `,
  dark: css`
    background: var(--color-background1-dark);
  `,
});
const Container = styled.section`
  ${footerBackground}
  width: 100%;
  height: 42.75rem;
`;
