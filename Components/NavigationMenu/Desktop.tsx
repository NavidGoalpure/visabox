import { Logo } from 'Elements/Logo';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { boxShadow, directionStyles } from 'Styles/Theme';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import SwitchTheme from './switchTheme';
import { useLocale } from 'Hooks/useLocale';
import { layer1_BG } from 'Styles/Theme/Layers/layer1/theme';
import { layer3_TextStyle } from 'Styles/Theme/Layers/layer3/style';
import { componentStatements, LanguageKeys } from './const';
import DesktopLanguageChanger from './LanguageChanger/Desktop';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';

function Desktop() {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  return (
    <Container>
      <Wrapper>
        <NavigationMenu.Item>
          <Link href={`/${locale}`}>
            <Logo />
          </Link>
        </NavigationMenu.Item>
        <MenuItems>
          <NavigationMenu.Item>
            <MenuLink href={`/${locale}/occupations`}>
              {t(LanguageKeys.SkilledOccupationList)}
            </MenuLink>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <MenuLink href={`/${locale}/businesses/lawyers`}>
              {t(LanguageKeys.LawyersList)}
            </MenuLink>{' '}
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <MenuLink href={`/${locale}/businesses/social-networks`}>
              {t(LanguageKeys.socialList)}
            </MenuLink>
          </NavigationMenu.Item>
          {/* navid tell mobin about this */}
          <DesktopLanguageChanger />
          <SwitchTheme />
        </MenuItems>
      </Wrapper>
    </Container>
  );
}

export { Desktop };

const Container = styled(NavigationMenu.Root)`
  ${layer1_BG}
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
  gap: 2rem;
`;
const MenuLink = styled(Link)`
  ${layer3_TextStyle};
  position: relative;
  :before {
    content: '';
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
    pointer-events: none;
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
