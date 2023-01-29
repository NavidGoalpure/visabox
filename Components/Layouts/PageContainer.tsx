import Footer from 'Components/Footer';
import { deviceMin } from 'Consts/device';
import { useLocale } from 'Hooks/useLocale';
import { Languages } from 'Interfaces';
import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { directionStyles } from 'Styles/Theme';
import { layer1_BG } from 'Styles/Theme/Layers/layer1/theme';
import { Header } from '../NavigationMenu';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const PageContainer: React.FC<Props> = ({ children, ...props }) => {
  const { locale } = useLocale();
  return (
    <Container {...props} $locale={locale}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};
export default PageContainer;
export const Container = styled.main<{ $locale: Languages }>`
  ${layer1_BG}
  ${directionStyles}
  font-family:${({ $locale }) =>
    $locale === Languages.fa
      ? 'var(--font-family__fa)'
      : 'var(--font-family__en)'};
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
  padding: 0.5rem;

  @media ${deviceMin.tabletS} {
    padding: 1rem;
  }
`;
