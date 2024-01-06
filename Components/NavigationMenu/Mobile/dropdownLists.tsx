import styled, { css } from 'styled-components';
import { useLocale } from 'Hooks/useLocale';
import { useRef, useState } from 'react';
import useOnClickOutside from 'Hooks/useOnClickOutside';
import { BsChevronDown } from 'react-icons/bs';
import {
  layer3_SubtitleStyle,
  layer3_TextStyle,
  layer3_TitleStyle,
} from 'Styles/Theme/Layers/layer3/style';
import { layer3_TextColor } from 'Styles/Theme/Layers/layer3/theme';
import theme from 'styled-theming';
import { useStaticTranslation } from 'Hooks/useStaticTraslation';
import { componentStatements, LanguageKeys, listsItems } from '../const';
import Link from 'next/link';
import { Languages, LocalStorageKeys } from 'Interfaces';
import { SupportedCountry } from 'Interfaces/Database';
import { getLocalStorage } from 'Utils';
const MobileBusinessDropdown = ({
  clientCountry,
}: {
  clientCountry: string;
}) => {
  const { locale } = useLocale();
  const { t } = useStaticTranslation(componentStatements);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closePopup = () => {
    setIsOpen(false);
  };
  useOnClickOutside(containerRef, closePopup);

  return (
    <Container id={'container'} ref={containerRef}>
      <TriggerContainer onClick={() => setIsOpen((prevState) => !prevState)}>
        <TriggerText>{t(LanguageKeys.Lists)}</TriggerText>
        <ArrowIcon $isOpen={isOpen} />
      </TriggerContainer>
      {isOpen && (
        <PopupContainer>
          <PopupItem
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <StyledLink href={listsItems[0].href}>
              {listsItems[0].title[locale]}
            </StyledLink>
          </PopupItem>
          <Hr />
          <PopupItem
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <StyledLink href={listsItems[1].href}>
              {listsItems[1].title[locale]}
            </StyledLink>
          </PopupItem>
          <Hr />

          {(clientCountry === SupportedCountry.Iran ||
            getLocalStorage(LocalStorageKeys.Country) ===
              SupportedCountry.Iran) && (
            <PopupItem
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <StyledLink href={listsItems[2].href}>
                {listsItems[2].title[locale]}
              </StyledLink>
            </PopupItem>
          )}
        </PopupContainer>
      )}
    </Container>
  );
};
export default MobileBusinessDropdown;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TriggerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TriggerText = styled.h4`
  ${layer3_TitleStyle};
  text-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const ArrowIcon = styled(BsChevronDown)<{ $isOpen: boolean }>`
  ${layer3_TextColor};
  transition: all 0.3s ease;
  ${({ $isOpen }) => $isOpen && `transform:rotate(180deg);`}
`;

const PopupContainer = styled.div`
  padding: 1rem 0;
  border-radius: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
////////////////////////////////////
const popUpTheme = theme('mode', {
  light: css`
    color: var(--color-gray7);
  `,
  dark: css`
    color: var(--color-gray10);
  `,
});
const PopupItem = styled.h4`
  padding: 0 2.125rem;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  a {
    ${layer3_SubtitleStyle}
    ${popUpTheme}
  }
`;
///////////////
const hrTheme = theme('mode', {
  light: css`
    background: var(--color-gray12);
  `,
  dark: css`
    background: var(--color-gray3);
  `,
});
const Hr = styled.hr`
  ${hrTheme}
  width: 100%;
  height: 1px;
`;
const StyledLink = styled(Link)`
  width: 100%;
`;
