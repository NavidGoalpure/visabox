import Footer from 'Components/Footer';
import { deviceMin } from 'Consts/device';
import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components/macro';
import { directionStyles } from 'Styles/Theme';
import { pageBackground } from 'Styles/Theme/Page';
import { Header } from '../NavigationMenu';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const PageContainer: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};
export default PageContainer;
export const Container = styled.main`
  ${pageBackground}
  ${directionStyles}
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

const Content = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: var(--max-width-page);
  margin: 0 auto;
  flex: auto;
  padding: 1rem;

  @media ${deviceMin.tabletS} {
    padding: 1rem 0;
  }
`;
