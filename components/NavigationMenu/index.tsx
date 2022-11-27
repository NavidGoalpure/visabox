import { Logo } from 'elements/Logo';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components/macro';
import {
  boxShadow,
  directionStyles,
  pageColor,
  pageBackground,
} from 'styles/Theme';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

function Header() {
  return (
    <Container>
      <Wrapper>
        <NavigationMenu.Item>
          <Link href={'/'}>
            <Logo />
          </Link>
        </NavigationMenu.Item>
        Mara Box
        {/* <MenuItems>
          <NavigationMenu.Item>
            About
            <NavigationMenu.Content></NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>Contact</NavigationMenu.Item>
        </MenuItems> */}
      </Wrapper>
    </Container>
  );
}

export { Header };

const Container = styled(NavigationMenu.Root)`
  ${pageColor}
  ${pageBackground}
  ${directionStyles}
  ${boxShadow};

  width: 100%;
  padding: 0 1rem;
`;
const Wrapper = styled(NavigationMenu.List)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.5rem;
  max-width: var(--max-width-page);
  margin: 0 auto;
`;
const MenuItems = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  gap: 1rem;
`;
