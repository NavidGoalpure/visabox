import React, { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components/macro';
import { pageColorBody, directionStyles } from 'styles/Theme';
import { Header } from './NavigationMenu';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children, ...props }) => {
  return (
    <Container {...props}>
      <Header />
      <Content>{children}</Content>
      <footer>footer</footer>
    </Container>
  );
};
export default Layout;
const Container = styled.div`
  ${pageColorBody}
  ${directionStyles}
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;
const Content = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: var(--max-width-page);
  margin: 0 auto;
  flex: auto;
  padding: 1rem 0;
`;
